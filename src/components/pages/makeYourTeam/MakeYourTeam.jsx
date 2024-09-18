import MakeYourTeamForms from './MakeYourTeamForms';

const MakeYourTeam = () => {
  return (
    <main className="container py-8 mt-10">
      <div className="mt-10 md:mt-20 lg:mb-6">
        <div className="w-full my-5 border rounded-lg shadow-sm ">
          <div className="flex flex-col space-y-1.5 sm:text-center lg:p-6 p-2">
            <h2 className=" text-tertiary">
              Make your custom team with Clooud Gen
            </h2>
            <p className="mx-auto md:w-1/2">
              Each team will have a Project Manager. The Project Manager will
              provide you with the necessary instructions and will coordinate
              with you to understand the work, ensuring its completion through
              the team.
            </p>
          </div>

          <MakeYourTeamForms />
        </div>
      </div>
    </main>
  );
};

export default MakeYourTeam;
