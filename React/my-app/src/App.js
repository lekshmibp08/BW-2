import React, { Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";

const UseMemoExample = React.lazy(() => import("./UseMemoExample"));

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<h3>Loading...</h3>}>
        <UseMemoExample />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
