import { groq } from "next-sanity";
import client from "@/sanity/lib/client";
import { Skill } from "@/types/page";

export async function getSkills(): Promise<Skill[]> {
  return client.fetch(
    groq`*[_type == "skill"] {
      _id,
      title,
      "image": image.asset->url,
    }`
  );
}
