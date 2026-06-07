import { useCRMContext } from "../context/Context";
import Lead from "./Lead";

export default function Table() {

  const {leads}=useCRMContext()

  return (
    <div className="flex-1 z-0 relative min-w-0 overflow-x-auto overflow-y-auto bg-(--bg)">
      <table className="w-full border-collapse min-w-max sm:min-w-full">
        <thead className="bg-(--surface) backdrop-blur-sm">
          <tr className="border-b border-(--border)">
            <th className="h-12 sm:h-14 px-2 sm:px-4 text-left font-semibold text-(--text) text-xs sm:text-sm">ID</th>
            <th className="h-12 sm:h-14 px-2 sm:px-4 text-left font-semibold text-(--text) text-xs sm:text-sm min-w-30">Name</th>
            <th className=" h-12 sm:h-14 px-2 sm:px-4 text-left font-semibold text-(--text) text-xs sm:text-sm">Email</th>
            <th className="h-12 sm:h-14 px-2 sm:px-4 text-left font-semibold text-(--text) text-xs sm:text-sm min-w-50">Phone</th>
            <th className="h-12 sm:h-14 px-2 sm:px-4 text-left font-semibold text-(--text) text-xs sm:text-sm">Company</th>
            <th className="h-12 sm:h-14 px-2 sm:px-4 text-left font-semibold text-(--text) text-xs sm:text-sm">Status</th>
            <th className=" h-12 sm:h-14 px-2 sm:px-4 text-left font-semibold text-(--text) text-xs sm:text-sm min-w-30">Date</th>
            <th className="h-12 sm:h-14 px-2 sm:px-4 text-center font-semibold text-(--text) text-xs sm:text-sm">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            leads?.map((lead) => {
              return (<Lead key={lead._id} lead={lead} />)
            })}
        </tbody>
      </table>
      
    </div>
  );
}
