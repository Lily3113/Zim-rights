import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { constitutionalRights } from '@/data/constitutionalRights';

interface Right {
  id: string;
  category_id: string;
  section: string;
  title: string;
  description: string;
  key_points: string[];
  practical_application: string;
  common_scenarios: string[];
}

// Helper to map dataset categories to UI category ids
const mapCategoryToUIId = (category: string): string => {
  const c = category.toLowerCase();
  if (c.includes('economic') || c.includes('employment') || c.includes('labour') || c.includes('labor')) return 'employment-rights';
  if (c.includes('criminal') || c.includes('justice') || c.includes('trial') || c.includes('court') || c.includes('legal')) return 'legal-procedures';
  if (c.includes('security') || c.includes('detention') || c.includes('emergency') || c.includes('police')) return 'emergency-rights';
  if (c.includes('housing') || c.includes('property') || c.includes('land') || c.includes('eviction') || c.includes('home')) return 'housing-rights';
  if (c.includes('family') || c.includes('children') || c.includes('marriage')) return 'family-rights';
  return 'civil-rights';
};

const POPULAR_SEARCH_SYNONYMS: Record<string, string[]> = {
  'civil rights': ['fundamental rights', 'equality', 'political rights', 'human rights', 'association', 'expression', 'demonstrate'],
  'employment': ['economic rights', 'labour', 'labor', 'work', 'wages', 'strike', 'collective', 'safe working conditions'],
  'housing': ['property', 'land', 'eviction', 'home', 'premises', 'housing rights'],
  'family rights': ['children', 'marriage', 'family', 'inheritance', 'guardianship'],
  'legal procedures': ['arrest', 'detention', 'trial', 'court', 'bail', 'legal representation', 'due process', 'justice'],
  'emergency rights': ['police', 'detention', 'arrest', 'custody', 'emergency']
};

const buildSearchTerms = (q: string): string[] => {
  const base = q.trim().toLowerCase();
  const syns = POPULAR_SEARCH_SYNONYMS[base] || [];
  return [base, ...syns.map(s => s.toLowerCase())];
};

export const useRights = () => {
  const [rights, setRights] = useState<Right[]>([]);
  const [loading, setLoading] = useState(true);
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    fetchRights();
  }, [currentLanguage]);

  const fetchRights = async () => {
    setLoading(true);
    try {
      const transformedRights = constitutionalRights.map(right => ({
        id: right.id,
        category_id: mapCategoryToUIId(right.category),
        section: right.section,
        title: right.title,
        description: right.description,
        key_points: right.keyPoints,
        practical_application: right.practicalApplication.join('; '),
        common_scenarios: right.commonScenarios.map(scenario => scenario.scenario),
      }));
      setRights(transformedRights);
    } catch (error) {
      console.error('Error fetching rights:', error);
    } finally {
      setLoading(false);
    }
  };

  const searchRights = async (query: string): Promise<Right[]> => {
    if (!query || query.length < 3) return [];

    try {
      // Search through local data and transform to Right interface
      const terms = buildSearchTerms(query);
      const filteredRights = constitutionalRights.filter(right => {
        const content = [
          right.title,
          right.description,
          right.section,
          right.category,
          ...right.keyPoints,
          ...right.practicalApplication,
          ...right.commonScenarios.flatMap(s => [s.scenario, s.guidance, s.constitutional_basis])
        ].join(' ').toLowerCase();
        return terms.some(t => content.includes(t));
      });
      
      return filteredRights.map(right => ({
        id: right.id,
        category_id: mapCategoryToUIId(right.category),
        section: right.section,
        title: right.title,
        description: right.description,
        key_points: right.keyPoints,
        practical_application: right.practicalApplication.join('; '),
        common_scenarios: right.commonScenarios.map(scenario => scenario.scenario),
      }));
    } catch (error) {
      console.error('Error searching rights:', error);
      return [];
    }
  };

  const getRightsByCategory = (categoryId: string): Right[] => {
    return rights.filter(right => right.category_id === categoryId);
  };

  return {
    rights,
    loading,
    searchRights,
    getRightsByCategory,
  };
};