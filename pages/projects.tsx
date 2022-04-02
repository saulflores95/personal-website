import type { NextPage } from "next";
import Head from "next/head";
import NavBar, { NavbarOptionsProps } from "../components/navBar";

const Projects: NextPage = () => {
  const options: NavbarOptionsProps[] = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "My Projects",
      url: "/projects",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ];

  //justify-center

  return (
    <div>
      <Head>
        <title>Saul Flores Portfolio Website</title>
      </Head>
      <div className="flex flex-col items-center w-screen h-screen bg-slate-200 p-6">
        <img className="rounded-full w-40 h-40 mb-6" src="/my-image.jpeg" />
        <NavBar options={options} />
        <div className="h-screen w-screen bg-red-300"></div>
      </div>
    </div>
  );
};

export default Projects;
