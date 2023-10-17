import React from "react";
import hero from "../assets/images/hero.png";
const Hero = () => {
  const social_media = [
    {
      logo : "logo-instagram",
      link : "https://www.instagram.com/mnuzrili/"
    },
    {
      logo : "logo-facebook",
      link : "https://www.facebook.com/mnuzrili"
    },
    {
      logo : "logo-linkedin",
      link : "https://www.linkedin.com/in/muhammad-nuzril-isro-66567a263/"
    },
    {
      logo : "logo-github",
      link : "https://github.com/mnuzrili"
    },
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="w-2/4 h-1/4 object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-pink-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Nuzril</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Fullstack Developer, Banking IT
          </h4>
          <a href="#contact">
            <button  className="btn btn-primary mt-8">Contact Me</button>
          </a>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((x) => (
              <div
                key={x.logo}
                className="text-gray-600 hover:text-white cursor-pointer"
              >
                <a href={x.link} target="_blank">
                  <ion-icon name={x.logo}></ion-icon>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
