import BannerImage from "../asset/images/banner.png";
import { TextInput, Avatar } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const DreamJob = () => {
  return (
    <>
      <div className="flex items-center px-16 mt-20">
        <div className="flex flex-col w-[45%]">
          <div className="text-6xl font-bold leading-tight text-green-300 [&>span]:text-white">
            Your next <span>big career</span> move starts <span>with us.</span>
          </div>
          <div className="text-lg text-mine-shaft-100">
            Build a better life by starting with the right job. Discover
            thousands of opportunities in one place.
          </div>
          <div className="flex gap-3 mt-5">
            <TextInput
              className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:text-mine-shaft-100"
              placeholder="Software engineer"
              label="Job title"
              variant="unstyled"
            />
            <TextInput
              className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:text-mine-shaft-100"
              placeholder="Full -time"
              label="Job type"
              variant="unstyled"
            />
            <div className="flex items-center justify-center h-full w-20 bg-green-500 text-mine-shaft-100 rounded-lg p-2 hover:bg-green-600 cursor-pointer">
              <IconSearch className="h-[85%] w-[85%]" stroke={2} />
            </div>
          </div>
        </div>
        <div className="w-[55%] flex items-center justify-center">
          <div className="w-[30rem] relative">
            <img src={BannerImage} alt="banner-image" />
            <div className="absolute -right-10 w-fit top-[20%] border-green-400 border rounded-lg p-2 backdrop-blur-md">
              <div className="text-center text-mine-shaft-100 mb-1 text-sm">
                10k+ got job
              </div>
              <Avatar.Group spacing="sm">
                <Avatar
                  src="https://i.pinimg.com/736x/6e/77/86/6e77862832abd63419ef15a8b7d5f2eb.jpg"
                  radius="xl"
                />
                <Avatar
                  src="https://i.pinimg.com/736x/ba/54/8c/ba548c605b10559a0e2f3c69931820e7.jpg"
                  radius="xl"
                />
                <Avatar
                  src="https://images.stockcake.com/public/0/1/f/01f559ee-ae6e-4507-9e27-b26145997fd2_medium/ethereal-anime-beauty-stockcake.jpg"
                  radius="xl"
                />
                <Avatar radius="xl">+9k</Avatar>
              </Avatar.Group>
            </div>
            <div className="absolute -left-40 w-fit top-[60%] border-green-400 border rounded-lg p-2 backdrop-blur-md flex flex-col gap-2">
              <div className="flex gap-3 items-center ">
                <div className="w-12 h-12 p-1 bg-mine-shaft-900 rounded-lg">
                  <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="google"/>
                </div>
                <div className="text-sm text-mine-shaft-100">
                  <div>Software engineer</div>
                  <div className="text-mine-shaft-200 text-xs">New york</div>
                </div>
              </div>
              <div className="flex gap-2 justify-around text-mine-shaft-200 text-xs">
                <span>1 day ago</span>
                <span>120 Applicants</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DreamJob;
