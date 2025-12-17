import type { Metadata } from "next";
import Contact from "./Contact";

export const metadata: Metadata = {
  title: "Contact | Gloria Mafor",
};

export default function ContactPage() {
  return <Contact />;
}

