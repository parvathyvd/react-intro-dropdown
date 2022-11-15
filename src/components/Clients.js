import React from "react";
import audioImg from "../images/client-audiophile.svg";
import dataBizImg from "../images/client-databiz.svg";
import makerImg from "../images/client-maker.svg";
import meetImg from "../images/client-meet.svg";

const Clients = () => {
  return (
    <section className="clients">
      <figure>
        <img src={dataBizImg} alt="databiz" />
      </figure>
      <figure>
        <img src={audioImg} alt="audioImg" />
      </figure>
      <figure>
        <img src={meetImg} alt="meetImg" />
      </figure>
      <figure>
        <img src={makerImg} alt="makerImg" />
      </figure>
    </section>
  );
};

export default Clients;
