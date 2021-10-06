import WrapperWithSidebar from '../wrappers/WrapperWithSidebar';

const Login = () => {
  return (
    <WrapperWithSidebar>
      <form>
        <input type="text" name='login'/>
        <input type="password" name='password'/>
      </form>
    </WrapperWithSidebar>
  );
};

export default Login;
