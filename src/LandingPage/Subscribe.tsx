import { Button, TextInput } from "@mantine/core";

const Subscribe = () => {
  return (
    <>
      <div className="mt-20 flex items-center bg-mine-shaft-900 mx-20 py-3 rounded-xl justify-around">
        <div className="text-4xl w-3/5 text-center font-semibold text-mine-shaft-100">
          Never wants to miss Any{" "}
          <span className="text-green-400">Job News?</span>
        </div>
        <div className="flex gap-4 bg-mine-shaft-800 px-3 py-2 items-center rounded-xl">
          <TextInput
            className="[&_input]:text-mine-shaft-100 font-semibold"
            placeholder="your@gmail.com"
          
            variant="unstyled"
            size="xl"
          
          />
          <Button className="!rounded-lg" size="lg" color="green.7">Subscribe</Button>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
