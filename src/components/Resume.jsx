import React from "react";
import { content } from "../data";
const Resume = () => {
  const { resume } = content;
  return (
    <section className="pb-20" id="resume">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {resume.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {resume.subtitle}
          </h4>
          <br />
        </div>
        <div className="grid md:grid-cols-2 gap-5 ">
          <div
            data-aos="fade-up"
            data-aos-delay="1200"
          >
            <img src={resume.image} />
          </div>
          <div className="grid sm:grid-cols-2 w-full gap-6">
            {resume.resume_content.map((resume, index) => (
              <div 
                data-aos="fade-up"
                data-aos-delay={index * 400}
              >
                <h4 className="text-blue-600 text-xl md:text-2xl">{resume.title}</h4>
                {resume.list.map((li) => (
                  <li className="pl-">{li}</li>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
