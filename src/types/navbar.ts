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
