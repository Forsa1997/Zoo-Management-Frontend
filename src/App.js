import './App.css';
import Dashboard from './components/Dashboard';
import { Provider } from 'react-redux';
import store from './store';
import {
  Routes,
  Route,
} from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import Theme from "./components/Theme";
import Album from './components/Album';
import EnclosureDetailView from './components/EnclosureDetailView';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadAnimals } from './actions/animals';
import { loadEnclosures } from './actions/enclosures';
import { loadStaffs } from './actions/staffs';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useEffect")
    dispatch(loadEnclosures())
    dispatch(loadAnimals())
    dispatch(loadStaffs())
  });

  return (
    // <ThemeProvider theme={Theme}>
    //   <Provider store={store}>
        <Routes>
          <Route path="/" element={<Dashboard name="Dashboard" />} />
          <Route path="/Home" element={<Dashboard name="Dashboard" />} />
          <Route path="/Animals" element={<Album name="Enclosures" />} />
          <Route path="/Reports" element={<Album name="Enclosures" />} />
          <Route path="/Enclosures" element={<Album name="Enclosures" />} />
          <Route path="/Staff" element={<Album name="Enclosures" />} />
          <Route path="/Stands" element={<Album name="Enclosures" />} />
          <Route path="/DetailView/:enclosureId" element={<EnclosureDetailView name="Enclosure" />} />
        </Routes>
    //   </Provider>
    // </ThemeProvider>
  );
}

export default App;
