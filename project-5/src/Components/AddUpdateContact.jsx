import React from 'react'
import Model from './Model'
import {Field, Formik, Form} from "formik"
import {collection, addDoc, updateDoc} from "firebase/firestore"
import {db} from "../config/firebase.js"

const AddUpdateContact = ({isOpen, onClose, isUpdate, contact}) => {

  const AddContacts =async(contact) =>{
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      onClose();
    } catch (error) {
      console.log(error)
    }
  }


  const UpdateContact =async(contact, id) =>{
    try {
      const contactRef = collection(db, "contacts" , id);
      await updateDoc(contactRef, contact);
      onClose();
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
        <Model  isOpen={isOpen}  onClose ={onClose}>
           <div>
               <Formik 
                initialValues={isUpdate ?
                  {
                    name: contact.name,
                    email: contact.email,

                  }

                 :{
                    name: "",
                    email: "",
                  }}
                onSubmit={(values) =>{ 
                  console.log(values);
                  isUpdate ?  UpdateContact(values, contact.id):
                 
                  AddContacts(values);
                }}
               
               >
                 <Form className='p-2 flex flex-col gap-2'> 
                    <div className=' flex flex-col my-2'> 
                        <label  htmlFor='name' className='font-medium'>Name</label>
                        <Field name= "name" className="border-2 h-10 rounded-md p-1" ></Field>
                        
                    </div>
 
                    <div className=' flex flex-col'> 
                        <label  htmlFor='name' className='font-medium'>Email</label>
                        <Field  type= "email" name= "email" className="h-10 border-2 rounded-md p-1"></Field>
                        
                    </div>
                    <button className='bg-orange-500 border-2 rounded-md  px-3 py-1 self-end' type='submit' onClick={onClose}>{isUpdate ? "Update" : "Add "} Contact</button>
                 </Form>
               </Formik>

           </div> 
        </Model>   
    </div>
  )
}

export default AddUpdateContact