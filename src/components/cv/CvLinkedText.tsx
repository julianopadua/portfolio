const LINK_PATTERN = /(https?:\/\/[^\s),.;]+|institutoforest\.org)/gi

interface CvLinkedTextProps {
  text: string
}

export function CvLinkedText({ text }: CvLinkedTextProps) {
  const parts = text.split(LINK_PATTERN).filter((part) => part.length > 0)

  return (
    <>
      {parts.map((part, index) => {
        if (/^https?:\/\//i.test(part)) {
          return (
            <a
              key={index}
              href={part}
              className="cv-link cv-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              {part}
            </a>
          )
        }

        if (part.toLowerCase() === 'institutoforest.org') {
          return (
            <a
              key={index}
              href="https://institutoforest.org"
              className="cv-link cv-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              {part}
            </a>
          )
        }

        return <span key={index}>{part}</span>
      })}
    </>
  )
}
