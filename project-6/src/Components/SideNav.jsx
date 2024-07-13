import {Box, HStack, Heading, Stack} from "@chakra-ui/react"
import { RxDashboard } from "react-icons/rx";
import { GrTransaction } from "react-icons/gr";
import { Icon, Text } from "@chakra-ui/react";
import { MdOutlineSupportAgent } from "react-icons/md";


const SideNav = () => {
  const navLinks = [
    {
      icon: RxDashboard,
      text:"Dashboard",
      link:"/"
    },
    {
      icon: GrTransaction,
      text:"Transaction",
      link:"/Transaction"
    },

  ]
  return (
    <Stack 

     justify="space-between"
     textAlign={"center"}  
     w={{ 
     base: "full",
     lg:"16rem"
        }} 
     h={"100vh"} 
     bg="white">
    
     <Box >
     <Heading fontSize={"20"} as={"h1"} pt="3.5rem">Do Some Coding</Heading>
      

      <Box mt={6} mx={3}>
     </Box >
      {navLinks.map((nav) => (
         <HStack borderRadius={8} mx={6} key={nav.text} py={3} px={4} _hover={
         { bg:"#F3F3F7",
           color: "#171717"
           
         }
         }
         color={"#797E82"}>
           <Icon as = {nav.icon}></Icon>
           <Text fontWeight="medium" fontSize="14px">{nav.text}</Text>
         </HStack>
      ))}
      </Box>
      <Box mb={6} mt="6" mx="3"  >
     
         <HStack borderRadius={8}  py={3} px={9} _hover={
         { bg:"#F3F3F7",
           color: "#171717"
           
         }
         }
         color={"#797E82"}>
           <Icon as={MdOutlineSupportAgent}> </Icon>
           <Text fontWeight="medium" fontSize="14px">Support</Text>
         </HStack>
      
      </Box>
    </Stack>
  );
};


export default SideNav