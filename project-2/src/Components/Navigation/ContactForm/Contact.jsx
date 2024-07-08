//import Button from "../Buttons/Button"
import Button from "../Buttons/Button"
import styles from "./ContactForm.module.css"
import {MdMessage} from "react-icons/md"
import {FaPhoneAlt} from "react-icons/fa"
import {HiMail} from "react-icons/hi"

const Contact = () => {
  return (
    <section className={`${styles.container}`}>
           <div className={styles.contact_form}>
                    <div className={styles.top_btn}>
                    <Button text = "VIA SUPPORT CHAT" icon = {<MdMessage style={{marginRight:"10px", fontSize:"20px", alignItems:"center"}}/>} ></Button>
                    <Button text = "VIA CALL" icon = {<FaPhoneAlt style={{marginRight:"10px", fontSize:"20px", alignItems:"center"}}/>} ></Button>
                    </div>
                    <Button is_Outline={true} text = "VIA EMAIL FORM" icon = {<HiMail style={{marginRight:"10px", fontSize:"20px", alignItems:"center"}} />} ></Button>
                         
            </div> 

            <form>

             
              <div className={styles.form_control}>
              <label className={styles.label} htmlFor="name">Name</label>
              <input  className = {styles.name} type="text" name="name"></input>
              
            </div>

            <div className={styles.form_control}>
              <label className={styles.label} htmlFor="name">Email</label>
              <input  className = {styles.name} type="text" name="name"></input>
              </div>
              

              <div className={styles.form_control_area}>
               <label className={styles.label_Text} htmlFor ="Text">Text</label>
                <textarea className={styles.TextBox} id="name" name="Text" ></textarea>

                 <div className={styles.submit}> 
                <Button  text = "SUBMIT" ></Button>
                </div>
              </div>
              
            </form> 
              

           <div className={`${styles.contact_image}`}>

           
           
          </div>


    </section>
          ) 
}

export default Contact