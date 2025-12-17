import type { Metadata } from "next";
import Resume from "./Resume";

export const metadata: Metadata = {
  title: "Resume | Gloria Mafor",
};

export default function ResumePage() {
  return <Resume />;
}

