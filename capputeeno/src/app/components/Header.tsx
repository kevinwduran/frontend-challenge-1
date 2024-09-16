"use client"

import styled from "styled-components"
import {Saira_Stencil_One} from 'next/font/google'
import { PrimaryInputWSearchIcon } from "./PrimaryInput"
import { CartControl } from "./CartControl"
import { useFilter } from "@/hooks/useFilter"

const sairaStencil = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin']
})



interface HeaderProps{

}

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 160px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }
`

const Logo = styled.a`
  color: var(--logo-color);
  font-size: 40px;
  line-height: 1.5;
`

export function Header(props: HeaderProps) {
  const {setSearch, search} = useFilter()

  return (
    <TagHeader>
      <Logo className={sairaStencil.className}>capputeeno</Logo>
      <div>
        <PrimaryInputWSearchIcon value={search} handleChange={setSearch} placeholder="Procurando por algo específico?" />
        <CartControl />
      </div>
    </TagHeader>
  )
}