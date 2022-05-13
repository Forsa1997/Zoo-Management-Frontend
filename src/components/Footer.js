import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary">
            All rights reserved. {'Copyright © '}
            <Link color="inherit" href="https:/google.de">
                Zoo-Management
            </Link>{' '}
            {new Date().getFullYear()}
        </Typography>
    );
}

export default function Footer() {
    return (
        <Box component="footer"
             sx={{
                 display: 'flex',
                 height: 40,
                 justifyContent: 'center',
                 alignItems: 'center',
                 width: '100vw',
                 boxShadow: '0px -3px 8px #646464',
                 backgroundColor: (theme) =>
                     theme.palette.mode === 'light'
                         ? theme.palette.grey[300]
                         : theme.palette.grey[800],

             }}
        >
            <Copyright/>

        </Box>
    );
}