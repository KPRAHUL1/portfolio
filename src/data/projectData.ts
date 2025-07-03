export interface Project {
    id: number;
    name: string;
    technologies: string;
    image: string;
  }
  import {  lumia0 } from "../assets/projects/project";
  export const projects: Project[] = [
    {
      id: 1,
      name: "Lumia E-commerce Website",
      technologies: "Full Stack Development",
      image: lumia0
    },
    
  ];
  