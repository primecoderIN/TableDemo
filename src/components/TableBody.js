import TableRow from "./TableRow";

const TableBody = () => {
  return (
    <>
      {new Array(50).fill("a").map(() => {
        return <TableRow />;
      })}
    </>
  );
};

export default TableBody;
