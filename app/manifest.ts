import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Le Vinci - Restaurant français",
    short_name: "Le Vinci",
    description: "Restaurant français traditionnel à Sausheim.",
    start_url: "/",
    display: "standalone",
    background_color: "#fffdf9",
    theme_color: "#765137",
    icons: [
      { src: "/icon-192.svg", sizes: "192x192", type: "image/svg+xml" },
      { src: "/icon-512.svg", sizes: "512x512", type: "image/svg+xml" },
    ],
  };
}
