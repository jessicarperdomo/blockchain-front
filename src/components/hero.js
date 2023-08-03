import React, { useEffect, useState } from "react";
import logo from "../assets/enterprise-eth.webp";
import { Amplify, Auth, Hub } from "aws-amplify";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";
import awsConfig from "../aws-exports";
Amplify.configure({ Auth: awsConfig });

const Hero = () => {
  const [user, setUser] = useState(null);
  const [customState, setCustomState] = useState(null);
  Hub.listen("auth", (data) => {
    console.log(data.payload.event);
    if (data.payload.event === "signIn_failure") {
      // Do something here
    }
  });

  return (
    <div className="text-center hero">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            {" "}
            <img
              className="mb-3 app-logo"
              src={logo}
              alt="React logo"
              width="400"
            />
          </div>
          <div className="col-sm m-auto">
            <h1 className="mb-2">Ethereum App</h1>
            <p className="lead mb-6 text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            {/* <button
              type="button"
              className="btn btn-primary mt-4"
              onClick={() => Auth.signOut()}
            >
              Sign Out
            </button> */}

            <button
              type="button"
              className="btn btn-primary m-4"
              onClick={() => Auth.federatedSignIn()}
            >
              Iniciar sesión con Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
