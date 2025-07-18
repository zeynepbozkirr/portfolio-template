import { Metadata } from "next";

import Timeline from "@/components/career/timeline";
import PageContainer from "@/components/common/page-container";
import { careerExperiences } from "@/config/career";
import { pagesConfigTr } from "@/config/pages";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${pagesConfigTr.career.metadata.title} | Interactive Developer Timeline`,
  description: `${pagesConfigTr.career.metadata.description} This interactive career timeline showcases professional experience in a visually appealing way. Part of our open-source Next.js portfolio template.`,
  keywords: [
    "career timeline template",
    "interactive timeline",
    "developer experience",
    "portfolio template",
    "Next.js",
  ],
  alternates: {
    canonical: `${siteConfig.url}/career`,
  },
};

export default function CareerPage() {
  return (
    <PageContainer
      title={pagesConfigTr.career.title}
      description={pagesConfigTr.career.description}
    >
      <Timeline experiences={careerExperiences} />
    </PageContainer>
  );
}
