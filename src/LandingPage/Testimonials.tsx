import { Avatar, Rating } from "@mantine/core";
import { testimonials } from "../asset/Data/Data";

const Testimonials = () => {
  return (
    <>
      <div className="mt-20 pb-5">
        <div className="text-4xl text-center mb--3 font-semibold text-mine-shaft-100">
          What <span className="text-green-400">User</span> says about us?
        </div>
        <div className="flex justify-evenly">
          {testimonials.map((data, index) => (
            <div className="flex flex-col gap-3 w-[23%] border border-green-400 p-4 rounded-xl mt-10">
              <div className="flex gap-2 items-center ">
                <Avatar
                  className="!h-14 !w-14"
                  src="https://cdn.myanimelist.net/r/200x268/images/characters/4/484261.jpg?s=8b9d58390b1cfc28d2772f29dcba4e64"
                  alt="its me"
                />
                <div>
                  <div className="text-lg text-mine-shaft-100 font-semibold">
                    {data.name}
                  </div>
                  <div>
                    {" "}
                    <Rating value={data.rating} fractions={2} readOnly />
                  </div>
                </div>
              </div>
              <div className="text-xs text-mine-shaft-300">
                {data.testimonial}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
