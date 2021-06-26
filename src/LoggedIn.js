import React from 'react';
import { useAuth } from 'oidc-react';
import { Link } from 'react-router-dom';

const LoggedIn = () => {
    const auth = useAuth();
    if (auth && auth.userData) {
        return (
            <div>
                <strong>Logged in!</strong><br />
                <Link to="/">Go Back</Link>
                {/* <button onClick={() => auth.signOut()}>Log out!</button> */}
            </div>
        );
    }
    return <div>Not logged in! Try to refresh.</div>;
};

export default LoggedIn;
