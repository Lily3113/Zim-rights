-- Create content translations table
CREATE TABLE public.content_translations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  content_key TEXT NOT NULL,
  language_code TEXT NOT NULL,
  title TEXT,
  description TEXT,
  content JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(content_key, language_code)
);

-- Enable Row Level Security
ALTER TABLE public.content_translations ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (content is public)
CREATE POLICY "Content translations are publicly readable" 
ON public.content_translations 
FOR SELECT 
USING (true);

-- Create constitutional rights table
CREATE TABLE public.constitutional_rights (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  category_id TEXT NOT NULL,
  section TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.constitutional_rights ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Constitutional rights are publicly readable" 
ON public.constitutional_rights 
FOR SELECT 
USING (true);

-- Create rights translations table
CREATE TABLE public.rights_translations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  right_id UUID REFERENCES public.constitutional_rights(id) ON DELETE CASCADE,
  language_code TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  key_points TEXT[],
  practical_application TEXT,
  common_scenarios TEXT[],
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(right_id, language_code)
);

-- Enable Row Level Security
ALTER TABLE public.rights_translations ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Rights translations are publicly readable" 
ON public.rights_translations 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
NEW.updated_at = now();
RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_content_translations_updated_at
BEFORE UPDATE ON public.content_translations
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_constitutional_rights_updated_at
BEFORE UPDATE ON public.constitutional_rights
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample multilingual content
INSERT INTO public.content_translations (content_key, language_code, title, description, content) VALUES
-- English content
('hero_title', 'en', 'Know Your Constitutional Rights', 'Understanding your rights as a Zimbabwean citizen', '{}'),
('hero_subtitle', 'en', 'Empowering Zimbabweans with Knowledge of Their Constitutional Rights', 'Learn, understand, and exercise your constitutional rights with confidence', '{}'),
('search_placeholder', 'en', 'Search for your rights...', NULL, '{}'),
('categories_title', 'en', 'Explore Your Constitutional Rights', 'Navigate through different categories of your constitutional rights. Each section provides clear explanations and practical guidance based on Zimbabwe''s Constitution.', '{}'),
('view_all_button', 'en', 'View All Rights Categories', NULL, '{}'),

-- Shona content
('hero_title', 'sn', 'Ziva Kodzero Dzako Dzebumbiro', 'Kunzwisisa kodzero dzako semuZimbabwe', '{}'),
('hero_subtitle', 'sn', 'Kupa Simba kuvaZimbabwe neRuzivo rweKodzero Dzavo Dzebumbiro', 'Dzidza, nzwisisa, uye shandisa kodzero dzako dzebumbiro nechivimbo', '{}'),
('search_placeholder', 'sn', 'Tsvaga kodzero dzako...', NULL, '{}'),
('categories_title', 'sn', 'Ongorora Kodzero Dzako Dzebumbiro', 'Famba-famba muzvikamu zvakasiyana zvekodzero dzako dzebumbiro. Chikamu chega chega chinopa tsananguro dzakajeka uye nhungamiro inoshanda zvichienderana neBumbiro reZimbabwe.', '{}'),
('view_all_button', 'sn', 'Ona Zvikamu Zvose zveKodzero', NULL, '{}'),

-- Ndebele content
('hero_title', 'nd', 'Yazi Amalungelo Akho Omthethosisekelo', 'Ukuqonda amalungelo akho njengoweZimbabwe', '{}'),
('hero_subtitle', 'nd', 'Ukunika Amandla AbantubaseZimbabwe Ngolwazi Lwamalungelo Abo Omthethosisekelo', 'Funda, uqonde, futhi usebenzise amalungelo akho omthethosisekelo ngokuzithemba', '{}'),
('search_placeholder', 'nd', 'Cinga amalungelo akho...', NULL, '{}'),
('categories_title', 'nd', 'Hlola Amalungelo Akho Omthethosisekelo', 'Zulazula ezigabeni ezahlukahlukene zamalungelo akho omthethosisekelo. Isigaba ngasinye sinikeza izincazelo ezicacileyo nezikhongolose ezisebenzayo ngokususelwa eMthethosisekelweni weZimbabwe.', '{}'),
('view_all_button', 'nd', 'Bona Zonke Izigaba Zamalungelo', NULL, '{}');

-- Insert sample constitutional rights with categories
INSERT INTO public.constitutional_rights (category_id, section) VALUES
('civil-rights', 'Section 58-67'),
('employment-rights', 'Section 65'),
('housing-rights', 'Section 74'),
('family-rights', 'Section 78-81'),
('legal-procedures', 'Section 69-71'),
('emergency-rights', 'Section 50-57');

-- Insert sample rights translations
INSERT INTO public.rights_translations (right_id, language_code, title, description, key_points, practical_application, common_scenarios) 
SELECT 
    cr.id,
    'en',
    CASE cr.category_id
        WHEN 'civil-rights' THEN 'Civil Rights and Freedoms'
        WHEN 'employment-rights' THEN 'Employment and Labour Rights'
        WHEN 'housing-rights' THEN 'Housing and Property Rights'
        WHEN 'family-rights' THEN 'Family and Marriage Rights'
        WHEN 'legal-procedures' THEN 'Legal and Procedural Rights'
        WHEN 'emergency-rights' THEN 'Emergency and Detention Rights'
    END,
    CASE cr.category_id
        WHEN 'civil-rights' THEN 'Freedom of expression, assembly, and movement. Your basic civic freedoms.'
        WHEN 'employment-rights' THEN 'Fair wages, safe working conditions, and collective bargaining rights.'
        WHEN 'housing-rights' THEN 'Access to adequate housing and protection from unlawful eviction.'
        WHEN 'family-rights' THEN 'Marriage, children''s rights, and family protection under the law.'
        WHEN 'legal-procedures' THEN 'Access to courts, legal representation, and fair trial rights.'
        WHEN 'emergency-rights' THEN 'Your rights during police interactions and emergency situations.'
    END,
    CASE cr.category_id
        WHEN 'civil-rights' THEN ARRAY['Freedom of Expression', 'Freedom of Assembly', 'Freedom of Movement', 'Right to Privacy']
        WHEN 'employment-rights' THEN ARRAY['Fair Wages', 'Safe Working Conditions', 'Right to Strike', 'Collective Bargaining']
        WHEN 'housing-rights' THEN ARRAY['Right to Housing', 'Protection from Eviction', 'Property Rights', 'Land Rights']
        WHEN 'family-rights' THEN ARRAY['Marriage Rights', 'Children''s Rights', 'Family Protection', 'Inheritance Rights']
        WHEN 'legal-procedures' THEN ARRAY['Right to Legal Representation', 'Fair Trial', 'Access to Courts', 'Habeas Corpus']
        WHEN 'emergency-rights' THEN ARRAY['Rights During Arrest', 'Police Interactions', 'Emergency Procedures', 'Detention Rights']
    END,
    'Practical application details...',
    ARRAY['Common scenario 1', 'Common scenario 2', 'Common scenario 3']
FROM public.constitutional_rights cr;