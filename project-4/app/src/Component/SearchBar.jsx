import styled from "styled-components"
import { BASE_URL, Button } from "../App";
const SearchBar = ({data}) => {
  return (
    <>
    <FoodCardContainer>
            <FoodCrads>
              {data?.map(({ price, image, text, name}) => (<FoodCrad key = {name}>
             <div className="food_image">
              <img src={BASE_URL + image} ></img>
             </div>
             <div className="food_info">
              <div className="Info">    
                <h3>{name}</h3>
                <p>{text}</p>
              </div>
              <Button style={{width:"40px", textAlign:"center",  }}>${price.toFixed(2)}</Button>  
             </div>
            </FoodCrad>))}
            </FoodCrads>
    </FoodCardContainer>  
    </>
  )
}

export default SearchBar;


const FoodCardContainer = styled.div`
background-image: url("images/bg.png");
height:calc(100vh - 186.55555px);
background-size:cover;
margin-top: 5px ;




`;

const FoodCrads = styled.div`
 
  top: 20px;
  position: relative;
  
  background-color: transparent;

`;

const FoodCrad = styled.div`
 

 width: 340px;
 height: 167px;
 left: 0px;
 right:0px;

 background: url(.png),
  radial-gradient(90.16% 143.01% at 15.32% 21.04%,
  rgba(165, 239, 255, 0.2) 0%,
   rgba(110,191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%);

background-blend-mode: overlay, normal;
backdrop-filter:blur(13.1842px);

border-radius:19.4467;

.food_Info{
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width:100%;
}
`;


