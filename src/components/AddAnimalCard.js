import { Paper, Box } from "@mui/material"
import Divider from '@mui/material/Divider';
import { TextField } from "@mui/material";
import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Button from "@mui/material/Button";

const AddAnimalCard = (props) => {

    return (
        <Paper elevation={6}
            sx={{
                m: 0,
                mt: 8,
                position: 'fixed',
                bgcolor: 'white',
                p: 4,
                border: '1px solid grey',
                borderBottom: 0,
                borderTop: 0,
                borderLeft: 0,
                width: { sm: '19vw', xs: 'calc(100vw - 65px)' },
                minWidth: '400px',
                zIndex: 5000,
                height: 'calc(100vh - 80px)',
                maxHeight: 'calc(100vh - 80px)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'auto',

            }}
        >
            <Box>
                <IconButton sx={{ float: 'right', mt: -3, mb: 2 }} onClick={props.handleOnMenuClick}>
                    <CloseIcon color='grey' fontSize='large' />
                </IconButton>
            </Box>
            <Divider color={'grey'} sx={{ mt: '23px' }} />
            <TextField sx={{ mb: 1 }} label="Placeholder" variant="standard" />
            <Divider color={'grey'} sx={{ mt: '23px' }} />
            <TextField sx={{ mb: 1 }} label="Placeholder" variant="standard" />
            <Divider color={'grey'} sx={{ mt: '23px' }} />
            <TextField sx={{ mb: 1 }} label="Placeholder" variant="standard" />
            <Divider color={'grey'} sx={{ mt: '23px' }} />
            <TextField sx={{ mb: 1 }} label="Placeholder" variant="standard" />
            <Divider color={'grey'} sx={{ mt: '23px' }} />
            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
                <Button color='primary' variant="contained" size="medium">Add</Button>
            </Box>
        </Paper>
    )

}

export default AddAnimalCard;