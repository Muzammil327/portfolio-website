import dynamic from "next/dynamic";
const Container = dynamic(() => import("@/components/elements/container/page"));
const PortfolioItem = dynamic(() => import("@/components/portfolio/item/page"));
import { Portfolio } from "@/types/page";

interface IProps {
  datas: Portfolio[];
}

export function PortfolioList({ datas }: IProps) {
  return (
    <>
      <Container>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-6 gap-4">
          {datas.map((data: Portfolio) => {
            return <PortfolioItem datas={data} key={data._id} />;
          })}
        </div>
      </Container>
    </>
  );
}
export function PortfolioHList({ datas }: IProps) {
  return (
    <>
      <Container>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-6 gap-4">
          {datas.slice(0, 3).map((data: Portfolio) => {
            return <PortfolioItem datas={data} key={data._id} />;
          })}
        </div>
      </Container>
    </>
  );
}
