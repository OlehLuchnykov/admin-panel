import styled from 'styled-components';

const CenteredWrapper = styled.main`
  background: rgb(0,126,255);
  background: linear-gradient(90deg, rgba(0,126,255,1) 0%, rgba(170,43,142,1) 100%);
  min-height: 100vh;
  
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }
`;
const Wrapper = ({children}) => {
  return (
    <CenteredWrapper>
      <div className="container">
        {children}
      </div>
    </CenteredWrapper>
  );
};

export default Wrapper;
