export const social = [
  { url: "mailto:boddepallihemavarun@gmail.com", name: "mail" },
  { url: "https://github.com/boddepallihemavarun", name: "github" },
  { url: "https://www.linkedin.com/in/boddepalli-hema-varun-50b048373/", name: "linkedin" },
  //{ url: "https://www.instagram.com/davidhckh/", name: "instagram" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
