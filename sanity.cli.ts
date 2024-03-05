import {createClient} from 'next-sanity'
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
	dataset: process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET!,
	apiVersion: '2024-02-20',
	useCdn: false,
})

const builder = imageUrlBuilder(client);
export const urlFor = (source: any) => builder.image(source);

export default client;