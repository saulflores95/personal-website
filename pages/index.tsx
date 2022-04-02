import type { NextPage } from "next";
import Head from "next/head";
import ContactForm from "../components/contactForm";
import NavBar, { NavbarOptionsProps } from "../components/navBar";
import ProjectGrid, { ProjectGridProject } from "../components/projectGrid";

const Home: NextPage = () => {
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

  const projects: ProjectGridProject[] = [
    {
      title: "My Project 1",
      url: "/projects/my-project-1",
      description: "This is my project 1",
      imageUrl:
        "https://pleasantvillechurchofchrist.com/wp-content/uploads/2021/04/beautiful-wallpaper-download-14.jpg",
    },
    {
      title: "My Project 2",
      url: "/projects/my-project-2",
      description: "This is my project 2",
      imageUrl:
        "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
    },
    {
      title: "My Project 3",
      url: "/projects/my-project-3",
      description: "This is my project 3",
      imageUrl:
        "https://www.forestryengland.uk/sites/default/files/styles/forest_slide_wide_desk/public/media/West%20Woods.JPG?h=6bf7871b&itok=PhRJv_p8",
    },
    // {
    //   title: "My Project 4",
    //   url: "/projects/my-project-4",
    //   imageUrl:
    //     "https://www.maketecheasier.com/assets/uploads/2018/07/Thumbnail-makers-for-youtube-featured.jpg",
    // },
    // {
    //   title: "My Project 5",
    //   url: "/projects/my-project-5",
    //   imageUrl:
    //     "https://www.maketecheasier.com/assets/uploads/2018/07/Thumbnail-makers-for-youtube-featured.jpg",
    // },
  ];
  return (
    <div>
      <Head>
        <title>Saul Flores Portfolio Website</title>
      </Head>
      <div className="flex flex-col items-center w-screen bg-slate-200 p-6 ">
        <img className="rounded-full w-40 h-40 mb-6" src="/my-image.jpeg" />
        <NavBar options={options} />
        <ProjectGrid projects={projects} />
        <ContactForm />
      </div>
    </div>
  );
};

export default Home;
