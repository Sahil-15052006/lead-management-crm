
import { ArrowDown } from "lucide-react";
import { useState } from "react";
import { useCRMContext } from "../context/Context";

export default function SortDropdown() {
  const [sortOpen, setSortOpen] = useState(false)
  const {leads, setLeads}=useCRMContext()
  const sortTypes=[
    { id:1 ,sortby:"Date"},
    { id:2 ,sortby:"Name A-Z"},
    { id:3 ,sortby:"Name Z-A"}
  ]

  const handleSort=(sortby:String)=>{
    if(sortby==="Name A-Z"){
      setLeads([...leads].sort((a,b)=>a.name.localeCompare(b.name)))
    } else if(sortby==="Name Z-A"){
      setLeads([...leads].sort((a,b)=>b.name.localeCompare(a.name)))
    } else{
      setLeads([...leads].sort((a,b)=>new Date(a.createdAt).getTime()-new Date(b.createdAt).getTime()))
    }
    setSortOpen(false)
  }

  return (
    <div className="flex-1 sm:flex-none z-0">
      <button
        onClick={() => setSortOpen(!sortOpen)}
        className="flex relative items-center justify-center sm:justify-start gap-2 px-3 sm:px-4 py-2.5 sm:py-3 border border-(--border) rounded-lg text-(--text-secondary) bg-(--surface) hover:border-(--primary)/50 hover:bg-(--bg) active:bg-(--primary)/5 transition-all duration-200 text-sm font-medium shadow-sm hover:shadow-md w-fit "
      >
        <span>Sort</span>
        <ArrowDown className={`px-1 transition-transform ${sortOpen && 'rotate-180 duration-300 '}`}/>
      </button>

      {sortOpen && (
        <div className="absolute z-10 flex flex-col gap-2 bg-(--surface) border border-(--border) rounded-lg shadow-xl px-2 sm:px-3 py-2.5 sm:py-3  animate-in fade-in slide-in-from-top-2">
          {
            sortTypes.map((sort)=>{
              const id = sort.id
              const sortby = sort.sortby
              return (
              <div
                key={id}
                onClick={()=>handleSort(sortby)}
                className="flex text-sm text-(--text-secondary) active:scale-95 cursor-pointer">
                {sortby}
              </div>
            )})
          }
        </div>
      )}
    </div>
  )
}
