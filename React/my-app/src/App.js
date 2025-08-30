import React, { Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";
import ThemeComponent from "./ThemeComponent";
//import ToggleTheme from "./ToggleTheme";
import ThemeProvider from "./ThemeProvider";

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
    </ErrorBoundary>
  );
}

export default App;
