import CareerHero from '@/components/pages/career/CarrerHero';
import Jobs from '@/components/pages/career/Jobs';
import NoJobs from '@/components/pages/career/NoJobs';


export const metadata = {
  title: "Clooudgen | Career",
  description: "Welcome to Clooud Gen, your trusted IT solutions partner offering comprehensive services including web development, software development, digital marketing, video editing, and more. Contact us today to bring your ideas to life!",
};
const Career = () => {
  return (
    <div>
      <CareerHero />
      <Jobs />
      {/* <NoJobs/> */}
    </div>
  );
};

export default Career;
