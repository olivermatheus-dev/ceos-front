import { Route, Routes } from "react-router-dom";
import { CreateTab } from "./pages/Createtab";

import { Home } from "./pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateTab />} />
      </Routes>
    </div>
  );
}

export default App;
