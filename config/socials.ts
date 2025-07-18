import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@zeynepbozkirr",
    icon: Icons.gitHub,
    link: "https://github.com/zeynepbozkirr",
  },
  {
    name: "LinkedIn",
    username: "Zeynep Bozkır",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/zeynep-bozk%C4%B1r-379674194/",
  },
  {
    name: "Gmail",
    username: "zeynep bozkır",
    icon: Icons.gmail,
    link: "mailto:bozkrzeynep@gmail.com",
  },
];
