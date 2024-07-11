import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import { CiSearch } from "react-icons/ci";
import { FaCirclePlus } from "react-icons/fa6";
import {db} from "./config/firebase.js"
import {collection , getDocs} from "firebase/firestore"
import ContactCard from './Components/ContactCard.jsx';
import AddUpdateContact from './Components/AddUpdateContact.jsx';
import UseDisclouse from './hooks/UseDisclouse.jsx';


 const App = () => {

 const[contacts, setcontacts] = useState()
 const {isOpen, onClose ,  onOpen} = UseDisclouse(true)

 useEffect(() =>{
      const getContacts  =  async() =>{
       
       
        try {

        const contactsRef = collection(db, "contacts");
        const contactSnapshot = await getDocs(contactsRef);
        const contactsLists = contactSnapshot.docs.map((doc) => 
        {
          return{
            id: doc.id,
            ...doc.data(),
          };
        });
        setcontacts(contactsLists)

        } catch (error) {
          console.log(error)
        }

      };
      getContacts();
    }, []);

  return (
    <div>
        <div className='max-w-[370px] mx-auto'>
          <Navbar/>
            <div className='flex gap-2'>
              <div className='relative flex items-center text-white flex-grow'>
              <CiSearch className='text-2xl al ml-2 absolute'/>
                <input type = "text"  className='border bg-transparent rounded-lg h-[35px] flex-grow pl-8'></input>
                
              </div>
  
                <FaCirclePlus 
                className='text-4xl text-white cursor-pointer'
                onClick={onOpen}
                />
              
              </div>
              <div className=''>
                {contacts?.map((contact)=>(
                <ContactCard key={contact.id} contact={contact}/>
                ))}
             </div>
           
        </div>
        <AddUpdateContact  isOpen={isOpen} onClose={onClose}/>
    </div>
  )
 
}

export default App