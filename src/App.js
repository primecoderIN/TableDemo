import TableBody from "./components/TableBody";
import TableHeader from "./components/TableHeader";
import styled from "styled-components";

const AppWrapper = styled.div`
    width: 500px;
    margin-left: 300px;
`;

function App() {
  return (
    <AppWrapper>
      <TableHeader />
      <TableBody />
    </AppWrapper>
  );
}

export default App;
