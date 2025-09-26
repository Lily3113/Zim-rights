// Constitutional Rights Data from Zimbabwe Constitution Chapter 4
export interface ConstitutionalRight {
  id: string;
  title: string;
  section: string;
  category: string;
  description: string;
  keyPoints: string[];
  practicalApplication: string[];
  relatedSections?: string[];
  commonScenarios: {
    scenario: string;
    guidance: string;
    constitutional_basis: string;
  }[];
}

export const constitutionalRights: ConstitutionalRight[] = [
  // Fundamental Human Rights and Freedoms (Sections 48-71)
  {
    id: "right-to-life",
    title: "Right to Life",
    section: "Section 48",
    category: "Fundamental Rights",
    description: "Every person has the fundamental right to life, which is protected under Zimbabwe's Constitution.",
    keyPoints: [
      "Every person has the right to life",
      "Death penalty restrictions apply",
      "Protection of unborn children",
      "Special protections for women and minors"
    ],
    practicalApplication: [
      "Protection from unlawful killing",
      "Medical treatment rights",
      "Self-defense situations",
      "Police use of force limitations"
    ],
    commonScenarios: [
      {
        scenario: "Medical emergency requiring treatment",
        guidance: "You have the right to receive life-saving medical treatment. Healthcare providers cannot refuse emergency care.",
        constitutional_basis: "Section 48 - Right to life includes preservation of life through medical care"
      },
      {
        scenario: "Threatened by another person",
        guidance: "Contact police immediately. You have the right to protect your life while following lawful means of self-defense.",
        constitutional_basis: "Section 48 - Right to life includes protection from unlawful threats"
      }
    ]
  },
  {
    id: "personal-liberty",
    title: "Right to Personal Liberty",
    section: "Section 49",
    category: "Fundamental Rights",
    description: "Protection from arbitrary detention and the right to freedom of movement and personal autonomy.",
    keyPoints: [
      "Right not to be detained without trial",
      "Protection from arbitrary deprivation of liberty",
      "No imprisonment for contractual obligations",
      "Due process requirements"
    ],
    practicalApplication: [
      "Freedom to move around Zimbabwe",
      "Protection from unlawful arrest",
      "Right to know reasons for detention",
      "Bail and release procedures"
    ],
    commonScenarios: [
      {
        scenario: "Stopped by police without clear reason",
        guidance: "Politely ask for the reason for being stopped. You have the right to know why your liberty is being restricted.",
        constitutional_basis: "Section 49 - Right to personal liberty requires justification for restriction"
      },
      {
        scenario: "Debt collector threatens imprisonment",
        guidance: "You cannot be imprisoned merely for owing money. Debt is a civil matter, not criminal.",
        constitutional_basis: "Section 49(2) - No imprisonment for inability to fulfill contractual obligations"
      }
    ]
  },
  {
    id: "arrest-detention-rights",
    title: "Rights of Arrested and Detained Persons",
    section: "Section 50",
    category: "Criminal Justice Rights",
    description: "Comprehensive protections for persons who are arrested or detained by authorities.",
    keyPoints: [
      "Right to be informed of reason for arrest",
      "Right to contact family and lawyer",
      "Right to remain silent",
      "48-hour rule for court appearance",
      "Humane treatment requirements"
    ],
    practicalApplication: [
      "What to do when arrested",
      "How to request legal representation",
      "Understanding your right to silence",
      "Proper detention conditions"
    ],
    commonScenarios: [
      {
        scenario: "Just been arrested by police",
        guidance: "1) Ask why you're being arrested 2) Request to contact family/lawyer 3) Exercise your right to remain silent 4) Request humane treatment",
        constitutional_basis: "Section 50 - Comprehensive arrest rights including information, contact, and silence"
      },
      {
        scenario: "Been in police custody over 48 hours without seeing a judge",
        guidance: "This is unconstitutional. Request immediate release or court appearance. Contact a lawyer if possible.",
        constitutional_basis: "Section 50(2) - Must be brought before court within 48 hours"
      },
      {
        scenario: "Police refuse to let you contact family",
        guidance: "This violates your constitutional rights. Insist on your right to contact family at state expense.",
        constitutional_basis: "Section 50(1)(b) - Right to contact family and legal practitioner at state expense"
      }
    ]
  },
  {
    id: "human-dignity",
    title: "Right to Human Dignity",
    section: "Section 51",
    category: "Fundamental Rights",
    description: "Every person has inherent dignity that must be respected and protected in all circumstances.",
    keyPoints: [
      "Inherent dignity in private and public life",
      "Right to have dignity respected",
      "Protection of dignity",
      "Applies to all interactions with state and private actors"
    ],
    practicalApplication: [
      "Respectful treatment by authorities",
      "Dignity in workplace",
      "Dignity in healthcare",
      "Protection from degrading treatment"
    ],
    commonScenarios: [
      {
        scenario: "Treated disrespectfully by government officials",
        guidance: "You have the right to be treated with dignity. Document the incident and report it to relevant authorities.",
        constitutional_basis: "Section 51 - Right to have dignity respected and protected"
      },
      {
        scenario: "Humiliated or degraded in public",
        guidance: "This may violate your dignity rights. Seek legal advice if the treatment was by state actors or systematic.",
        constitutional_basis: "Section 51 - Inherent dignity must be respected in public life"
      }
    ]
  },
  {
    id: "personal-security",
    title: "Right to Personal Security",
    section: "Section 52",
    category: "Security Rights",
    description: "Right to bodily and psychological integrity, including freedom from violence and reproductive autonomy.",
    keyPoints: [
      "Right to bodily and psychological integrity",
      "Freedom from all forms of violence",
      "Right to make reproductive decisions",
      "Protection from medical experiments without consent",
      "Right to informed consent for medical procedures"
    ],
    practicalApplication: [
      "Protection from domestic violence",
      "Right to refuse medical treatment",
      "Reproductive health choices",
      "Protection from forced medical procedures"
    ],
    commonScenarios: [
      {
        scenario: "Experiencing domestic violence",
        guidance: "You have the right to be free from all forms of violence. Contact police and domestic violence support services immediately.",
        constitutional_basis: "Section 52 - Right to freedom from all forms of violence from public or private sources"
      },
      {
        scenario: "Pressured into medical procedure",
        guidance: "You have the right to informed consent. No medical procedure can be performed without your understanding and agreement.",
        constitutional_basis: "Section 52 - Right not to be subjected to medical experiments without informed consent"
      }
    ]
  },
  {
    id: "freedom-torture",
    title: "Freedom from Torture",
    section: "Section 53",
    category: "Security Rights",
    description: "Absolute prohibition on torture and cruel, inhuman, or degrading treatment or punishment.",
    keyPoints: [
      "No physical torture allowed",
      "No psychological torture",
      "No cruel treatment",
      "No inhuman punishment",
      "No degrading treatment"
    ],
    practicalApplication: [
      "Police interrogation limits",
      "Prison conditions standards",
      "Medical treatment rights",
      "Reporting torture incidents"
    ],
    commonScenarios: [
      {
        scenario: "Police use excessive force during questioning",
        guidance: "This is torture and is absolutely prohibited. Seek immediate medical attention and legal help. Report to human rights organizations.",
        constitutional_basis: "Section 53 - Absolute prohibition on physical and psychological torture"
      },
      {
        scenario: "Threats of violence to obtain confession",
        guidance: "Psychological torture is prohibited. Refuse to sign anything and request a lawyer immediately.",
        constitutional_basis: "Section 53 - Prohibition includes psychological torture and cruel treatment"
      }
    ]
  },
  {
    id: "freedom-slavery",
    title: "Freedom from Slavery or Servitude",
    section: "Section 54",
    category: "Security Rights",
    description: "Absolute prohibition on slavery and servitude in all its forms.",
    keyPoints: [
      "No person may be subjected to slavery",
      "No person may be subjected to servitude",
      "Applies to all forms of forced labor",
      "Protection from human trafficking"
    ],
    practicalApplication: [
      "Protection from forced labor",
      "Rights of domestic workers",
      "Protection from human trafficking",
      "Reporting slavery-like conditions"
    ],
    commonScenarios: [
      {
        scenario: "Forced to work without pay",
        guidance: "This may constitute slavery or servitude. Document conditions and seek help from labor authorities or human rights organizations.",
        constitutional_basis: "Section 54 - Absolute prohibition on slavery or servitude"
      },
      {
        scenario: "Passport confiscated by employer",
        guidance: "This is a warning sign of human trafficking. Contact police or anti-trafficking organizations immediately.",
        constitutional_basis: "Section 54 - Protection from slavery includes modern forms like trafficking"
      }
    ]
  },
  {
    id: "freedom-forced-labor",
    title: "Freedom from Forced or Compulsory Labour",
    section: "Section 55",
    category: "Economic Rights",
    description: "Protection from being made to perform forced or compulsory labor.",
    keyPoints: [
      "No person may be made to perform forced labor",
      "No compulsory labor allowed",
      "Voluntary work arrangements only",
      "Exceptions for lawful community service"
    ],
    practicalApplication: [
      "Voluntary employment only",
      "Right to leave employment",
      "Protection from debt bondage",
      "Community service limitations"
    ],
    commonScenarios: [
      {
        scenario: "Required to work extra hours without consent",
        guidance: "You cannot be forced to work against your will. Review your employment contract and contact labor authorities if necessary.",
        constitutional_basis: "Section 55 - No person may be made to perform forced or compulsory labour"
      },
      {
        scenario: "Threatened with consequences for refusing unpaid work",
        guidance: "This may constitute forced labor. Document the threats and seek legal advice.",
        constitutional_basis: "Section 55 - Protection from compulsory labor includes freedom to refuse work"
      }
    ]
  },
  {
    id: "equality-non-discrimination",
    title: "Equality and Non-Discrimination",
    section: "Section 56",
    category: "Equality Rights",
    description: "Equal treatment before the law and protection from unfair discrimination on various grounds.",
    keyPoints: [
      "All persons equal before the law",
      "Equal protection and benefit of law",
      "Gender equality rights",
      "Prohibition of unfair discrimination",
      "Multiple protected grounds"
    ],
    practicalApplication: [
      "Equal treatment in employment",
      "Equal access to services",
      "Protection from discrimination",
      "Gender equality in all spheres"
    ],
    commonScenarios: [
      {
        scenario: "Denied job opportunity due to gender",
        guidance: "This is unfair discrimination. You can file a complaint with labor authorities or seek legal redress.",
        constitutional_basis: "Section 56(2) - Equal treatment including equal opportunities in economic spheres"
      },
      {
        scenario: "Treated differently because of tribe or race",
        guidance: "Discrimination based on race or tribe is prohibited. Document incidents and seek legal assistance.",
        constitutional_basis: "Section 56(3) - Prohibition of discrimination based on race, tribe, or ethnic origin"
      }
    ]
  },
  {
    id: "right-privacy",
    title: "Right to Privacy",
    section: "Section 57",
    category: "Personal Rights",
    description: "Right to privacy including protection of home, property, communications, and health information.",
    keyPoints: [
      "Right to privacy of home and property",
      "Protection from unlawful searches",
      "Privacy of communications",
      "Medical privacy rights",
      "Protection from surveillance"
    ],
    practicalApplication: [
      "Home and property protection",
      "Communications privacy",
      "Medical information confidentiality",
      "Digital privacy rights"
    ],
    commonScenarios: [
      {
        scenario: "Police want to search your home without warrant",
        guidance: "You have the right to refuse entry without a valid warrant. Ask to see the warrant and verify its legitimacy.",
        constitutional_basis: "Section 57 - Right not to have home, premises or property entered without permission"
      },
      {
        scenario: "Medical information shared without consent",
        guidance: "Your health information is protected. File a complaint with medical authorities about the privacy breach.",
        constitutional_basis: "Section 57 - Right not to have health condition disclosed without consent"
      }
    ]
  },
  {
    id: "freedom-assembly-association",
    title: "Freedom of Assembly and Association",
    section: "Section 58",
    category: "Political Rights",
    description: "Right to freely assemble and associate with others, including the right not to associate.",
    keyPoints: [
      "Right to freedom of assembly",
      "Right to freedom of association",
      "Right not to assemble or associate",
      "No compulsory association membership",
      "Peaceful assembly protection"
    ],
    practicalApplication: [
      "Organizing and attending meetings",
      "Joining organizations freely",
      "Peaceful protests and demonstrations",
      "Freedom from forced membership"
    ],
    commonScenarios: [
      {
        scenario: "Prevented from attending peaceful meeting",
        guidance: "You have the right to freedom of assembly. If authorities prevent lawful assembly, this may violate your constitutional rights.",
        constitutional_basis: "Section 58(1) - Right to freedom of assembly and association"
      },
      {
        scenario: "Forced to join organization against will",
        guidance: "You cannot be compelled to belong to any association. Refuse and seek legal advice if pressure continues.",
        constitutional_basis: "Section 58(2) - No person may be compelled to belong to an association"
      }
    ]
  },
  {
    id: "freedom-demonstrate-petition",
    title: "Freedom to Demonstrate and Petition",
    section: "Section 59",
    category: "Political Rights",
    description: "Right to demonstrate peacefully and present petitions to authorities.",
    keyPoints: [
      "Right to demonstrate peacefully",
      "Right to present petitions",
      "Must be exercised peacefully",
      "Protection of protest rights",
      "Right to seek redress from government"
    ],
    practicalApplication: [
      "Organizing peaceful protests",
      "Petitioning government for action",
      "Expressing dissent peacefully",
      "Seeking redress for grievances"
    ],
    commonScenarios: [
      {
        scenario: "Want to organize peaceful protest",
        guidance: "You have the right to demonstrate peacefully. Follow local notification procedures but don't let bureaucracy deny your rights.",
        constitutional_basis: "Section 59 - Right to demonstrate and present petitions, but must be exercised peacefully"
      },
      {
        scenario: "Petition ignored by authorities",
        guidance: "While you have the right to petition, authorities aren't always required to act. Consider legal action if constitutional rights are involved.",
        constitutional_basis: "Section 59 - Right to present petitions to government authorities"
      }
    ]
  },
  {
    id: "freedom-conscience",
    title: "Freedom of Conscience",
    section: "Section 60",
    category: "Personal Rights",
    description: "Freedom of thought, opinion, religion, and belief, including the right to practice and propagate beliefs.",
    keyPoints: [
      "Freedom of thought and opinion",
      "Freedom of religion and belief",
      "Right to practice religion publicly or privately",
      "Right to propagate beliefs",
      "Protection from forced oaths against belief"
    ],
    practicalApplication: [
      "Religious worship and practice",
      "Expressing personal beliefs",
      "Refusing acts against conscience",
      "Religious education rights"
    ],
    commonScenarios: [
      {
        scenario: "Required to take oath against religious beliefs",
        guidance: "You cannot be compelled to take an oath contrary to your religion or belief. Request alternative affirmation methods.",
        constitutional_basis: "Section 60(2) - No person may be compelled to take oath contrary to their religion or belief"
      },
      {
        scenario: "Discrimination for religious practices",
        guidance: "You have the right to practice your religion. Document discrimination and seek legal redress if your religious rights are violated.",
        constitutional_basis: "Section 60(1) - Freedom to practice and propagate religion or belief, publicly or privately"
      }
    ]
  },
  {
    id: "freedom-expression",
    title: "Freedom of Expression and Media",
    section: "Section 61",
    category: "Political Rights",
    description: "Right to express ideas, opinions, and information freely within constitutional limits.",
    keyPoints: [
      "Freedom to seek, receive, and communicate information",
      "Artistic expression and creativity",
      "Academic freedom",
      "Media freedom protections",
      "Protection of journalists' sources"
    ],
    practicalApplication: [
      "Speaking freely about political issues",
      "Writing and publishing",
      "Artistic and creative works",
      "Academic research and teaching"
    ],
    commonScenarios: [
      {
        scenario: "Prevented from expressing political opinion",
        guidance: "You have the right to express political views. If prevented by authorities, this may violate your freedom of expression.",
        constitutional_basis: "Section 61(1) - Freedom to communicate ideas and information"
      },
      {
        scenario: "Censored for artistic work",
        guidance: "Artistic expression is protected. Censorship must meet strict constitutional standards to be justified.",
        constitutional_basis: "Section 61(1)(b) - Freedom of artistic expression and creativity"
      }
    ]
  },
  {
    id: "access-information",
    title: "Access to Information",
    section: "Section 62",
    category: "Political Rights",
    description: "Right to access information held by the state and other entities for public accountability and rights protection.",
    keyPoints: [
      "Right to access government information",
      "Access for public accountability purposes",
      "Right to information for rights protection",
      "Right to correction of false information",
      "Media access to information"
    ],
    practicalApplication: [
      "Requesting government documents",
      "Access to public records",
      "Correcting false official records",
      "Investigative journalism"
    ],
    commonScenarios: [
      {
        scenario: "Government refuses to provide public information",
        guidance: "You have the right to access government information for public accountability. File formal request and appeal if denied.",
        constitutional_basis: "Section 62(1) - Right of access to information held by the State for public accountability"
      },
      {
        scenario: "False information in government records about you",
        guidance: "You have the right to correction of untrue information. Request correction in writing and pursue legal action if refused.",
        constitutional_basis: "Section 62(3) - Right to correction or deletion of untrue, erroneous or misleading information"
      }
    ]
  },
  {
    id: "language-culture",
    title: "Language and Culture",
    section: "Section 63",
    category: "Cultural Rights",
    description: "Right to use one's chosen language and participate in cultural life of choice.",
    keyPoints: [
      "Right to use language of choice",
      "Right to participate in cultural life",
      "Protection of linguistic diversity",
      "Cultural participation rights",
      "Language preservation"
    ],
    practicalApplication: [
      "Speaking your native language",
      "Participating in cultural practices",
      "Cultural education and preservation",
      "Language rights in official settings"
    ],
    commonScenarios: [
      {
        scenario: "Prevented from speaking native language in public",
        guidance: "You have the right to use the language of your choice. This right is protected constitutionally.",
        constitutional_basis: "Section 63 - Right to use the language of their choice"
      },
      {
        scenario: "Cultural practices restricted without justification",
        guidance: "You have the right to participate in cultural life of your choice, provided it doesn't violate other constitutional rights.",
        constitutional_basis: "Section 63 - Right to participate in the cultural life of their choice"
      }
    ]
  },
  {
    id: "freedom-profession-trade",
    title: "Freedom of Profession, Trade or Occupation",
    section: "Section 64",
    category: "Economic Rights",
    description: "Right to choose and carry on any profession, trade, or occupation, subject to reasonable regulation.",
    keyPoints: [
      "Right to choose profession freely",
      "Right to carry on trade or occupation",
      "Subject to reasonable regulation by law",
      "Professional licensing requirements",
      "Freedom of economic activity"
    ],
    practicalApplication: [
      "Career choice freedom",
      "Starting a business",
      "Professional licensing",
      "Trade regulation compliance"
    ],
    commonScenarios: [
      {
        scenario: "Blocked from entering chosen profession due to discrimination",
        guidance: "You have the right to choose your profession. If discrimination is the reason, this may violate both this right and equality provisions.",
        constitutional_basis: "Section 64 - Right to choose and carry on any profession, trade or occupation"
      },
      {
        scenario: "Excessive regulation preventing legitimate business",
        guidance: "While regulation is allowed, it must be reasonable. Challenge unreasonable restrictions through proper legal channels.",
        constitutional_basis: "Section 64 - Practice may be regulated by law (implying reasonable regulation only)"
      }
    ]
  },
  {
    id: "labor-rights",
    title: "Labour Rights",
    section: "Section 65",
    category: "Economic Rights",
    description: "Rights related to work, fair wages, safe conditions, and collective bargaining.",
    keyPoints: [
      "Fair and safe labor practices",
      "Right to fair and reasonable wages",
      "Freedom to form trade unions",
      "Right to strike and collective action",
      "Just working conditions"
    ],
    practicalApplication: [
      "Workplace safety standards",
      "Wage and hour protections",
      "Union organizing rights",
      "Strike participation",
      "Collective bargaining"
    ],
    commonScenarios: [
      {
        scenario: "Unsafe working conditions",
        guidance: "You have the right to safe working conditions. Report unsafe conditions to labor inspectors and your union.",
        constitutional_basis: "Section 65(1) - Right to fair and safe labor practices and standards"
      },
      {
        scenario: "Employer prevents union membership",
        guidance: "You have the right to join trade unions. Employer interference with union rights is prohibited.",
        constitutional_basis: "Section 65(2) - Right to form and join trade unions"
      },
      {
        scenario: "Not paid fair wages",
        guidance: "You have the right to fair and reasonable wages. File complaint with labor authorities.",
        constitutional_basis: "Section 65(1) - Right to be paid fair and reasonable wage"
      }
    ]
  },
  {
    id: "freedom-movement-residence",
    title: "Freedom of Movement and Residence",
    section: "Section 66",
    category: "Personal Rights",
    description: "Right to move freely within Zimbabwe, choose residence, and travel abroad.",
    keyPoints: [
      "Right to enter Zimbabwe (for citizens)",
      "Immunity from expulsion (for citizens)",
      "Right to passport and travel documents",
      "Right to move freely within Zimbabwe",
      "Right to choose residence anywhere in Zimbabwe"
    ],
    practicalApplication: [
      "Domestic travel freedom",
      "Choice of residence",
      "International travel rights",
      "Return to Zimbabwe"
    ],
    commonScenarios: [
      {
        scenario: "Prevented from traveling within Zimbabwe",
        guidance: "You have the right to move freely within Zimbabwe. Unless there's a valid legal restriction, this movement cannot be prevented.",
        constitutional_basis: "Section 66(2) - Right to move freely within Zimbabwe"
      },
      {
        scenario: "Passport application denied without reason",
        guidance: "Zimbabwean citizens have the right to a passport. If denied, request written reasons and appeal the decision.",
        constitutional_basis: "Section 66(1)(c) - Right to a passport or other travel document"
      }
    ]
  },
  {
    id: "political-rights",
    title: "Political Rights",
    section: "Section 67",
    category: "Political Rights",
    description: "Rights to participate in political processes, vote, and engage in political activities.",
    keyPoints: [
      "Right to free and fair elections",
      "Right to make political choices freely",
      "Right to form and join political parties",
      "Right to campaign for political causes",
      "Universal suffrage for citizens over 18"
    ],
    practicalApplication: [
      "Voting in elections",
      "Political party membership",
      "Campaign activities",
      "Running for office"
    ],
    commonScenarios: [
      {
        scenario: "Prevented from voting due to bureaucratic obstacles",
        guidance: "You have the right to vote. If prevented by unreasonable obstacles, seek assistance from electoral authorities or legal help.",
        constitutional_basis: "Section 67(3) - Right to vote in all elections and referendums"
      },
      {
        scenario: "Intimidated for supporting particular political party",
        guidance: "You have the right to make political choices freely. Report intimidation to police and electoral authorities.",
        constitutional_basis: "Section 67(1)(b) - Right to make political choices freely"
      }
    ]
  },
  {
    id: "administrative-justice",
    title: "Right to Administrative Justice",
    section: "Section 68",
    category: "Administrative Rights",
    description: "Right to lawful, fair, and reasonable administrative conduct from government.",
    keyPoints: [
      "Right to lawful administrative conduct",
      "Right to prompt and efficient service",
      "Right to reasonable and proportionate decisions",
      "Right to written reasons for administrative decisions",
      "Right to review of administrative conduct"
    ],
    practicalApplication: [
      "Government service delivery",
      "Administrative decision appeals",
      "Bureaucratic accountability",
      "Public service interactions"
    ],
    commonScenarios: [
      {
        scenario: "Government office delays processing without reason",
        guidance: "You have the right to prompt and efficient administrative conduct. Escalate delays and request written explanations.",
        constitutional_basis: "Section 68(1) - Right to administrative conduct that is lawful, prompt, efficient"
      },
      {
        scenario: "Administrative decision made without reasons given",
        guidance: "You have the right to written reasons for administrative decisions that affect you. Request these reasons formally.",
        constitutional_basis: "Section 68(2) - Right to be given promptly and in writing the reasons for administrative conduct"
      }
    ]
  },
  {
    id: "fair-hearing",
    title: "Right to a Fair Hearing",
    section: "Section 69",
    category: "Justice Rights",
    description: "Right to fair, public, and speedy trials and hearings before independent courts.",
    keyPoints: [
      "Right to fair and public trial",
      "Right to trial within reasonable time",
      "Right to independent and impartial court",
      "Right to access to courts",
      "Right to legal representation"
    ],
    practicalApplication: [
      "Criminal trial rights",
      "Civil case proceedings",
      "Access to justice",
      "Legal representation"
    ],
    commonScenarios: [
      {
        scenario: "Case delayed for years without progress",
        guidance: "You have the right to a trial within reasonable time. Apply to court to expedite proceedings or seek dismissal for delay.",
        constitutional_basis: "Section 69(1) - Right to fair and public trial within a reasonable time"
      },
      {
        scenario: "Denied access to court due to fees",
        guidance: "You have the right to access courts. Seek fee waiver or legal aid if financial constraints prevent access to justice.",
        constitutional_basis: "Section 69(3) - Right of access to the courts"
      }
    ]
  },
  {
    id: "accused-person-rights",
    title: "Rights of Accused Persons",
    section: "Section 70",
    category: "Criminal Justice Rights",
    description: "Comprehensive rights for persons accused of criminal offenses during trial proceedings.",
    keyPoints: [
      "Presumption of innocence until proven guilty",
      "Right to be informed of charges promptly",
      "Right to adequate time to prepare defense",
      "Right to legal representation",
      "Right to remain silent and not self-incriminate"
    ],
    practicalApplication: [
      "Criminal trial procedures",
      "Defense preparation",
      "Legal representation",
      "Evidence challenges"
    ],
    commonScenarios: [
      {
        scenario: "Charged but not told specific details of offense",
        guidance: "You have the right to be informed promptly of the charge in sufficient detail to answer it. Request full details of allegations.",
        constitutional_basis: "Section 70(1)(b) - Right to be informed promptly of the charge in sufficient detail"
      },
      {
        scenario: "Cannot afford lawyer for serious criminal case",
        guidance: "You have the right to state-funded legal representation if substantial injustice would otherwise result. Apply to court for legal aid.",
        constitutional_basis: "Section 70(1)(e) - Right to legal representation at State expense if substantial injustice would result"
      }
    ]
  },
  {
    id: "property-rights",
    title: "Property Rights",
    section: "Section 71",
    category: "Property Rights",
    description: "Right to acquire, hold, and dispose of property, with protection from unjust expropriation.",
    keyPoints: [
      "Right to acquire and hold property",
      "Right to transfer and dispose of property",
      "Protection from arbitrary expropriation",
      "Right to fair compensation for acquisition",
      "Due process for property acquisition"
    ],
    practicalApplication: [
      "Property ownership and transfer",
      "Protection from illegal seizure",
      "Fair compensation claims",
      "Property development rights"
    ],
    commonScenarios: [
      {
        scenario: "Government wants to acquire your property",
        guidance: "You have the right to fair compensation and due process. Ensure proper notice, fair compensation, and court approval of acquisition.",
        constitutional_basis: "Section 71(3) - Right to fair and adequate compensation and proper legal process"
      },
      {
        scenario: "Property seized without compensation",
        guidance: "This violates your property rights. Seek immediate legal assistance to challenge the seizure and claim compensation.",
        constitutional_basis: "Section 71(3) - Compulsory deprivation requires fair compensation and legal process"
      }
    ]
  },
  {
    id: "agricultural-land-rights",
    title: "Rights to Agricultural Land",
    section: "Section 72",
    category: "Property Rights",
    description: "Special provisions for agricultural land acquisition for public purposes including land reform.",
    keyPoints: [
      "Agricultural land may be acquired for public purposes",
      "Land for settlement and redistribution",
      "Environmental conservation purposes",
      "Land reorganization rights",
      "Compensation provisions for agricultural land"
    ],
    practicalApplication: [
      "Land reform processes",
      "Agricultural development",
      "Conservation programs",
      "Settlement schemes"
    ],
    commonScenarios: [
      {
        scenario: "Agricultural land identified for redistribution",
        guidance: "Understand that agricultural land may be acquired for public purposes including settlement. Ensure proper legal process is followed.",
        constitutional_basis: "Section 72 - Agricultural land may be compulsorily acquired for public purposes including settlement"
      },
      {
        scenario: "Farming land needed for conservation project",
        guidance: "Land may be acquired for environmental conservation. Ensure you understand your rights and any compensation available.",
        constitutional_basis: "Section 72(2)(b) - Land may be acquired for environmental conservation"
      }
    ]
  }
];

export const getRightsByCategory = (category: string) => {
  return constitutionalRights.filter(right => right.category === category);
};

export const getRightById = (id: string) => {
  return constitutionalRights.find(right => right.id === id);
};

export const searchRights = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return constitutionalRights.filter(right => 
    right.title.toLowerCase().includes(lowercaseQuery) ||
    right.description.toLowerCase().includes(lowercaseQuery) ||
    right.keyPoints.some(point => point.toLowerCase().includes(lowercaseQuery)) ||
    right.practicalApplication.some(app => app.toLowerCase().includes(lowercaseQuery))
  );
};