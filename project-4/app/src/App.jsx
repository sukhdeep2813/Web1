import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchBar from './Component/SearchBar';
export const BASE_URL ="http://localhost:9000" ;


const App = () => {
  const[data, setdata] = useState(null);
  const[loading, setloading] = useState(false);
  const[error, seterror] = useState();
   

  

  useEffect(() => {

    const fetchFooddata = async() =>{
      setloading(true);
      
    try {
   
      const response = await fetch(BASE_URL);
      const json = await response.json(BASE_URL);
      setdata(json);
      setloading(false);
     
    }catch (error) {
      seterror("Unable to fetch the data")
    };
  
  } 
  fetchFooddata();
}, []);

console.log(data)
  

  
  if(error)return <div>{error}</div>
  if(loading)return <div>loading....</div>
  
  

  return <MainContainer>
       <TopSection>
        <div>
          <img src='images\Foody Zone@2x.png'></img>
        </div>
          <div className='search'>
             <input placeholder='Search Food'></input>
          </div>

 
       </TopSection>
      
        <FilterContainer>
            <Button style={{width: "36px", textAlign: "center"}}>All</Button>
            <Button style={{width: "70px", textAlign: "center"}} >Breakfast</Button>
            <Button style={{width: "50px", textAlign: "center"}}>Lunch</Button>
            <Button style={{width: "50px", textAlign: "center"}}>Dinner</Button>
        </FilterContainer>
          
         <SearchBar data = {data}/>
  </MainContainer>;
};

export default App;



const MainContainer =styled.div`
 max-width: 100%;
 margin: 0 ; 
`;

const TopSection  = styled.div`
display: flex;
justify-content:space-between;
max-width: 1440px;
margin: 25px;



input{
  background-color: transparent;
  height: 25px;
  border-radius:5px;
  border: none;
  border: 1px solid red;
  width: 100%;
  right: -20px;
  margin-top: 10px;
  position: relative; 
}
`;

export const Button = styled.div`
  background-color: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  color:#fff ;
  cursor: pointer;
  
  
`;

const FilterContainer = styled.div`

place-content: center;
display: flex;
margin-top: 60px;
gap: 14px;


`;


