import './styles/App.css';
import NameTitle from './components/NameTitle';
import { ThemeProvider} from '@mui/material';
import theme from './theme';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Background from './pages/Background';
import Footer from './components/Footer';
import useFadeInEffect from './hooks/useFadeInEffect';
import { useIsSmScreen } from './hooks/useScreenSize';

const Header: React.FC = () => {
  const isVisible = useFadeInEffect();
  return (
    <div className={isVisible ? 'fade-in' : 'fade-out'}>
      <NameTitle name='Khan Howe'/>
      <NavBar/>
    </div>
  );
}

const AppBody: React.FC = () => {
  const location = useLocation();
  const isHomeRoute = location.pathname === '/';
  return (
      <div className='app-body'>
        {!isHomeRoute && <Header/>}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/background' element={<Background/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
      </div>

  );
}

const AppBodyMobile: React.FC = () => {
  return (
    <div className='app-body'>
      <Home/>
      <About/>
      <Background/>
      <Projects/>
    </div>
  );
}


function App() {
  const isSmScreen = useIsSmScreen();
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className='view-paper'>
          <Router>
            {isSmScreen ? <AppBodyMobile/> : <AppBody/>}
          </Router>
        </div>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
