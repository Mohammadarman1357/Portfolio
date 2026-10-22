import ProjectCard from "../projects/ProjectCard";
import { useProjects } from "../../hooks/useProjects";
import { useState } from "react";
import { ArrowUpRight, ChevronUp } from "lucide-react";



const ProjectsSection = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const {
    data: projects = [],
    isLoading,
    isError,
    error,
  } = useProjects();

  if (isLoading) {
    return (
      <section
        id="projects"
        className="min-h-screen px-5 py-20"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-zinc-400">
            Loading projects...
          </p>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section
        id="projects"
        className="min-h-screen px-5 py-20"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-red-400">
            {error.message}
          </p>
        </div>
      </section>
    );
  }

  // Reverse projects
  const reversedProjects = [...projects].reverse();

  // Initially show only 5 projects
  const displayedProjects = showAllProjects
    ? reversedProjects
    : reversedProjects.slice(0, 5);

  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        px-4
        py-10
        sm:px-6
        lg:px-8
        lg:py-16
      "
    >
      <div className="mx-auto max-w-[1500px]">

        {/* SECTION HEADER */}
        <div className="mb-10 md:mb-14 text-center flex flex-col">
          <span
            className="
              text-[20px]
              font-bold
              uppercase
              tracking-[0.3em]
              text-violet-600
            "
          >
            My Work
          </span>

          <span
            className="
              my-4
              text-4xl
              font-bold
              tracking-tight
              text-black
              md:text-5xl
            "
          >
            Featured Projects
          </span>

          <span
            className="
              text-zinc-700
              text-[14px]
              md:text-xl
            "
          >
            A collection of projects built throughout my
            web development journey.
          </span>
        </div>

        {/* PROJECT CARDS */}
        <div className="space-y-8 lg:space-y-12">
          {displayedProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* VIEW ALL PROJECTS BUTTON */}
        {projects.length > 5 && (
          <div className="mt-14 flex justify-center">
            <button
              onClick={() =>
                setShowAllProjects(!showAllProjects)
              }
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-violet-500/30
                bg-violet-500/5
                px-6
                py-3.5
                text-sm
                font-semibold
                text-violet-600
                transition-all
                duration-300
                hover:border-violet-800/60
                hover:bg-violet-700/10
                hover:shadow-[0_10px_40px_rgba(139,92,246,0.15)]
              "
            >
              {showAllProjects ? (
                <>
                  Show Less

                  <ChevronUp
                    size={17}
                    className="transition-transform group-hover:-translate-y-1"
                  />
                </>
              ) : (
                <>
                  View All Projects

                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
