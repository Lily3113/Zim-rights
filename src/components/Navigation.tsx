import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import LanguageSelector from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";
import EmergencyContactsModal from "@/components/EmergencyContactsModal";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const { getTranslation } = useLanguage();

  const navItems = [
    { name: getTranslation("nav.home") || "Home", href: "#home" },
    { name: getTranslation("nav.rights") || "Rights Guide", href: "#rights" },
    { name: getTranslation("nav.tools") || "Interactive Tools", href: "#tools" },
    { name: getTranslation("nav.contact") || "Contact", action: () => setContactModalOpen(true) },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gradient">{getTranslation("app.title") || "ZimRights Navigator"}</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              if (item.action) {
                return (
                  <button
                    key={item.name}
                    onClick={item.action}
                    className="px-4 py-2 rounded-lg text-foreground hover:bg-muted transition-smooth"
                  >
                    <span>{item.name}</span>
                  </button>
                );
              }
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 rounded-lg text-foreground hover:bg-muted transition-smooth"
                >
                  <span>{item.name}</span>
                </a>
              );
            })}
            <LanguageSelector />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 pb-4" : "max-h-0"
        )}>
          <div className="pt-2 space-y-2">
            {navItems.map((item) => {
              if (item.action) {
                return (
                  <button
                    key={item.name}
                    onClick={() => {
                      item.action();
                      setIsOpen(false);
                    }}
                    className="px-4 py-3 rounded-lg text-foreground hover:bg-muted transition-smooth w-full text-left"
                  >
                    <span>{item.name}</span>
                  </button>
                );
              }
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 rounded-lg text-foreground hover:bg-muted transition-smooth"
                  onClick={() => setIsOpen(false)}
                >
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Emergency Contacts Modal */}
      <EmergencyContactsModal 
        open={contactModalOpen}
        onOpenChange={setContactModalOpen}
        initialCategory="emergency"
      />
    </nav>
  );
};

export default Navigation;