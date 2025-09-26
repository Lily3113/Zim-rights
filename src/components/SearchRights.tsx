import { useState } from "react";
import { Search, Loader2, BookOpen, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRights } from "@/hooks/useRights";
import { useToast } from "@/hooks/use-toast";

const SearchRights = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { getTranslation } = useLanguage();
  const { searchRights } = useRights();
  const { toast } = useToast();

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    
    if (query.length < 3) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    
    try {
      const results = await searchRights(query);
      setSearchResults(results);
      
      if (results.length === 0) {
        toast({
          title: "No results found",
          description: `No rights found matching "${query}"`,
        });
      }
    } catch (error) {
      console.error('Search error:', error);
      toast({
        title: "Search Error",
        description: "Failed to search rights. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewFullGuide = (rightId: string) => {
    toast({
      title: "Full Guide",
      description: "Opening detailed guide...",
    });
  };

  const handleInteractiveExample = (rightId: string) => {
    toast({
      title: "Interactive Example",
      description: "Loading interactive scenario...",
    });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Search Constitutional Rights
            </h2>
            <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              Find specific information about your constitutional rights. Search by topic, 
              keyword, or situation to get detailed guidance.
            </p>
          </div>

          <div className="relative mb-8">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            <Input
              type="text"
              placeholder={getTranslation('search_placeholder')}
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10 h-12 text-lg"
            />
            {isLoading && (
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <Loader2 className="h-5 w-5 text-muted-foreground animate-spin" />
              </div>
            )}
          </div>

          {searchQuery.length > 0 && searchQuery.length < 3 && (
            <div className="text-center py-8">
              <AlertCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                Please enter at least 3 characters to search
              </p>
            </div>
          )}

          {searchQuery.length >= 3 && searchResults.length === 0 && !isLoading && (
            <div className="text-center py-8">
              <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                No rights found matching "{searchQuery}"
              </p>
            </div>
          )}

          {searchResults.length > 0 && (
            <div className="space-y-6">
              <p className="text-muted-foreground mb-6">
                Found {searchResults.length} right{searchResults.length !== 1 ? 's' : ''} for "{searchQuery}"
              </p>
              
              {searchResults.map((right) => (
                <Card key={right.id} className="interactive-card">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl mb-2">{right.title}</CardTitle>
                        <CardDescription>
                          <Badge variant="outline" className="mr-2">
                            {right.section}
                          </Badge>
                          <span className="text-primary font-medium">{right.category_id}</span>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {right.description}
                    </p>

                    {right.key_points && right.key_points.length > 0 && (
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                          Key Points
                        </h4>
                        <ul className="space-y-2">
                          {right.key_points.slice(0, 3).map((point: string, index: number) => (
                            <li key={index} className="text-sm text-muted-foreground flex items-start">
                              <div className="w-1 h-1 bg-muted-foreground rounded-full mt-2 mr-2 flex-shrink-0"></div>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {right.practical_application && (
                      <div className="mb-6 p-4 bg-muted/50 rounded-lg">
                        <h4 className="font-semibold mb-2">Practical Application</h4>
                        <p className="text-sm text-muted-foreground">
                          {right.practical_application}
                        </p>
                      </div>
                    )}

                    {right.common_scenarios && right.common_scenarios.length > 0 && (
                      <div className="mb-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                        <h4 className="font-semibold mb-2 text-primary">
                          Common Scenarios
                        </h4>
                        <ul className="space-y-1">
                          {right.common_scenarios.slice(0, 2).map((scenario: string, index: number) => (
                            <li key={index} className="text-sm text-muted-foreground">
                              • {scenario}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex gap-3">
                      <Button 
                        variant="default" 
                        size="sm"
                        onClick={() => handleViewFullGuide(right.id)}
                      >
                        View Full Guide
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleInteractiveExample(right.id)}
                      >
                        Interactive Example
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {searchQuery.length === 0 && (
            <div className="text-center">
              <p className="text-muted-foreground mb-4">Popular searches:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "civil rights",
                  "employment",
                  "housing",
                  "family rights",
                  "legal procedures",
                  "emergency rights"
                ].map((suggestion) => (
                  <Button
                    key={suggestion}
                    variant="outline"
                    size="sm"
                    onClick={() => handleSearch(suggestion)}
                    className="hover:bg-primary hover:text-white"
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchRights;