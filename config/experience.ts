import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ExperienceInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Experiences: ExperienceInterface[] = [
  {
    id: "selfweller-app",
    companyName: "SelfWeller",
    type: "Profesyonel",
    category: ["React Native", "Frontend Development", "Mobile Engineering"],
    shortDescription:
      "React Native ile sıfırdan geliştirdiğim mobil terapi uygulaması; iOS ve Android platformlarında 10.000+ kullanıcıya ulaştı.",
    websiteLink:
      "https://apps.apple.com/us/app/selfweller-self-terapiler/id6466802049",
    techStack: [
      "React Native",
      "Redux Toolkit",
      "TypeScript",
      "Firebase Notification",
      "Firebase Crashlytics",
      "Figma",
    ],
    startDate: new Date("2023-05-01"),
    endDate: new Date("2024-01-01"),
    companyLogoImg: "/experience/bt-logo.svg",
    pagesInfoArr: [
      {
        title: "Giriş & Kayıt",
        description:
          "Kullanıcı dostu onboarding süreci ve e-posta, Google ve Apple ile giriş seçenekleri sunuldu. Temiz, sezgisel ve akıcı arayüzlerle kullanıcı deneyimi ön planda tutuldu.",
        imgArr: ["/experience/bt2.jpg"],
      },
      {
        title: "Ana Sayfa & Terapi Modülleri",
        description:
          "Kullanıcıların günlük modlarına ve ihtiyaçlarına göre terapi içeriklerine erişebildiği dinamik ve etkileşimli ana ekranlar.",
        imgArr: ["/experience/bt6.jpg"],
      },
      {
        title: "Sesli Terapi Oynatıcısı",
        description:
          "Terapi içeriklerinin sesli olarak dinlenebilmesini sağlayan özel bir oynatıcı eklendi. Kullanıcılar uygulama içinde mod seçimine göre uygun sesli terapileri başlatabiliyor, duraklatabiliyor ve uygulama arka planda çalışsa bile dinlemeye devam edebiliyor.",
        imgArr: ["/experience/bt7.jpg"],
      },
      {
        title: "Ödeme Sistemi",
        description:
          "Apple Pay ve Google Pay entegrasyonları ile kullanıcıların hızlı ve güvenli ödeme yapması sağlandı. Uygulama içi satın alma akışları sorunsuz ve kullanıcı dostu şekilde tasarlandı.",
        imgArr: [],
      },
      {
        title: "Bildirim Sistemi",
        description:
          "Firebase Notification ile entegre edilen sistem sayesinde kullanıcıya düzenli hatırlatmalar ve terapi önerileri sunuldu.",
        imgArr: [],
      },
      {
        title: "Hata Takibi ve Performans",
        description:
          "Firebase Crashlytics ile entegre hata takip sistemi kuruldu; performans analizleri yapılarak kararlı bir yapı sağlandı.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "SelfWeller projesinde, mobil uygulamanın tüm frontend geliştirme sürecini React Native ile üstlendim. Tasarım aşamasından yayına kadar olan tüm adımlarda aktif rol alarak, uygulamanın kullanıcı dostu ve işlevsel olmasını sağladım.",
        "Uygulama içi bildirim sistemini Firebase Notification ile entegre ettim; ayrıca hata analizi ve performans takibi için Crashlytics modülünü yapılandırdım. Arayüz tasarımlarını Figma prototiplerine uygun şekilde yeniden oluşturup hayata geçirdim.",
        "Uygulama AppStore ve PlayStore’da yayınlandı ve kısa sürede 10.000'den fazla kullanıcıya ulaştı. Bu süreçte mobil geliştirme, kullanıcı deneyimi ve hata yönetimi konularında değerli deneyimler kazandım.",
      ],
      bullets: [
        "Uygulamanın tüm frontend geliştirmesini React Native ile gerçekleştirdim.",
        "Firebase Notification ile bildirim sistemi entegre ettim.",
        "Crashlytics modülü ile hata analiz ve performans takibi sağladım.",
        "Figma prototiplerine sadık kalarak arayüzleri yeniden tasarladım.",
        "10.000+ kullanıcıya ulaşan uygulama AppStore ve PlayStore’da yayına alındı.",
      ],
    },
  },
];

export const featuredExperiences = Experiences.slice(0, 3);
