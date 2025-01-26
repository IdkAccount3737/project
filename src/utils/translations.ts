import { useLanguage } from '../contexts/LanguageContext';

export const translations = {
  en: {
    nav: {
      tournaments: 'Tournaments',
      structure: 'Structure',
      rules: 'Rules',
      faq: 'FAQ',
      contact: 'Contact',
      about: 'About Us'
    },
    tournament: {
      title: 'Tournaments',
      filterByCountry: 'Filter by Country',
      allCountries: 'All',
      registration: 'Registration until',
      startTime: 'Start',
      teams: 'teams',
      watchStream: 'Watch',
      register: 'Register',
      live: 'LIVE'
    },
    rules: {
      title: 'Rules',
      sections: {
        matchRules: {
          title: 'Match Rules',
          items: [
            'All matches are played in Draft Pick mode',
            'Best of 3 format for group stage',
            'Best of 5 format for playoffs',
            'Maximum 5 minutes pause per team during match'
          ]
        },
        fairPlay: {
          title: 'Fair Play',
          items: [
            'Any form of cheating results in immediate disqualification',
            'Match fixing is strictly prohibited',
            'Account sharing is not allowed',
            'Use of external software is prohibited'
          ]
        },
        penalties: {
          title: 'Penalties',
          items: [
            'Late arrival: Warning/Point deduction',
            'No show: Match loss',
            'Unsportsmanlike conduct: Suspension/Disqualification',
            'Rule violation: Point deduction/Disqualification'
          ]
        }
      }
    },
    faq: {
      title: 'FAQ',
      items: [
        {
          question: 'How to participate?',
          answer: 'Register through our website and join the tournament.'
        },
        {
          question: 'What are the requirements?',
          answer: 'You need a valid game account and meet age requirements.'
        },
        {
          question: 'How are prizes distributed?',
          answer: 'Prizes are distributed within 30 days after tournament end.'
        },
        {
          question: 'Technical requirements?',
          answer: 'Stable internet connection and working microphone required.'
        }
      ]
    },
    about: {
      title: 'About Us',
      intro: 'Surge Europe is dedicated to elevating the competitive environment of Mobile Legends: Bang Bang in Europe. Our goal is to provide a professional platform for teams to showcase their skills and compete at the highest level.',
      experience: 'With years of experience in organizing esports events, we ensure fair play, competitive integrity, and an unforgettable experience for both players and spectators.',
      join: 'Join us in shaping the future of MLBB esports in Europe and be part of something extraordinary.',
      subtitle: 'Leading European Tournament Platform',
      description: 'SURGE EUROPE is dedicated to creating professional esports opportunities across Europe.',
      mission: {
        title: 'Our Mission',
        description: 'To build a thriving competitive gaming ecosystem that empowers players and teams across Europe.'
      },
      values: {
        title: 'Our Values',
        items: [
          {
            title: 'Excellence',
            description: 'We strive for the highest standards in tournament organization'
          },
          {
            title: 'Community',
            description: 'Building strong connections between players, teams, and fans'
          },
          {
            title: 'Innovation',
            description: 'Continuously improving the competitive gaming experience'
          },
          {
            title: 'Integrity',
            description: 'Ensuring fair play and transparency in all competitions'
          }
        ]
      }
    },
    structure: {
      title: 'Tournament Structure',
      phases: {
        qualification: {
          title: 'Qualification',
          description: 'Open qualifiers for all teams. Top teams advance to the main phase.'
        },
        groups: {
          title: 'Group Stage',
          description: 'Teams are divided into groups, playing round-robin. Best teams advance to playoffs.'
        },
        playoffs: {
          title: 'Playoffs',
          description: 'Single elimination bracket with top teams competing for finals.'
        },
        finals: {
          title: 'Grand Finals',
          description: 'Tournament peak where the champion is crowned and prize pool distributed.'
        }
      }
    },
    footer: {
      description: 'Professional tournaments and community for players in Europe. Join us and become part of the future of esports.',
      quickLinks: 'Quick Links',
      about: 'About',
      termsOfService: 'General business conditions',
      contact: 'Contact',
      allRightsReserved: 'All rights reserved.'
    },
    contact: {
      title: 'Contact Us',
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'your@email.com',
      message: 'Message',
      messagePlaceholder: 'Your message...',
      send: 'Send Message',
      address: 'Address',
      phone: 'Phone',
      emailLabel: 'Email Address'
    },
    hero: {
      joinTournament: 'Join Tournament'
    }
  },
  sk: {
    nav: {
      tournaments: 'Turnaje',
      structure: 'Štruktúra',
      rules: 'Pravidlá',
      faq: 'FAQ',
      contact: 'Kontakt',
      about: 'O Nás'
    },
    tournament: {
      title: 'Turnaje',
      filterByCountry: 'Filtrovať podľa krajiny',
      allCountries: 'Všetky',
      registration: 'Registrácia do',
      startTime: 'Začiatok',
      teams: 'tímov',
      watchStream: 'Sledovať',
      register: 'Registrovať',
      live: 'NAŽIVO'
    },
    rules: {
      title: 'Pravidlá',
      sections: {
        matchRules: {
          title: 'Pravidlá Zápasov',
          items: [
            'Všetky zápasy sa hrajú v móde Draft Pick',
            'Formát Best of 3 pre skupinovú fázu',
            'Formát Best of 5 pre playoff',
            'Maximálne 5 minút pauzy na tím počas zápasu'
          ]
        },
        fairPlay: {
          title: 'Fair Play',
          items: [
            'Akákoľvek forma podvádzania znamená okamžitú diskvalifikáciu',
            'Ovplyvňovanie výsledkov zápasov je prísne zakázané',
            'Zdieľanie účtov nie je povolené',
            'Použitie externého softvéru je zakázané'
          ]
        },
        penalties: {
          title: 'Sankcie',
          items: [
            'Neskorý príchod: Upozornenie/Odpočet bodov',
            'Nedostavenie sa: Prehra zápasu',
            'Nesportové správanie: Pozastavenie/Diskvalifikácia',
            'Porušenie pravidiel: Odpočet bodov/Diskvalifikácia'
          ]
        }
      }
    },
    faq: {
      title: 'Často Kladené Otázky',
      items: [
        {
          question: 'Ako sa zúčastniť?',
          answer: 'Zaregistrujte sa cez našu webstránku a pripojte sa k turnaju.'
        },
        {
          question: 'Aké sú požiadavky?',
          answer: 'Potrebujete platný herný účet a spĺňať vekové požiadavky.'
        },
        {
          question: 'Ako sú distribuované ceny?',
          answer: 'Ceny sú distribuované do 30 dní po skončení turnaja.'
        },
        {
          question: 'Technické požiadavky?',
          answer: 'Vyžaduje sa stabilné internetové pripojenie a funkčný mikrofón.'
        }
      ]
    },
    about: {
      title: 'O nás',
      intro: 'Surge Európa je venovaná výzdvihu súťažného prostredia Mobile Legends: Bang Bang v Európe. Našim cieľom je poskytnúť profesionálnu platformu pre tímy, aby mohli predviesť svoje schopnosti a súťažiť na najvyššej úrovni.',
      experience: 'S rokmi skúseností v organizovaní esportových podujatí zabezpečujeme férovú hru, súťažnú integritu a nezabudnuteľný zážitok pre hráčov aj divákov.',
      join: 'Pridajte sa k nám pri formovaní budúcnosti MLBB esportu v Európe a súčasťou niečoho výnimočného.',
      subtitle: 'Vedúca Európska Turnajová Platforma',
      description: 'SURGE EUROPE sa venuje vytváraniu profesionálnych esportových príležitostí v celej Európe.',
      mission: {
        title: 'Naša Misia',
        description: 'Vybudovať prosperujúci ekosystém súťažného hrania, ktorý posilňuje hráčov a tímy v celej Európe.'
      },
      values: {
        title: 'Naše Hodnoty',
        items: [
          {
            title: 'Excelentnosť',
            description: 'Usilujeme sa o najvyššie štandardy v organizácii turnajov'
          },
          {
            title: 'Komunita',
            description: 'Budovanie silných vzťahov medzi hráčmi, tímami a fanúšikmi'
          },
          {
            title: 'Inovácia',
            description: 'Neustále zlepšovanie zážitku zo súťažného hrania'
          },
          {
            title: 'Integrita',
            description: 'Zabezpečenie fair play a transparentnosti vo všetkých súťažiach'
          }
        ]
      }
    },
    structure: {
      title: 'Štruktúra Turnaja',
      phases: {
        qualification: {
          title: 'Kvalifikácia',
          description: 'Otvorené kvalifikačné turnaje pre všetky tímy. Top tímy postupujú do hlavnej fázy.'
        },
        groups: {
          title: 'Skupinová Fáza',
          description: 'Tímy sú rozdelené do skupín, kde hrajú každý s každým. Najlepší postupujú do playoff.'
        },
        playoffs: {
          title: 'Playoff',
          description: 'Single elimination bracket s najlepšími tímami bojujúcimi o postup do finále.'
        },
        finals: {
          title: 'Grand Finále',
          description: 'Vrchol turnaja, kde sa rozhodne o celkovom víťazovi a rozdelení prize poolu.'
        }
      }
    },
    footer: {
      description: 'Profesionálne turnaje a komunita pre hráčov v Európe. Pripojte sa k nám a staňte sa súčasťou budúcnosti e-športu.',
      quickLinks: 'Rýchle odkazy',
      about: 'O nás',
      termsOfService: 'Všeobecné obchodné podmienky',
      contact: 'Kontakt',
      allRightsReserved: 'Všetky práva vyhradené.'
    },
    contact: {
      title: 'Kontaktujte nás',
      name: 'Meno',
      namePlaceholder: 'Vaše meno',
      email: 'Email',
      emailPlaceholder: 'vas@email.com',
      message: 'Správa',
      messagePlaceholder: 'Vaša správa...',
      send: 'Odoslať správu',
      address: 'Adresa',
      phone: 'Telefón',
      emailLabel: 'Emailová adresa'
    },
    hero: {
      joinTournament: 'Pridať sa do turnaja'
    }
  }
};
