import React from "react";

const ExtraArtifact = () => {
  return (
    <>
      <div className="container mx-auto px-6 pt-4 pb-4 flex-1 text-center">
        <div
          id="Extra_Artifact"
          className="text-lg md:text-2xl lg:text-3xl py-2 px4 md:py-4 md:px-10 lg:py-6 lg:px-12"
        ></div>
        <div className="text-lg md:text-2xl lg:text-3xl py-2 px4 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full">
          Extra-Curricular Artifact
        </div>

        <div className="w-1/2 mx-auto bg-white bg-opacity-100 text-black p-4 text-justify">
          <img
            className="object-left-top float-left p-2"
            src={require("../images/extra_artifact.jpeg")}
          />
          <p>
            Working in a team with members that have different cultures. As a
            non-local in a multicultural country, I think it’s normal to work
            with people that came from around the world. When I started working
            with this team, I needed to be aware, if not everything, just a
            little about their culture. As all this is new to me, it is a must
            to make sure that my actions are somehow appropriate for everyone.
            This was not an easy thing to do as there are many things to
            consider. But by doing this, may not completely avoid the conflict
            but it will lessen it. It is also a good way of showing respect to
            my teammates. From my own beliefs, giving respect is important no
            matter who the person is. Applying this thinking helped me to work
            with my team more effectively and produce our work properly. Having
            this experience made me realise lots of things such as not
            everything that is okay with me is okay with everyone. It made me
            more conscious of my surroundings and also allow me to learn about
            different cultures which I think will be helpful in my career
            especially working with different people.
          </p>
        </div>
      </div>
    </>
  );
};

export default ExtraArtifact;
