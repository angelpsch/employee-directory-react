import React from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableContents from "../TableContent";
import Labels from '../Labels'
import Search from '../Search'

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function MyTable({ toDisplay, handleFormSubmit, handleInputChange, handleButtonClick }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
          <TableCell>
           <Search handleFormSubmit={handleFormSubmit} handleInputChange={handleInputChange}></Search>
           </TableCell>
            <TableCell>
               <Labels handleButtonClick={handleButtonClick}/>
            </TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableContents toDisplay={toDisplay}></TableContents>

        </TableBody>
      </Table>
    </TableContainer>
  );
}