import Dashboard from "./pages/Dashboard"
import Description from "./pages/Description"
import NotFound from "./pages/NotFound"

const Routes = [
  {
    path: '/dashboard',
    component: Dashboard
  },
  {
    path: '/description',
    exact: true,
    component: Description
  },
  {
    component: NotFound
  }
]

export default Routes