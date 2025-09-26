import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import RightsCategories from "@/components/RightsCategories";
import InteractiveDemo from "@/components/InteractiveDemo";
import SearchRights from "@/components/SearchRights";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <RightsCategories />
        <InteractiveDemo />
        <SearchRights />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
