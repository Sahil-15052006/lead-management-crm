import { ArrowDown, Filter } from "lucide-react";
import { useState } from "react";
import { useCRMContext } from "../context/Context";

export default function FilterDropdown() {

  const {setLeads,leads,allLeads} = useCRMContext()
  const [filterOpen, setFilterOpen] = useState(false)
  const [selectedFilters,setSelectedFilters] = useState<string[]>([])
  const filters=[
    {id:1 ,filterby:"new" },
    {id:2 ,filterby:"contacted"},
    {id:3 ,filterby:"qualified"},
    {id:4 ,filterby:"converted"},
    {id:5 ,filterby:"lost"},
  ]


  const handleFilters = (filterby: string) => {
    const updated = selectedFilters.includes(filterby)
      ? selectedFilters.filter(f=>f!==filterby)
      : [ ...selectedFilters, filterby]

    setSelectedFilters(updated);

    if (updated.length === 0) {
      setLeads(allLeads)
    } else {
      setLeads(leads.filter(lead => updated.includes(lead.leadStatus)))
    }
  }

  return (
    <div className="flex-1 sm:flex-none z-0">
      <button
        onClick={() => setFilterOpen(!filterOpen)}
        className="flex relative items-center justify-center sm:justify-start gap-2 px-3 sm:px-4 py-2.5 sm:py-3 border border-(--border) rounded-lg text-(--text-secondary) bg-(--surface) hover:border-(--primary)/50 hover:bg-(--bg) active:bg-(--primary)/5 transition-all duration-200 text-sm font-medium shadow-sm hover:shadow-md w-fit "
      >
        <Filter className="h-4 w-4" />
        <span>Filter</span>
        <ArrowDown className={`px-1 transition-transform ${filterOpen && 'rotate-180 duration-300 '}`}/>
      </button>

      {filterOpen && (
        <div className="absolute z-10 flex flex-col gap-2 bg-(--surface) border border-(--border) rounded-lg shadow-xl px-2 sm:px-3 py-2.5 sm:py-3  animate-in fade-in slide-in-from-top-2">
          {
            filters.map((filter)=>{
              const id=filter.id
              const filterby=filter.filterby
              return(
              <div
                key={id}
                className="flex items-center gap-2">
                <input
                 type="checkbox"
                 name={filterby}
                 id={filterby}
                 onChange={()=>handleFilters(filterby)}/>
                <label htmlFor={filterby}>{filterby}</label>
              </div>
            )})
          }
        </div>
      )}
    </div>
  )
}
