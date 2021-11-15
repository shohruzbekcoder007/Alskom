import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { globalState } from "../globalState";
import { observer } from "mobx-react";

const useStyles = makeStyles({
  table: {
    // minWidth: 650,
    width: "100%",
    overflow: "scroll"
  },
});

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: "#9b9b9b",
      color: "rgb(11, 11, 11)"
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

export default observer(function CustomerTable({tableData}) {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>{(globalState.language==="ru")?"Наименование":"Nomi"}</StyledTableCell>
            <StyledTableCell align="right">{(globalState.language==="ru")?"ИНН":"INN"}</StyledTableCell>
            <StyledTableCell align="right">{(globalState.language==="ru")?"Расчетный счет":"Hisob raqami"}</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.inn}</StyledTableCell>
              <StyledTableCell align="right">{row.checking_account}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});
