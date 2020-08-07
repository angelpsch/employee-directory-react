import React from "react";
import TableCell from '@material-ui/core/TableCell';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import FilterListIcon from '@material-ui/icons/FilterList';




const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  

function Labels({ handleClick }) {
    return (
        <StyledTableRow>
            <StyledTableCell align='right'>Name</StyledTableCell>
            <StyledTableCell align='right'>       
                    <Button onClick={handleClick}>            
                    Sort by Length of Employment <FilterListIcon />
                    </Button>
     
            </StyledTableCell>
            <StyledTableCell align='right'>Email</StyledTableCell>
            <StyledTableCell align='right'>Phone</StyledTableCell>
        </StyledTableRow>
    );
}

export default Labels;