interface Iprops {
  head: string
  subhead: string
}

export default function Heading({ head, subhead }: Iprops) {
  return (
    <>
      <div className="text-center my-8 mr-6 relative">
        <div className="flex items-center justify-center">
          <span className="text xl:text-[8rem] lg:text-[7rem] sm:text-[5rem] text-[4rem] absolute xl:-top-40 lg:-top-32 md:-top-24 sm:-top-20 -top-16 opacity-5">
            {subhead}
          </span>
        </div>
        {/* <span className="text-color2 font-medium text-base">{subhead}</span> */}
        <h3 className="my-4 text font-bold lg:text-3xl text-2xl">{head}</h3>
      </div>
    </>
  )
}
