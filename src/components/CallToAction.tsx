import { Button } from "@/components/ui/button";
import { ArrowRight, Download, BookOpen, Users } from "lucide-react";
import { useState } from "react";
import { RightsDetailModal } from "./RightsDetailModal";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const CallToAction = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { toast } = useToast();
  const { getTranslation } = useLanguage();

  const handleExploreRights = () => {
    setModalOpen(true);
  };

  const handleBrowseCategories = () => {
    // Scroll to rights section to browse categories
    const element = document.querySelector('#rights');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 hero-gradient">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {getTranslation('cta.title') || 'Ready to Learn Your Rights?'}
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            {getTranslation('cta.subtitle') || 'Start exploring Zimbabwe\'s constitutional protections and understand how they apply to your daily life.'}
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Learn Your Rights</h3>
              <p className="text-white/80">
                Comprehensive guides based on Zimbabwe's Constitution
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Interactive Tools</h3>
              <p className="text-white/80">
                Step-by-step guidance for real-world scenarios
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Offline Access</h3>
              <p className="text-white/80">
                Download guides for offline access anywhere
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="hero" className="group" onClick={handleExploreRights}>
              {getTranslation('cta.start') || 'Start Learning'}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button variant="floating" size="hero" onClick={handleBrowseCategories}>
              {getTranslation('cta.browse') || 'Browse Categories'}
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="mt-12 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
            <p className="text-white/90 text-lg">
              <strong>Important Disclaimer:</strong> This platform provides educational information about constitutional rights. 
              For specific legal advice, please consult with qualified legal professionals.
            </p>
          </div>
        </div>

        {/* Rights Detail Modal */}
        <RightsDetailModal 
          open={modalOpen}
          onOpenChange={setModalOpen}
        />
      </div>
    </section>
  );
};

export default CallToAction;