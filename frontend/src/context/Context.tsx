import React, { createContext, useContext, useEffect, useState } from "react"

interface Lead {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  companyName:string;
  leadStatus: string;
  notes:string;
  createdAt:string;
}

interface contextType {
  addEditOpen : boolean,
  setAddEditOpen : React.Dispatch<React.SetStateAction<boolean>>;
  showDeleteAlert: boolean,
  setShowDeleteAlert : React.Dispatch<React.SetStateAction<boolean>>;
  loading:boolean,
  setLoading:React.Dispatch<React.SetStateAction<boolean>>;
  leads:Lead[]
  setLeads:React.Dispatch<React.SetStateAction<Lead[]>>;
  editModel:boolean,
  setEditModel : React.Dispatch<React.SetStateAction<boolean>>;
  API:string
  fetchLeads:()=>void
  selectedLead: Lead | null;
  setSelectedLead: React.Dispatch<React.SetStateAction<Lead | null>>;
  allLeads:Lead[],
  // setAllLeads:React.Dispatch<React.SetStateAction<Lead | null>>;
}

export const crmContext = createContext<contextType|null>(null)

export default function ContextProvider({children}:{children:React.ReactNode}){

  const [selectedLead , setSelectedLead]=useState<Lead|null>(null)
  const [addEditOpen,setAddEditOpen] = useState(false);
  const [showDeleteAlert,setShowDeleteAlert] = useState(false)
  const [loading,setLoading]=useState(false)
  const [leads,setLeads]=useState<Lead[]>([])
  const [editModel,setEditModel] = useState(false)
  const [allLeads,setAllLeads] = useState<Lead[]|null>(null)

  const API = import.meta.env.VITE_API_URL;

  const fetchLeads=async()=>{
    const res = await fetch(`${API}/leads`,{
      method:"GET"
    })
    const json = await res.json();
    const leadsArr = json.data
    setLeads(leadsArr)
    setAllLeads(leadsArr)
  }

  useEffect(()=>{
    fetchLeads()
  },[])

  return(
    <crmContext.Provider value={{addEditOpen,setAddEditOpen,showDeleteAlert,setShowDeleteAlert, loading , setLoading, leads,editModel,setEditModel,API,fetchLeads,selectedLead,setSelectedLead,setLeads,allLeads}}>
      {children}
    </crmContext.Provider>
  )
}

export function useCRMContext(){
  const context = useContext(crmContext)
  if(!context)throw new Error('useCRMContext can only be used in <contextProvider> <contextProvider/>')
  return context
}
