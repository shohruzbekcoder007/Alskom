import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function Select(props) {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={props.option}
      getOptionLabel={props.titleFunc}
      // onChange={(event,value)=>{props.returnSelected(value)}}
      onChange={(event,value)=>{props.returnSected(value)}}
      renderInput={(params) => <TextField
                        {...params}
                        label={props.label}
                        // variant="outlined"
                      />}
    />
  );
}