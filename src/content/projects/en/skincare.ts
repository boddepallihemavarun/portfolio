import thumbnailSkincare from "../../../assets/thumbnails/skincare.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Final Skin Care App",
  theme: "light",
  tags: ["react", "node", "mongodb", "express", "docker"],
  description:
    "Final Skin Care App is a full stack skincare platform that analyzes a user's skin type and concerns to deliver AI-driven, personalized product recommendations.<br/><br/>The React frontend is backed by Node.js/Express REST APIs, with MongoDB handling persistent user data and session management. The whole application is containerized with Docker for a consistent, portable deployment environment.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: thumbnailSkincare,
        alt: "Final Skin Care App",
        caption: "Final Skin Care App",
      },
    },
    {
      type: "list",
      props: {
        title: "Highlights",
        items: [
          "AI-driven product recommendations based on skin type and concerns",
          "Responsive React frontend with Node.js/Express REST APIs",
          "MongoDB-backed persistent user data and session management",
          "Containerized with Docker for consistent, portable deployment",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
