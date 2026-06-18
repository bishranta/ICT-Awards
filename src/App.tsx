import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PageWrapper from '@/components/layout/PageWrapper'
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import CategoriesPage from '@/pages/CategoriesPage'
import PreActivitiesPage from '@/pages/PreActivitiesPage'
import WinnersPage from '@/pages/WinnersPage'
import MediaPage from '@/pages/MediaPage'
import ApplyNowPage from '@/pages/ApplyNowPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageWrapper />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'categories', element: <CategoriesPage /> },
      { path: 'categories/:group', element: <CategoriesPage /> },
      { path: 'pre-activities', element: <PreActivitiesPage /> },
      { path: 'winners', element: <WinnersPage /> },
      { path: 'winners/:year', element: <WinnersPage /> },
      { path: 'media', element: <MediaPage /> },
      { path: 'apply', element: <ApplyNowPage /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
