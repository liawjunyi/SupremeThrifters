import Card from "./Card";
import { Highlight } from "react-instantsearch";

const Hit = ({ hit }) => {
  return (
    <>
      <Card className="my-[5px]">
        <Highlight hit={hit} attribute="name" className="Hit-label" />
        <span className="Hit-price">{hit.product_name}</span>
      </Card>
    </>
  );
};

export default Hit;
