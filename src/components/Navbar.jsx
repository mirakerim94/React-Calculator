import { Flex, Box, Heading, useColorMode } from "@chakra-ui/react";
import BtnDarkMode from "./BtnDarkMode";

const Navbar = () => {
    const {colorMode} = useColorMode();
    return (
      <Flex
        direction="row"
        alignItems="center"
        justify="center"
      >
        <Box>
          <Heading
            color={colorMode === "light" ? "darkblue" : "white"}
            letterSpacing={9}
            mt="10px"
          >
            Calculator
          </Heading>
        </Box>
        <Box>
          <BtnDarkMode />
        </Box>
        
      </Flex>
    );
};
export default Navbar;
