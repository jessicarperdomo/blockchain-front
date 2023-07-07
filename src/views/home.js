import React, { Fragment } from "react";
import { Hero, HomeContent } from "../components";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const Home = () => (
  <Fragment>
    <Hero />
    <Authenticator>
            {({ signOut, user }) => (
                <div>
                    <p>Welcome {user.username}</p>
                    <button onClick={signOut}>Sign out</button>
                </div>
            )}
        </Authenticator>
  </Fragment>
);

export default Home;
