import styled from "@mui/material/styles/styled";
import TableCell from "@mui/material/TableCell";

interface StyledTableCellProps {
  maxWidth?: string;
  minWidth?: string;
}

/**
 * Primary UI component for user interaction
 */
const StyledTableCell = styled(TableCell)<StyledTableCellProps>((props) => ({
  backgroundColor: "blue",
  maxWidth: props.maxWidth,
  minWidth: props.minWidth
}));

export const CommonTableCell = () => {
  const zmaxWidth = "500px";
  const zminWidth = "300px";
  return (
    <StyledTableCell maxWidth={zmaxWidth} minWidth={zminWidth}>
      test
    </StyledTableCell>
  );
};
