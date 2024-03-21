export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="container mx-auto md:px-6 sm:px-4 px-2">{children}</div>;
}
