import { useCRMContext } from "../context/Context"

export default function DeleteOverlay({_id}:{_id:string}){

  const {showDeleteAlert,setShowDeleteAlert,API,setSelectedLead,setLoading,fetchLeads} = useCRMContext()

  const deleteLead=async()=>{
    try{
      setLoading(true)
      const res=await fetch(`${API}/leads/${_id}`,{
        method:"DELETE"
      })
      const json = await res.json()
      console.log(json)
      await fetchLeads()
    }catch(err){
      console.log(err)
    }finally{
      setLoading(false)
      setShowDeleteAlert(false)
      setSelectedLead(null)
    }
  }
  return(
    <div className={`${showDeleteAlert ? 'fixed' : 'hidden' } flex inset-0 z-50 backdrop-blur-sm justify-center items-center w-full h-full`}>
      <div className="flex flex-col gap-2 rounded-lg px-5 py-5 bg-(--bg) h-fit min-w-80 w-100">
        <div className="font-semibold text-lg sm:text-xl lg:text-2xl">Confirm Delete</div>
        <div className="text-sm sm:text-md text-(--text-secondary)">Do you want to delete lead {_id}</div>
        <div className=" flex gap-2 w-full">
          <button
          onClick={()=>setShowDeleteAlert(!showDeleteAlert)}
          className="w-full rounded outline-none text-sm bg-white text-black p-2">Cancel</button>
          <button
          onClick={deleteLead}
          className="w-full rounded outline-none text-sm bg-(--surface) text-white p-2">Delete</button>
        </div>
      </div>
    </div>
  )
}
