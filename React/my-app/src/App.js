import React, { Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";
import ThemeComponent from "./ThemeContext/ThemeComponent";
//import ToggleTheme from "./ToggleTheme";
import ThemeProvider from "./ThemeContext/ThemeProvider";
import CheckBoxProvider from "./CheckBoxProvider";
import CheckBoxComponent from "./CheckBoxComponent";
import CounterUsingReducer from "./counterUsingReducer/CounterUsingReducer";
import Parent from './redux/Parent'
import { Provider } from "react-redux";
import store from "./counterUsingReducer/store";

const UseMemoExample = React.lazy(() => import("./UseMemoExample"));

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <ThemeComponent />
        <Suspense fallback={<h3>Loading...</h3>}>
          <UseMemoExample />
        </Suspense>
      </ThemeProvider>

      <CheckBoxProvider>
        <CheckBoxComponent />
      </CheckBoxProvider>
      <Provider store={store}>
        <CounterUsingReducer />
      </Provider>

      <Parent />
    </ErrorBoundary>
  );
}

export default App;
