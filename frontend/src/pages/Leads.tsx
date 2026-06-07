import Search from "../components/Search";
import Table from "../components/Table";
import FilterDropdown from "../components/Filter";
import SortDropdown from "../components/Sort";

export default function Leads(){
  return(
    <div className="flex-1 bg-(--bg) flex flex-col overflow-y-auto scrollbar-none">
       <div className="flex z-10 flex-col gap-3 sm:gap-4 p-3 sm:p-4 md:p-6 border-b border-(--border)/50 bg-(--surface) shadow-md overflow-hidden scrollbar-none">
        <Search />
        <div className="flex flex-row gap-2 sm:gap-3 md:gap-4 ">
            <FilterDropdown />
            <SortDropdown />
        </div>
      </div>
      <div className="flex-1 z-0 relative min-w-0 min-h-0 overflow-x-auto overflow-y-auto bg-(--bg)">
        <Table />
      </div>
    </div>
  )
}
