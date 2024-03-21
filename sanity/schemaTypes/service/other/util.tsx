import { createClient, groq } from "next-sanity";
import client from "@/sanity/lib/client";
import { Type } from "@/types/page";



export async function getserviceother(slugs: string): Promise<Type> {
  return client.fetch(
    groq`*[_type == "servicetag" && slugs.current == $slugs][0]{
      _id,
      title,
      "image": image.asset->url,
      "slugs": slugs.current,
      description,
      tag,
      date,
      body[]
    }`,{ slugs }
  );
}