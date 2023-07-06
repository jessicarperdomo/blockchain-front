import React from "react";
import logo from "../assets/enterprise-eth.webp";

const Hero = () => (
  <div className="text-center hero">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="400" />
    <h1 className="mb-4">Ethereum App</h1>
    <p className="lead">Conoce más de este universo iniciando sesión</p>
    <button type="button" className="btn btn-primary">
      Iniciar sesión
    </button>
  </div>
);

export default Hero;
