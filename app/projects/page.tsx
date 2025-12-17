import type { Metadata } from "next";
import Projects from "./Projects";

export const metadata: Metadata = {
  title: "Projects | Gloria Mafor",
};

export default function ProjectsPage() {
  return <Projects />;
}

