// import Link from "next/link";
// import Image from "next/image";
// import dynamic from "next/dynamic";
// const ServiceHero = dynamic(() => import("@/components/services/slug/hero"));
// const Container = dynamic(() => import("@/components/elements/container/page"));
// import { getService } from "@/sanity/schemas/service/util";
// import { Types } from "@/src/types/page";
// import { urlForImage } from "@/sanity/lib/image";


// type Iprops = {
//   params: { slug: string };
// };

// export default async function Services({ params }: Iprops) {
//   const service = await getService(params.slug);

//   return (
//     <Container>
//       <ServiceHero datas={service} />
//       <>
//         <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
//           {service.types.map((data: Types) => (
//             <>
//               <Link href={`/services/${service.slug}/${data.slugs}`}>
                
//               <div className="flex gap-4 p-6 bg-slate-100" key={data._id}>
//                 <div className="left relative">
//                   <Image
//                     src={urlForImage(data.image).url()}
//                     alt={data.title}
//                     title={data.title}
//                     className="rounded-full"
//                     height={120}
//                     width={120}
//                   />
//                 </div>
//                 <div className="right">
//                   <h3 className="mb-2 text-lg font-semibold">{data.title}</h3>
//                   <p className="text-base text-slate-500">
//                     {data.description}
//                   </p>
//                 </div>
//               </div>
//               </Link>
//             </>
//           ))}
//         </div>
//       </>
//     </Container>
//   );
// }
import React from 'react'

export default function page() {
  return (
    <div>page</div>
  )
}
