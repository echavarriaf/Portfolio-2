import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Felix Echavarria | Software Engineer",
    short_name: "Felix Echavarria",

    description:
      "Software engineering portfolio focused on full-stack development, automation, and data.",

    start_url: "/",

    display: "standalone",

    background_color: "#050505",

    theme_color: "#050505",

    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}