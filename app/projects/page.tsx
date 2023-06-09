"use client";
import React from "react";
import { ProjectFilters } from "./ProjectFilters";

const Projects = () => {
  return (
    <div>
      <title>Projects</title>
      <div className="w-full sm:mb-20">
        <ProjectFilters />
      </div>
    </div>
  );
};

export default Projects;
