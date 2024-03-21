import { createClient, groq } from "next-sanity";
import client from "@/sanity/lib/client";
import { Portfolio } from "@/types/page";

export async function getProject(slug: string): Promise<Portfolio> {
  return client.fetch(
    groq`*[_type == "portflio" && slug.current == $slug][0]{
      _id,
      title,
      "image": image.asset->url,
      "slug": slug.current,
      description,
      tag,
      date,
      livelink,
      skill[]->{
        _id,
         title,
         "image": image.asset->url,
         position,
         year
      },
      body[],
      RPortflio[]->{
        _id,
        title,
        "image": image.asset->url,
        description,
        tag
      }
    }`,
    { slug }
  );
}

export async function getProjects(): Promise<Portfolio[]> {
  return client.fetch(
    groq`*[_type == "portflio"] {
      _id,
      title,
      "image": image.asset->url,
      description,
      tag,
      "slug": slug.current
    }`
  );
}