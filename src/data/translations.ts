// Translation keys and default content
export interface TranslationKey {
  key: string;
  en: string;
  sn: string; // Shona
  nd: string; // Ndebele
}

export const translationKeys: TranslationKey[] = [
  // Navigation
  { key: "app.title", en: "ZimRights Navigator", sn: "ZimRights Navigator", nd: "ZimRights Navigator" },
  { key: "nav.home", en: "Home", sn: "Mumusha", nd: "Ekhaya" },
  { key: "nav.rights", en: "Rights Guide", sn: "Gwara Rekodzero", nd: "Umhlahlandlela Wamalungelo" },
  { key: "nav.tools", en: "Interactive Tools", sn: "Zvishandiso Zvinopindirana", nd: "Amathuluzi Okusebenzisana" },
  { key: "nav.contact", en: "Contact", sn: "Batana", nd: "Xhumana" },
  { key: "nav.search", en: "Search Rights", sn: "Tsvaga Kodzero", nd: "Funga Amalungelo" },

  // Hero Section
  { key: "hero.title", en: "Know Your Rights, Navigate Justice", sn: "Ziva Kodzero Dzako, Fambira Kutonga", nd: "Yazi Amalungelo Akho, Hamba Ngobulungiswa" },
  { key: "hero.subtitle", en: "Empowering Zimbabweans through accessible legal knowledge. Understand your constitutional rights and get practical guidance when you need it most.", sn: "Kusimbisa vaZimbabwe kuburikidza neruzivo rwepamutemo runowanikwa. Nzwisisa kodzero dzako dzebumbiro uye uwane hutungamiriri hwepanyama kana uchihuda.", nd: "Ukuqinisa amaZimbabwe ngolwazi lwezomthetho olufikelelekayo. Qonda amalungelo akho omthethosisekelo futhi uthole ukuholwa kobuqotho lapho ukudinga kakhulu." },
  { key: "hero.explore", en: "Explore Your Rights", sn: "Ongorora Kodzero Dzako", nd: "Hlola Amalungelo Akho" },
  { key: "hero.emergency", en: "Emergency Help", sn: "Rubatsiro Rwekukurumidzira", nd: "Usizo Lwesiphuthumayo" },

  // Rights Categories
  { key: "rights.title", en: "Your Constitutional Rights", sn: "Kodzero Dzako Dzebumbiro", nd: "Amalungelo Akho Omthethosisekelo" },
  { key: "rights.subtitle", en: "Understanding your rights is the first step to protecting them. Browse our comprehensive guide to Zimbabwe's Constitutional protections.", sn: "Kunzwisisa kodzero dzako ndicho chinyorwa chekutanga chekudzidzivirira. Ongorora gwara redu rakazara rekudzivirira kweBumbiro reZimbabwe.", nd: "Ukuqonda amalungelo akho yisinyathelo sokuqala sokuwavikela. Bheka umhlahlandlela wethu oqhelele wokuvikelwa komThethosisekelo waseZimbabwe." },

  // Interactive Guide
  { key: "tools.title", en: "Interactive Rights Guide", sn: "Gwara Rekodzero Rinopindirana", nd: "Umhlahlandlela Wamalungelo Oxhumana" },
  { key: "tools.subtitle", en: "Learn your rights through real-world scenarios. This interactive guide helps you understand how to apply your constitutional rights in everyday situations.", sn: "Dzidza kodzero dzako kuburikidza nezviitiko zvemazuva ese. Iri gwara rinopindirana rinokubatsira kunzwisisa mashandisiro ekodzero dzako dzebumbiro muzviitiko zvemazuva ese.", nd: "Funda amalungelo akho ngezimo zomhlaba wangempela. Lo mhlahlandlela oxhumanayo uyakusiza ukuqonda ukuthi ungawasebenzisa kanjani amalungelo akho omthethosisekelo ezimweni zansuku zonke." },

  // Police Guide
  { key: "police.title", en: "Police Interaction Guide", sn: "Gwara Rekupindirana Nemapurisa", nd: "Umhlahlandlela Wokuxhumana Namaphoyisa" },
  { key: "police.description", en: "Based on Zimbabwe's Constitutional provisions", sn: "Yakavakirwa pazvimiso zveBumbiro reZimbabwe", nd: "Sekusekwe ezincukulweni zomThethosisekelo waseZimbabwe" },
  { key: "police.watch_demo", en: "Watch Demo", sn: "Ona Chidemo", nd: "Buka Isiboniso" },

  // Demo scenarios
  { key: "demo.start.question", en: "Police Interaction: What's Your Situation?", sn: "Kupindirana Nemapurisa: Chii Mamiriro Ako?", nd: "Ukuxhumana Namaphoyisa: Kuyini Isimo Sakho?" },
  { key: "demo.start.description", en: "This interactive guide will help you understand your rights during police interactions based on Zimbabwe's Constitution.", sn: "Iri gwara rinopindirana rinokubatsira kunzwisisa kodzero dzako panguva yekupindirana nemapurisa zvinoenderana neBumbiro reZimbabwe.", nd: "Lo mhlahlandlela oxhumanayo uzokusiza ukuqonda amalungelo akho ngesikhathi sokuxhumana namaphoyisa ngokusekwe kuMthethosisekelo waseZimbabwe." },

  // Footer
  { key: "footer.tagline", en: "Empowering Zimbabweans through accessible legal knowledge. Know your rights, navigate justice with confidence.", sn: "Kusimbisa vaZimbabwe kuburikidza neruzivo rwepamutemo runowanikwa. Ziva kodzero dzako, fambira kutonga nekuvimba.", nd: "Ukuqinisa amaZimbabwe ngolwazi lwezomthetho olufikelelekayo. Yazi amalungelo akho, hamba ngobulungiswa ngesibindi." },
  { key: "footer.rights_categories", en: "Rights Categories", sn: "Mapoka Ekodzero", nd: "Izigaba Zamalungelo" },
  { key: "footer.resources", en: "Resources", sn: "Zvishandiso", nd: "Izinsiza" },
  { key: "footer.support", en: "Get Support", sn: "Wana Rutsigiro", nd: "Thola Ukuxhaswa" },
  { key: "footer.constitution", en: "Constitution of Zimbabwe", sn: "Bumbiro reZimbabwe", nd: "UMthethosisekelo waseZimbabwe" },
  { key: "footer.legal_aid", en: "Legal Aid Directory", sn: "Gwara Rerubatsiro Rwepamutemo", nd: "Uhla Losizo Lwezomthetho" },
  { key: "footer.emergency", en: "Emergency Contacts", sn: "Manhamba Ekukurumidzira", nd: "Oxhumana Nabo Esiphethelweni" },
  { key: "footer.faqs", en: "FAQs", sn: "Mibvunzo Inowanzo Bvunzwa", nd: "Imibuzo Evame Ukubuzwa" },

  // Rights Categories
  { key: "category.civil_rights", en: "Civil Rights", sn: "Kodzero Dzevagari", nd: "Amalungelo Omphakathi" },
  { key: "category.civil_rights_desc", en: "Freedom of expression, assembly, and movement. Your basic civic freedoms.", sn: "Rusununguko rwekutaura, kuungana, nekufamba. Rusununguko rwako rwekutanga rwevagari.", nd: "Inkululeko yokuphinyisela, ukuhlangana, nokuhamba. Inkululeko yakho eyisisekelo yomphakathi." },
  { key: "category.employment_rights", en: "Employment Rights", sn: "Kodzero Dzebasa", nd: "Amalungelo Omsebenzi" },
  { key: "category.employment_rights_desc", en: "Fair wages, safe working conditions, and collective bargaining rights.", sn: "Miholo yakaenzana, mamiriro ekushanda akachengeteka, nekodzero dzekutaurirana pamwe.", nd: "Amaholo alingene, izimo zomsebenzi eziphephile, namalungelo okuxoxisana ngamanje." },
  { key: "category.housing_rights", en: "Housing Rights", sn: "Kodzero Dzedzimba", nd: "Amalungelo Ezindlu" },
  { key: "category.housing_rights_desc", en: "Access to adequate housing and protection from unlawful eviction.", sn: "Kuwana dzimba dzakakwana nekudzivirirwa kubva mukunzi pasina mutemo.", nd: "Ukufinyelela ezindlini ezifanele nokuvikelwa ekuxoshweni okungekho emthethweni." },
  { key: "category.family_rights", en: "Family Rights", sn: "Kodzero Dzemhuri", nd: "Amalungelo Osapho" },
  { key: "category.family_rights_desc", en: "Marriage, children's rights, and family protection under the law.", sn: "Kuroora, kodzero dzevana, nekudzivirirwa kwemhuri pasi pemutemo.", nd: "Umshado, amalungelo abantwana, nokuvikelwa kwabancane ngaphansi komthetho." },
  { key: "category.legal_procedures", en: "Legal Procedures", sn: "Maitiro Emitemo", nd: "Izinqubo Zomthetho" },
  { key: "category.legal_procedures_desc", en: "Access to courts, legal representation, and fair trial rights.", sn: "Kuwana matare, kumiririrwa pamutemo, nekodzero dzekutongwa zvakaenzana.", nd: "Ukufinyelela emakhothini, ukumelwa ngokwasemthethweni, namalungelo okwahlulelwa ngokunye." },
  { key: "category.emergency_rights", en: "Emergency Rights", sn: "Kodzero Dzekukurumidzira", nd: "Amalungelo Esiphuthumayo" },
  { key: "category.emergency_rights_desc", en: "Your rights during police interactions and emergency situations.", sn: "Kodzero dzako panguva yekupindirana nemapurisa uye nezviitiko zvekukurumidzira.", nd: "Amalungelo akho ngesikhathi sokuxhumana namaphoyisa nezimo eziphuthumayo." },

  // Interactive Demo
  { key: "demo.try_another", en: "Try Another Scenario", sn: "Edza Chimwe Chiitiko", nd: "Zama Esinye Isimo" },
  { key: "demo.view_guide", en: "View Full Rights Guide", sn: "Ona Gwara Rizere Rekodzero", nd: "Buka Umhlahlandlela Wamalungelo Ogcwele" },
  { key: "demo.constitutional_guidance", en: "Constitutional Guidance", sn: "Hutungamiriri Hwepamutemo", nd: "Ukuholwa Komthethosisekelo" },
  { key: "demo.rights_guaranteed", en: "These rights are guaranteed by Zimbabwe's Constitution Chapter 4 - Declaration of Rights", sn: "Idzi kodzero dzinovimbiswa neBumbiro reZimbabwe Chitsauko 4 - Chiziviso Chekodzero", nd: "La malungelo avikelwe nguMthethosisekelo waseZimbabwe Isahluko 4 - Isimemezelo Samalungelo" },
  { key: "demo.select_option", en: "Select an option to see constitutional guidance", sn: "Sarudza sarudzo kuti uone hutungamiriri hwepamutemo", nd: "Khetha inketho ukubona ukuholwa komthethosisekelo" },

  // Common actions
  { key: "common.get_help", en: "Get Help Now", sn: "Wana Rubatsiro Zvino", nd: "Thola Usizo Manje" },
  { key: "common.learn_more", en: "Learn More", sn: "Dzidza Zvakawanda", nd: "Funda Okwengeziwe" },
  { key: "common.view_details", en: "View Details", sn: "Ona Mamwe Marubvunzo", nd: "Buka Imininingwane" },
  { key: "common.close", en: "Close", sn: "Vhara", nd: "Vala" },
  { key: "common.next", en: "Next", sn: "Anotevera", nd: "Okulandelayo" },
  { key: "common.previous", en: "Previous", sn: "Yakapfuura", nd: "Okwedlule" },

  // Call to Action
  { key: "cta.title", en: "Ready to Learn Your Rights?", sn: "Wagadzirira Kudzidza Kodzero Dzako?", nd: "Ulungele Ukufunda Amalungelo Akho?" },
  { key: "cta.subtitle", en: "Start exploring Zimbabwe's constitutional protections and understand how they apply to your daily life.", sn: "Tanga kuongorora kudzivirirwa kweBumbiro reZimbabwe uye unzwisise mashandisiro acho muupenyu hwako hwemazuva ese.", nd: "Qala ukuhlola ukuvikelwa komThethosisekelo waseZimbabwe futhi uqonde ukuthi kuyasebenza kanjani empilweni yakho yansuku zonke." },
  { key: "cta.start", en: "Start Learning", sn: "Tanga Kudzidza", nd: "Qala Ukufunda" },
  { key: "cta.browse", en: "Browse Categories", sn: "Tarisa Mapoka", nd: "Bheka Izigaba" }
];