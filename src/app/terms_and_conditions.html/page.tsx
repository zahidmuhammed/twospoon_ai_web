import type { Metadata } from "next";
import { TermsAndConditionsHtml } from "@/components/TermsAndConditionsHtml";
import { siteUrl } from "@/config/site";

export const metadata: Metadata = {
  title: "Page Not Found | Framer",

  alternates: { canonical: siteUrl("/terms_and_conditions.html") },
  openGraph: {
    title: "Page Not Found | Framer",

    url: siteUrl("/terms_and_conditions.html"),
  },
  twitter: {
    card: "summary_large_image",
    title: "Page Not Found | Framer",
  },
};

export default function Page() {
  return <TermsAndConditionsHtml />;
}
