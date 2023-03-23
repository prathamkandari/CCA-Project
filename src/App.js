import './App.css';
import SignIn from '../src/Components/auth/SignIn'
import SignUp from '../src/Components/auth/SignUp';
import AuthDetails from './AuthDetails';

function App() {
  return (
    <div className="App">
      <SignIn />
      <SignUp />
      <AuthDetails />
    </div>
  );
}

export default App;