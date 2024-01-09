import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 80px 80px 50px 180px 60px 50px 100px 120px 50px;
  align-items: center;
  gap: 1rem;
  border: 1px solid grey;
  padding: 1rem 0.5rem;
  border-radius: 10px;
  width: 600px;
  overflow: auto;
`;

const handleHorizontalScroll = (e) => {
  const elements = document.getElementsByClassName("hScroll");

  for (let i = 0; i < elements.length; i++) {
    elements[i].scrollLeft = e.target.scrollLeft;
  }
};

const TableHeader = ({ style = {} }) => {
  return (
    <HeaderWrapper
      style={style}
      onScroll={handleHorizontalScroll}
      className="hScroll">
      <span>First name</span>
      <span>Last name</span>
      <span>Age</span>
      <span>Email</span>
      <span>City</span>
      <span>Country</span>
      <span>Profession</span>
      <span>Experience(Yrs)</span>
    </HeaderWrapper>
  );
};

export default TableHeader;
