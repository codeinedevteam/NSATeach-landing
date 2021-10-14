import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from './RihtNav';

const StyledBurger = styled.div`
  width: 1rem;
  height: 20px;
  position: fixed;
  top: 25px;
  right: 20px;
  z-index: 20;
  display: none;
  cursor: pointer;
 

  @media (max-width: 1000px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    padding-top:3px
  }

  div {
    width: 1.3rem;
    height: 1.5px;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    border-radius: 2px;
  
   
 
`;

const Burger = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
        
      </StyledBurger>
      <RightNav open={open}/>
    </>
  )
}

export default Burger
