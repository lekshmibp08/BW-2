import React, { Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";
import ToggleTheme from "./ToggleTheme";

const UseMemoExample = React.lazy(() => import("./UseMemoExample"));

function App() {
  return (
    <ErrorBoundary>
      <ToggleTheme/>
      <Suspense fallback={<h3>Loading...</h3>}>
        <UseMemoExample />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
