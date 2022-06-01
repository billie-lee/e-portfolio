import React from "react";

const Reflection = () => {
  return (
    <>
      <div className="container mx-auto px-6 pt-4 flex-1 text-center">
        <div
          id="Reflection"
          className="text-lg md:text-2xl lg:text-3xl py-2 px4 md:py-4 md:px-10 lg:py-6 lg:px-12"
        ></div>
        <div className="text-lg md:text-2xl lg:text-3xl py-2 px4 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full">
          Critical Analysis
        </div>

        <div className="w-1/2 mx-auto bg-white bg-opacity-100 text-black p-4 text-justify">
          
          <div className="flex justify-center mt-8">
            <img
              className="object-left-top object-scale-down h-96 w-96 mx-2"
              src={require("../images/workplace_2.jpeg")}
            />
            <img
              className="object-right-top object-scale-down h-72 w-60 mx-2"
              src={require("../images/workplace.jpeg")}
            />
          </div>
          <div className="flex justify-center -mt-20">
            <img
              className="object-left-top object-scale-down h-72 w-60 mx-2"
              src={require("../images/workplace_4.jpeg")}
            />
            <img
              className="object-left-top object-scale-down h-96 w-96 mx-2"
              src={require("../images/workplace_3.jpeg")}
            />
          </div>
          <div className="text-center -mt-20 text-2xl">
            SecureStack's Workplace
          </div>
          <div className="justify-center mt-12">
            <p>
              When I was applying for a placement, I got 2 offers, from
              Goldcoast health and SecureStack. Choosing between these two (2)
              offers gave me a dilemma. I did list the pros and cons of these
              two placements. The Pros and Cons of these placements are listed
              below:
            </p>
            <br />
            <div className="w-1/2 mx-auto text-center">
              <div className="grid grid-cols-2 border">
                <div className="font-black col-span-2 border p-2">
                  GoldCoast Health
                </div>
                <div className="font-bold border">Pros</div>
                <div className="font-bold border">Cons</div>
                <div className=" border">Government</div>
                <div className=" border">No Team</div>
                <div className=" border">More Opportunites in the future</div>
                <div className=" border">
                  Will be working on a project by myself
                </div>
                <div className="font-black col-span-2 border p-2">
                  SecureStack
                </div>
                <div className="font-bold border">Pros</div>
                <div className="font-bold border">Cons</div>
                <div className=" border">IT Environment</div>
                <div className="row-span-3 border">Start-up</div>
                <div className=" border">Start-up</div>
                <div className=" border">Working with a team</div>
              </div>
            </div>
            <br />
            <p>
              I want to clarify why being a start-up company are both pros and
              cons side, in my opinion, being a start-up company means that it
              is still not stable enough to cater for interns and will make our
              experience worthless. But on the other note, being a start-up
              company, from experience, I know that we can learn many things
              that will help us in the future.
            </p>
            <br />
            <p>
              To further help with deciding, I also did a little research about
              each company, it was evident that GoldCoast health is a big
              company that is stable enough to help intern students, but will
              this opportunity help me learn the knowledge that I can use in the
              future. SecureStack is a start-up company and was named one of the
              top 20 start-ups to watch. (https://securestack.com/forbes-list/).
            </p>
            <br />
            <p>
              Also searching about these companies’ objectives for the placement
              and services helped me decide on which path to take. For GoldCoast
              Health, I needed to produce a system for their attendance process
              that will help them monitor their staff. For SecureStack, I was
              supposed to make success metrics for their application. To be
              honest, at first, I didn’t know what that will be or if that will
              help me or not for my future endeavours so I googled the services
              they are offering and to my surprise, they are developing a
              service that will help software engineers with their work. This
              impressed me as I had this idea back when I was still working back
              in my country that what if someone develops an algorithm that will
              help software engineers to make fewer mistakes with their work
              even before deploying their system to production. And that idea
              never left my mind that it will help many software engineers like
              me in the future. With that, it made me choose SecureStack.
            </p>
            <br />
            <p>
              I also asked someone from the university if I can volunteer for
              GoldCoast Health while I’m doing my placement with SecureStack.
              But I got a no for an answer and said that If I do that it will
              give less opportunity for other students to take this placement.
              During the first two (2) weeks of the placement, I got an offer
              for a paid job that is related to my wanted career. During this
              time, it comes to my mind that I should have taken the GoldCoast
              Health placement instead of SecureStack by doing that I thought it
              will give me more control to manage my time for both placement and
              work. But as time passed, I told myself that I made the right
              decision to choose SecureStack for my placement as now I am
              learning many things that will help me in my future as an ICT
              professional. One scenario that I can remember when one of my
              teammate was sick, I decided to continue his work temporarily so
              our project will progress. If I have chosen the other path, our
              project will not move forward and it might be caused of delay. It
              made me decide to do it as I have this attitude that I wanted
              things done as much as possible. Working in an ICT environment
              here in Australia is also one of my key requirements in choosing
              which placement path to take as having an experience with that
              kind of environment will help me prepare for the future when I
              start working after I finish my degree. And I know that working in
              a start-up company will give me that experience and it did not
              disappoint. I learned so much things that includes not only
              technical skills but also soft skills that will allow me to grow
              not only as a professional but also as a person.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reflection;
