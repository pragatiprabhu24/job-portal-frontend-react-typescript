import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
  IconCheckbox,
} from "@tabler/icons-react";
import { footerLinks } from "../asset/Data/Data";

const Footer = () => {
  return (
    <>
      <div className="pt-20 pb-5 flex gap-5 justify-around bg-mine-shaft-950 font-['poppins']">
        <div className="w-1/4 flex flex-col gap-4">
          <div className="flex gap-3 items-center">
            <IconCheckbox className="h-7 w-7 text-green-500" stroke={1.25} />
            <div className="text-xl font-semibold text-mine-shaft-100">
              ProHirely
            </div>
          </div>
          <div className="text-sm text-mine-shaft-300">
            Job portal with user profiles, skill updates, certifications, work
            experience and admin job postings.
          </div>
          <div className="flex gap-3 text-green-400 [&>div]:bg-mine-shaft-900 [&>div]:p-2 [&>div]:rounded-full [&>div]:cursor-pointer hover:[&>div]:bg-mine-shaft-500">
            <div>
              <IconBrandFacebook stroke={2} />
            </div>
            <div>
              <IconBrandInstagram stroke={2} />
            </div>
            <div>
              <IconBrandX />
            </div>
          </div>
        </div>
        {footerLinks.map((item, index) => (
          <div key={index}>
            <div className="text-lg font-semibold mb-4 text-green-400">
              {item.title}
            </div>
            {item.links.map((links, index) => (
              <div
                key={index}
                className="text-mine-shaft-200 text-sm hover:text-green-500 cursor-pointer mb-2 hover:translate-x-2 transition duration-300 ease-in-out"
              >
                {links}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Footer;
