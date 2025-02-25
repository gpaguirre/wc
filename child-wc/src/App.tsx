import { BrowserRouter, Routes, Route } from "react-router";
import Page2 from "./app/page2";
import Page1 from "./app/page1";
import Flow from "./app/flow/flow";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Flow />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
