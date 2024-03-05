import { defineConfig } from "sanity";
import { schemaType } from "./schemas";
import { structureTool } from 'sanity/structure';
import {visionTool} from '@sanity/vision'

export const config = defineConfig({
  name: "portfolio",
  title: "Portfolio Website with Sanity",
  basePath: "/studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET!,
  apiVersion: '2024-02-20',
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaType },
});

