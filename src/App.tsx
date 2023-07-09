import "./styles/global.css";
import { Provider } from "react-redux";

import store from "./store/store";
import RouterProvider from "./providers/route";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider />
    </Provider>
  );
}

export default App;
