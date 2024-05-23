import { lazy, useState } from "react";
import "./styles/scss/index.scss";
import LayoutContainer from "./container/layout";
const OverView = lazy(() => import("./views/pages/overview"));

function App() {
  const [count, setCount] = useState(0);

  return (
    <LayoutContainer>
      <OverView />
    </LayoutContainer>
  );
}

export default App;
