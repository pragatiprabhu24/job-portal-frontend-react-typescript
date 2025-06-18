import logo from "../asset/images/logo.png";
import { IconBell, IconSettings } from "@tabler/icons-react";
import { IconCheckbox } from "@tabler/icons-react";
import { Avatar, Indicator } from "@mantine/core";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <>
      <div className="w-full bg-mine-shaft-950 px-6 h-20 text-white flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <IconCheckbox className="h-10 w-10 text-green-500" stroke={1.25} />
          <div className="text-3xl font-semibold">ProHirely</div>
        </div>
        <NavLinks />
        <div className="flex gap-5 items-center">
          <div className="flex items-center gap-2">
            <div>Pragati</div>
            <Avatar
              src="https://m.media-amazon.com/images/I/81qUxvoes+L.png"
              alt="it's me"
            />
          </div>
          <div className="bg-mine-shaft-900 p-1.5 rounded-full">
            <IconSettings stroke={1.5} />
          </div>
          <div className="bg-mine-shaft-900 p-1.5 rounded-full">
            <Indicator color="green.4" offset={6} size={8} processing>
              <IconBell stroke={1.5} />
            </Indicator>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
