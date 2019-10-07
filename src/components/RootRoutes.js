import Main from "./pages/Main/MainWrapper"
import Help from "./pages/Help"
import Contact from "./pages/Contacts"

import NotFound from "./pages/NotFound"

const Routes = [
  {
    path: '/dashboard',
    component: Main
  },
  {
    path: '/help',
    exact: true,
    component: Help
  },
  {
    path: '/contacts',
    exact: true,
    component: Contact
  },
  {
    component: NotFound
  }
]

export default Routes