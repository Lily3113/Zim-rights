export interface EmergencyContact {
  id: string;
  name: string;
  description: string;
  phone: string[];
  email?: string;
  address?: string;
  website?: string;
  hours: string;
  services: string[];
  category: 'legal-aid' | 'emergency' | 'human-rights' | 'police' | 'support';
  priority: 'high' | 'medium' | 'low';
}

export const emergencyContacts: EmergencyContact[] = [
  // Emergency Services
  {
    id: 'police-emergency',
    name: 'Police Emergency',
    description: 'Report crimes, emergencies, and request immediate police assistance',
    phone: ['995', '999'],
    hours: '24/7',
    services: ['Emergency response', 'Crime reporting', 'Immediate assistance'],
    category: 'emergency',
    priority: 'high'
  },
  {
    id: 'ambulance-fire',
    name: 'Ambulance & Fire Services',
    description: 'Medical emergencies and fire department',
    phone: ['994', '999'],
    hours: '24/7',
    services: ['Medical emergencies', 'Fire emergencies', 'Rescue services'],
    category: 'emergency',
    priority: 'high'
  },

  // Legal Aid Organizations
  {
    id: 'legal-aid-directorate',
    name: 'Legal Aid Directorate',
    description: 'Government legal aid services for those who cannot afford legal representation',
    phone: ['+263-4-794-741', '+263-4-794-742'],
    email: 'info@lad.gov.zw',
    address: 'Legal Aid Directorate, Harare',
    website: 'www.lad.gov.zw',
    hours: 'Monday-Friday: 8:00-16:30',
    services: ['Free legal representation', 'Legal advice', 'Court assistance', 'Civil matters'],
    category: 'legal-aid',
    priority: 'high'
  },
  {
    id: 'law-society-zimbabwe',
    name: 'Law Society of Zimbabwe',
    description: 'Professional legal services directory and legal assistance',
    phone: ['+263-4-252-506', '+263-4-252-507'],
    email: 'info@lawsociety.org.zw',
    address: '142 Nelson Mandela Avenue, Harare',
    website: 'www.lawsociety.org.zw',
    hours: 'Monday-Friday: 8:00-17:00',
    services: ['Lawyer referrals', 'Legal advice', 'Professional standards'],
    category: 'legal-aid',
    priority: 'high'
  },

  // Human Rights Organizations  
  {
    id: 'zimbabwe-human-rights-commission',
    name: 'Zimbabwe Human Rights Commission',
    description: 'Constitutional body promoting and protecting human rights',
    phone: ['+263-4-700-952', '+263-4-700-953'],
    email: 'info@zhrc.org.zw',
    address: 'ZHRC House, 21 Rowland Square, Milton Park, Harare',
    website: 'www.zhrc.org.zw',
    hours: 'Monday-Friday: 8:00-17:00',
    services: ['Human rights violations', 'Constitutional complaints', 'Legal education'],
    category: 'human-rights',
    priority: 'high'
  },
  {
    id: 'zimbabwe-lawyers-human-rights',
    name: 'Zimbabwe Lawyers for Human Rights',
    description: 'Human rights legal assistance and advocacy',
    phone: ['+263-4-705-590'],
    email: 'info@zlhr.org.zw',
    address: 'ZLHR House, Harare',
    website: 'www.zlhr.org.zw',
    hours: 'Monday-Friday: 8:00-17:00',
    services: ['Human rights cases', 'Legal representation', 'Advocacy', 'Public interest litigation'],
    category: 'human-rights',
    priority: 'high'
  },

  // Support Services
  {
    id: 'childline-zimbabwe',
    name: 'Childline Zimbabwe',
    description: '24-hour helpline for children in distress',
    phone: ['116'],
    email: 'info@childlinezimbabwe.org.zw',
    website: 'www.childlinezimbabwe.org.zw',
    hours: '24/7',
    services: ['Child protection', 'Crisis counseling', 'Emergency assistance', 'Referrals'],
    category: 'support',
    priority: 'high'
  },
  {
    id: 'lifeline-zimbabwe',
    name: 'Lifeline Zimbabwe',
    description: 'Crisis counseling and suicide prevention',
    phone: ['+263-4-722-000', '901'],
    email: 'admin@lifelinezim.org',
    hours: '24/7',
    services: ['Crisis counseling', 'Suicide prevention', 'Mental health support'],
    category: 'support',
    priority: 'high'
  },

  // Women's Rights & Gender-Based Violence
  {
    id: 'musasa-project',
    name: 'Musasa Project',
    description: 'Support for survivors of gender-based violence',
    phone: ['+263-4-252-652', '+263-4-781-478'],
    email: 'info@musasaproject.org',
    address: '14 Mason Road, Eastlea, Harare',
    website: 'www.musasaproject.org',
    hours: 'Monday-Friday: 8:00-17:00, Emergency 24/7',
    services: ['GBV support', 'Legal assistance', 'Counseling', 'Safe houses'],
    category: 'support',
    priority: 'high'
  },

  // Labor & Employment
  {
    id: 'zctu',
    name: 'Zimbabwe Congress of Trade Unions',
    description: 'Workers rights and labor issues',
    phone: ['+263-4-791-803'],
    email: 'zctu@zctu.co.zw',
    address: 'ZCTU House, Harare',
    website: 'www.zctu.co.zw',
    hours: 'Monday-Friday: 8:00-17:00',
    services: ['Workers rights', 'Labor disputes', 'Employment law', 'Union support'],
    category: 'legal-aid',
    priority: 'medium'
  },

  // Police Internal Affairs
  {
    id: 'police-internal-affairs',
    name: 'Police Internal Affairs',
    description: 'Report police misconduct and file complaints',
    phone: ['+263-4-703-631'],
    address: 'Police General Headquarters, Harare',
    hours: 'Monday-Friday: 8:00-17:00',
    services: ['Police complaints', 'Misconduct reporting', 'Internal investigations'],
    category: 'police',
    priority: 'medium'
  }
];

export const getContactsByCategory = (category: string) => {
  return emergencyContacts.filter(contact => contact.category === category);
};

export const getHighPriorityContacts = () => {
  return emergencyContacts.filter(contact => contact.priority === 'high');
};

export const searchContacts = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return emergencyContacts.filter(contact => 
    contact.name.toLowerCase().includes(lowercaseQuery) ||
    contact.description.toLowerCase().includes(lowercaseQuery) ||
    contact.services.some(service => service.toLowerCase().includes(lowercaseQuery))
  );
};