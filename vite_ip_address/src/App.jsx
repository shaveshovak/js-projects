import { Stack } from "@mui/material"
import InfoBox from "./components/Card"
import SearcBox from "./components/SearchBox"

const App = () => {

  return (
    <Stack>
      <SearcBox />
      <InfoBox />
    </Stack>
  )
}

export default App
