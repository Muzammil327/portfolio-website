/* ----------------------------------------------------------------
------------- Navbar COMPONENTS TYPES  start here -----------------
---------------------------------------------------------------- */

export interface Featured {
  name: string
  href: string
  imageSrc: string
  imageAlt: string
}

export interface Items {
  name: string
  href: string
}
export interface Sections {
  id: string
  name: string
  items: Items[]
}
export interface Pages {
  name: string
  href: string
}

/* ----------------------------------------------------------------
------------- Portfolio COMPONENTS TYPES  start here --------------
---------------------------------------------------------------- */

export interface portfolioProps {
  id?: number
  para?: string
  name: string
  liveLink?: string
  githubLink?: string
  image: string
  imagealt: string
  link: string
}


export interface PostCard {
  tagslug: string;
  authorslug: string;
  id:string,
  date:string,
  title:string,
  slug:string,
  para:string,
  cat:string,
  author:string,
  tag:string,
  image:string,
  catslug:string,
}

/* ----------------------------------------------------------------
------------- Brands COMPONENTS TYPES  start here -----------------
---------------------------------------------------------------- */

export interface brandsProps {
  id?: number
  name: string
  liveLink: string
  image: string
}

export type Tag = {
  _id: string
  name: String
  slug: string
  image: string
}
export type Button = {
  _id: string
  href: string
  text: string
  className: string
}
// about
export type About = {
  _id: string
  title: string
  position: string
  description: string
  date: string
  phone: number
  email: string
  location: string
  pic: TImage
}
// portfolio
export type Portfolio = {
  _id: string
  title: string
  image: TImage
  slug: Slug
  description: string
  tag: string
  date: string
  livelink: string
  skill: Skill[]
  body: []
  RPortflio: RPortflio[]
}
export type RPortflio = {
  _id: string
  title: string
  slug: string
  image: string
  description: string
  tag: string
}
export type Skill = {
  _id: number
  title: string
  image: TImage
  position: string
  year: string
}

// services
export type Service = {
  _id: string
  title: string
  description: string
  image: TImage
  slug: Slug
  types: Types[]
}
export type Types = {
  _id: string
  title: string
  image: TImage
  description: string
  slugs: Slug
}

export type Type = {
  _id: string
  title: string
  image: TImage
  description: string
  slugs: Slug
  tag: string
  date: string
  body: []
}
// blog
export type Blog = {
  _id: string
  title: string
  slug: Slug
  image: TImage
  description: string
  tag: string
  date: string
  author: Author[]
  body: []
}
export type Author = {
  _id: string
  title: string
  slug: Slug
  image: TImage
  description: string
}

export type Slug = {
  _type: string
  current: string
}
export type TImage = {
  _key: string
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
}
