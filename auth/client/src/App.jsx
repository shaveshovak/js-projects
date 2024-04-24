import {
  RouterProvider,
} from "react-router-dom";
import { Link } from "@mui/material"
import { router } from "./pages/routes";

const App = () => {

  return (
    <>
      <ul style={{
        textAlign: 'center'
      }}>
        <Link href="/" underline="none"> Sign in </Link>
        <Link href="/signup" underline="none"> Sign up </Link>
      </ul>
      <RouterProvider router={router} />
    </>
  )
}

export default App
