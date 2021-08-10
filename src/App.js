import Home from './Pages/Home/Home';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateHome from './Pages/PrivateHome/PrivateHome';
import PrivateRoute from './Components/PrivateRoute';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <PrivateRoute exact path='/loggedHome' component={PrivateHome} />
        </Switch>
      </Router>
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;
