import MakeYourTeam from "@/components/pages/makeYourTeam/MakeYourTeam";

export const metadata = {
    title: "Clooudgen | Make Your Team",
    description: "Welcome to Clooud Gen, your trusted IT solutions partner offering comprehensive services including web development, software development, digital marketing, video editing, and more. Contact us today to bring your ideas to life!",
  };
const page = () => {
    return (
        <div className='overflow-hidden'>
            <MakeYourTeam />
        </div>
    );
};

export default page;