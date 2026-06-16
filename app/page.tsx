import HeroFeature from "@/components/HeroFeature";
import NextRaceWidget from "@/components/NextRaceWidget";
import NewsGrid from "@/components/NewsGrid";
import StandingsWidget from "@/components/StandingsWidget";
import VideoStrip from "@/components/VideoStrip";
import UnlockedBanner from "@/components/UnlockedBanner";
import AppDownload from "@/components/AppDownload";
import { nextRace, SCHEDULE } from "@/lib/schedule";

export default function HomePage() {
  const race = nextRace() ?? SCHEDULE[0];

  return (
    <>
      <HeroFeature />
      <NextRaceWidget race={race} />
      <NewsGrid />
      <StandingsWidget />
      <VideoStrip />
      <UnlockedBanner />
      <AppDownload />
    </>
  );
}
