import React from 'react'
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    
    DrawerBody,
  } from '@chakra-ui/react'
import SideNav from './SideNav'

const SideDrawer = ({isOpen, onClose,}) => {
  return (
    <div>
   
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody><SideNav/></DrawerBody>
        </DrawerContent>
      </Drawer>
  
  
    </div>
  )
}

export default SideDrawer