import Button from '@mui/material/Button';
import { ListItem, Typography } from '@mui/material';
import Navbar from './Navbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import Footer from './Footer';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import * as React from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { CardMedia } from '@mui/material';
import { Card } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


const AnimalDetailView = (props) => {

    const { enclosureId } = useParams();
    const enclosures = useSelector(state => state.enclosureReducer.state.enclosures)
    const enclosure = enclosures.find(enclosure => enclosure.id == enclosureId);

    const mdTheme = createTheme();


    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Navbar name={props.name} />

                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4, pt: 5 }}>
                        <Grid container spacing={3}>
                            <Grid item md={12} lg={8}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 350,
                                    }}>
                                    <Grid sx={{
                                        height: 80,
                                        mx: "auto",
                                    }}>
                                        <Button variant="contained" sx={{ height: 50, ml: 1, mr: 50 }}><KeyboardReturnIcon /></Button>
                                        <Button variant="contained" sx={{ mr: 10 }}><SaveIcon /></Button>
                                        <Button variant="contained"><DeleteIcon /></Button>
                                    </Grid>
                                    <Grid sx={{
                                        widht: 200,
                                        height: 200
                                    }}>
                                        <Typography variant='h5'>Name:</Typography>
                                        <Typography sx={{ mb: 1 }}>{enclosure.name}</Typography>
                                        <Typography variant='h5'>Description:</Typography>
                                        <Typography>{enclosure.description}</Typography>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item md={12} lg={4}>
                                <Card
                                    sx={{ height: 350 }}
                                >
                                    <CardMedia
                                        component="img"
                                        // image="https://source.unsplash.com/random/350x350/?animal,animals"
                                        image="https://source.unsplash.com/random/350x350/?nature"
                                        alt="random"
                                    />
                                </Card>
                            </Grid>
                            <Grid item sm={12} md={4} >
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 300,
                                    }}
                                >
                                    <Typography variant='h5'>Animals:</Typography>
                                    <List component="animals">
                                        <React.Fragment>
                                            {enclosure.animals.map((animal, index) => (
                                            <ListItem key={index} >
                                                <ListItemIcon>
                                                    <FiberManualRecordIcon />
                                                </ListItemIcon>
                                                <ListItemText primary={animal.name} />
                                            </ListItem >
                                            ))}
                                        </React.Fragment>
                                    </List>
                                </Paper>
                            </Grid>
                            <Grid item sm={12} md={4} >
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 300,
                                    }}
                                >
                                    <Typography variant='h5'>Staff:</Typography>
                                    <List component="staff">
                                        <React.Fragment>
                                            {enclosure.staff.map((staff, index) => (
                                            <ListItem key={index}>
                                                <ListItemIcon>
                                                    <FiberManualRecordIcon />
                                                </ListItemIcon>
                                                <ListItemText primary={staff.name} />
                                            </ListItem >
                                            ))}
                                        </React.Fragment>
                                    </List>
                                </Paper>
                            </Grid>
                            <Grid item sm={12} md={4}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 300,
                                    }}
                                >
                                    <Typography variant='h5'>Cost:</Typography>
                                    <List component="cost">
                                        <React.Fragment>
                                            {/* {enclosure.cost.map((cost, index) => ( */}
                                            <ListItem>
                                                <ListItemIcon>
                                                    <FiberManualRecordIcon />
                                                </ListItemIcon>
                                                <ListItemText primary={enclosure.cost.monthlyCost} />
                                            </ListItem >
                                            {/* ))} */}
                                        </React.Fragment>
                                    </List>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default AnimalDetailView;