'use client'
import { config } from "@/sanity.config";
import { NextStudio } from "next-sanity/studio";

function page() {
  return <NextStudio config={config} />;
}

export default page;