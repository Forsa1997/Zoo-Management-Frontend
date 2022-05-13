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

function App() {
  const cards = [{name: "test"}, {name: "test"}, {name: "test"}, {name: "test"}, {name: "test"}, {name: "test"}, {name: "test"}];

  return (
    <ThemeProvider theme={Theme}>
    <Provider store={store}>
      <Routes>
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path="/" element={<Album name="Enclosures" cards={cards}/>} />
        <Route path="/enclosures" element={<Album name="EnclosuresRouter" cards={cards}/>} />
      </Routes>
    </Provider>
    </ThemeProvider>
  );
}

export default App;
