import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import EmergencyContactsModal from "./EmergencyContactsModal";
import { useState } from "react";

const Hero = () => {
  const { getTranslation } = useLanguage();
  const { toast } = useToast();
  const [emergencyModalOpen, setEmergencyModalOpen] = useState(false);

  const handleExploreRights = () => {
    const rightsSection = document.getElementById('rights');
    rightsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleEmergencyHelp = () => {
    setEmergencyModalOpen(true);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Zimbabweans learning about their rights"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {getTranslation('hero.title') || 'Know Your Rights, Navigate Justice'}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            {getTranslation('hero.subtitle') || 'Empowering Zimbabweans through accessible legal knowledge. Understand your constitutional rights and get practical guidance when you need it most.'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" size="hero" className="group" onClick={handleExploreRights}>
              {getTranslation('hero.explore') || 'Explore Your Rights'}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button variant="floating" size="hero" onClick={handleEmergencyHelp}>
              {getTranslation('hero.emergency') || 'Emergency Help'}
            </Button>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-6 text-white">
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">25+</div>
              <div className="text-sm opacity-90">Constitutional Rights</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">3</div>
              <div className="text-sm opacity-90">Languages Supported</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">24/7</div>
              <div className="text-sm opacity-90">Access Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
      
      {/* Emergency Contacts Modal */}
      <EmergencyContactsModal 
        open={emergencyModalOpen}
        onOpenChange={setEmergencyModalOpen}
        initialCategory="emergency"
      />
    </section>
  );
};

export default Hero;