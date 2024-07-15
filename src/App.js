import logo from './logo.svg';
import './App.css';
import { Box, Container, Typography } from '@mui/material';
import MainCompo from './components/mainCompo';
function App() {
  return (
    <div>
      <header>
        <Box sx={{minHeight : '3.5em', backgroundColor : 'black', display:'flex', justifyContent :'center', alignItems : 'center'}}>
          <Typography letterSpacing={'2px'} fontFamily={'cursive'} fontSize={'24px'} fontWeight={700} color={'salmon'}>Fatflixxx</Typography>
        </Box>
      </header>
      <main>
        <MainCompo />
      </main>
    </div>
  );
}

export default App;
