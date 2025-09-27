import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ChevronRight, 
  Shield, 
  AlertCircle, 
  CheckCircle, 
  Phone,
  FileText,
  Clock,
  PlayCircle
} from "lucide-react";
import { RightsDetailModal } from "./RightsDetailModal";
import EmergencyContactsModal from "./EmergencyContactsModal";
import AppTutorialModal from "./AppTutorialModal";
import { useLanguage } from "@/contexts/LanguageContext";

interface Step {
  id: string;
  question: string;
  description?: string;
  options: {
    id: string;
    text: string;
    leads_to?: string;
    advice?: string;
    isGood?: boolean;
  }[];
  advice?: string;
  isEnd?: boolean;
}

const policeInteractionGuide: Step[] = [ /* your steps unchanged */ ];

const InteractiveDemo = () => {
  const [currentStep, setCurrentStep] = useState<Step>(policeInteractionGuide[0]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCategoryId, setModalCategoryId] = useState<string | undefined>(undefined);
  const [modalRightId, setModalRightId] = useState<string | undefined>(undefined);
  const [emergencyModalOpen, setEmergencyModalOpen] = useState(false);
  const [tutorialModalOpen, setTutorialModalOpen] = useState(false);
  const { getTranslation } = useLanguage();

  const handleWatchDemo = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setTutorialModalOpen(true);
  };

  const handleOptionSelect = (option: any) => {
    setSelectedOption(option.id);
    
    if (option.leads_to) {
      setTimeout(() => {
        const nextStep = policeInteractionGuide.find(step => step.id === option.leads_to);
        if (nextStep) {
          setCurrentStep(nextStep);
          setSelectedOption(null);
        }
      }, 3000);
    }
  };

  const resetDemo = () => {
    setCurrentStep(policeInteractionGuide[0]);
    setSelectedOption(null);
  };

  const handleViewFullGuide = () => {
    setModalCategoryId('emergency-rights');
    setModalRightId(undefined);
    setModalOpen(true);
  };

  const handleEndOptionClick = () => {
    if (currentStep.id === 'advice_questioning' || currentStep.id === 'advice_arrest') {
      setModalRightId('arrest-detention-rights');
      setModalCategoryId(undefined);
      setModalOpen(true);
      return;
    }
    if (currentStep.id === 'advice_search') {
      setModalRightId('right-privacy');
      setModalCategoryId(undefined);
      setModalOpen(true);
      return;
    }
    setModalCategoryId('emergency-rights');
    setModalRightId(undefined);
    setModalOpen(true);
  };

  return (
    <section id="tools" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-gradient">
            {getTranslation("tools.title") || "Interactive Rights Guide"}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-full sm:max-w-3xl mx-auto">
            {getTranslation("tools.subtitle") || "Learn your rights through real-world scenarios. This interactive guide helps you understand how to apply your constitutional rights in everyday situations."}
          </p>
        </div>

        {/* Card */}
        <div className="max-w-full md:max-w-4xl mx-auto">
          <Card className="p-4 sm:p-6 md:p-8 card-shadow relative overflow-hidden">
            {/* Background Icon */}
            <div className="absolute inset-0 flex items-center justify-center opacity-15">
              <Shield className="w-40 sm:w-64 md:w-96 h-40 sm:h-64 md:h-96 text-primary" />
            </div>

            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 md:mb-8 relative z-10 gap-4">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-2xl font-bold">{getTranslation("police.title") || "Police Interaction Guide"}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{getTranslation("police.description") || "Based on Zimbabwe's Constitutional provisions"}</p>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleWatchDemo}
                className="flex items-center gap-2 whitespace-nowrap"
              >
                <PlayCircle className="w-4 h-4" />
                {getTranslation("police.watch_demo") || "Watch Demo"}
              </Button>
            </div>

            {/* Step Question */}
            <div className="mb-6 relative z-10">
              <h4 className="text-lg sm:text-xl md:text-xl font-semibold mb-2">{getTranslation(`demo.${currentStep.id}.question`) || currentStep.question}</h4>
              {currentStep.description && (
                <p className="text-sm sm:text-base text-muted-foreground">{getTranslation(`demo.${currentStep.id}.description`) || currentStep.description}</p>
              )}
            </div>

            {/* Options */}
            <div className="space-y-3 mb-6 relative z-10">
              {currentStep.options.map((option) => (
                <Button
                  key={option.id}
                  variant={
                    selectedOption === option.id 
                      ? option.isGood ? "default" : "destructive"
                      : currentStep.isEnd 
                        ? "outline" 
                        : "outline"
                  }
                  className={`w-full justify-between p-3 sm:p-4 text-left break-words whitespace-normal ${
                    currentStep.isEnd ? 'hover:bg-primary/10' : 'hover:bg-primary hover:text-white'
                  }`}
                  onClick={() => currentStep.isEnd ? handleEndOptionClick() : handleOptionSelect(option)}
                  disabled={selectedOption !== null}
                >
                  <span className="text-sm sm:text-base">{option.text}</span>
                  {!currentStep.isEnd && (
                    selectedOption === option.id ? (
                      option.isGood ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-red-500" />
                      )
                    ) : (
                      <ChevronRight className="w-5 h-5" />
                    )
                  )}
                  {currentStep.isEnd && (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  )}
                </Button>
              ))}
            </div>

            {/* Advice Box */}
            {selectedOption && (
              <div className="bg-muted/50 rounded-xl p-4 sm:p-6 mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mt-1">
                    <FileText className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1 sm:mb-2">{getTranslation("demo.constitutional_guidance") || "Constitutional Guidance"}</h5>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {currentStep.options.find(opt => opt.id === selectedOption)?.advice}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* End Step */}
            {currentStep.isEnd && (
              <div className="text-center space-y-3 sm:space-y-4">
                <div className="bg-primary/10 rounded-xl p-4 sm:p-6">
                  <h5 className="font-semibold text-primary mb-1 sm:mb-2">{currentStep.advice}</h5>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {getTranslation("demo.rights_guaranteed") || "These rights are guaranteed by Zimbabwe's Constitution Chapter 4 - Declaration of Rights"}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Button variant="outline" onClick={resetDemo} className="min-w-0">
                    {getTranslation("demo.try_another") || "Try Another Scenario"}
                  </Button>
                  <Button variant="default" onClick={handleViewFullGuide} className="min-w-0">
                    {getTranslation("demo.view_guide") || "View Full Rights Guide"}
                  </Button>
                  <Button 
                    variant="secondary" 
                    onClick={() => setEmergencyModalOpen(true)}
                    className="flex items-center gap-2 min-w-0"
                  >
                    <Phone className="w-4 h-4" />
                    {getTranslation("common.get_help") || "Get Help Now"}
                  </Button>
                </div>
              </div>
            )}

            {/* Bottom Tip */}
            {!currentStep.isEnd && !selectedOption && (
              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mt-2">
                <Clock className="w-4 h-4" />
                {getTranslation("demo.select_option") || "Select an option to see constitutional guidance"}
              </div>
            )}
          </Card>

          {/* Modals */}
          <RightsDetailModal 
            open={modalOpen}
            onOpenChange={setModalOpen}
            categoryId={modalCategoryId}
            rightId={modalRightId}
          />
          <EmergencyContactsModal 
            open={emergencyModalOpen}
            onOpenChange={setEmergencyModalOpen}
            initialCategory={currentStep.id.includes('arrest') ? 'legal-aid' : 'emergency'}
          />
          <AppTutorialModal 
            open={tutorialModalOpen}
            onOpenChange={setTutorialModalOpen}
          />
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
