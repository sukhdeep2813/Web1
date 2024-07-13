import { HStack, MenuItem ,MenuList, Menu, MenuButton, Button, Heading, Icon, Box} from '@chakra-ui/react'
import React from 'react'
import { FaBars, FaUserCircle } from "react-icons/fa";

const TopNav = ({title , onOpen}) => {
  return (
    <Box px={4} bg="white">
      <HStack 
      maxW={"75rem"}
      justify={"space-between"} 
      h={16} 
      px={16} 
      py={1}
      mx={"auto"}
      >
      <Icon  as={FaBars} cursor={"pointer"} onClick={onOpen}
      display={{
        base: "block",
        lg:"none"
      }}
      >
      
      </Icon>
       
        <Heading fontWeight="medium" fontSize={"28px"}>{title}</Heading>
          <Menu>
          <MenuButton>
              <Icon as={FaUserCircle} fontSize={24}></Icon>
          </MenuButton>
          <MenuList>
            <MenuItem>Log Out</MenuItem>
            <MenuItem>Support</MenuItem>
            
          </MenuList>
        </Menu>
        
      </HStack>

      </Box>
  )
}

export default TopNav