import logo from './logo.svg';
import './default.scss'
import Header from './components/Header'
import HomePage from './pages/HomePage/index';
import Registration from './pages/Registration';

import{Route, Switch,Redirect} from "react-router-dom";
import Footer from './components/Footer/index';
import Login from './pages/Login/index';
import React,{Component} from 'react';
import {auth, handelUserProfile, handleUserProfile} from './firebase/utils';

 const initialState={
   currentUser:null
 }

class App extends Component {
  constructor(props){
      super(props);
      this.state={
        ...initialState
      };
    }

    authListner  = null;

    componentDidMount(){
      this.authListner = auth.onAuthStateChanged(async userAuth=>{
        if(userAuth){
          const userRef = await handleUserProfile(userAuth);
          userRef.onSnapshot(snapshot=>{
            this.setState({currentUser:{
              id:snapshot.id, ...snapshot.data()
            }})
          })
        }
        this.setState({...initialState})
      })
    }

    componentWillUnmount(){
      this.authListner();
    }

   render(){
     const { currentUser} = this.state;

  return (
    <div className="App">
      <Header currentUser= { currentUser }/>
      <div className="main">
       <Switch>

         <Route  exact  path="/" component={HomePage}/>
         <Route  path="/registration" component={Registration}/>

         {currentUser &&(
           <Redirect to="/"/>
         )}
         {!currentUser &&(
         <Route path="/login" component={Login}/>
         )}
       </Switch>
      </div>
       <Footer/>
    </div> 
  );
  }
}

  export default App;