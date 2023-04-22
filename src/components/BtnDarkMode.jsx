import { Button, useColorMode } from '@chakra-ui/react';
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

const BtnDarkMode=()=>{
    const {colorMode, toggleColorMode} = useColorMode();
    return (
      <Button onClick={toggleColorMode} bg='black' mt="10px">
        {colorMode === "light" ? <FaMoon color="yellow"/> : <FaSun color="orange"/>}
      </Button>
    );
}
export default BtnDarkMode;