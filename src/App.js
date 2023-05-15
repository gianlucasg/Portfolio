import ParticlesBackground from './components/layout/background/particles';
import NavBar from './components/layout/navbar/navbar'
import Home from './pages/home'
import Hireme from './pages/hireme'
import Projects from './pages/projects'
import AboutMe from './components/layout/aboutme/aboutme'
import { BrowserRouter ,Route,Routes} from "react-router-dom";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './App.css';

function App() {
  return (
      <BrowserRouter>
          <Container>
          <NavBar/>
          <div class='container-flex'>
            <Box class='card-left'>
              <Routes>
                <Route index path="portfolio/" element={<Home/>} />
                <Route index path="portfolio/projects" element={<Projects/>} />
                <Route index path="portfolio/hireme" element={<Hireme/>} />
              </Routes>
            </Box>
            <Box class='card-right'>
              <AboutMe/>
            </Box>
          </div>
        </Container>
          <ParticlesBackground/>
      </BrowserRouter>
  );
}

export default App;
