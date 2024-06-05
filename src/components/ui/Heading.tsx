interface Iprops {
  head: string
  subhead: string
}

export default function Heading({ head, subhead }: Iprops) {
  return (
    <div className="text-center my-8 mr-6">
      <span className="text-color2 font-medium text-base">{subhead}</span>
      <h3 className="my-4 text font-bold lg:text-3xl sm:text-2xl text-xl">{head}</h3>
    </div>
  )
}
