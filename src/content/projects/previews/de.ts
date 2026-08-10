import thumbnailSkincare from "../../../assets/thumbnails/skincare.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Final Skin Care App",
    slug: "skincare",
    thumbnail: thumbnailSkincare,
    description: "KI-gestützte Hautpflege-Empfehlungen",
  },
] as const satisfies ProjectPreview[];
