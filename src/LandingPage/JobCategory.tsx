import { Carousel } from "@mantine/carousel";
import { jobCategory } from "../asset/Data/Data";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";

const JobCategory = () => {
  return (
    <>
      <div className="mt-20 pb-5">
        <div className="text-4xl text-center mb--3 font-semibold text-mine-shaft-100">
          Browse <span className="text-green-400">Job</span> Category
        </div>
        <div className="text-lg mx-auto mb-10 text-mine-shaft-300 text-center w-1/2">
          Explore diverse job opportunities tailored to your skills. Start your
          career journey today!
        </div>
        <Carousel
          slideSize="18%"
          slideGap="md"
          withLoop
          className="focus-visible:[&_button]:outline-none [&_button]:!bg-green-600 [&_button]:!border-none [&_button]:hover:opacity-75 [&_button]:opacity-0 [&_button]:text-mine-shaft-50  hover:[&_button]:opacity-100"
          nextControlIcon={<IconArrowRight className="h-8 w-8" />}
          previousControlIcon={<IconArrowLeft className="h-8 w-8" />}
        >
          {jobCategory.map((category, index) => (
            <Carousel.Slide key={index}>
              <div className="flex flex-col items-center w-64 gap-2 border border-green-200 p-5 rounded-xl hover:shadow-[0_0_5px_2px_black] my-5 transition duration-300 ease-out !shadow-green-300">
                <div className="p-2 bg-green-400 rounded-full">
                  <img
                    className="h-8 w-8"
                    src={`/Category/${category.name}.png`}
                    alt={category.name}
                  />
                </div>
                <div className="text-mine-shaft-100 text-xl font-semibold">
                  {category.name}
                </div>
                <div className="text-sm text-center text-mine-shaft-300">
                  {category.desc}
                </div>
                <div className="text-green-400 text-lg">
                  {category.jobs}+ new job posted
                </div>
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default JobCategory;
