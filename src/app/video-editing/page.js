
import VideoHero from "@/components/pages/videoEditing/VideoHero";
import VideoService from "@/components/pages/videoEditing/VideoService";
import VideoSolution from "@/components/pages/videoEditing/VideoSolution";
import WhyVideo from "@/components/pages/videoEditing/WhyVideo";
import WebContact from "@/components/pages/webDevelopment/WebContact";

export const metadata = {
    title: "Clooudgen | Video Editing",
    description: "Welcome to Clooud Gen, your trusted IT solutions partner offering comprehensive services including web development, software development, digital marketing, video editing, and more. Contact us today to bring your ideas to life!",
  };


const VideoEditing = () => {
    return (
        <div className="overflow-hidden">
            <VideoHero />
            <VideoService />
            <VideoSolution />
            <WebContact/>
            <WhyVideo />
        </div>

    );
};

export default VideoEditing;