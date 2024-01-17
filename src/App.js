import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { AppRoutes } from "./components/AppRoutes";
import { store } from "./store";
import { theme } from "./theme";

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <AppRoutes />
      </ChakraProvider>
    </Provider>
  );
}

export default App;
