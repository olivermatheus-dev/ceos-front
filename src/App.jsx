import { Route, Routes } from "react-router-dom";
import { CreateTab } from "./pages/Createtab";
import { Home } from "./pages/Home";
import { TabDetails } from "./pages/TabDetails";
import { Navbar } from "./components/Navbar";
import { UpdateTab } from "./pages/Updatetab";
import { useState } from "react";

function App() {
  //useContext //Portal
  const [reload, setReload] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <Navbar setReload={setReload} setIsLoading={setIsLoading} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              reload={reload}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          }
        />
        <Route path="/create" element={<CreateTab />} />
        <Route path="/tabdetails/:tabId" element={<TabDetails />} />
        <Route path="/updatetab/:tabId" element={<UpdateTab />} />
      </Routes>
    </div>
  );
}

export default App;
