
import ProjectTab from '@/components/pages/projectAlbum/ProjectTab';


export const metadata = {
    title: "Clooudgen | Project Album",
    description: "Welcome to Clooud Gen, your trusted IT solutions partner offering comprehensive services including web development, software development, digital marketing, video editing, and more. Contact us today to bring your ideas to life!",
  };
const ProjectPage = () => {

    return (
        <div className='overflow-hidden'>
            <ProjectTab />
        </div>
    );
};

export default ProjectPage;