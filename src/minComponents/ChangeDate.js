import React from 'react'
import DatePicker from "react-datepicker";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns-tz';

export default function ChangeDate(props) {

    const [startDate, setStartDate] = React.useState(new Date());
    const [isOpen, setIsOpen] = React.useState(false);

    const handleChange = (e) => {
        setIsOpen(!isOpen);
        setStartDate(e);
        props.funcDate(e);
    };

    const handleClick = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <Typography variant="span" gutterBottom>{props.label}</Typography> <br/>
            <Button
                variant="outlined"
                onClick={handleClick}>
                {format(startDate, "dd-MM-yyyy")}
            </Button>
            {isOpen && (
                <DatePicker
                    selected={startDate}
                    withPortal
                    onChange={handleChange}
                    inline
                />
            )}
        </div>
    );
}
