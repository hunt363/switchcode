import { Box } from "@chakra-ui/react";
import theme from "./theme";
import CodeEditor from "./components/CodeEditor";
const colors=theme.colors;

function App() {
  return (
    <Box
      minH="100vh" bg={colors.base} color={colors.text} px={6} py={8}
    >
      <CodeEditor/>
    </Box>
  )
}

export default App
