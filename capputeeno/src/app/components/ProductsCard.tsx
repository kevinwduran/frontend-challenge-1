import { formatPrice } from "@/utils/format-price"
import styled from "styled-components"

interface ProductCardProps {
  image: string,
  title: string,
  price: number,
}

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 256px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 0px 0px 4px 4px;
  backdrop-filter: blur(10px);

  img {
    width: 256px;
    height: 300px;
  }

  h3 {
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    color: var(--text-dark2);
  }

  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 21px;
    color: var(--shapes-dark);
  }

  div {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    padding: 8px 0;

    > div {
      width: 228px;
      height: 1px;
      padding: 0;
      background: var(--shapes);
      margin: 8px 0%;
    }
  }

`

export function ProductCard(props: ProductCardProps) {

  const price = formatPrice(props.price)

  return (
    <Card>
      <img src={props.image} />
      <div>
        <h3>{props.title}</h3>
        <div></div>
        <p>{price}</p>
      </div>    
    </Card>
  )
}