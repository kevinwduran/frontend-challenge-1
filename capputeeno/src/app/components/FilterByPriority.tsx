import styled from "styled-components"
import { ArrowIcon } from "./arrow-icon"
import { useState } from "react"
import { useFilter } from "@/hooks/useFilter"
import { PriorityTypes } from "@/types/PriorityTypes"

interface FilterByPriorityProps {

}

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  button {
    border: none;
    background-color: transparent;
    font-family: inherit;
    cursor: pointer;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--text-dark);

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-left: 16px;
    }
  }
`

const PriorityFilter = styled.ul`
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background-color: white;
  padding: 12px 16px;
  position: absolute;
  top: 100%;
  width: 180px;

  list-style: none;

  li {
    color: var(--text-dark);
    font-size: 14px;
    line-height: 22px;
    cursor: pointer;
    font-weight: 400;
  }

  li + li {
    margin-top: 4px;
  }
`

export function FilterByPriority(props: FilterByPriorityProps) {
  const [isOpen, setIsOpen] = useState(false);
  const {setPriority} = useFilter();

  const handleOpen = () => {
    setIsOpen(prev => !prev);
  }

  const handleUpdatePriority = (value: PriorityTypes) => {
    setPriority(value);
    setIsOpen(false)
  }

  return(
    <FilterContainer>
      <button onClick={handleOpen}>Organizar por
        <ArrowIcon/>
      </button>
      {isOpen && 
      <PriorityFilter>
        <li onClick={() => handleUpdatePriority(PriorityTypes.NEWS)}>Novidades</li>
        <li onClick={() => handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)}>Preço: maior - menor</li>
        <li onClick={() => handleUpdatePriority(PriorityTypes.MINOR_PRICE)}>Preço: Menor - maior</li>
        <li onClick={() => handleUpdatePriority(PriorityTypes.POPULARITY)}>Mais vendidos</li>
      </PriorityFilter>}
    </FilterContainer>
  )
}