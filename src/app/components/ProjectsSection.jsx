"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Virtual Private Network in AWS",
    description: "Create VPN connection in your AWS account!",
    skill_sets: [
      "AWS / CloudFormation (IaC)",
      "Network",
      "Remote Desktop",
      "Makefile",
      "Bash",
    ],
    image: "/images/projects/1_vpn_project.png",
    tag: ["All", "DevOps"],
    gitUrl: "https://github.com/catakaevy/vpn-connection",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Japanese restaurant Homepage",
    description: "The Onigiri restaurant webpage",
    skill_sets: ["javascript", "CSS", "HTML"],
    image: "/images/projects/2_onigiri_restaurant_homepage.png",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/catakaevy/pub_lectures/tree/main/1_webtech_final_page",
    previewUrl:
      "https://catakaevy.github.io/pub_lectures/1_webtech_final_page/",
  },
  {
    id: 3,
    title: "Typing Game",
    description: "Typing game with sounds",
    skill_sets: ["javascript", "CSS", "HTML"],
    image: "/images/projects/3_typing_game.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/catakaevy/js-typing-game",
    previewUrl: "https://js-typing-game-three.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="DevOps"
          isSelected={tag === "DevOps"}
        />
      </div>
      <div className="grid md: grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            skill_sets={project.skill_sets}
            imgUrl={project.image}
            tags={project}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
};
export default ProjectsSection;
