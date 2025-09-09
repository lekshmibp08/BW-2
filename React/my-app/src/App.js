import React, { Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";
import ThemeComponent from "./ThemeComponent";
//import ToggleTheme from "./ToggleTheme";
import ThemeProvider from "./ThemeProvider";
import CheckBoxProvider from "./CheckBoxProvider";
import CheckBoxComponent from "./CheckBoxComponent";
import CounterUsingReducer from "./CounterUsingReducer";

const UseMemoExample = React.lazy(() => import("./UseMemoExample"));

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <ThemeComponent/>
        <Suspense fallback={<h3>Loading...</h3>}>
          <UseMemoExample />
        </Suspense>
      </ThemeProvider>
      <CheckBoxProvider>
        <CheckBoxComponent/>
      </CheckBoxProvider>
      <CounterUsingReducer/>
    </ErrorBoundary>
  );
}

export default App;
