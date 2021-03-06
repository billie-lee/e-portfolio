import React from "react";

const Skills = () => {
  return (
    <>
      <div className="container mx-auto px-6 pt-4 flex-1 text-center">
        <div
          id="Skills"
          className="text-lg md:text-2xl lg:text-3xl py-2 px4 md:py-4 md:px-10 lg:py-6 lg:px-12"
        ></div>
        <div className="text-lg md:text-2xl lg:text-3xl py-2 px4 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full">
          Evidence of Capability
        </div>

        <div className="justify-between w-1/2 mx-auto bg-white bg-opacity-100 text-black p-4 text-justify">
          <div className="flex justify-center mt-8">
            <img
              className="object-left-top object-scale-down h-72 w-72 mx-2"
              src={require("../images/skill_artifact.jpeg")}
            />
            <img
              className="object-right-top object-scale-down h-72 w-72 mx-2"
              src={require("../images/disscussion_2.jpeg")}
            />
          </div>
          <div className="justify-center -mt-10">
            <span className="underline">
              Learning new technical knowledge by reading documentation or
              article.
            </span>
            &nbsp;For this placement, I was assigned to a task that I don’t have
            previous experience with. Namely, logging all user’s actions in
            their web application, creating a user onboarding (a tour guide
            feature) that will help users to use the existing application with
            ease, and creating a simple web application using the ReactJS
            language. Those are a few of the tasks that were assigned to me.
            Teamwork is an important skills but as well as self-learning. I make
            sure to try and learn things by myself before asking questions. To
            be able to achieve those tasks, I decided to read some documentation
            and articles that will help me develop them. It did not end up easy
            as I thought it would be. I needed to watch some online video
            tutorials and asked for help from my superior but In the end, I
            decided to improve my skills of learning from reading as this will
            be a good and important skill that is not only helpful for this
            placement but also for my future accomplishments. As discussed, the
            results for this skill did not give me the expected result there are
            some inaccuracies that I have experienced. Reading an old article
            will give a misleading solution to a problem that I’m trying to
            solve. Reading an old article for solutions will sometimes not work
            with the latest release as needed or it will misinform you on
            solving it in another way in which the new released there’s already
            a new way which is an easier and more proficient way to do it.
            Things I have learned while developing this skill is that always
            check for the release date of the article you are reading, this way
            you will know if the solutions you read are still appropriate for
            the problem you are trying to solve. Also, reading the official
            documentation of the technology you are trying to learn is always
            the best way to start than googling ways for your scenario problem.
            By doing that, it will give you more options on how you can solve
            your problem and from their documentation, you can come up with your
            own solution. Reading articles will also be helpful when you know
            the basic needs that you want which you will be able to get from the
            official documentation.
          </div>
        </div>

        <div className="justify-between w-1/2 mx-auto bg-white bg-opacity-100 text-black p-4 pt-12 text-justify">
          <div className="flex justify-center">
            <img
              className="object-left-top object-scale-down h-96 w-96 mx-2"
              src={require("../images/disscussion.jpeg")}
            />
          </div>
          <div className="flex justify-center -mt-10">
            <img
              className="object-left-top object-scale-down h-72 w-72 mx-2"
              src={require("../images/team_work_2.png")}
            />
            <img
              className="object-right-top object-scale-down h-72 w-72 mx-2"
              src={require("../images/team_work.png")}
            />
          </div>
          <div className="justify-center -mt-10">
            <span className="underline">
              Teamwork and learning their part of the task.
            </span>
            &nbsp;When we started the internship project, they assigned us to
            different tasks to complete the whole project. I was assigned in the
            front-end part, but this doesn’t mean that I will just work with my
            part regardless of other’s interns’ tasks. As much as possible I
            tried to align my work with others’ tasks. In that way, it will make
            it easier for everyone to complete our project goal. As much as
            possible, we tried to have a stand-up meeting to discuss things we
            have done and we will do on that day. I tried to discuss with each
            intern their tasks that will affect the output of my own task. As a
            basic knowledge, the front-end will be responsible for displaying
            the results, looks and feel of the project in that sense, all the
            items that will be displayed on the front-end will be coming from
            different parts of the project. Knowing how the logic of the program
            works, I will be prepared to display everything on the front-end
            side. In my free time, I tried to read their codes to understand how
            they achieved their tasks. In that way, I would also learn all the
            parts that complete our project objectives. As a team, I think this
            skill is important whenever some issues come up. Making sure I
            contribute with some tasks that will make our project easier to
            develop will also help anyone to lessen the mistakes that can
            happen. Another incident that I think this kind of skill is
            effective was when one of our teammates got sick and we needed to do
            his part to move forward with our tasks, learning his tasks
            beforehand will help us solve the problem and we can all move
            forward in finishing our project. Teamwork is an important skill for
            an ICT profession as this will make our work more properly. Coming
            from someone who has experience working in ICT industry, this skill
            is important because working with a large company, you will most
            likely be assigned to a project working with a team and
            communication with your team will reduce faults that can cause
            delays in the project.
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
