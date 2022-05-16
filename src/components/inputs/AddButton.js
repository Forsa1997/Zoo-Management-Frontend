import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


export default function AddButton(props) {


    return (
        <Fab color='primary' size='large' onClick={props.handleOnMenuClick} sx={{
            position: 'fixed',
            zIndex: 1,
            right: 30,
            bottom: 30

        }} >
            <AddIcon />
        </Fab>
    );
}
