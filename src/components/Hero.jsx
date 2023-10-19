import React, { useEffect } from "react";
import hero from "../assets/images/heronew3.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Popup } from 'semantic-ui-react'

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  const social_media = [
    {
      pop: "instagram",
      logo: "logo-instagram",
      link: "https://www.instagram.com/mnuzrili/",
      delay : "1000"
    },
    {
      pop: "facebook",
      logo: "logo-facebook",
      link: "https://www.facebook.com/mnuzrili",
      delay : "1100"
    },
    {
      pop: "linkedin",
      logo: "logo-linkedin",
      link: "https://www.linkedin.com/in/muhammad-nuzril-isro-66567a263/",
      delay : "1200"
    },
    {
      pop: "github",
      logo: "logo-github",
      link: "https://github.com/mnuzrili",
      delay : "1300"
    },
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full" data-aos="fade-in">
        <img src={hero} alt="" className="w-3/5 h-1/4 object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-pink-600 md:text-6xl text-5xl" data-aos="fade-in" data-aos-delay="300">
              Hello!
              <br />
            </span>
            <div data-aos="fade-in" data-aos-delay="500">
              I'm <span>Nuzril</span>
            </div>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600" data-aos="fade-in" data-aos-delay="700">
            Fullstack Developer, Banking IT
          </h4>
          <a href="#contact">
            <button className="btn btn-primary mt-8" data-aos="zoom-in" data-aos-delay="900">Contact Me</button>
          </a>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((x) => (
              <div
                key={x.logo}
                className="text-gray-600 hover:text-white cursor-pointer" data-aos="zoom-in" data-aos-delay={x.delay}
              >
                <Popup
                 key={x.pop}
                 header={x.pop}
                 trigger ={
                    <a href={x.link} target="_blank">
                    <ion-icon name={x.logo}></ion-icon>
                    </a>
                    }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
