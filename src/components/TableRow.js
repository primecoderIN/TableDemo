import styled from "styled-components";
import { useState } from "react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { Transition } from "react-transition-group";

const RowWrapper = styled.div`
  width: 600px;
  overflow: auto;
  display: grid;
  grid-template-columns: 80px 80px 50px 180px 60px 50px 100px 120px 50px;
  align-items: center;
  gap: 1rem;
  border: 1px solid grey;
  padding: 0.6rem 0.5rem;
  border-radius: 10px;
  margin-top: 10px;

  button {
    box-shadow: none;
    outline: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

const DetailWrapper = styled.div`
  width: 600px;
  padding: 0.5rem;
  border: 1px solid grey;
  border-radius: 10px;
  margin-top: 10px;

  transition: 0.4s;
  /* Hidden init state */
  opacity: 0;
  transform: translateY(-10px);
  &.enter,
  &.entered {
    /* Animate in state */
    opacity: 1;
    transform: translateY(0px);
  }
  &.exit,
  &.exited {
    /* Animate out state */
    opacity: 0;
    transform: translateY(-10px);
  }
`;

const handleHorizontalScroll = (e) => {
    e.preventDefault()
  const elements = document.getElementsByClassName("hScroll");

  for (let i = 0; i < elements.length; i++) {
    if (elements[i].scrollLeft !== e.target.scrollLeft) {
      elements[i].scrollLeft = e.target.scrollLeft;
    }
  }
};

const TableRow = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <>
      <RowWrapper className="hScroll" onScroll={handleHorizontalScroll} onT>
        <span>John</span>
        <span>Smilga</span>
        <span>45</span>
        <span>johnsmilga@gmail.com</span>
        <span>New York</span>
        <span>USA</span>
        <span>Software Engineer</span>
        <span>12</span>
        <button
          onClick={() => {
            setIsDropdownOpen(!isDropdownOpen);
          }}>
          {isDropdownOpen ? (
            <IoIosArrowDropup size={25} />
          ) : (
            <IoIosArrowDropdown size={25} />
          )}
        </button>
      </RowWrapper>

      <Transition unmountOnExit mountOnEnter timeout={60} in={isDropdownOpen}>
        {(className) => {
          return (
            <DetailWrapper className={className}>
              Hi, This is john. I am a software engineer at Meta. I love
              teaching and i have created many react and other courses on udemy
              to help people learn development and master software engineering.
            </DetailWrapper>
          );
        }}
      </Transition>
    </>
  );
};

export default TableRow;
