import type { Metadata } from "next";
import { PrivacyPolicyHtml } from "@/components/PrivacyPolicyHtml";
import { siteUrl } from "@/config/site";

export const metadata: Metadata = {
  title: "Page Not Found | Framer",

  alternates: { canonical: siteUrl("/privacy_policy.html") },
  openGraph: {
    title: "Page Not Found | Framer",

    url: siteUrl("/privacy_policy.html"),
  },
  twitter: {
    card: "summary_large_image",
    title: "Page Not Found | Framer",
  },
};

export default function Page() {
  return <PrivacyPolicyHtml />;
}
