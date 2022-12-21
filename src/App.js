import logo from './logo.svg';
import './App.css';
import Meal from './Components/Meal';
import Style from './Components/Style.css';
import Recipe from './Components/Recipe';
import {Route,Routes} from 'react-router-dom';
import Login from './Components/login_component';
import SignUp from './Components/signup_component';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <Routes>
      <Route  path="/" element={<Login/>}/>
      <Route  path="/signup" element={<SignUp/>}/>
      <Route  path="/meal" element={<Meal/>}/>
      <Route exact path="/:recipeId" element={<Recipe/>}/>
      </Routes>
  );
}

export default App;
