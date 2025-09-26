import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Home, 
  Briefcase, 
  Users, 
  Heart, 
  Gavel, 
  MessageSquare, 
  AlertTriangle,
  ArrowRight 
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRights } from "@/hooks/useRights";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { RightsDetailModal } from "./RightsDetailModal";

const categories = [
  {
    id: "civil-rights",
    title: "Civil Rights",
    description: "Freedom of expression, assembly, and movement. Your basic civic freedoms.",
    icon: Shield,
    color: "from-blue-500 to-blue-600",
    rights: ["Freedom of Expression", "Freedom of Assembly", "Freedom of Movement", "Right to Privacy"]
  },
  {
    id: "employment-rights",
    title: "Employment Rights",
    description: "Fair wages, safe working conditions, and collective bargaining rights.",
    icon: Briefcase,
    color: "from-green-500 to-green-600",
    rights: ["Fair Wages", "Safe Working Conditions", "Right to Strike", "Collective Bargaining"]
  },
  {
    id: "housing-rights",
    title: "Housing Rights",
    description: "Access to adequate housing and protection from unlawful eviction.",
    icon: Home,
    color: "from-orange-500 to-orange-600",
    rights: ["Right to Housing", "Protection from Eviction", "Property Rights", "Land Rights"]
  },
  {
    id: "family-rights",
    title: "Family Rights",
    description: "Marriage, children's rights, and family protection under the law.",
    icon: Heart,
    color: "from-pink-500 to-pink-600",
    rights: ["Marriage Rights", "Children's Rights", "Family Protection", "Inheritance Rights"]
  },
  {
    id: "legal-procedures",
    title: "Legal Procedures",
    description: "Access to courts, legal representation, and fair trial rights.",
    icon: Gavel,
    color: "from-purple-500 to-purple-600",
    rights: ["Right to Legal Representation", "Fair Trial", "Access to Courts", "Habeas Corpus"]
  },
  {
    id: "emergency-rights",
    title: "Emergency Rights",
    description: "Your rights during police interactions and emergency situations.",
    icon: AlertTriangle,
    color: "from-red-500 to-red-600",
    rights: ["Rights During Arrest", "Police Interactions", "Emergency Procedures", "Detention Rights"]
  }
];

const RightsCategories = () => {
  const { getTranslation } = useLanguage();
  const { getRightsByCategory } = useRights();
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCategoryId, setModalCategoryId] = useState<string | null>(null);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setModalCategoryId(categoryId);
    setModalOpen(true);
  };

  const handleLearnMoreClick = (e: React.MouseEvent, categoryId: string) => {
    e.stopPropagation();
    setModalCategoryId(categoryId);
    setModalOpen(true);
  };

  const handleViewAllClick = () => {
    setModalCategoryId(null);
    setModalOpen(true);
  };

  return (
    <section id="rights" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Shield className="w-12 h-12 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">
              {getTranslation('rights.title') || 'Your Constitutional Rights'}
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {getTranslation('rights.subtitle') || 'Understanding your rights is the first step to protecting them. Browse our comprehensive guide to Zimbabwe\'s Constitutional protections.'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="interactive-card bg-card p-8 group cursor-pointer relative overflow-hidden"
                onClick={() => handleCategoryClick(category.id)}
              >
                {/* Background Icon - Centered */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <Icon className="w-64 h-64 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-smooth relative z-10">
                  {getTranslation(`category.${category.id.replace('-', '_')}`) || category.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed relative z-10">
                  {getTranslation(`category.${category.id.replace('-', '_')}_desc`) || category.description}
                </p>

                <div className="space-y-2 mb-6 relative z-10">
                  {category.rights.slice(0, 3).map((right, index) => (
                    <div key={index} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {right}
                    </div>
                  ))}
                  {category.rights.length > 3 && (
                    <div className="text-sm text-primary font-medium">
                      +{category.rights.length - 3} more rights
                    </div>
                  )}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary relative z-10"
                  onClick={(e) => handleLearnMoreClick(e, category.id)}
                >
                  {getTranslation('common.learn_more') || 'Learn More'}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
                </Button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" onClick={handleViewAllClick}>
            View All Rights
          </Button>
        </div>

        {/* Rights Detail Modal */}
        <RightsDetailModal 
          open={modalOpen}
          onOpenChange={setModalOpen}
          categoryId={modalCategoryId || undefined}
        />
      </div>
    </section>
  );
};

export default RightsCategories;