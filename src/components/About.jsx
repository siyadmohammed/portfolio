import React from "react";
import Portfoliodp from "../assets/porfoliodp.jpg";

const skills = [
  { name: "HTML & CSS", percentage: "10/12" },
  { name: "Flutter", percentage: "4/12" },
  { name: "Python Django", percentage: "11/12" },
  { name: "React js", percentage: "6/12" },
];

function SkillBars() {
  return (
    <div className="space-y-4">
      {skills.map((skill, index) => (
        <div key={index} className="flex items-center">
          <label
            htmlFor={skill.name.toLowerCase().replace(/\s+/g, "")}
            className="w-2/12"
          >
            {skill.name}
          </label>
          <div className="grow bg-gray-800 rounded-full h-2.5">
            <div
              className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105"
              style={{ width: `calc(${skill.percentage} * 100%)` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About ME</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={Portfoliodp}
            alt="Portfolio Display"
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              I am a passionate full-stack web developer with a focus on
              building modern and responsive web applications. With a strong
              foundation in both frontend and backend technologies, I strive to
              create seamless and efficient user experiences.
            </p>
            <SkillBars />
            <div className="mt-12 flex justify-between text-center">
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  1+
                </h3>
                <p>Years of Experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  25+
                </h3>
                <p>Projects Completed</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  10+
                </h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
