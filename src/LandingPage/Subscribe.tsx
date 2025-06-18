import { TextInput } from "@mantine/core";

const Subscribe = () => {
    return (
        <>
        <div className="mt-20">
               <div className="text-4xl text-center mb--3 font-semibold text-mine-shaft-100">
          Never wants to miss Any <span className="text-green-400">Job News?</span> 
        </div>
        <div>
              <TextInput
              className=""
      placeholder="your@gmail.com"
      label="Full name"
      variant="unstyled"
      withAsterisk
    />

        </div>
        </div>
        </>
    );
}

export default Subscribe;