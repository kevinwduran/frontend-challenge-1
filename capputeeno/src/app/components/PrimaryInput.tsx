import styled from "styled-components";
import { SearchIcon } from "./icons/search-icon";
import { InputHTMLAttributes } from "react";

export const PrimaryInput = styled.input`
  width: 100%;
  padding: 10px 16px;
  border-radius: 8px;
  border: none;
  background-color: var(--bg-secondary);

  font-family: inherit;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: var(--text-dark);

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    font-size: 14px;
    line-height: 22px;
  }
`

const InputContainer = styled.div`
  position: relative;
  width: 250px;

  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (min-width: 768px) {
    width: 352px;
  }
`

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string,
  handleChange: (value: string) => void
} 

export function PrimaryInputWSearchIcon(props: InputProps) {
  return (
    <InputContainer>
      <PrimaryInput onChange={(e) => props.handleChange(e.target.value)} {...props} />
      <SearchIcon />
    </InputContainer>
  )
}