import Image from "next/image";
import Link from "next/link";

import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import ProjectCard from "@/components/experience/project-card";
import SkillsCard from "@/components/skills/skills-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { featuredExperiences } from "@/config/experience";
import { pagesConfigTr } from "@/config/pages";
import { featuredSkills } from "@/config/skills";
import { cn } from "@/lib/utils";
import zeynepImg from "@/public/zeynepImg.jpg";

export default function IndexPage() {
  return (
    <ClientPageWrapper>
      <section className="space-y-6 pb-8 pt-6 mb-0 md:pb-12 md:py-20 lg:py-32 h-screen flex items-center">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center -mt-20">
          <Image
            src={zeynepImg}
            height={100}
            width={100}
            sizes="100vw"
            className="bg-primary rounded-full mb-0 h-auto md:mb-2 w-[60%] max-w-[16rem] border-8 border-primary"
            alt="Zeynep Bozkır - Frontend Developer Portfolio"
            priority
          />
          <AnimatedText
            as="h1"
            delay={0.2}
            className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Zeynep Bozkır
          </AnimatedText>
          <AnimatedText
            as="h3"
            delay={0.4}
            className="font-heading text-base sm:text-xl md:text-xl lg:text-2xl"
          >
            Frontend Developer
          </AnimatedText>
          <div className="mt-4 max-w-[42rem] text-center">
            <p className="leading-normal text-muted-foreground text-sm sm:text-base">
              Web ve mobil uygulamalarda güçlü, temiz ve sürdürülebilir çözümler
              üretiyorum.
            </p>
          </div>

          <div className="flex flex-col mt-10 items-center justify-center sm:flex-row sm:space-x-4 gap-3">
            <AnimatedText delay={0.6}>
              <Link
                href={"https://github.com/zeynepbozkirr"}
                target="_blank"
                className={cn(buttonVariants({ size: "lg" }))}
                aria-label="View Zeynep Bozkır's GitHub profile"
              >
                <Icons.gitHub className="w-4 h-4 mr-2" /> GitHub
              </Link>
            </AnimatedText>
            <AnimatedText delay={0.8}>
              <Link
                href={"/contact"}
                rel="noreferrer"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "lg",
                  })
                )}
                aria-label="Contact Zeynep Bozkır"
              >
                <Icons.contact className="w-4 h-4 mr-2" /> İletişim
              </Link>
            </AnimatedText>
          </div>
          <AnimatedText delay={1.2}>
            <Icons.chevronDown className="h-6 w-6 mt-10" />
          </AnimatedText>
        </div>
      </section>
      <AnimatedSection
        className="container space-y-6 bg-muted py-10"
        id="skills"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfigTr.skills.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfigTr.skills.description}
          </AnimatedText>
        </div>
        <SkillsCard skills={featuredSkills} />
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/skills">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> Hepsini Görüntüle
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <AnimatedSection
        direction="right"
        className="container space-y-6 py-10 my-14"
        id="experience"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfigTr.experience.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfigTr.experience.description}
          </AnimatedText>
        </div>
        <div className="mx-auto grid justify-center gap-4 md:w-full lg:grid-cols-3">
          {featuredExperiences.map((exp, index) => (
            <AnimatedSection
              key={exp.id}
              delay={0.1 * (index + 1)}
              direction="up"
            >
              <ProjectCard project={exp} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/experience">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> Tümünü Görüntüle
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
    </ClientPageWrapper>
  );
}
