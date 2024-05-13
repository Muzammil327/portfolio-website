interface Iprops {
  head: string;
  para: string;
}

export default function SHero({ head, para }: Iprops) {
  return (
    <div className="home text-center lg:py-44 md:py-32 py-24">
      <h1 className="text-black font-semibold lg:text-5xl md:text-4xl text-3xl my-8">
        {head}
      </h1>
      <p className="text-slate-400 text-lg font-medium leading-7 mx-auto md:w-6/12 px-4 w-full text-center">
        {para}
      </p>
    </div>
  );
}
