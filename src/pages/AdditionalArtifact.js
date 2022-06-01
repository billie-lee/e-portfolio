import React from "react";

const AdditionalArtifact = () => {
  return (
    <>
      <div className="container mx-auto px-6 pt-4 pb-4 flex-1 text-center">
        <div
          id="Additional_Artifact"
          className="text-lg md:text-2xl lg:text-3xl py-2 px4 md:py-4 md:px-10 lg:py-6 lg:px-12"
        ></div>
        <div className="text-lg md:text-2xl lg:text-3xl py-2 px4 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full">
          Additional Artifact
        </div>

        <div className="justify-between w-1/2 mx-auto bg-white bg-opacity-100 text-black p-4 text-justify">
          <span className="underline">
            Active Learning, Complex Problem Solving, Communication, Decision
            Making and Understanding how the system works.
          </span>
          &nbsp;Learning a programming language that I have never used before,
          code changes that will affect the whole system from working as
          expected. These are the two (2) few things that I have experienced
          from my placement. For me, learning a new language was never hard (as
          a subjective opinion) as much as you know the basics of coding,
          learning will be easier. As an ICT professional, I believe that
          memorizing a whole language will not help you with your career. It is
          how you understand how it works that will help you grow your career.
          Technology matures every day; new technologies are continuing to
          evolve as time passes. I have heard from some friends that applying
          for a job, specifically here in Australia, they will not ask how well
          you know a certain programming language. What they usually ask is how
          well can you learn technology each time that will contribute to their
          project or company. Also being mindful of our code changes is
          certainly one of the critical skills that we need in working in the
          industry. Making sure that your code changes won’t affect everyone is
          important in developing with a team. I realized this when one incident
          in our placement happened, we tried to figure out why the application
          is not working. I needed to check our repository for changes that were
          just committed before it happens then discovered that one single
          change (change of variable name) caused the problem. Being mindful
          about your changes and testing before applying the changes is always a
          good practice for this kind of job.
        </div>
      </div>
    </>
  );
};

export default AdditionalArtifact;
