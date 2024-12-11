import { Box, Button, Flex, Text } from "@mantine/core";
import HomeHeader from "./components/HomeHeader";
import Contents from "./components/Contents";


export default function Home() {
   
 return(
  <Box py={60} px={125}>
    <HomeHeader/>
    <Contents/>
  </Box>
 )
}
