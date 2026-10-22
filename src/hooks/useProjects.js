import { useQuery } from "@tanstack/react-query";

const fetchProjects = async () => {
  const response = await fetch("/projects.json");

  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }

  const data = await response.json();

  return data.projects;
};

export const useProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });
};