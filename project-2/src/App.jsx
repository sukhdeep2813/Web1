import "./App.css"
//import Button from "./Components/Navigation/Buttons/Button";
import ContactHeader from "./Components/Navigation/Contact/ContactHeader";
import Contact from "./Components/Navigation/ContactForm/Contact";
import Navigation from './Components/Navigation/Navigation'

const App = () => {
  return (  <div>

    <Navigation></Navigation>
    <ContactHeader></ContactHeader>
    <Contact></Contact>


    
  </div>
    
  )
}

export default App