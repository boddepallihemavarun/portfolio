import thumbnailSkincare from "../../../assets/thumbnails/skincare.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Final Skin Care App",
  theme: "light",
  tags: ["react", "node", "mongodb", "express", "docker"],
  description:
    "Final Skin Care App ist eine Full-Stack-Skincare-Plattform, die Hauttyp und Hautprobleme einer Nutzerin oder eines Nutzers analysiert, um KI-gestützte, personalisierte Produktempfehlungen zu liefern.<br/><br/>Das React-Frontend greift auf Node.js/Express-REST-APIs zu, während MongoDB die dauerhaften Nutzerdaten und Sitzungen verwaltet. Die gesamte Anwendung ist mit Docker containerisiert, für eine konsistente und portable Deployment-Umgebung.",
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
          "KI-gestützte Produktempfehlungen basierend auf Hauttyp und Hautproblemen",
          "Responsives React-Frontend mit Node.js/Express-REST-APIs",
          "MongoDB-basierte, dauerhafte Nutzerdaten und Sitzungsverwaltung",
          "Mit Docker containerisiert für konsistentes, portables Deployment",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
