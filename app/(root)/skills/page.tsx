import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import SkillsCard from "@/components/skills/skills-card";
import { pagesConfigTr } from "@/config/pages";
import { skills } from "@/config/skills";

export const metadata: Metadata = {
  title: pagesConfigTr.skills.metadata.title,
  description: pagesConfigTr.skills.metadata.description,
};

export default function SkillsPage() {
  return (
    <PageContainer
      title={pagesConfigTr.skills.title}
      description={pagesConfigTr.skills.description}
    >
      <SkillsCard skills={skills} />
    </PageContainer>
  );
}
