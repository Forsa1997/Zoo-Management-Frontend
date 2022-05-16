import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from './Navbar';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DetailView from './DetailView';
import { loadEnclosures } from '../actions/enclosures';




const theme = createTheme();

export default function Album(props) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(useSelector(state => state.enclosureReducer.state.enclosures))

    // if (useSelector(state => state.enclosureReducer.state.enclosures === 0)) {
    //     dispatch(loadEnclosures());
    // }



    const enclosures = useSelector(state => state.enclosureReducer.state.enclosures);

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Navbar name={props.name} />
                <main>
                    {/* Hero unit */}
                    <Container sx={{ py: 8 }} maxWidth="md">
                        {/* End hero unit */}
                        <Grid container spacing={4}>
                            {enclosures.map((enclosure, index) => (
                                <Grid item key={index} xs={12} sm={6} md={4}>
                                    <Card
                                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                        onClick={e => navigate(`/DetailView/${enclosure.id}`)}
                                    >
                                        <CardMedia
                                            component="img"
                                            sx={{
                                                // 16:9
                                                pt: '56.25%',
                                            }}
                                            image="https://source.unsplash.com/random/?animal,animals"
                                            alt="random"
                                        />
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {enclosure.name}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </main>
            </Box>
            <Footer />
        </ThemeProvider>
    );
}