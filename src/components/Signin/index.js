 import Button from '../forms/Button';
import './styles.scss';
import signInWithGoogle  from './../../firebase/utils';
import signInWithFacebook from './../../firebase/utils';
import {Component} from 'react';
 class Signin extends Component{
   handelSubmit = async e =>{
     e.preventDefault();
   }

   render() { 
  return(
        <div className="signin">
             <div className="wrap">
                <h2>Signin</h2>

                <div className="formWrap">

                  <form  onSubmit={this.handelSubmit}>
                    <div className="socialSignin">
                       <div className="row">
                         <Button  onClick={signInWithGoogle}>
                             Login with Google 
                         </Button>
                       </div>
                       <Button onClick={signInWithFacebook}>
                             Login with Facebook  
                         </Button>
                       </div>
                  </form>
                </div>
             </div>
        </div>
    )
}
}

export default Signin;