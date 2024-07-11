import { useState } from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { RiEditCircleLine } from "react-icons/ri";
import {IoMdTrash} from "react-icons/io"
import { doc, deleteDoc } from "firebase/firestore";
import {collection} from "firebase/firestore"
import {db} from "../config/firebase"
import UseDisclouse from '../hooks/UseDisclouse.jsx';
import AddUpdateContact from "./AddUpdateContact.jsx";


const ContactCard = ({contact }) => {
  const{isOpen, onClose ,  onOpen} = UseDisclouse(true)
  
     const deleteContacts =async (id)=>{
        try {
          const contactRef = collection(db, "contacts");
          await deleteDoc(doc(db, "contacts", id))

        } catch (error) { 
          console.log(error)
        }
     }




  return (
    <>
    <div
       key = {contact.id}
       className='bg-yellow rounded-lg flex my-2 items-center justify-between
       '>
        
      <div className='flex gap-2'>
        <HiOutlineUserCircle className='text-orange-400 text-4xl'/>
          <div className="">
            <h2 className='font-medium '>{contact.name}</h2>
            <p className='text-sm'>{contact.email}</p>
            
          </div>
      </div>

      <div className='flex text-3xl'>
            <RiEditCircleLine className='text-4xl cursor-pointer' onClick={onOpen}/>
            <IoMdTrash className='text-4xl mx-4 text-orange-400 cursor-pointer' onClick={()=>deleteContacts(contact.id)}/>

      </div>

        </div>
      <AddUpdateContact conatct = {contact} isUpdate isOpen={isOpen} onClose={onClose}  />
        </>
  )
}

export default ContactCard