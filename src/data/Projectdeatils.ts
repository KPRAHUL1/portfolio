export interface Project {
  id: number;
  name: string;
  description: string;
  frontendTechnologies: { name: string; icon: string }[];
  backendTechnologies: { name: string; icon: string }[];
  images: string[];
  github: string;
  liveDemo: string;
}

  import { lumia, lumia1, lumia3, lumia2, lumia4 } from "../assets/projects/project";
  import { 
    express, git, github as githubIcon, javascript, node, npm, postgressql, postman, 
    prisma, react, redux, tailwind, vite 
  } from "../assets/techicons/techIcon";
  
  export const projects: Project[] = [
    {
      id: 1,
      name: "Lumia E-Commerce Website",
      description: "A full-stack e-commerce website with authentication, payment integration, and a user-friendly interface.",
      frontendTechnologies: [
        { name: "React", icon: react },
        { name: "Redux", icon: redux },
        { name: "Tailwind CSS", icon: tailwind },
        { name: "Vite", icon: vite },
        { name: "JavaScript", icon: javascript },
        { name: "NPM", icon: npm },
      ],
      backendTechnologies: [
        { name: "Node.js", icon: node },
        { name: "Express.js", icon: express },
        { name: "PostgreSQL", icon: postgressql },
        { name: "Prisma", icon: prisma },
        { name: "Postman", icon: postman },
        { name: "Git", icon: git },
        { name: "GitHub", icon: githubIcon },
      ],
      images: [lumia, lumia1, lumia3, lumia2, lumia4],
      github: "https://github.com/yourgithub/ecommerce-project",
      liveDemo: "https://yourwebsite.com",
    },
    
  ];
  
  