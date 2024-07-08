import styles from "./Navigation.module.css"
const Navigation = () => {

  console.log(styles);
  return (
       <nav className={`${styles.nav} container` } >
        <div>
            <img src="images\Frame 2 1 (1).png" ></img>
        </div>
        <ul>
            <li href ="#">HOME</li>
            <li href ="#">ABOUT</li>
            <li href = "#">CONTACT</li>
        </ul>

       </nav>
  )
}


export default Navigation;