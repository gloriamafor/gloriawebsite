import type { Metadata } from "next";
import About from "./About";

export const metadata: Metadata = {
  title: "About | Gloria Mafor",
};

export default function AboutPage() {
  return <About />;
}

