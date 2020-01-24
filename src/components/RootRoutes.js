import Dashboard from "./pages/Dashboard"
import Task from "./pages/Task"
import NotFound from "./parts/NotFound"

const Routes = [
  {
    path: '/dashboard',
    component: Dashboard
  },
  {
    path: '/task',
    exact: true,
    component: Task
  },
  {
    component: NotFound
  }
]

export default Routes