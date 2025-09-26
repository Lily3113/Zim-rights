import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  X, 
  BookOpen, 
  AlertCircle, 
  CheckCircle, 
  ArrowRight,
  FileText,
  Users,
  Scale
} from "lucide-react";
import { constitutionalRights, ConstitutionalRight } from "@/data/constitutionalRights";

interface RightsDetailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  categoryId?: string;
  rightId?: string;
}

const categoryRightsMapping: Record<string, string[]> = {
  "civil-rights": ["freedom-expression", "freedom-assembly-association", "freedom-demonstrate-petition", "right-privacy"],
  "employment-rights": ["labor-rights", "freedom-profession-trade"],
  "housing-rights": ["property-rights", "agricultural-land-rights"],
  "family-rights": ["human-dignity", "personal-security", "language-culture"],
  "legal-procedures": ["fair-hearing", "accused-person-rights", "administrative-justice"],
  "emergency-rights": ["arrest-detention-rights", "freedom-torture", "personal-liberty"]
};

export const RightsDetailModal = ({ open, onOpenChange, categoryId, rightId }: RightsDetailModalProps) => {
  const [selectedRight, setSelectedRight] = useState<ConstitutionalRight | null>(null);

  // Get rights to display
  let rightsToShow: ConstitutionalRight[] = [];
  
  if (rightId) {
    const right = constitutionalRights.find(r => r.id === rightId);
    if (right) rightsToShow = [right];
  } else if (categoryId) {
    const rightIds = categoryRightsMapping[categoryId] || [];
    rightsToShow = constitutionalRights.filter(r => rightIds.includes(r.id));
  } else {
    // Fallback: show all rights when no category or right specified
    rightsToShow = constitutionalRights;
  }

  const handleRightSelect = (right: ConstitutionalRight) => {
    setSelectedRight(right);
  };

  const handleBack = () => {
    setSelectedRight(null);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold flex items-center gap-3">
            <Scale className="w-8 h-8 text-primary" />
            {selectedRight ? selectedRight.title : "Constitutional Rights"}
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="max-h-[calc(90vh-100px)]">
          <div className="p-6 pt-0">
            {!selectedRight ? (
              // Rights List View
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <p className="text-muted-foreground text-lg">
                    {rightsToShow.length} constitutional rights in this category
                  </p>
                </div>

                <div className="grid gap-4">
                  {rightsToShow.map((right) => (
                    <div
                      key={right.id}
                      className="border rounded-lg p-6 hover:bg-muted/50 cursor-pointer transition-all group"
                      onClick={() => handleRightSelect(right)}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                              {right.title}
                            </h3>
                            <Badge variant="outline">{right.section}</Badge>
                          </div>
                          
                          <p className="text-muted-foreground mb-4">
                            {right.description}
                          </p>

                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <FileText className="w-4 h-4" />
                            <span>{right.keyPoints.length} key points</span>
                            <span>•</span>
                            <Users className="w-4 h-4" />
                            <span>{right.commonScenarios.length} scenarios</span>
                          </div>
                        </div>
                        
                        <Button variant="ghost" size="sm" className="group-hover:bg-primary group-hover:text-white">
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              // Individual Right Detail View
              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-6">
                  <Button variant="ghost" onClick={handleBack} size="sm">
                    ← Back to Rights List
                  </Button>
                  <Badge variant="secondary" className="text-sm">
                    {selectedRight.section}
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    {selectedRight.category}
                  </Badge>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    Overview
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedRight.description}
                  </p>
                </div>

                <Separator />

                {/* Key Points */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Key Points
                  </h3>
                  <div className="grid gap-3">
                    {selectedRight.keyPoints.map((point, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Practical Applications */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    Practical Applications
                  </h3>
                  <div className="grid gap-3">
                    {selectedRight.practicalApplication.map((application, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                        <span>{application}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Common Scenarios */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-orange-600" />
                    Common Scenarios & Guidance
                  </h3>
                  <div className="space-y-4">
                    {selectedRight.commonScenarios.map((scenario, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <h4 className="font-medium mb-2 text-orange-700 dark:text-orange-400">
                          Scenario: {scenario.scenario}
                        </h4>
                        <p className="text-muted-foreground mb-3">
                          {scenario.guidance}
                        </p>
                        <div className="bg-muted/50 rounded p-3">
                          <p className="text-sm font-medium text-muted-foreground">
                            Constitutional Basis:
                          </p>
                          <p className="text-sm">{scenario.constitutional_basis}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-6">
                  <Button variant="default" className="flex-1">
                    <FileText className="w-4 h-4 mr-2" />
                    Download Guide
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Users className="w-4 h-4 mr-2" />
                    Find Legal Help
                  </Button>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};