import React from "react";
import { FaHome } from "react-icons/fa";

const Example = () => {
  const socials = [
    "Youtube",
    "Facebook",
    "Instagram",
    "Twitter",
    "LinkedIn",
    "TikTok",
    "Snapchat",
    "Pinterest",
    "Reddit",
    "Tumblr",
  ];
  const Social = { title: "YouTube", icon: <FaHome /> };

  return (
    <div>
      {socials.map((value, i) => (
        <p key={i} className="text-red-400">
          {value} {i}
        </p>
      ))}
    </div>
  );
};

export default Example;
