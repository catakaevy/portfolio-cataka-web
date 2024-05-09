"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS</li>
        <li>IaC (CloudFormation)</li>
        <li>CI/CD</li>
        <li>Python</li>
        <li>Java</li>
        <li>Bash</li>
        <li>Linux</li>
        <li>Docker</li>
        <li>Git</li>
        <li>PostgreSQL</li>
        <li>Networks</li>
        <li>HTML, CSS</li>
        <li>JavaScript</li>
      </ul>
    ),
  },
  {
    title: "Studying",
    id: "studying",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>Next.js</li>
        <li>TypeScript</li>
        <li>Node.js</li>
        <li>Terraform</li>
        <li>Kubernetes</li>
        <li>Supabase</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Chuo University (Bachelor of Law)</li>
        <li>University of Latvia (Bachelor of Computer Science Ongoing)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <Link href="https://www.credly.com/badges/ba3b0b4c-af15-417b-b235-e41c0f08d226/public_url">
            <span className="text-green-300 hover:text-slate-500 underline">
              AWS Certified Solutions Architect – Professional
            </span>
          </Link>
        </li>
        <li>
          <Link href="https://www.credly.com/badges/a2deb468-7d48-4c3e-8a7f-c13c74a1ab36/public_url">
            <span className="text-green-300 hover:text-slate-500 underline">
              AWS Certified Developer – Associate
            </span>
          </Link>
        </li>
        <li>
          <Link href="https://www.credly.com/badges/f23b8cc8-aa64-4155-a3d2-0e5fd6e17657/public_url">
            <span className="text-green-300 hover:text-slate-500 underline">
              AWS Certified Solutions Architect – Associate
            </span>
          </Link>
        </li>
        <li>
          <Link href="https://www.credly.com/badges/628dda20-2dcd-4e4b-a6dc-cab268d5ff9c/public_url">
            <span className="text-green-300 hover:text-slate-500 underline">
              AWS Certified Cloud Practitioner
            </span>
          </Link>
        </li>
        <li>
          <Link href="https://www.credly.com/badges/444e9b37-54a4-49d3-a362-a530581ea6ae/public_url">
            <span className="text-green-300 hover:text-slate-500 underline">
              AWS Partner: Accreditation (Technical)
            </span>
          </Link>
        </li>
        <li>
          <Link href="https://www.credly.com/badges/9f29c5f9-f532-414b-bc96-2946fc0a6f9e/public_url">
            <span className="text-green-300 hover:text-slate-500 underline">
              CCNA: Introduction to Networks
            </span>
          </Link>
        </li>
        <li>
          <Link href="https://lpi.org/verify/LPI000500066/3hlafd42fc">
            <span className="text-green-300 hover:text-slate-500 underline">
              LPIC-1
            </span>
          </Link>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-deskImage.png"
          width={500}
          height={500}
          alt="desktopImg"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            I am a bachelor student in computer science at University of Latvia.
            I have the 2 years+ practical experience with working with Python,
            AWS, Bash, Docker from the previous job in Japan. Also, I have
            independently and academically studied JavaScript, TypeScript,
            React, Next.js, HTML, CSS, C++. I am always looking to expand my
            knowledge and new skill set. I am a team player and I am excited to
            work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("studying")}
              active={tab === "studying"}
            >
              Studying
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
