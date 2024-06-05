interface Iprops {
  head: string
  subhead: string
}

export default function Heading({ head, subhead }: Iprops) {
  return (
    <>
      <div className="text-center my-8 mr-6 relative">
        <span className="lg:text-[6rem] md:text-[5rem] sm:text-[4rem] text-[2rem] opacity-5 absolute text-center lg:right-[24%] md:right-[16%] right-[28%] md:-top-32 sm:-top-20 -top-12 flex items-center justify-center">
          {subhead}
        </span>
        {/* <span className="text-color2 font-medium text-base">{subhead}</span> */}
        <h3 className="my-4 text font-bold lg:text-3xl text-2xl">{head}</h3>
      </div>
    </>
  )
}
