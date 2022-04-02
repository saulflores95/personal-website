import React, { FC } from "react";

export interface ProjectGridProject {
  title: string;
  url: string;
  imageUrl: string;
  description?: string;
}

export interface ProjectGridProps {
  projects: ProjectGridProject[];
}
// align-middle
const GridProject = ({
  title,
  url,
  imageUrl,
  description,
}: ProjectGridProject) => {
  return (
    <div className="relative w-full md:w-1/3 h-48 hover:shadow-md">
      <img className="w-full h-full z-10 filter" src={imageUrl} />
      <div className="top-0 absolute w-full h-full flex flex-col text-center justify-center text-white font-normal text-2xl shadow-lg">
        <h1>{title}</h1>
        <h3>{description}</h3>
      </div>
    </div>
  );
};

const ProjectGrid: FC<ProjectGridProps> = ({ projects }) => {
  return (
    <div className="flex-col md:flex-wrap md:flex md:flex-row w-full ">
      {projects.map((project, index) => {
        return <GridProject key={index} {...project} />;
      })}
    </div>
  );
};

export default ProjectGrid;
