import styled from "@mui/material/styles/styled";
import TableCell from "@mui/material/TableCell";

export interface StyledTableCellProps {
  minWidth?: string;
  maxWidth?: string;
  size?: string;
}

/**
 * Primary UI component for user interaction
 */
export const StyledTableCell = styled(TableCell)<StyledTableCellProps>(
  (props) => ({
    backgroundColor: "blue",
    minwidth: props.minWidth,
    maxwidth: props.maxWidth
  })
);
