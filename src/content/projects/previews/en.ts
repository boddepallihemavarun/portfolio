import thumbnailSkincare from "../../../assets/thumbnails/skincare.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Final Skin Care App",
    slug: "skincare",
    thumbnail: thumbnailSkincare,
    description: "AI-powered skincare recommendations",
  },
] as const satisfies ProjectPreview[];
