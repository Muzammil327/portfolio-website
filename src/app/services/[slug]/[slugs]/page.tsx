// import dynamic from "next/dynamic";
// const Container = dynamic(() => import("@/components/elements/container/page"));
// const ServiceHero = dynamic(
//   () => import("@/components/services/slug/slug/hero")
// );
// const ServiceLeft = dynamic(
//   () => import("@/components/services/slug/slug/left")
// );
// const ServiceRight = dynamic(
//   () => import("@/components/services/slug/slug/right")
// );
// import { getserviceother } from "@/sanity/schemas/service/other/util";

// type Iprops = {
//   params: { slugs: string };
// };

// export default async function Services({ params }: Iprops) {
//   const service = await getserviceother(params.slugs);

//   return (
//     <Container>
//       <ServiceHero datas={service} />
//       <div className="grid md:grid-cols-7 grid-cols-1 gap-8">
//         <div className="md:col-span-5 col-span-2">
//           <ServiceLeft datas={service} />
//         </div>
//         <div className="md:col-span-2 col-span-1">
//           <ServiceRight datas={service} />
//         </div>
//       </div>
//     </Container>
//   );
// }


import React from 'react'

export default function page() {
  return (
    <div>page</div>
  )
}
