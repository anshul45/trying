import { Box, Button, Flex, Text } from "@mantine/core";
import Selector from "./components/ui/Selector";
import Header from "./components/Header";
import Contents from "./components/Contents";


export default function Home() {
   
 return(
  <Box py={60} px={125}>
    <Header/>
    <Contents/>
  </Box>
 )
}
