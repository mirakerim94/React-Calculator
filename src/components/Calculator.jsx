import { Flex, Box, Button, Input, Grid } from '@chakra-ui/react';
import {useState} from "react";
import { evaluate } from "mathjs";
import { useColorMode } from "@chakra-ui/react";

const Calculator = () => {

const {colorMode} = useColorMode();    

const [result, setResult] = useState("");

const NumberClick = (number) => {
    setResult(result + number)
};

const handleClearClick = () => {
  setResult("");
};

 const handleEqualClick = () => {
   try {
     const evaluatedResult = evaluate(result);
     setResult(evaluatedResult.toString());
   } catch (error) {
     setResult("Error");
   }
 };

 const squareClick = () => {
   setResult(prevResult => prevResult ** 2);
 };

 const handleDeleteClick = () => {
   try {
     setResult(result.slice(0, -1));
   } catch {
     setResult("Error");
   }
 };


    return (
      <Flex
        direction="column"
        alignItems="center"
        justify="center"
        h="100vh"
        p={5}
      >
        <Box
          p={5}
          borderWidth={2}
          borderRadius="xl"
          boxShadow="lg"
          border="3px solid black"
          bg={colorMode === "light" ? "white" : "gray.700"}
          mt="50px"
        >
          <Input
            placeholder="0"
            isReadOnly
            textAlign="right"
            fontSize="2x1"
            mb={5}
            border="2px solid black"
            value={result}
          ></Input>
          <Grid templateColumns="repeat(4 , 1fr)" gap={3}>
            <Button
              name="7"
              colorScheme={colorMode === "light" ? "blue" : "yellow"}
              onClick={() => NumberClick(7)}
            >
              7
            </Button>
            <Button
              name="8"
              colorScheme={colorMode === "light" ? "blue" : "yellow"}
              onClick={() => NumberClick(8)}
            >
              8
            </Button>
            <Button
              name="9"
              colorScheme={colorMode === "light" ? "blue" : "yellow"}
              onClick={() => NumberClick(9)}
            >
              9
            </Button>
            <Button
              name="+"
              colorScheme={colorMode === "light" ? "yellow" : "blue"}
              onClick={() => setResult(result + "+")}
            >
              +
            </Button>
            <Button
              name="4"
              colorScheme={colorMode === "light" ? "blue" : "yellow"}
              onClick={() => NumberClick(4)}
            >
              4
            </Button>
            <Button
              name="5"
              colorScheme={colorMode === "light" ? "blue" : "yellow"}
              onClick={() => NumberClick(5)}
            >
              5
            </Button>
            <Button
              name="6"
              colorScheme={colorMode === "light" ? "blue" : "yellow"}
              onClick={() => NumberClick(6)}
            >
              6
            </Button>
            <Button
              name="-"
              colorScheme={colorMode === "light" ? "yellow" : "blue"}
              onClick={() => setResult(result + "-")}
            >
              -
            </Button>
            <Button
              name="1"
              colorScheme={colorMode === "light" ? "blue" : "yellow"}
              onClick={() => NumberClick(1)}
            >
              1
            </Button>
            <Button
              name="2"
              colorScheme={colorMode === "light" ? "blue" : "yellow"}
              onClick={() => NumberClick(2)}
            >
              2
            </Button>
            <Button
              name="3"
              colorScheme={colorMode === "light" ? "blue" : "yellow"}
              onClick={() => NumberClick(3)}
            >
              3
            </Button>
            <Button
              name="*"
              colorScheme={colorMode === "light" ? "yellow" : "blue"}
              onClick={() => setResult(result + "*")}
            >
              *
            </Button>
            <Button
              name="("
              colorScheme={colorMode === "light" ? "yellow" : "blue"}
              onClick={() => setResult(result + "(")}
            >
              (
            </Button>
            <Button
              name="0"
              colorScheme={colorMode === "light" ? "blue" : "yellow"}
              onClick={() => NumberClick(0)}
            >
              0
            </Button>
            <Button
              name=")"
              colorScheme={colorMode === "light" ? "yellow" : "blue"}
              onClick={() => setResult(result + ")")}
            >
              )
            </Button>
            <Button
              name="x²"
              colorScheme={colorMode === "light" ? "yellow" : "blue"}
              onClick={squareClick}
            >
              x²
            </Button>
            <Button
              name="C"
              colorScheme={colorMode === "light" ? "yellow" : "blue"}
              onClick={() => handleClearClick()}
            >
              C
            </Button>
            <Button
              name="del"
              colorScheme={colorMode === "light" ? "yellow" : "blue"}
              onClick={() => handleDeleteClick()}
            >
              del
            </Button>
            <Button
              name="."
              colorScheme={colorMode === "light" ? "yellow" : "blue"}
              onClick={() => setResult(result + ".")}
            >
              .
            </Button>
            <Button
              name="/"
              colorScheme={colorMode === "light" ? "yellow" : "blue"}
              onClick={() => setResult(result + "/")}
            >
              /
            </Button>
          </Grid>
          <Button
            name="="
            mt={5}
            width="100%"
            colorScheme="green"
            onClick={() => handleEqualClick()}
          >
            =
          </Button>
        </Box>
      </Flex>
    );
}
export default Calculator;