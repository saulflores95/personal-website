import React, { FC } from "react";

export interface NavbarOptionsProps {
  title: string;
  url: string;
}

export interface NavbarProps {
  options: NavbarOptionsProps[];
}

const NavBar: FC<NavbarProps> = ({ options }) => {
  return (
    <div className="w-full h-20 text-center">
      {options.map((option, index) => {
        return (
          <a href={option.url} key={index}>
            <span className="text-white text-2xl hover:text-sky-700">{`${option.title}`}</span>{" "}
            <span className="text-white text-2xl">{`${
              options.length - 1 === index ? "" : " / "
            }`}</span>
          </a>
        );
      })}
    </div>
  );
};

export default NavBar;
