import logo from './logo.svg';
import './default.scss'
import Header from './components/Header'
import HomePage from './pages/HomePage/index';
import Registration from './pages/Registration';
import Footer from './components/Footer/index';

import{Route, Switch} from "react-router-dom";
  

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main">
       <Switch> 
         <Route  exact  path="/" component={HomePage}/>
         <Route  path="/registration" component={Registration}/>
       </Switch>
      </div>
       <Footer/>
    </div> 
  );
  }
  export default App;