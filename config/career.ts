import { ValidSkills } from "./constants";
export interface CareerExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
  color?: string;
}

export const careerExperiences: CareerExperienceInterface[] = [
  {
    id: "betherapist",
    position: "Frontend & Mobile App Developer",
    company: "Be Therapist",
    location: "Hibrit/İzmir",
    startDate: new Date("2023-05-01"),
    endDate: new Date("2024-01-01"),
    description: [
      "Be Therapist bünyesinde geliştirilen SelfWeller adlı mobil terapi uygulamasının tüm frontend geliştirme sürecinde aktif rol aldım.",
      "React Native ile uygulamanın arayüzlerini sıfırdan oluşturdum; Figma prototiplerine sadık kalarak kullanıcı dostu ekranlar geliştirdim.",
      "Firebase Notification ve Crashlytics modüllerini entegre ederek bildirim gönderimi ve hata analizi süreçlerini yönettim.",
      "Kodun sürdürülebilirliği için component bazlı yapılar ve temiz mimari yaklaşımları benimsedim.",
    ],
    achievements: [
      "10.000+ kullanıcıya ulaşan SelfWeller uygulaması, AppStore ve PlayStore’da yayına alındı.",
      "Bildirim sistemiyle kullanıcı etkileşimi artırıldı; Crashlytics sayesinde erken hata takibi sağlandı.",
      "Frontend mimarisi yeniden kullanılabilir ve modüler yapılarla güçlendirildi.",
    ],
    skills: [
      "React Native",
      "Redux Toolkit",
      "TypeScript",
      "Firebase Notification",
      "Firebase Crashlytics",
      "Figma",
      "Agile (Scrum)",
    ],
    logo: "/career/bt-logo.svg",
    color: "bg-btColor",
  },
  {
    id: "marsala",
    position: "Frontend Developer Intern",
    company: "Marsala Software",
    location: "Ofis/İzmir",
    startDate: new Date("2022-07-01"),
    endDate: new Date("2022-08-31"),
    description: [
      "React projelerinde görev aldım, frontend kod yazımı ve test süreçlerine destek verdim.",
      "Component bazlı geliştirme süreçlerine katkı verdim.",
    ],
    achievements: [
      "Gerçek projelerde görev alarak React mimarisi ve component yapıları konusunda deneyim kazandım.",
      "Temel UI/UX prensipleri doğrultusunda arayüz bileşenleri geliştirdim.",
    ],
    skills: ["React", "JavaScript", "CSS3", "HTML5"],
    logo: "/career/marsala-logo.webp",
    color: "bg-marsColor",
  },
  {
    id: "dimnida",
    position: "Gönüllü Stajyer",
    company: "Dimnida Yazılım Teknolojileri",
    location: "Ofis/İzmir",
    startDate: new Date("2021-05-01"),
    endDate: new Date("2021-07-01"),
    description: [
      ".NET tabanlı projelerin geliştirme süreçlerini gözlemledim ve küçük görevlerde aktif olarak yer aldım.",
      "Yazılım geliştirmenin temel kavramları hakkında uygulamalı bilgi edindim.",
      "Kod okuma ve versiyon kontrol sistemleri üzerine ilk tecrübelerimi edindim.",
    ],
    achievements: [
      "Yazılım geliştirmenin ekip içi işleyişini ve döngüsünü gözlemleyerek temel yetkinlikler kazandım.",
      "Kod yapısı ve .NET ortamına dair pratik bilgiler edindim.",
    ],
    skills: [
      ".NET",
      "C#",
      "Geliştirme Süreci Gözlemi",
      "Temel Yazılım Pratikleri",
    ],
    logo: "/career/dimnidalogo.png",
    color: "bg-dimnidaColor",
  },
];
