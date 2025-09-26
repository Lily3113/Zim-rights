import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ExternalLink, 
  Search,
  AlertTriangle,
  Shield,
  Heart,
  Scale,
  Users
} from "lucide-react";
import { emergencyContacts, getContactsByCategory, searchContacts, type EmergencyContact } from "@/data/emergencyContacts";

interface EmergencyContactsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialCategory?: string;
}

const EmergencyContactsModal = ({ open, onOpenChange, initialCategory }: EmergencyContactsModalProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || "all");

  const categoryIcons = {
    'emergency': AlertTriangle,
    'legal-aid': Scale,
    'human-rights': Shield,
    'police': Shield,
    'support': Heart,
    'all': Users
  };

  const categoryLabels = {
    'emergency': 'Emergency Services',
    'legal-aid': 'Legal Aid',
    'human-rights': 'Human Rights',
    'police': 'Police Affairs',
    'support': 'Support Services',
    'all': 'All Services'
  };

  const getFilteredContacts = (): EmergencyContact[] => {
    let contacts = emergencyContacts;

    if (selectedCategory !== "all") {
      contacts = getContactsByCategory(selectedCategory);
    }

    if (searchQuery.trim()) {
      contacts = searchContacts(searchQuery);
    }

    return contacts.sort((a, b) => {
      if (a.priority === 'high' && b.priority !== 'high') return -1;
      if (b.priority === 'high' && a.priority !== 'high') return 1;
      return 0;
    });
  };

  const categories = Object.keys(categoryLabels) as Array<keyof typeof categoryLabels>;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl h-[90vh] flex flex-col">
        <DialogHeader className="flex-shrink-0">
          <DialogTitle className="text-2xl font-bold text-center">
            Emergency Contacts & Legal Aid
          </DialogTitle>
          <p className="text-muted-foreground text-center">
            Immediate help when you need it most - Free and confidential support
          </p>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto space-y-4">
          {/* Emergency Banner */}
          <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
            <div className="flex items-center gap-2 text-red-700 dark:text-red-400 font-semibold mb-2">
              <AlertTriangle className="w-5 h-5" />
              In Immediate Danger?
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="destructive" className="w-full" asChild>
                <a href="tel:995" className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span className="font-mono">Police: 995 / 999</span>
                </a>
              </Button>
              <Button variant="destructive" className="w-full" asChild>
                <a href="tel:994" className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span className="font-mono">Medical: 994</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search contacts, services, or issues..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const Icon = categoryIcons[category];
                const isSelected = selectedCategory === category;
                return (
                  <Button
                    key={category}
                    variant={isSelected ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="flex items-center gap-2"
                  >
                    <Icon className="w-4 h-4" />
                    {categoryLabels[category]}
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Contacts List */}
          <div className="space-y-4">
            {getFilteredContacts().map((contact) => (
              <Card key={contact.id} className="p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-lg flex items-center gap-2">
                      {contact.name}
                      {contact.priority === 'high' && (
                        <Badge variant="destructive" className="text-xs">Priority</Badge>
                      )}
                    </h3>
                    <p className="text-muted-foreground text-sm">{contact.description}</p>
                  </div>
                  <Badge variant="outline" className="capitalize">
                    {contact.category.replace('-', ' ')}
                  </Badge>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    {/* Phone Numbers */}
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-primary" />
                      <div className="flex flex-wrap gap-2">
                    {contact.phone.map((phone, index) => (
                      <Button key={index} variant="link" size="sm" asChild className="p-0 h-auto">
                        <a 
                          href={`tel:${phone.replace(/\s+/g, '')}`} 
                          className="text-primary hover:underline font-mono"
                        >
                          {phone}
                        </a>
                      </Button>
                    ))}
                      </div>
                    </div>

                    {/* Email */}
                    {contact.email && (
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="w-4 h-4 text-primary" />
                        <Button variant="link" size="sm" asChild className="p-0 h-auto">
                          <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
                            {contact.email}
                          </a>
                        </Button>
                      </div>
                    )}

                    {/* Address */}
                    {contact.address && (
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">{contact.address}</span>
                      </div>
                    )}

                    {/* Website */}
                    {contact.website && (
                      <div className="flex items-center gap-2 text-sm">
                        <ExternalLink className="w-4 h-4 text-primary" />
                        <Button variant="link" size="sm" asChild className="p-0 h-auto">
                          <a href={`https://${contact.website}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            {contact.website}
                          </a>
                        </Button>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    {/* Hours */}
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">{contact.hours}</span>
                    </div>

                    {/* Services */}
                    <div className="space-y-1">
                      <div className="text-sm font-medium">Services:</div>
                      <div className="flex flex-wrap gap-1">
                        {contact.services.slice(0, 3).map((service, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                        {contact.services.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{contact.services.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            {getFilteredContacts().length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                <Users className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No contacts found matching your search.</p>
                <p className="text-sm">Try a different search term or category.</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer Notice */}
        <div className="flex-shrink-0 bg-muted/50 rounded-lg p-3 text-sm text-muted-foreground mt-4">
          <p className="font-medium mb-1">Important Notice:</p>
          <p>These services are provided by independent organizations. Contact information is provided for educational purposes. In emergencies, always call 995 or 999 first.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EmergencyContactsModal;