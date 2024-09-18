
import Offer from "@/components/pages/specialOffer/Offer";

export const metadata = {
  title: "Clooudgen | Our Campaigns",
  description: "Welcome to Clooud Gen, your trusted IT solutions partner offering comprehensive services including web development, software development, digital marketing, video editing, and more. Contact us today to bring your ideas to life!",
};
const page = () => {
    return (
        <div className="overflow-hidden">
          <Offer/>
        </div>
    );
};

export default page;