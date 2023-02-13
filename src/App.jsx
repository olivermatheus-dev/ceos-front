import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <h1></h1>
      </Routes>
    </div>
  );
}

export default App;
