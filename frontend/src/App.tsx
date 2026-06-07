import Sidebar from "./components/Sidebar"
import { Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Analytics from "./pages/Analytics"
import Leads from "./pages/Leads"
import Nav from "./components/Nav"
import AddLead from "./components/AddLead"
import { useCRMContext } from "./context/Context"
import EditLead from "./components/EditLead"
import DeleteOverlay from "./components/DeleteOverlay"



function App() {
    const{selectedLead} = useCRMContext()
  return (
    <div className="dark flex flex-col bg-(--bg) min-h-screen h-screen text-(--text)">
      <AddLead/>
      {selectedLead && <EditLead lead={selectedLead} />}
      {selectedLead && <DeleteOverlay _id={selectedLead._id} />}
      <Nav/>
      <div className="flex flex-row flex-1 min-h-0">
        <div className="static">
          <Sidebar />
        </div>
        <div className="flex flex-1 min-h-0 min-w-0">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/leads" element={<Leads />} />
          </Routes>
        </div>
      </div>

    </div>
  )
}

export default App
