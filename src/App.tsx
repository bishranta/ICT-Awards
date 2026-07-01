import { Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom'
import PageWrapper from '@/components/layout/PageWrapper'
import AboutLayout from '@/components/layout/AboutLayout'
import HomePage from '@/pages/HomePage'
import IntroductionPage from '@/pages/about/IntroductionPage'
import SelectionPage from '@/pages/about/SelectionPage'
import HistoryPage from '@/pages/about/HistoryPage'
import TeamPage from '@/pages/about/TeamPage'
import JuryPage from '@/pages/about/JuryPage'
import AdvisorsPage from '@/pages/about/AdvisorsPage'
import FaqPage from '@/pages/about/FaqPage'
import CategoriesPage from '@/pages/CategoriesPage'
import PreActivitiesPage from '@/pages/PreActivitiesPage'
import WinnersPage from '@/pages/WinnersPage'
import MediaPage from '@/pages/MediaPage'
import ApplyNowPage from '@/pages/ApplyNowPage'
import EditionsPage from '@/pages/EditionsPage'
import EditionDetailPage from '@/pages/EditionDetailPage'
import PreActivityDetailPage from '@/pages/PreActivityDetailPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageWrapper />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'about',
        element: <AboutLayout />,
        children: [
          { index: true, element: <Navigate to="introduction" replace /> },
          { path: 'introduction', element: <IntroductionPage /> },
          { path: 'selection', element: <SelectionPage /> },
          { path: 'history', element: <HistoryPage /> },
          { path: 'team', element: <TeamPage /> },
          { path: 'jury', element: <JuryPage /> },
          { path: 'advisors', element: <AdvisorsPage /> },
          { path: 'faq', element: <FaqPage /> },
        ],
      },
      { path: 'categories', element: <CategoriesPage /> },
      { path: 'categories/:group', element: <CategoriesPage /> },
      { path: 'pre-activities', element: <PreActivitiesPage /> },
      { path: 'pre-activities/:slug', element: <PreActivityDetailPage /> },
      { path: 'winners', element: <WinnersPage /> },
      { path: 'winners/:year', element: <WinnersPage /> },
      { path: 'media', element: <MediaPage /> },
      { path: 'apply', element: <ApplyNowPage /> },
      { path: 'editions', element: <EditionsPage /> },
      { path: 'editions/:year', element: <EditionDetailPage /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
