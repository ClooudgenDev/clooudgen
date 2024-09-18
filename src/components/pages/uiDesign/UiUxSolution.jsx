import FadeUp from '@/components/shared/animation/FadeUp';
import { UiUxSolutionData } from '@/lib/data/Ui/Ux/SolutionData';
import SolutionCard from './SolutionCard';

const UiUxSolution = () => {
  return (
    <div className="container mx-auto my-10 lg:mt-32">
      <h1 className="text-center md:my-3 heading-2 ">
        Comprehensive UI/UX Solutions
      </h1>
      <p className="lg:max-w-[900px] mx-auto description-1 text-center">
        At Clooud Gen, we provide comprehensive UI/UX design solutions to
        enhance digital experiences and drive business growth. Explore our key
        services below
      </p>
      <div className="grid grid-cols-1 gap-5 mx-auto my-10 md:my-20 lg:grid-cols-2 xl:grid-cols-4 md:grid-cols-2 justify-items-center">
        {UiUxSolutionData?.map((data, index) => (
          <FadeUp key={index}>
            <SolutionCard data={data}></SolutionCard>
          </FadeUp>
        ))}
      </div>
    </div>
  );
};

export default UiUxSolution;
