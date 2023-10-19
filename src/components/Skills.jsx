import React from "react";
import { Popup } from 'semantic-ui-react'

const Skills = () => {
  const skills = [
    {
      pop: "React",
      logo: "logo-react",
      level: "Beginner",
      count: 40,
      delay: "300"
    },
    {
      pop: "CSS",
      logo: "logo-css3",
      level: "Competent ",
      count: 60,
      delay: "400"
    },
    {
      pop: "JavaScript",
      logo: "logo-javascript",
      level: "Proficient ",
      count: 80,
      delay: "500"
    },
    {
      pop: "Laravel",
      logo: "logo-laravel",
      level: "Expert",
      count: 90,
      delay: "600"
    },
  ];
  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold" data-aos="fade-in">
          My <span className="text-pink-600">Skills</span>
        </h3>
        {/* <p className="text-gray-400 mt-3 text-lg">My knowledge</p> */}
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {skills?.map((skill, i) => (
            <Popup
            key={skill.pop}
            header={skill.pop}
            trigger ={
              <div
                key={i}
                className="border-2 group border-pink-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
                data-aos="zoom-in" data-aos-delay={skill.delay}
              >
                <div
                  style={{
                    background: `conic-gradient(rgb(219, 39, 119) ${skill.count}%,#ddd ${skill.count}%)`,
                  }}
                  className="w-32 h-32 flex items-center justify-center rounded-full"
                >
                  <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-pink-600">
                    <ion-icon name={skill.logo}></ion-icon>
                  </div>
                </div>
                <p className="text-xl mt-3">{skill.level}</p>
              </div>
            }
           />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
