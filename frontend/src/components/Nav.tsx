import { Briefcase, PlusIcon } from "lucide-react";
import { useCRMContext } from "../context/Context";

export default function Nav(){
  const {addEditOpen,setAddEditOpen}=useCRMContext()
  return(
    <div className="flex border-b border-(--border)/50 h-14 sm:h-16 bg-(--surface) shadow-md items-center px-3 justify-between gap-2">
    <div className="flex items-center gap-2 sm:gap-3">
      <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm sm:text-lg shadow-md shrink-0">
        <Briefcase/>
      </div>
      <div className="min-w-0">
        <h1 className="text-base sm:text-lg font-bold text-(--primary) truncate">Lead Management</h1>
        <p className="hidden sm:block text-xs text-(--text-secondary)">CRM</p>
      </div>

    </div>
    <button
      onClick={()=>setAddEditOpen(!addEditOpen)}
      className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg sm:rounded-xl bg-(--primary)  hover:shadow-lg text-white shadow-md transition-all duration-300 font-semibold cursor-pointer whitespace-nowrap active:scale-95 w-full sm:w-auto">
        <PlusIcon/> Add
    </button>
  </div>
  )
}
