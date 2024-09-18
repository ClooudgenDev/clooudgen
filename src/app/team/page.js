import Embark from "@/components/pages/team/Embark";
import OurTeam from "@/components/pages/team/OurTeam";
import TeamHero from "@/components/pages/team/TeamHero";

export const metadata = {
    title: "Clooudgen | Team",
    description: "Welcome to Clooud Gen, your trusted IT solutions partner offering comprehensive services including web development, software development, digital marketing, video editing, and more. Contact us today to bring your ideas to life!",
  };
const Team = () => {
    return (
        <div>
           <TeamHero/>
           <OurTeam/>
           <Embark/>
        </div>
    );
};

export default Team;