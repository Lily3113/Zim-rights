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

const policeInteractionGuide: Step[] = [
  {
    id: "start",
    question: "Police Interaction: What's Your Situation?",
    description: "This interactive guide will help you understand your rights during police interactions based on Zimbabwe's Constitution.",
    options: [
      { id: "stopped", text: "I was stopped for questioning", leads_to: "questioning" },
      { id: "arrested", text: "I'm being arrested", leads_to: "arrest" },
      { id: "search", text: "Police want to search me/my property", leads_to: "search_rights" }
    ]
  },
  {
    id: "questioning",
    question: "Police Questioning: Know Your Rights",
    description: "Section 50 of the Constitution protects your rights during questioning.",
    options: [
      { 
        id: "answer", 
        text: "Answer all questions immediately", 
        leads_to: "advice_questioning",
        isGood: false,
        advice: "You have the right to remain silent. You're not required to answer questions without a lawyer present."
      },
      { 
        id: "silent", 
        text: "Exercise right to remain silent", 
        leads_to: "advice_questioning",
        isGood: true,
        advice: "Correct! You have the constitutional right to remain silent during questioning."
      },
      { 
        id: "lawyer", 
        text: "Ask for a legal representative", 
        leads_to: "advice_questioning",
        isGood: true,
        advice: "Excellent! Section 50(1)(b) guarantees your right to consult with a legal practitioner."
      }
    ]
  },
  {
    id: "arrest",
    question: "During Arrest: Your Constitutional Rights",
    description: "Section 50 of Zimbabwe's Constitution protects arrested persons.",
    options: [
      { 
        id: "resist", 
        text: "Resist or argue with officers", 
        leads_to: "advice_arrest",
        isGood: false,
        advice: "Don't resist. Comply with the arrest but assert your rights calmly."
      },
      { 
        id: "comply", 
        text: "Comply but ask why you're being arrested", 
        leads_to: "advice_arrest",
        isGood: true,
        advice: "Right! Section 50(1)(a) requires police to inform you of the reason for arrest."
      },
      { 
        id: "contact", 
        text: "Ask to contact family/lawyer", 
        leads_to: "advice_arrest",
        isGood: true,
        advice: "Correct! You have the right to contact family and a lawyer at state expense."
      }
    ]
  },
  {
    id: "search_rights",
    question: "Search Rights: Property Protection",
    description: "Section 57 protects your privacy rights and property.",
    options: [
      { 
        id: "consent", 
        text: "Give consent without asking questions", 
        leads_to: "advice_search",
        isGood: false,
        advice: "You can ask to see a search warrant. Consent should be informed."
      },
      { 
        id: "warrant", 
        text: "Ask to see a search warrant", 
        leads_to: "advice_search",
        isGood: true,
        advice: "Good! Police generally need a warrant to search your property (Section 57)."
      },
      { 
        id: "refuse", 
        text: "Politely refuse and ask for warrant", 
        leads_to: "advice_search",
        isGood: true,
        advice: "Excellent! You have the right to refuse searches without proper authorization."
      }
    ]
  },
  {
    id: "advice_questioning",
    question: "Key Rights During Police Questioning",
    isEnd: true,
    advice: "Remember these constitutional rights",
    options: [
      { id: "silent", text: "Right to remain silent (Section 50)", isGood: true },
      { id: "lawyer", text: "Right to legal representation", isGood: true },
      { id: "inform", text: "Right to be informed of charges", isGood: true }
    ]
  },
  {
    id: "advice_arrest",
    question: "Key Rights During Arrest",
    isEnd: true,
    advice: "Your constitutional protections include",
    options: [
      { id: "reason", text: "Must be told reason for arrest", isGood: true },
      { id: "contact", text: "Contact family/lawyer at state expense", isGood: true },
      { id: "court", text: "Brought to court within 48 hours", isGood: true }
    ]
  },
  {
    id: "advice_search",
    question: "Your Search and Privacy Rights",
    isEnd: true,
    advice: "Section 57 of the Constitution protects",
    options: [
      { id: "warrant", text: "Warrant generally required for searches", isGood: true },
      { id: "privacy", text: "Right to privacy of property", isGood: true },
      { id: "seizure", text: "Protection from unlawful seizure", isGood: true }
    ]
  }
];

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
    <section id="tools" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            {getTranslation("tools.title") || "Interactive Rights Guide"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {getTranslation("tools.subtitle") || "Learn your rights through real-world scenarios. This interactive guide helps you understand how to apply your constitutional rights in everyday situations."}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 card-shadow relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center opacity-15">
              <Shield className="w-96 h-96 text-primary" />
            </div>
            
            <div className="flex items-center justify-between mb-8 relative z-10">
              <div>
                <h3 className="text-2xl font-bold">{getTranslation("police.title") || "Police Interaction Guide"}</h3>
                <p className="text-muted-foreground">{getTranslation("police.description") || "Based on Zimbabwe's Constitutional provisions"}</p>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleWatchDemo}
                className="flex items-center gap-2"
              >
                <PlayCircle className="w-4 h-4" />
                {getTranslation("police.watch_demo") || "Watch Demo"}
              </Button>
            </div>

            <div className="mb-8 relative z-10">
              <h4 className="text-xl font-semibold mb-4">{getTranslation(`demo.${currentStep.id}.question`) || currentStep.question}</h4>
              {currentStep.description && (
                <p className="text-muted-foreground mb-6">{getTranslation(`demo.${currentStep.id}.description`) || currentStep.description}</p>
              )}
            </div>

            <div className="space-y-4 mb-8 relative z-10">
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
                  className={`w-full justify-between p-6 h-auto text-left whitespace-normal ${
                    currentStep.isEnd ? 'hover:bg-primary/10' : 'hover:bg-primary hover:text-white'
                  }`}
                  onClick={() => currentStep.isEnd ? handleEndOptionClick() : handleOptionSelect(option)}
                  disabled={selectedOption !== null}
                >
                  <span className="text-base">{option.text}</span>
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

            {selectedOption && (
              <div className="bg-muted/50 rounded-xl p-6 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mt-1">
                    <FileText className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">{getTranslation("demo.constitutional_guidance") || "Constitutional Guidance"}</h5>
                    <p className="text-muted-foreground">
                      {currentStep.options.find(opt => opt.id === selectedOption)?.advice}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {currentStep.isEnd && (
              <div className="text-center space-y-4">
                <div className="bg-primary/10 rounded-xl p-6">
                  <h5 className="font-semibold text-primary mb-2">{currentStep.advice}</h5>
                  <p className="text-sm text-muted-foreground">
                    {getTranslation("demo.rights_guaranteed") || "These rights are guaranteed by Zimbabwe's Constitution Chapter 4 - Declaration of Rights"}
                  </p>
                </div>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Button variant="outline" onClick={resetDemo}>
                    {getTranslation("demo.try_another") || "Try Another Scenario"}
                  </Button>
                  <Button variant="default" onClick={handleViewFullGuide}>
                    {getTranslation("demo.view_guide") || "View Full Rights Guide"}
                  </Button>
                  <Button 
                    variant="secondary" 
                    onClick={() => setEmergencyModalOpen(true)}
                    className="flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    {getTranslation("common.get_help") || "Get Help Now"}
                  </Button>
                </div>
              </div>
            )}

            {!currentStep.isEnd && !selectedOption && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                {getTranslation("demo.select_option") || "Select an option to see constitutional guidance"}
              </div>
            )}
          </Card>

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
