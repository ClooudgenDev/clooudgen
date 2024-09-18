import QualityData from '@/lib/data/home/Quality';

const RemoteTeam = () => {
  return (
    <>
      <div className="container py-10 my-20 rounded-lg lg:mt-32">
        <h2 className="text-center heading-2">
          Remote IT team from Bangladesh
        </h2>
        <p className="text-center description-1">
          At Clooud Gen, we bring you the best of Bangladesh&apos;s highly
          skilled IT professionals. Our remote IT team is dedicated to
          delivering top-notch technology solutions that meet your business
          needs.{' '}
        </p>
        <div className="container grid flex-wrap justify-between grid-cols-1 gap-10 pt-10 justify-items-center xl:grid-cols-3 md:grid-cols-2 ">
            {QualityData.map((item, idx) => (
              <div
                key={idx}
                className="flex rounded-lg flex-col bg-white   max-w-[430px] gap-3 shadow-lg p-7"
              >
                <div className="flex items-center gap-4">
                  <item.icon className="text-2xl font-semibold sm:text-3xl" />
                  <p className="text-xl font-semibold sm:text-2xl">
                    {item.title}
                  </p>
                </div>
                <p className="text-sm text-gray-500 sm:text-base">
                  {item.description}
                </p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default RemoteTeam;
