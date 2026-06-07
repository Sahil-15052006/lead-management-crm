import { ArrowDown, XIcon } from "lucide-react"
import { useCRMContext } from "../context/Context"
import { useState } from "react"

interface LeadType {
  _id: string,
  name: string,
  email: string,
  phoneNumber: string,
  companyName: string,
  leadStatus: string,
  notes: string,
  createdAt: string,
}

export default function EditLead({lead}:{lead:LeadType}){


  const {editModel,setEditModel,API,fetchLeads,setLoading,setSelectedLead,selectedLead} = useCRMContext()
  const [showStatus,setShowStatus]=useState(false)
  const statusArray=["New","Contacted","Qualified","Converted","Lost"]
  const [currentStatus,setCurrentStatus]=useState<string>(lead.leadStatus)

  const [formData, setFormData] = useState({
    name: selectedLead.name,
    email: selectedLead.email,
    phoneNumber: selectedLead.phoneNumber,
    companyName: selectedLead.companyName,
    leadStatus: currentStatus.toLowerCase(),
    notes: selectedLead.notes,
  });

  const handleChange=(e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
    setFormData(prev=>({...prev , [e.target.name]:e.target.value}))
  }

  const updateLead=async()=>{
    try{
      setLoading(true)
      const res = await fetch(`${API}/leads/${lead._id}`,{
        method:"PUT",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
      })

      const json= await res.json();
      await fetchLeads()
      console.log(json);
    }catch(err){
      console.log(err)
    }finally{
      setLoading(false)
      setEditModel(false)
      setSelectedLead(null)
    }
  }

  return(
    <div className={` ${ editModel ? 'fixed' : 'hidden'} flex h-full w-full inset-0 justify-center items-center bg-(--bg)/50 z-50 animate duration-300 transition-all backdrop-blur-sm `}>
      <div className="relative p-5 sm:p-10 w-fit flex flex-col rounded-lg gap-5 bg-(--surface) text-sm sm:text-lg ease-linear duration-300 transition-transform">
        <div
          onClick={()=>{
            setEditModel(!editModel)
            setSelectedLead(null)
          }}
          className="w-full flex justify-end top-0 py-5 hover:text-(--primary)">
          <XIcon/>
        </div>
        <div className="flex flex-col sm:flex-row gap-5">
          <div className="flex-1">
            <div className="text-xs">Name</div>
            <input
              onChange={handleChange}
              value={formData.name}
              type="text"
              name="name"
              placeholder="Enter your name "
              required
              className="outline-none border border-(--border) focus:border-(--primary) transition-colors duration-300 rounded p-1 w-full"/>
          </div>

          {/* ✅ Fixed Dropdown */}
          <div className="relative">
            <div className="text-xs mb-1">Status</div>
            <button
              type="button"
              onClick={() => setShowStatus(!showStatus)}
              className="flex flex-row text-(--text-secondary) justify-center items-center rounded border px-2 py-1 border-(--border)"
            >
              <span>{currentStatus}</span> {/* ✅ shows current status */}
              <ArrowDown className={`px-1 transition-transform duration-300 ${showStatus && 'rotate-180'}`}/>
            </button>

            {showStatus && (
              <div className="absolute z-10 w-full flex flex-col gap-1 bg-(--surface) border border-(--border) rounded-lg shadow-xl px-2 sm:px-3 py-2.5 sm:py-3 animate-in fade-in slide-in-from-top-2">
                {statusArray.map((status) => (
                  <div
                    key={status}
                    onClick={() => {
                      setCurrentStatus(status)  // ✅ update status
                      setFormData(prev=>({
                        ...prev,
                        leadStatus:status.toLowerCase()
                      }))
                      setShowStatus(false)       // ✅ close dropdown
                    }}
                    className={`flex text-sm px-2 py-1 rounded cursor-pointer
                      ${currentStatus === status
                        ? 'bg-(--primary) text-white'         // ✅ highlight selected
                        : 'text-(--text-secondary) hover:bg-(--border)'
                      }`}
                  >
                    {status}
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
        <div>
          <div className="text-xs">Email</div>
          <input
            value={formData.email}
            type="email"
            placeholder="Enter your Email "
            name="email"
            required
            className="outline-none border border-(--border) focus:border-(--primary) transition-colors duration-300 rounded p-1 w-full "/>
        </div>
          <div className="flex flex-col sm:flex-row gap-5">
            <div>
              <div className="text-xs">Company Name</div>
              <input
                value={formData.companyName}
                onChange={handleChange}
                type="text"
                name="companyName"
                placeholder="Enter Company Name "
                className="outline-none border border-(--border) focus:border-(--primary) transition-colors duration-300 rounded p-1 "/>
            </div>
            <div>
              <div className="text-xs">Phone Number</div>
              <input
                value={formData.phoneNumber}
                onChange={handleChange}
                type="text"
                name="phoneNumber"
                placeholder="Enter your phone Number  "
                required
                className="outline-none border border-(--border) focus:border-(--primary) transition-colors duration-300 rounded p-1 "/>
            </div>
          </div>
          <div>
              <div className="text-xs">Notes</div>
              <textarea
                value={formData.notes}
                onChange={handleChange}
                placeholder="Enter a Note about lead  "
                required
                name="notes"
                className="outline-none border border-(--border) focus:border-(--primary) transition-colors duration-300 rounded p-1 max-h-50 min-h-20 w-full "/>
          </div>

          <div className=" flex gap-2 w-full">
              <button
              type="button"
              onClick={()=>{
                setEditModel(false)
                setSelectedLead(null)
              }}
              className="w-full rounded outline-none text-sm bg-white text-black p-2">Cancel</button>
              <button
              onClick={updateLead}
              className="w-full rounded outline-none text-sm bg-(--primary) text-white p-2">Update</button>
          </div>
      </div>
    </div>
  )
}
