import { useContext, useRef } from 'react';
import AuthContext from '../AuthContext';
import Wrapper from '../wrappers/Wrapper';
import TextInput from '../components/styled-components/TextInput';
import FormGroup from '../components/styled-components/FormGroup';
import RoundedBtn from '../components/styled-components/RoundedButton';
import { useHistory } from 'react-router';
import ROUTES from '../routes-pathes';

const Login = () => {
  const authContext = useContext(AuthContext);
  const usernameInput = useRef();
  const passwordInput = useRef();
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAMq_qn8vHqho6KmJAd-GF3H3d0JPhpPQQ', {
      method: 'POST',
      body: JSON.stringify({
        email: usernameInput.current.value,
        password: passwordInput.current.value,
        returnSecureToken: true,
      })
    }).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return response.json().then(error => {
          throw new Error(error.error.message);
        })
      }
    }).then(data => {
      authContext.login(data.idToken);
      history.replace(ROUTES.DASHBOARD);
    }).catch(error => {
      console.log(error);
    });
  };

  return (
    <Wrapper>
      <form onSubmit={submitHandler} className='login-form'>
        <FormGroup>
          <TextInput
            ref={usernameInput}
            name='username'
            placeholder='Email'
            type='email'  />
        </FormGroup>
        <FormGroup>
          <TextInput
            ref={passwordInput}
            name='password'
            placeholder="Password"
            type='password'/>
        </FormGroup>
        <FormGroup>
          <RoundedBtn>Login</RoundedBtn>
        </FormGroup>
      </form>
    </Wrapper>
  );
};

export default Login;
