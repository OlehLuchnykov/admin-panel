import './App.css';
import Routes from './utils/Routes';
import { AuthProvider } from './AuthContext';

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
