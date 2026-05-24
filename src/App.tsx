import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/layout/AppLayout'
import { LocaleProvider } from './i18n/LocaleProvider'
import { AboutPage } from './pages/AboutPage'
import { CvPage } from './pages/CvPage'
import { ProjectsPage } from './pages/ProjectsPage'

export default function App() {
  return (
    <LocaleProvider>
      <HashRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate to="about" replace />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="cv" element={<CvPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="*" element={<Navigate to="about" replace />} />
          </Route>
        </Routes>
      </HashRouter>
    </LocaleProvider>
  )
}
