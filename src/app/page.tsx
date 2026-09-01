
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroCTA } from "@/components/sections/HeroCTA";
import { LogosSlider } from "@/components/sections/LogosSlider";
import { AnchorAutomate } from "@/components/sections/AnchorAutomate";
import { FeatureTabsShowcase } from "@/components/sections/FeatureTabsShowcase";
import { FourCardsContainer } from "@/components/sections/FourCardsContainer";
import { ExpandableCarousel } from "@/components/sections/ExpandableCarousel";
import { StackedCards } from "@/components/sections/StackedCards";
import { HorizontalCardsAccordion } from "@/components/sections/HorizontalCardsAccordion";
import { BannerG2Ranking } from "@/components/sections/BannerG2Ranking";
import { CardsContainer } from "@/components/sections/CardsContainer";
import { BannerImageBackground } from "@/components/sections/BannerImageBackground";
import { LocationsTicker } from "@/components/sections/LocationsTicker";
import { Footnotes } from "@/components/sections/Footnotes";
import { Spacer } from "@/components/sections/Spacer";
import { HeaderAnimatedValue4, HeaderAnimatedValue8, HeaderAnimatedValue12, HeaderAnimatedValue16, HeaderAnimatedValue20, HeaderAnimatedValue26 } from "@/components/sections/HeaderAnimatedValues";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-offwhite">
      <Header />
      <main className="flex-grow">
        <Spacer className="h-10 md:h-10 lg:h-20" />
        <HeroCTA />
        <LogosSlider />
<AnchorAutomate />
        
        <section className="bg-white w-full">
          <HeaderAnimatedValue4 />
          <Spacer className="h-10 md:h-5 lg:h-10" />
          <FeatureTabsShowcase />
        </section>
<section className="bg-white w-full pb-20">
          <HeaderAnimatedValue8 />
          <Spacer className="h-10 md:h-10 lg:h-10" />
          <FourCardsContainer />
        </section>
        <section className="bg-white w-full pb-20 overflow-hidden">
          <HeaderAnimatedValue12 />
          <Spacer className="h-10 md:h-10 lg:h-10 " />
          <ExpandableCarousel />
        </section>
        <Spacer className="h-20 md:h-20 lg:h-20 bg-white" />
        <section className="bg-white w-full pb-20">
          <HeaderAnimatedValue16 />
          <Spacer className="h-10 md:h-10 lg:h-10" />
          <StackedCards />
        </section>
        <section className="bg-white w-full pb-20">
          <HeaderAnimatedValue20 />
          <Spacer className="h-10 md:h-10 lg:h-10" />
          <HorizontalCardsAccordion />
          <Spacer className="h-5 md:h-5 lg:h-5" />
          <BannerG2Ranking />
        </section>
        <section className="bg-white w-full pb-20">
          <HeaderAnimatedValue26 />
          <Spacer className="h-10 md:h-10 lg:h-10" />
          <CardsContainer />
          <Spacer className="h-10 md:h-10 lg:h-10" />
          <BannerImageBackground />
        </section>
        <section className="bg-white w-full pt-20 pb-10">
          <LocationsTicker />
          <Spacer className="h-20 md:h-20 lg:h-20" />
          <Footnotes />
          <Spacer className="h-10 md:h-10 lg:h-10" />
        </section>
      </main>
      <Footer />
    </div>
  );
}
