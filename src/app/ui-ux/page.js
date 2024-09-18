import ExpertUiUx from '@/components/pages/uiDesign/ExpertUiUx';
import UiUxSolution from '@/components/pages/uiDesign/UiUxSolution';
import WhyUi from '@/components/pages/uiDesign/WhyUi';
import ExploreUiUx from '@/components/pages/uiDesign/ExploreUiUx';
import BestUiUx from '@/components/pages/uiDesign/BestUiUx';
import UiUxHero from '@/components/pages/uiDesign/UiUxHero';
import UiUxQuiries from '@/components/pages/uiDesign/UiUxQuiries';

export const metadata = {
    title: "Clooudgen | Ui/Ux",
    description: "Welcome to Clooud Gen, your trusted IT solutions partner offering comprehensive services including web development, software development, digital marketing, video editing, and more. Contact us today to bring your ideas to life!",
  };

const UiDesign = () => {
    return (
        <div className='pt-20 overflow-hidden lg:pt-36 md:mt-10'>
            <UiUxHero />
            <ExpertUiUx />
            <UiUxSolution />
            <WhyUi />
            <BestUiUx />
            <ExploreUiUx />
            <UiUxQuiries />
        </div>
    );
};

export default UiDesign;