import Wrapper from '../wrappers/Wrapper';
import TextInput from '../components/styled-components/TextInput';
import FormGroup from '../components/styled-components/FormGroup';
import RoundedBtn from '../components/styled-components/RoundedButton';

const Login = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <form onSubmit={submitHandler} className='login-form'>
        <FormGroup>
          <TextInput name='login' placeholder='Email' type='email'  />
        </FormGroup>
        <FormGroup>
          <TextInput name='password' placeholder="Password" type='password'/>
        </FormGroup>
        <FormGroup>
          <RoundedBtn>Login</RoundedBtn>
        </FormGroup>
      </form>
    </Wrapper>
  );
};

export default Login;
