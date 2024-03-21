interface Iprops {
  head: string;
  subhead: string;
}

export default function Heading({ head, subhead }: Iprops) {
  return (
    <div className="text-center my-8 mr-6">
      <span className="text-orange-500 font-medium text-lg">{head}</span>
      <h2 className="mb-4 text-black text-3xl">{subhead}</h2>
    </div>
  );
}
