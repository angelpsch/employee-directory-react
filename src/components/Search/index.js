import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

function Search({ handleSubmit, handleInput, search }) {
    const classes = useStyles();
    return (
        <form className={classes.root}>
            <TextField value={search} variant='outlined' onChange={handleInput} id="name" type="text" label="Search By Name"></TextField>
            <Button variant='contained' onClick={handleSubmit} >Search</Button>
        </form>
    );
}

export default Search;