import React from "react";

const AboutMe = () => {
  return (
    <>
      <div className="container mx-auto px-6 pt-4 flex-1 text-center">
        <div
          id="About_Me"
          className="text-lg md:text-2xl lg:text-3xl py-2 px-4 md:py-4 md:px-10 lg:py-6 lg:px-12 "
        ></div>
        <div className="text-lg md:text-2xl lg:text-3xl py-2 px4 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full">
          About Me
        </div>

        <div className="flex justify-between w-1/2 mx-auto bg-white bg-opacity-100 text-black p-4 text-justify">
          <div>
            <img
              className="object-left-top float-left object-scale-down h-36 w-36 p-2"
              src={require("../images/profile.jpg")}
            />
            <img
              className="object-top float-left object-scale-down h-24 w-24 p-2"
              src={require("../images/award.png")}
            />
            <p>
              My full name is Billie Anne Magno Lee, originally from the
              Philippines. I did my bachelor’s in information technology in my
              country at the college named STI College Marikina.
            </p>
            <br />
            <p>
              One of my achievements during my college days was being nominated
              as a developer of the year for my thesis. Making our project the
              thesis of the year. I also did some Math tutoring for high school
              students which helped me develop a skill that is now helpful in my
              career which is sharing knowledge that I know and creating study
              plans for my students.
            </p>
            <br />
            <p>
              Before coming here, I was a software engineer for three (3) years
              in a company name Pointwest Innovation Corporation focusing on
              JAVA as my main language. In this experience, I was assigned to
              three (3) different projects. My first project was a ticketing
              application for a government sector in my country. I joined this
              project while the project was ongoing meaning, adding some new
              features to the existing system. On my second project, it was for
              an e-commerce website based in the US. I was a “code checker” as
              they call it. I checked quality engineers’ code before they push
              it to the repository. My last project with the company was Loan
              Application for another government sector that manages all the
              loans from different banks.
            </p>
            <br />
            <p>
              I’m now finishing my Master of Information Technology majoring in
              Software Development and Support. I chose this major as I want to
              learn more about developing software. As one of my dreams is to
              become a software architect. Experiences from WIL placement helped
              me experience working in an IT environment in Australia.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
