import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram,
  BookOpen,
  Shield,
  Users,
  ExternalLink
} from "lucide-react";
import EmergencyContactsModal from "./EmergencyContactsModal";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const [emergencyModalOpen, setEmergencyModalOpen] = useState(false);
  const { getTranslation } = useLanguage();

  const quickLinks = [
    { name: "Civil Rights", href: "#rights", action: () => scrollToSection("#rights") },
    { name: "Employment Rights", href: "#rights", action: () => scrollToSection("#rights") },
    { name: "Housing Rights", href: "#rights", action: () => scrollToSection("#rights") },
    { name: "Family Rights", href: "#rights", action: () => scrollToSection("#rights") },
    { name: "Legal Procedures", href: "#rights", action: () => scrollToSection("#rights") },
    { name: "Emergency Rights", href: "#rights", action: () => scrollToSection("#rights") }
  ];

  const resources = [
    { 
      name: "Constitution of Zimbabwe", 
      href: "/Constitution_of_Zimbabwe_Amendment_No._20.pdf", 
      external: true 
    },
    { 
      name: "Legal Aid Directory", 
      href: "#", 
      action: () => setEmergencyModalOpen(true) 
    },
    { 
      name: "Emergency Contacts", 
      href: "#", 
      action: () => setEmergencyModalOpen(true) 
    },
    { name: "Interactive Guides", href: "#tools", action: () => scrollToSection("#tools") },
    { 
      name: "FAQs", 
      href: "mailto:info@zimrights.zw?subject=Frequently Asked Questions" 
    },
    { 
      name: "About Us", 
      href: "mailto:info@zimrights.zw?subject=About ZimRights Navigator" 
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                <span className="text-primary font-bold text-xl">Z</span>
              </div>
              <span className="text-2xl font-bold">{getTranslation('app.title') || 'ZimRights Navigator'}</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              {getTranslation('footer.tagline') || 'Empowering Zimbabweans through accessible legal knowledge. Know your rights, navigate justice with confidence.'}
            </p>
            <div className="flex space-x-3">
              <Button variant="floating" size="icon">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="floating" size="icon">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="floating" size="icon">
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              {getTranslation('footer.rights_categories') || 'Rights Categories'}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={link.action}
                    className="text-white/70 hover:text-white transition-smooth hover:translate-x-1 inline-block text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <BookOpen className="w-5 h-5 mr-2" />
              {getTranslation('footer.resources') || 'Resources'}
            </h3>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.name}>
                  {link.action ? (
                    <button 
                      onClick={link.action}
                      className="text-white/70 hover:text-white transition-smooth hover:translate-x-1 inline-flex items-center text-left"
                    >
                      {link.name}
                      {link.external && <ExternalLink className="w-3 h-3 ml-1" />}
                    </button>
                  ) : (
                    <a 
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-white/70 hover:text-white transition-smooth hover:translate-x-1 inline-flex items-center"
                    >
                      {link.name}
                      {link.external && <ExternalLink className="w-3 h-3 ml-1" />}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Users className="w-5 h-5 mr-2" />
              {getTranslation('footer.support') || 'Get Support'}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center text-white/70">
                <Mail className="w-5 h-5 mr-3" />
                <a 
                  href="mailto:info@zimrights.zw" 
                  className="hover:text-white transition-smooth"
                >
                  info@zimrights.zw
                </a>
              </div>
              <div className="flex items-center text-white/70">
                <Phone className="w-5 h-5 mr-3" />
                <a 
                  href="tel:+2634123456" 
                  className="hover:text-white transition-smooth font-mono"
                >
                  +263 4 123 4567
                </a>
              </div>
              <div className="flex items-center text-white/70">
                <MapPin className="w-5 h-5 mr-3" />
                <span>Harare, Zimbabwe</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-white/10 rounded-xl">
              <h4 className="font-semibold mb-2">Emergency Legal Aid</h4>
              <p className="text-sm text-white/80 mb-3">
                Need immediate legal assistance? Contact these verified organizations:
              </p>
            <Button 
              variant="secondary" 
              size="sm" 
              className="w-full bg-green-600 hover:bg-green-700 text-white border-green-600"
              onClick={() => setEmergencyModalOpen(true)}
            >
              {getTranslation('footer.emergency') || 'View Emergency Contacts'}
            </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              © 2024 ZimRights Navigator. Educational resource based on Zimbabwe's Constitution.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-smooth">
                Terms of Use
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-smooth">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contacts Modal */}
      <EmergencyContactsModal 
        open={emergencyModalOpen}
        onOpenChange={setEmergencyModalOpen}
      />
    </footer>
  );
};

export default Footer;