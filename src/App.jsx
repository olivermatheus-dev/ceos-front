import { Route, Routes } from "react-router-dom";
import { CreateTab } from "./pages/Createtab";

import { Home } from "./pages/Home";
import { TabDetails } from "./pages/TabDetails";
import { UpdateTab } from "./pages/Updatetab";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateTab />} />
        <Route path="/tabdetails/:tabId" element={<TabDetails />} />
        <Route path="/updatetab/:tabId" element={<UpdateTab />} />
      </Routes>
    </div>
  );
}

export default App;
