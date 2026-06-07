
export default function Card({count,cardName}:{count:number,cardName:string}) {

  return (
    <div className="bg-(--surface) border border-(--border)/50 p-2 sm:p-4 flex flex-col sm:flex-row items-center gap-2 sm:gap-4 transition-all duration-300 hover:shadow-lg hover:border-(--border) w-full rounded-lg sm:rounded-xl group">
      <div className="flex-1 text-center sm:text-left">
        <p className="text-xs text-(--text-secondary) font-semibold tracking-wider uppercase">
          {cardName}
        </p>
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-(--text) mt-1 group-hover:text-(--primary) transition-colors duration-300">
          {count}
        </h3>
      </div>

    </div>
  )
}
