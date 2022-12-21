import logo from './logo.svg';
import './App.css';
import Meal from './Components/Meal';
import Style from './Components/Style.css';
import Recipe from './Components/Recipe';
import {Route,Routes} from 'react-router-dom';



function App() {
  return (
    <Routes>
      
      <Route  path="/" element={<Meal/>}/>
      <Route exact path="/:recipeId" element={<Recipe/>}/>
      </Routes>
  );
}

export default App;
