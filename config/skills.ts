import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsortedEn: skillsInterface[] = [
  {
    name: "React Native",
    description:
      "Develop cross-platform mobile apps using React for consistent and engaging experiences.",
    rating: 4,
    icon: Icons.react,
  },
  {
    name: "Next.js",
    description:
      "Effortlessly build dynamic apps with routing, layouts, loading UI, and API routes.",
    rating: 5,
    icon: Icons.nextjs,
  },
  {
    name: "React",
    description:
      "Craft interactive user interfaces using components, state, props, and virtual DOM.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "Typescript",
    description:
      "Enhance JavaScript with static types, making code more understandable and reliable.",
    rating: 5,
    icon: Icons.typescript,
  },
  {
    name: "Javascript",
    description:
      "Create interactive and dynamic web experiences with the versatile scripting language.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "HTML 5",
    description:
      "Structure web content beautifully with the latest version of HyperText Markup Language.",
    rating: 4,
    icon: Icons.html5,
  },
  {
    name: "CSS 3",
    description:
      "Style web pages creatively with the latest iteration of Cascading Style Sheets.",
    rating: 4,
    icon: Icons.css3,
  },
  {
    name: "Redux",
    description:
      "Manage app state effectively using a predictable and centralized state container.",
    rating: 4,
    icon: Icons.redux,
  },
  {
    name: "Material UI",
    description:
      "Create stunning and responsive UIs with a popular React UI framework.",
    rating: 4,
    icon: Icons.mui,
  },

  {
    name: "Tailwind CSS",
    description:
      "Design beautiful, modern websites faster with a utility-first CSS framework.",
    rating: 5,
    icon: Icons.tailwindcss,
  },
  {
    name: "Bootstrap",
    description:
      "Quickly create responsive and appealing web designs using a popular CSS framework.",
    rating: 2,
    icon: Icons.bootstrap,
  },
];

export const skillsUnsortedTr: skillsInterface[] = [
  {
    name: "React Native",
    description:
      "Tutarlı ve etkileyici kullanıcı deneyimleri sunan, çapraz platform mobil uygulamalar geliştirin.",
    rating: 4,
    icon: Icons.react,
  },
  {
    name: "Next.js",
    description:
      "Sayfa yönlendirme, yerleşim düzenleri, yükleme arayüzleri ve API rotalarıyla dinamik web uygulamaları kolayca geliştirin.",
    rating: 5,
    icon: Icons.nextjs,
  },
  {
    name: "React",
    description:
      "Bileşenler, state, props ve sanal DOM kullanarak etkileşimli kullanıcı arayüzleri oluşturun.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "Typescript",
    description:
      "Statik türler ile JavaScript’i güçlendirerek kodun okunabilirliğini ve güvenilirliğini artırın.",
    rating: 5,
    icon: Icons.typescript,
  },
  {
    name: "Javascript",
    description:
      "Web sayfalarına dinamiklik ve etkileşim kazandıran esnek bir betik dili kullanın.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "HTML 5",
    description:
      "Web içeriklerini yapılandırmak için en güncel HTML sürümünü kullanarak sağlam bir temel oluşturun.",
    rating: 4,
    icon: Icons.html5,
  },
  {
    name: "CSS 3",
    description:
      "Gelişmiş stil özellikleriyle web sayfalarını estetik ve modern biçimde tasarlayın.",
    rating: 4,
    icon: Icons.css3,
  },
  {
    name: "Redux",
    description:
      "Uygulama durumunu öngörülebilir ve merkezi bir yapı ile yönetin.",
    rating: 4,
    icon: Icons.redux,
  },
  {
    name: "Material UI",
    description:
      "React tabanlı şık ve duyarlı kullanıcı arayüzleri oluşturmak için popüler bir UI kütüphanesi kullanın.",
    rating: 4,
    icon: Icons.mui,
  },
  {
    name: "Tailwind CSS",
    description:
      "Yardımcı sınıflar kullanarak modern ve şık web sitelerini hızlıca tasarlayın.",
    rating: 5,
    icon: Icons.tailwindcss,
  },
  {
    name: "Bootstrap",
    description:
      "Hızlı ve duyarlı web tasarımları oluşturmak için popüler bir CSS çerçevesi kullanın.",
    rating: 2,
    icon: Icons.bootstrap,
  },
];

export const skills = skillsUnsortedTr
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
