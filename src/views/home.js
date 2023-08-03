import React, { Fragment } from "react";
import { Hero, HomeContent } from "../components";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Auth } from "aws-amplify";

const Home = () => (
  <Fragment>
    <Hero />
  </Fragment>
);

export default Home;
