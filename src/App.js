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

  return (
    <ThemeProvider theme={Theme}>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="/" element={<Album />} /> */}
      </Routes>
    </Provider>
    </ThemeProvider>
  );
}

export default App;
