import Card from "../components/Card";
import Search from "../components/Search";
import FilterDropdown from "../components/Filter";
import SortDropdown from "../components/Sort";
import Table from "../components/Table";
import { useCRMContext } from "../context/Context";

export default function Dashboard() {
  const {leads} = useCRMContext()

  const totalCount = leads.length
  const newCount = leads.filter(lead => lead.leadStatus === "new").length
  const contactedCount = leads.filter(lead => lead.leadStatus === "contacted").length
  const qualifiedCount = leads.filter(lead => lead.leadStatus === "qualified").length
  const convertedCount = leads.filter(lead => lead.leadStatus === "converted").length
  const lostCount = leads.filter(lead => lead.leadStatus === "lost").length

  const cardsData = [
    { id: 1, cardName: "Total",  count: totalCount },
    { id: 2, cardName: "New",          count: newCount },
    { id: 3, cardName: "Contacted",    count: contactedCount },
    { id: 4, cardName: "Qualified",    count: qualifiedCount },
    { id: 5, cardName: "Converted",    count: convertedCount },
    { id: 6, cardName: "Lost",         count: lostCount },
  ]

  return (
    <div className="flex-1 bg-(--bg) flex flex-col overflow-y-auto ">
      <div className="bg-(--surface) border-b border-(--border)/50 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-6 w-full overflow-hidden z-0">
        {
          cardsData.map((card)=>{
            const id=card.id;
            const cardName = card.cardName;
            const count = card.count;
            return(
              <div
                key={id}
                className="w-full min-w-fit md:min-w-0">
                <Card count={count} cardName={cardName}/>
              </div>
            )
          })
        }
      </div>
      <div className="flex flex-col gap-3 sm:gap-4 p-3 sm:p-4 md:p-6 border-b border-(--border)/50 bg-(--surface) shadow-md overflow-hidden scrollbar-none z-10">
        <Search />
        <div className="hidden sm:flex flex-row gap-2 sm:gap-3 md:gap-4 ">
            <FilterDropdown />
            <SortDropdown />
        </div>
      </div>
      <div className="flex-1 min-w-0 min-h-0 overflow-auto">
        <Table />
      </div>
    </div>
  )
}
