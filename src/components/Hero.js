import React from "react";
import heroDesktop from "../images/image-hero-desktop.png";
import heroMobile from "../images/image-hero-mobile.png";
import Clients from "./Clients";

const Hero = () => {
  return (
    <section className="hero">
      <article className="hero-img">
        <picture>
          <source srcSet={heroDesktop} media="(min-width: 600px)" />
          <img src={heroMobile} alt="A guy holding laptop" />
        </picture>
      </article>
      <article className="hero-desc">
        <h1>Make remote work</h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="btn-more">Learn more</button>
        <Clients />
      </article>
    </section>
  );
};

export default Hero;
