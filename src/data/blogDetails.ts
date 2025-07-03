import { git1, git2, meetup1, meetup2, meetup21, redux1, redux2, redux3, redux4, startup, startup1, startup2,  video2 } from "../assets/blogimages/blog";
import { git } from "../assets/techicons/techIcon";

export interface BlogDetails {
    id: number;
    title: string;
    name: string;
    video: string;
    images: string[];
    content: string[];
    date:string
  }
  
  export const blogDetails: BlogDetails[] = [
    {
      id: 1,
      title: "Startup TN - Fund Generation & Pitch Deck",
      name: "Startup TN Program",
      video: "/videos/startup-tn-pitch.mp4",
      date: "2025-02-15",
      images: [
        startup2,
        startup1,
        startup
        
      ],
      content: [
        "I recently participated in the Startup TN program, which focused on fund generation and creating pitch decks for startups.",
        "During the event, experts shared insights on how to craft an effective pitch, attract investors, and secure funding for new ventures.",
        "It was a great opportunity to network with like-minded entrepreneurs and gain valuable knowledge about the startup ecosystem."
      ]
    },
    {
      id: 2,
      title: "Redux Session at My Office",
      name: "Redux Workshop",
      video: video2,
      date: "2025-02-15",
      images: [ 
        redux4,
        redux1,
        redux2,
        redux3
      ],
      content: [
        "I recently conducted a Redux session at my office, where we covered Redux fundamentals, middleware, and advanced patterns.",
        "We explored state management best practices using Redux Toolkit and discussed how to optimize performance in large applications.",
        "The session concluded with a Q&A, where developers shared their real-world challenges and got practical solutions."
      ]
    },
    {
      id: 3,
      title: "Exploring Git & GitHub",
      name: "Git & GitHub Workshop",
      video: "/videos/git-github-exploration.mp4",
      date: "2025-02-15",
      images: [
        git1,
        git,
        git2,
       
      ],
      content: [
        "I have been exploring Git and GitHub deeply, understanding branching strategies, pull requests, and collaborative development workflows.",
        "During this learning process, I have gained practical knowledge on rebasing, resolving merge conflicts, and using Git hooks for automation.",
        "GitHub's features like Actions, Projects, and Security Analysis are incredibly useful for maintaining quality code and ensuring smooth collaboration."
      ]
    },
    {
      id: 4,
      title: "Attending JSMavens Meetup",
      name: "JSMavens Community",
      video: "/videos/jsmavens-meetup.mp4",
      date: "2025-02-15",
      images: [
        meetup1,
        meetup2,
        meetup21
      ],
      content: [
        "I recently attended the JSMavens meetup, where developers gathered to discuss the latest trends in JavaScript and front-end technologies.",
        "The event featured expert talks on React, TypeScript, and performance optimization techniques for modern web applications.",
        "It was an insightful experience, allowing me to connect with fellow developers and exchange ideas on emerging tech stacks."
      ]
    }
  ];
  