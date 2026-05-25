function waitForImages(doc: Document): Promise<void> {
  const images = [...doc.images]
  if (images.length === 0) {
    return Promise.resolve()
  }

  return Promise.all(
    images.map(
      (img) =>
        new Promise<void>((resolve) => {
          if (img.complete) {
            resolve()
            return
          }
          img.addEventListener('load', () => resolve(), { once: true })
          img.addEventListener('error', () => resolve(), { once: true })
        }),
    ),
  ).then(() => undefined)
}

/**
 * Print CV in an isolated iframe so layout is stable and images load before PDF export.
 */
export function printCv(): void {
  const source = document.getElementById('cv-print')
  if (!source) {
    window.print()
    return
  }

  const iframe = document.createElement('iframe')
  iframe.setAttribute('title', 'CV print')
  iframe.setAttribute('aria-hidden', 'true')
  iframe.style.cssText =
    'position:fixed;right:0;bottom:0;width:0;height:0;border:0;visibility:hidden;'

  document.body.appendChild(iframe)

  const doc = iframe.contentDocument
  const win = iframe.contentWindow
  if (!doc || !win) {
    iframe.remove()
    window.print()
    return
  }

  const headStyles = [...document.querySelectorAll('link[rel="stylesheet"], style')]
    .map((node) => node.outerHTML)
    .join('\n')

  const printOverrides = `
    <style id="cv-print-iframe-overrides">
      @page { size: A4 portrait; margin: 0; }
      html, body {
        margin: 0;
        padding: 0;
        background: #fff;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      #cv-print.cv-document--print {
        width: 210mm;
        max-width: 210mm;
        margin: 0 auto;
        box-shadow: none;
      }
      .cv-header__photo {
        display: block !important;
        width: 34mm !important;
        height: 34mm !important;
        min-width: 34mm !important;
        min-height: 34mm !important;
        max-width: 34mm !important;
        max-height: 34mm !important;
        aspect-ratio: 1 / 1 !important;
        border-radius: 50% !important;
        object-fit: cover !important;
        object-position: center 28% !important;
      }
      .cv-header__contacts {
        grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
        gap: 1.2mm 3.5mm !important;
        font-size: 7.6pt !important;
      }
      a[href] {
        color: #1a5c47 !important;
        text-decoration: underline !important;
        overflow-wrap: anywhere;
      }
    </style>
  `

  doc.open()
  doc.write(`<!DOCTYPE html>
<html lang="${document.documentElement.lang}">
<head>
  <meta charset="UTF-8" />
  <base href="${document.baseURI}" />
  ${headStyles}
  ${printOverrides}
</head>
<body>
${source.outerHTML}
</body>
</html>`)
  doc.close()

  const cleanup = () => {
    iframe.remove()
  }

  const runPrint = () => {
    win.onafterprint = cleanup
    win.focus()
    win.print()
    window.setTimeout(cleanup, 60_000)
  }

  const whenReady = () => {
    Promise.all([doc.fonts?.ready, waitForImages(doc)])
      .then(runPrint)
      .catch(runPrint)
  }

  if (doc.readyState === 'complete') {
    whenReady()
  } else {
    iframe.onload = whenReady
  }
}
