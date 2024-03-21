import { createClient, groq } from "next-sanity";
import client from "@/sanity/lib/client";
import { Service } from "@/types/page";

export async function getServices(): Promise<Service[]> {
  return client.fetch(
    groq`*[_type == "service"] {
      _id,
      title,
      "image": image.asset->url,
      "slug": slug.current,
      description
    }`
  );
}

export async function getService(slug: string): Promise<Service> {
  return client.fetch(
    groq`*[_type == "service" && slug.current == $slug][0]{
      _id,
      title,
      "image": image.asset->url,
      "slug": slug.current,
      description,
      types[]->{
        _id,
        title,
        description,
      "image": image.asset->url,
      "slugs": slugs.current,
      }
    }`,
    { slug }
  );
}
