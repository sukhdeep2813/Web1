import { Box, Container, Flex, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import SideNav from './SideNav'
import TopNav from './TopNav'
import SideDrawer from './SideDrawer'

const DashboardLayout = ({title, children}) => {
  const {isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>     
    <Flex >
       <Box   
       
       display={{

          base:"none",
          lg: "flex",
    }}>

         <SideNav Onpen={onOpen}/>
       </Box>
      
        <SideDrawer isOpen={isOpen} onClose={onClose}></SideDrawer>
      

        <Box boxShadow=" xl" flexGrow={"1"}>
        <TopNav onOpen={onOpen}  title={title}></TopNav>
         <Container  px={16}  maxW={"75rem"}  >{children}</Container>
        
        </Box>
      
    </Flex>

    </div>
  )
}

export default DashboardLayout