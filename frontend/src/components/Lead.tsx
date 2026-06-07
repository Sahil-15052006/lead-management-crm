import { TrashIcon, Edit2Icon } from "lucide-react";
import { useCRMContext } from "../context/Context";

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
interface LeadProps {
  lead: LeadType;
}

export default function Lead({ lead }: LeadProps) {

  const {
    showDeleteAlert,
    setShowDeleteAlert,
    editModel,
    setEditModel,
    setSelectedLead,
  } = useCRMContext()

  return (
    <>
    <tr className="border-b border-(--border) hover:bg-(--bg) transition-colors duration-200 text-(--text-secondary)">

      <td className="h-12 sm:h-14 px-2 sm:px-4 text-xs sm:text-sm text-(--text-secondary)">{lead._id}</td>
      <td className="h-12 sm:h-14 px-2 sm:px-4 text-xs sm:text-sm font-medium text-(--text)">{lead.name}</td>
      <td className="h-12 sm:h-14 px-2 sm:px-4 text-xs sm:text-sm truncate">{lead.email}</td>
      <td className="h-12 sm:h-14 px-2 sm:px-4 text-xs sm:text-sm">{lead.phoneNumber}</td>
      <td className="h-12 sm:h-14 px-2 sm:px-4 text-xs sm:text-sm">{lead.companyName}</td>
      <td className="h-12 sm:h-14 px-2 sm:px-4 text-xs sm:text-sm">
        <div className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium bg-(--surface) border border-(--border) text-(--text-secondary) flex items-center justify-center">
            <span className="text-(--text-secondary) font-medium">
              {lead.leadStatus}
            </span>
        </div>
      </td>
      <td className="h-12 sm:h-14 px-2 sm:px-4 text-xs sm:text-sm">{lead.createdAt.split("T")[0]}</td>
      <td className="h-12 sm:h-14 px-2 sm:px-4 text-center">
        <div className="flex gap-1 sm:gap-2 justify-center">
          <button
            onClick={()=>{
              setEditModel(!editModel)
              setSelectedLead(lead)
            }}
            className="p-1.5 sm:p-2 hover:bg-(--surface) rounded-lg transition-all duration-200 text-(--text-secondary) hover:text-(--primary) shrink-0">
            <Edit2Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
          <button
            onClick={()=>{
              setShowDeleteAlert(!showDeleteAlert)
              setSelectedLead(lead)
            }}
            className="p-1.5 sm:p-2 hover:bg-(--surface) rounded-lg transition-all duration-200 text-(--text-secondary) hover:text-red-500 shrink-0">
            <TrashIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
      </td>
    </tr>
    </>
  )
}
