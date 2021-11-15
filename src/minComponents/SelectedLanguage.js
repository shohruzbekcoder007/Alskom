import React from 'react';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { setLanguage, globalState } from './../globalState';

const useStyles = makeStyles({
    buttonColor: {
        color: '#fff'
    }
})

export default function SelectedLanguage() {

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const setLanguageUz = () => {
    setLanguage("uz")
    setAnchorEl(null);
  }

  const setLanguageRu = () => {
    setLanguage("ru")
    setAnchorEl(null);
  }

  return (
    <div>
      <Button
        className={classes.buttonColor}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        
        {(globalState.language==="uz")?"Tilni tanlash":"Выбор языка"}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={setLanguageUz}>O'zbekcha</MenuItem>
        <MenuItem onClick={setLanguageRu}>Русский</MenuItem>
      </Menu>
    </div>
  );
}
