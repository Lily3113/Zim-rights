import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronLeft,
  ChevronRight,
  Search, 
  Shield, 
  AlertCircle, 
  CheckCircle, 
  Phone,
  FileText,
  Users,
  Navigation,
  BookOpen,
  Filter,
  Eye,
  PlayCircle
} from "lucide-react";

interface TutorialStep {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  content: React.ReactNode;
  tips?: string[];
}

interface AppTutorialModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AppTutorialModal = ({ open, onOpenChange }: AppTutorialModalProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  const tutorialSteps: TutorialStep[] = [
    {
      id: 1,
      title: "Welcome to ZimRights Navigator",
      description: "Your complete guide to Zimbabwe's constitutional rights",
      icon: Shield,
      content: (
        <div className="space-y-4">
          <div className="bg-primary/10 rounded-lg p-4">
            <h4 className="font-semibold text-primary mb-2">What you can do:</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Search for your rights in any situation
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Get step-by-step guidance for legal procedures
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Access emergency contacts when you need help
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Practice with interactive scenarios
              </li>
            </ul>
          </div>
          <div className="text-sm text-muted-foreground">
            This platform is based on Zimbabwe's Constitution Chapter 4 - Declaration of Rights.
            All information is for educational purposes.
          </div>
        </div>
      ),
      tips: ["All content is based on Zimbabwe's Constitution", "Free to use - no registration required", "Available in multiple languages"]
    },
    {
      id: 2,
      title: "Searching Your Rights",
      description: "Find exactly what you need using our smart search",
      icon: Search,
      content: (
        <div className="space-y-4">
          <div className="border border-border rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <Search className="w-5 h-5 text-primary" />
              <span className="font-medium">Try these popular searches:</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Badge variant="outline" className="justify-center">"police stopped me"</Badge>
              <Badge variant="outline" className="justify-center">"employment rights"</Badge>
              <Badge variant="outline" className="justify-center">"housing problems"</Badge>
              <Badge variant="outline" className="justify-center">"family disputes"</Badge>
            </div>
          </div>
          <div className="bg-muted/50 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Search Tips:</h4>
            <ul className="text-sm space-y-1">
              <li>• Use everyday language - "My boss fired me" works better than "employment termination"</li>
              <li>• Search by situation - "Police want to search my car"</li>
              <li>• Browse categories if you're not sure what to search for</li>
            </ul>
          </div>
        </div>
      ),
      tips: ["Search results show Constitutional references", "Click any result to see full details", "Search works in English and Shona"]
    },
    {
      id: 3,
      title: "Rights Categories",
      description: "Browse rights organized by life situations",
      icon: Filter,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="border border-border rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 text-primary" />
                <span className="font-medium text-sm">Civil Rights</span>
              </div>
              <p className="text-xs text-muted-foreground">Freedom of speech, assembly, movement</p>
            </div>
            <div className="border border-border rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="w-4 h-4 text-primary" />
                <span className="font-medium text-sm">Employment</span>
              </div>
              <p className="text-xs text-muted-foreground">Worker rights, fair labor practices</p>
            </div>
            <div className="border border-border rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-primary" />
                <span className="font-medium text-sm">Emergency</span>
              </div>
              <p className="text-xs text-muted-foreground">Arrest, detention, police rights</p>
            </div>
            <div className="border border-border rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <Navigation className="w-4 h-4 text-primary" />
                <span className="font-medium text-sm">Legal Procedures</span>
              </div>
              <p className="text-xs text-muted-foreground">Court processes, legal aid</p>
            </div>
          </div>
          <div className="bg-primary/10 rounded-lg p-3">
            <p className="text-sm"><strong>Pro tip:</strong> Each category shows practical examples and real-world scenarios where these rights apply.</p>
          </div>
        </div>
      ),
      tips: ["Categories are organized by common life situations", "Each right includes practical examples", "Constitutional references provided for each right"]
    },
    {
      id: 4,
      title: "Interactive Police Guide",
      description: "Practice your rights in realistic scenarios",
      icon: PlayCircle,
      content: (
        <div className="space-y-4">
          <div className="border-l-4 border-primary pl-4">
            <h4 className="font-semibold mb-2">How it works:</h4>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>Choose a scenario (questioning, arrest, search)</li>
              <li>Select how you would respond</li>
              <li>Get instant feedback on your choice</li>
              <li>Learn the correct constitutional procedure</li>
            </ol>
          </div>
          <div className="bg-muted/50 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm mb-1">Remember:</h4>
                <p className="text-sm text-muted-foreground">
                  This is educational only. In real situations, prioritize your safety and seek legal help when needed.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Button variant="outline" size="sm" className="flex items-center gap-2 mx-auto">
              <PlayCircle className="w-4 h-4" />
              Try the Demo Now
            </Button>
          </div>
        </div>
      ),
      tips: ["Safe way to learn before real situations", "Based on actual Constitutional provisions", "Available 24/7 for practice"]
    },
    {
      id: 5,
      title: "Getting Help When Needed",
      description: "Access real support services and emergency contacts",
      icon: Phone,
      content: (
        <div className="space-y-4">
          <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
            <div className="flex items-center gap-2 text-red-700 dark:text-red-400 font-semibold mb-2">
              <AlertCircle className="w-5 h-5" />
              Emergency Numbers
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="destructive" size="sm" asChild>
                <a href="tel:995" className="flex items-center justify-center gap-2">
                  <Phone className="w-3 h-3" />
                  Police: 995 / 999
                </a>
              </Button>
              <Button variant="destructive" size="sm" asChild>
                <a href="tel:994" className="flex items-center justify-center gap-2">
                  <Phone className="w-3 h-3" />
                  Medical: 994
                </a>
              </Button>
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold">Other Support Services:</h4>
            <div className="grid gap-2 text-sm">
              <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                <span>Legal Aid Directorate</span>
                <Button variant="link" size="sm" asChild className="p-0 h-auto">
                  <a href="tel:+263-4-794-741">+263-4-794-741</a>
                </Button>
              </div>
              <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                <span>Human Rights Commission</span>
                <Button variant="link" size="sm" asChild className="p-0 h-auto">
                  <a href="tel:+263-4-700-952">+263-4-700-952</a>
                </Button>
              </div>
              <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                <span>Childline (24h)</span>
                <Button variant="link" size="sm" asChild className="p-0 h-auto">
                  <a href="tel:116">116</a>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="bg-primary/10 rounded-lg p-3">
            <p className="text-sm"><strong>All numbers are real and working.</strong> Don't hesitate to call when you need help.</p>
          </div>
        </div>
      ),
      tips: ["All contact numbers are verified and working", "Many services are free of charge", "Help available in local languages"]
    },
    {
      id: 6,
      title: "Reading Rights Information",
      description: "Understanding the detailed rights pages",
      icon: Eye,
      content: (
        <div className="space-y-4">
          <div className="border border-border rounded-lg p-4">
            <h4 className="font-semibold mb-3">Each right includes:</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <BookOpen className="w-3 h-3 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">Constitutional Reference</p>
                  <p className="text-xs text-muted-foreground">Exact section and subsection from Zimbabwe's Constitution</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-3 h-3 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">Practical Examples</p>
                  <p className="text-xs text-muted-foreground">Real-world situations where this right applies</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <Navigation className="w-3 h-3 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">What You Can Do</p>
                  <p className="text-xs text-muted-foreground">Step-by-step guidance on exercising your rights</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-muted/50 rounded-lg p-3">
            <p className="text-sm"><strong>Pro tip:</strong> Bookmark important rights or take screenshots for quick reference when needed.</p>
          </div>
        </div>
      ),
      tips: ["Information is updated to current Constitutional text", "Designed for non-lawyers to understand", "Available offline once loaded"]
    }
  ];

  const nextStep = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentTutorialStep = tutorialSteps[currentStep];
  const Icon = currentTutorialStep.icon;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
            <PlayCircle className="w-6 h-6 text-primary" />
            How to Use ZimRights Navigator
          </DialogTitle>
          <div className="flex justify-center items-center gap-2 mt-2">
            {tutorialSteps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentStep ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto">
          <Card className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{currentTutorialStep.title}</h3>
                <p className="text-muted-foreground">{currentTutorialStep.description}</p>
              </div>
            </div>

            <div className="mb-6">
              {currentTutorialStep.content}
            </div>

            {currentTutorialStep.tips && (
              <div className="bg-primary/5 rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Quick Tips
                </h4>
                <ul className="text-sm space-y-1">
                  {currentTutorialStep.tips.map((tip, index) => (
                    <li key={index} className="text-muted-foreground">• {tip}</li>
                  ))}
                </ul>
              </div>
            )}
          </Card>
        </div>

        <div className="flex justify-between items-center pt-4 border-t">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 0}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>

          <div className="text-sm text-muted-foreground">
            Step {currentStep + 1} of {tutorialSteps.length}
          </div>

          {currentStep === tutorialSteps.length - 1 ? (
            <Button
              onClick={() => onOpenChange(false)}
              className="flex items-center gap-2"
            >
              <CheckCircle className="w-4 h-4" />
              Get Started
            </Button>
          ) : (
            <Button
              onClick={nextStep}
              className="flex items-center gap-2"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AppTutorialModal;