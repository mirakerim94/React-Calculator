import Calculator from "./components/Calculator";
import Navbar from "./components/Navbar";
import { ColorModeProvider } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <ColorModeProvider>
     <Navbar/>
     <Calculator />
     </ColorModeProvider>
    </div>
  );
}

export default App;
