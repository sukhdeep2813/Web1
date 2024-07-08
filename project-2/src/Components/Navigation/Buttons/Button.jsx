//import {MdMessage} from "react-icons/md"
import styles from "./Button.module.css"
const Button = ({is_Outline, text, icon}) => {
  
  return (
  

      <button className={is_Outline? styles.outline_btn : styles.primary_btn}>
       {icon}
       {text}
       {is_Outline}
     
      </button>
    
     
    
  )
}

export default Button;