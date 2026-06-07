import { XIcon } from "lucide-react"
import { useCRMContext } from "../context/Context"
import { useState } from "react"

export default function AddEditLead(){

  const {addEditOpen,setAddEditOpen,API,setLoading,fetchLeads} = useCRMContext()

  const [formData,setFormData]=useState({
    name:"",
    email:"",
    phoneNumber:"",
    companyName:"",
    leadStatus:"new",
    notes:""
  })

  const addLead=async()=>{
    try{
      setLoading(true)
      const res = await fetch(`${API}/leads`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(formData)
      })
      const json = await res.json()
      console.log(json)
      await fetchLeads()
    }catch(err){
      console.log(err)
    } finally{
      setLoading(false)
      setAddEditOpen(false)
    }
  }

  const handleChange=(e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
    setFormData(prev=>({...prev,[e.target.name]:e.target.value}))
  }

  return(
    <div className={` ${ addEditOpen ? 'fixed' : 'hidden'} flex h-full w-full inset-0 justify-center items-center bg-(--bg)/50 z-50 animate duration-300 transition-all backdrop-blur-sm `}>
      <div className="relative p-5 sm:p-10 w-fit flex flex-col rounded-lg gap-5 bg-(--surface) text-sm sm:text-lg ease-linear duration-300 transition-transform">
        <div
          onClick={()=>setAddEditOpen(!addEditOpen)}
          className="w-full flex justify-end py-5 hover:text-(--primary)">
          <XIcon/>
        </div>

          <div className="flex-1">
            <div className="text-xs">Name</div>
            <input
              type="text"
              placeholder="Enter your name "
              onChange={handleChange}
              name="name"
              required
              className="outline-none border border-(--border) focus:border-(--primary) transition-colors duration-300 rounded p-1 w-full"/>
          </div>
        <div>
          <div className="text-xs">Email</div>
          <input
            type="email"
            onChange={handleChange}
            name="email"
            placeholder="Enter your Email "
            required
            className="outline-none border border-(--border) focus:border-(--primary) transition-colors duration-300 rounded p-1 w-full "/>
        </div>
          <div className="flex flex-col sm:flex-row gap-5">
            <div>
              <div className="text-xs">Company Name</div>
              <input
                type="text"
                placeholder="Enter Company Name "
                onChange={handleChange}
                name="companyName"
                className="outline-none border border-(--border) focus:border-(--primary) transition-colors duration-300 rounded p-1 "/>
            </div>
            <div>
              <div className="text-xs">Phone Number</div>
              <input
                type="text"
                placeholder="Enter your phone Number  "
                required
                onChange={handleChange}
                name="phoneNumber"
                className="outline-none border border-(--border) focus:border-(--primary) transition-colors duration-300 rounded p-1 "/>
            </div>
          </div>
          <div>
              <div className="text-xs">Notes</div>
              <textarea
                placeholder="Enter a Note about lead  "
                required
                onChange={handleChange}
                name="notes"
                className="outline-none border border-(--border) focus:border-(--primary) transition-colors duration-300 rounded p-1 max-h-50 min-h-20 w-full "/>
          </div>
          <div className=" flex gap-2 w-full">
              <button
              type="button"
              onClick={()=>setAddEditOpen(false)}
              className="w-full rounded outline-none text-sm bg-white text-black p-2">Cancel</button>
              <button
              onClick={addLead}
              className="w-full rounded outline-none text-sm bg-(--primary) text-white p-2">Add</button>
          </div>
      </div>
    </div>
  )
}
