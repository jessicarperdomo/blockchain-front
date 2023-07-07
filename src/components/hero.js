import React from "react";
import logo from "../assets/enterprise-eth.webp";

const Hero = () => (
  <div className="text-center hero">
    <div class="container">
      <div class="row">
        <div class="col-sm">
          {" "}
          <img
            className="mb-3 app-logo"
            src={logo}
            alt="React logo"
            width="400"
          />
        </div>
        <div class="col-sm m-auto">
          <h1 className="mb-2">Ethereum App</h1>
          <p className="lead mb-6 text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button type="button" className="btn btn-primary mt-4">
            Iniciar sesión
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
