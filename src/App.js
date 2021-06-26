import React from 'react';
import { AuthProvider } from 'oidc-react';
import logo from './logo.svg';
import './App.css';
import LoggedIn from './LoggedIn';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const oidcConfig = {
  onSignIn: async (user) => {
    console.log(user);
    window.location.hash = '';
  },
  // KEYCLOAK
  // authority: 'http://localhost:8080/auth/realms/demo',
  // clientId: 'demo-client',

  // OKTA
  authority: 'https://YourOktaDomain.com/oauth2/default',
  clientId: '0oa12c24jdDM283*****',
  responseType: 'code',
  redirectUri: "http://localhost:3000/login/callback"
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider {...oidcConfig}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>OIDC React</p>
            <Link to="/home">Go Home</Link>
            <Route path="/home" exact component={LoggedIn} />
            <Route path="/login/callback" />
          </header>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
