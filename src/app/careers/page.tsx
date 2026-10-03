import type { Metadata } from "next";
import { Careers } from "@/components/Careers";
import { siteAssetUrl, siteUrl } from "@/config/site";
import { MotionRuntime } from "@/ui/MotionRuntime";
import {
  motionDefinitions,
  interactionDefinitions as careersInteractionDefinitions,
} from "@/components/Careers/Careers/Careers.motion";
import { interactionDefinitions as homeInteractionDefinitions } from "@/components/Home/Home/Home.motion";

/** Footer `Book a call` uses home footer hover (semi-transparent white + label fade). */
const interactionDefinitions = {
  ...careersInteractionDefinitions,
  h1bqx8fn: homeInteractionDefinitions.h1bqx8fn,
};

export const metadata: Metadata = {
  title: "Twospoon - AI-native engineering team that ships in weeks, not quarters",
  description:
    "Production-grade software, built around how your org actually works. No 6-month timelines that stretch to twelve.",
  alternates: { canonical: siteUrl("/careers") },
  openGraph: {
    title: "Twospoon - AI-native engineering team that ships in weeks, not quarters",
    description:
      "Production-grade software, built around how your org actually works. No 6-month timelines that stretch to twelve.",
    url: siteUrl("/careers"),
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
      <Careers />
      <MotionRuntime definitions={motionDefinitions} interactions={interactionDefinitions} />
    </>
  );
}
