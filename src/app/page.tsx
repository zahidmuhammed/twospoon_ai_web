import type { Metadata } from "next";
import { Home } from "@/components/Home";
import { siteAssetUrl, siteUrl } from "@/config/site";
import { MotionRuntime } from "@/ui/MotionRuntime";
import { motionDefinitions, interactionDefinitions } from "@/components/Home/Home/Home.motion";

export const metadata: Metadata = {
  title: "Twospoon - AI-native engineering team that ships in weeks, not quarters",
  description:
    "Production-grade software, built around how your org actually works. No 6-month timelines that stretch to twelve.",
  alternates: { canonical: siteUrl("/") },
  openGraph: {
    title: "Twospoon - AI-native engineering team that ships in weeks, not quarters",
    description:
      "Production-grade software, built around how your org actually works. No 6-month timelines that stretch to twelve.",
    url: siteUrl("/"),
    images: [siteAssetUrl("https://framerusercontent.com/assets/H1wYtk6l1DexHoJ449PPivCps.png")],
  },
  twitter: {
    card: "summary_large_image",
    title: "Twospoon - AI-native engineering team that ships in weeks, not quarters",
    description:
      "Production-grade software, built around how your org actually works. No 6-month timelines that stretch to twelve.",
    images: [siteAssetUrl("https://framerusercontent.com/assets/H1wYtk6l1DexHoJ449PPivCps.png")],
  },
};

export default function Page() {
  return (
    <>
      <Home />
      <MotionRuntime definitions={motionDefinitions} interactions={interactionDefinitions} />
    </>
  );
}
