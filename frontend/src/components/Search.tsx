import { SearchIcon, XCircleIcon } from "lucide-react";
import React, { useState } from "react";
import { useCRMContext } from "../context/Context";

export default function Search() {
  const [search, setSearch] = useState("")
  const {API,setLoading,fetchLeads,setLeads} = useCRMContext()

  const handleSerach=async()=>{
    try{
      setLoading(true)
      const res = await fetch(`${API}/leads?search=${search}`,{
        method:"GET"
      })
      const json = await res.json()
      const data = json.data
      setLeads(data)
    }catch(err){
      console.log(err)
      fetchLeads()
    }finally{
      setLoading(false)
    }
  }
  return (
    <div className="flex  flex-col sm:flex-row gap-3 sm:gap-4 w-full ps-1 ">
      <div className="flex flex-1 flex-row justify-center items-center border border-(--border) rounded-lg sm:rounded-xl p-2.5 sm:p-3 gap-2 sm:gap-3 text-(--text-secondary) hover:border-(--primary)/50 focus-within:border-(--primary) focus-within:shadow-lg focus-within:ring-2 focus-within:ring-(--primary)/10 transition-all duration-300 w-full bg-(--surface) group">
        <SearchIcon className="h-4 sm:h-5 w-4 sm:w-5 text-(--text-secondary)/60 shrink-0 group-focus-within:text-(--primary) transition-colors duration-300" />
        <input
          value={search}
          onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setSearch(e.target.value)}
          name="search"
          placeholder="Search leads..."
          className="outline-none flex-1 bg-(--surface) text-(--text) placeholder:text-(--text-secondary)/60 text-sm" />
        <XCircleIcon
          onClick={()=>{
            fetchLeads()
            setSearch("")
          }}
          className="active:text-(--primary) z-1"/>
      </div>
      <button
        onClick={handleSerach}
        className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-blue-600 hover:bg-blue-700 hover:shadow-lg text-white shadow-md transition-all duration-300 font-semibold cursor-pointer whitespace-nowrap active:scale-95 w-full sm:w-auto"
      >
        <SearchIcon className="h-4 w-4 transition-transform duration-300" />
        <span>Search</span>
      </button>
    </div>
  )
}
