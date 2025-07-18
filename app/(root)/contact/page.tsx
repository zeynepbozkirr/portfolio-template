import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import { ContactForm } from "@/components/forms/contact-form";
import { pagesConfigTr } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfigTr.contact.metadata.title,
  description: pagesConfigTr.contact.metadata.description,
};

export default function ContactPage() {
  return (
    <PageContainer
      title={pagesConfigTr.contact.title}
      description={pagesConfigTr.contact.description}
    >
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1">
          <ContactForm />
        </div>
      </div>
    </PageContainer>
  );
}
