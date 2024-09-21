import styled from "styled-components"

interface ProductProps {

}

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`

export default function Product(props: ProductProps) {
  return (
    <Container>Produto</Container>
  )
}