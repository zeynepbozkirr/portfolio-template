import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfigEn: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Zeynep Bozkır's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "Key skills that define my professional identity.",
    metadata: {
      title: "Skills",
      description:
        "Zeynep Bozkır's key skills that define his professional identity.",
    },
  },
  experience: {
    title: "Experience",
    description: "Highlighting career journey and impactful projects.",
    metadata: {
      title: "Experience",
      description: "Zeynep Bozkır's experience in building web applications.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Zeynep Bozkır.",
    },
  },

  resume: {
    title: "Resume",
    description: "Zeynep Bozkır's resume.",
    metadata: {
      title: "Resume",
      description: "Zeynep Bozkır's resume.",
    },
  },
  career: {
    title: "Career Timeline",
    description: "Professional journey and experience timeline.",
    metadata: {
      title: "Career Timeline",
      description: "Zeynep Bozkır's professional journey and career timeline.",
    },
  },
};

export const pagesConfigTr: PagesConfig = {
  home: {
    title: "Ana Sayfa",
    description: "Portfolyo web siteme hoş geldiniz.",
    metadata: {
      title: "Ana Sayfa",
      description: "Zeynep Bozkır'ın portfolyo web sitesi.",
    },
  },
  skills: {
    title: "Yetenekler",
    description: "Profesyonel kimliğimi yansıtan temel yetenekler.",
    metadata: {
      title: "Yetenekler",
      description: "Zeynep Bozkır'ın profesyonel yetenekleri.",
    },
  },
  experience: {
    title: "Deneyim",
    description: "Kariyer yolculuğum ve katkı sağladığım projeler.",
    metadata: {
      title: "Deneyim",
      description: "Zeynep Bozkır'ın web uygulama geliştirme deneyimi.",
    },
  },
  contact: {
    title: "İletişim",
    description: "İletişime geçelim ve iş birliği fırsatlarını konuşalım.",
    metadata: {
      title: "İletişim",
      description: "Zeynep Bozkır ile iletişime geçin.",
    },
  },
  resume: {
    title: "Özgeçmiş",
    description: "Zeynep Bozkır'ın özgeçmişi.",
    metadata: {
      title: "Özgeçmiş",
      description: "Zeynep Bozkır'ın özgeçmişi.",
    },
  },
  career: {
    title: "Kariyer Zaman Çizelgesi",
    description: "Profesyonel yolculuğumun zaman çizelgesi.",
    metadata: {
      title: "Kariyer Zaman Çizelgesi",
      description: "Zeynep Bozkır'ın kariyer gelişim süreci.",
    },
  },
};
