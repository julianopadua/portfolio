import { Outlet, useLocation } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { TopNav } from './TopNav'

const SIDEBAR_HIDDEN_ON_MOBILE = ['/cv', '/projects']

export function AppLayout() {
  const { pathname } = useLocation()
  const hideSidebarOnMobile = SIDEBAR_HIDDEN_ON_MOBILE.includes(pathname)

  return (
    <div className="min-h-screen">
      <TopNav />
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[260px_1fr] lg:gap-12 lg:px-8 lg:py-12">
        {hideSidebarOnMobile ? (
          <div className="hidden lg:contents">
            <Sidebar />
          </div>
        ) : (
          <Sidebar />
        )}
        <main className="min-w-0 cv-main">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
