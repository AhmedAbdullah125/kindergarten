import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout';
import { Suspense, lazy } from 'react';
import NotFound from './pages/NotFound';
import Courses from './pages/Main/Courses/Courses';
import CoursesPage from './pages/CoursesPage/CoursesPage';
const Home = lazy(() => import('./pages/Home/Home'))

function App() {
  const routes = createBrowserRouter([{
  path: '', element: <Layout></Layout>, children: [
    { index: true, element: <Suspense><Home></Home></Suspense> },
    { path: '*', element: <NotFound></NotFound> },
    { path: '/courses', element: <CoursesPage></CoursesPage> },
  ]
}
])

return (
  <div>
    <RouterProvider router={routes}></RouterProvider>
  </div>
);
}

export default App;
