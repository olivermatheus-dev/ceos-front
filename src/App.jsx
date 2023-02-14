import { Route, Routes } from "react-router-dom";
import { CreateTab } from "./pages/Createtab";

import { Home } from "./pages/Home";
import { TabDetails } from "./pages/TabDetails";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateTab />} />
          <Route path="/tabdetails/:tabId" element={<TabDetails />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
