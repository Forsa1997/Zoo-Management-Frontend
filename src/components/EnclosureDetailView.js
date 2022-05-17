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
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import EnclosureService from '../services/enclosure.service';
import { TextField } from '@mui/material';
import AnimalTransferList from './inputs/AnimalTransferList';
import { useEffect } from 'react';
import { loadEnclosures } from '../actions/enclosures';
import { loadAnimals } from '../actions/animals';
import StaffTransferList from './inputs/StaffTransferList';


const EnclosureDetailView = (props) => {


    const navigate = useNavigate();

    const failbackEnclosure = {
        animalId: [],
        animalTypes: [],
        cost: { monthlyCost: 0 },
        description: "Default Enclosure",
        id: 1,
        name: "DefaultEnclosure",
        staffId: []
    }

    const dispatch = useDispatch();
    const { enclosureId } = useParams();
    const enclosures = useSelector(state => state.enclosureReducer.state.enclosures)
    const enclosure = enclosures.find(enclosure => enclosure.id == enclosureId) ?? failbackEnclosure;
    const animals = useSelector(state => state.animalReducer.state.animals)
    const staffs = useSelector(state => state.staffReducer.state.staffs);
    let animalList = [];
    let staffList = [];

    const mdTheme = createTheme();


    useEffect(() => {
        dispatch(loadEnclosures())
        dispatch(loadAnimals())
    }, []);

    useEffect(() => {
        if(!animals || !enclosures){
            return
        }
        getAnimalList()
    }, [animals, enclosures]);

    const getAnimalList = () => {
        let newAnimalList = [];
        enclosure.animalId?.map((animalId) => {
            const animal = animals.find(animal => animal.id === animalId)
            newAnimalList.push(animal);
        })
        animalList = newAnimalList;
    }

    const getStaffList = () => {
        let newStaffList = [];
        enclosure.staffId?.map((staffId) => {
            const staff = staffs.find(staff1 => staff1.id === staffId)
            newStaffList.push(staff);
        })
        staffList = newStaffList;
        console.log(staffList)
    }

    return (
        <ThemeProvider theme={mdTheme}>
            {getAnimalList()}
            {getStaffList()}
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
                                        <Button onClick={e => navigate("/Enclosures")} variant="contained" sx={{ height: 50, ml: 1, mr: 50 }}><KeyboardReturnIcon /></Button>
                                        <Button variant="contained" sx={{ mr: 10 }}><SaveIcon /></Button>
                                        <Button onClick={e => EnclosureService.deleteEnclosure(enclosureId)} variant="contained"><DeleteIcon /></Button>
                                    </Grid>
                                    <Grid sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                    }}>
                                        <Grid sx={{
                                            widht: 200,
                                            height: 200,
                                            ml: 3
                                        }}>
                                            <Typography variant='h5'>Name:</Typography>
                                            <TextField label={enclosure.name} variant="standard" />

                                        </Grid>
                                        <Grid sx={{
                                            widht: 200,
                                            height: 200,
                                            ml: 15
                                        }}>
                                            <Typography variant='h5'>Description:</Typography>
                                            <TextField
                                                sx={{ width: "400px" }}
                                                id="standard-multiline-static"
                                                multiline
                                                rows={6}
                                                defaultValue={enclosure.description}
                                            />
                                        </Grid>
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
                            <Grid item sm={12} md={6} >
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 300,
                                    }}
                                >
                                    <Typography variant='h5'>Animals:</Typography>
                                    <AnimalTransferList animals={animalList} />
                                </Paper>
                            </Grid>
                            <Grid item sm={12} md={6} >
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 300,
                                    }}
                                >
                                    <Typography variant='h5'>Staff:</Typography>
                                    <StaffTransferList staff={staffList}/>
                                </Paper>
                            </Grid>
                            <Grid item sm={12} md={6}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 300,
                                    }}
                                >
                                    <Typography variant='h5'>Cost:</Typography>
                                    <List>
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
                            <Grid item sm={12} md={6}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 300,
                                    }}
                                >
                                    <Typography variant='h5'>Animaltypes:</Typography>
                                    <List>
                                        <React.Fragment>
                                            {enclosure.animalTypes.map((type, index) => (
                                                <ListItem key={index} >
                                                    <ListItemIcon>
                                                        <FiberManualRecordIcon />
                                                    </ListItemIcon>
                                                    <ListItemText primary={type} />
                                                </ListItem >
                                            ))}
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

export default EnclosureDetailView;