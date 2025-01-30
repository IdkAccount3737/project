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
        generalRules: {
          title: 'Tournament Rules',
          items: [
            'All players must adhere to our Tournament Rulebook',
            'Fair play policies must be followed at all times',
            'Cheating, account sharing, and toxic behavior will lead to disqualification',
            'Check detailed rules at (link)'
          ]
        },
        matchRules: {
          title: 'Match Rules',
          items: [
            'All matches are played in Draft Pick mode',
            'Best of 3 format for group stage',
            'Best of 5 format for playoffs',
            'Maximum 5 minutes pause per team during match'
          ]
        },
        technicalIssues: {
          title: 'Technical Issues',
          items: [
            'Teams must ensure stable internet connection before playing',
            'If a player disconnects, the match will continue',
            'Major technical issues may result in a rematch (decided by organizers)',
            'Teams not showing up within allocated time will forfeit the match'
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
          question: 'Where can I find updates on upcoming tournaments?',
          answer: 'Follow us on [Social Media Links] or check the Tournaments section on our website for the latest announcements.'
        },
        {
          question: 'How are prizes distributed?',
          answer: 'Prizes will be sent via bank transfer, PayPal, or in-game rewards. Players must provide the necessary information within a specified timeframe to claim their prizes.'
        },
        {
          question: 'Can I play with a mixed-rank team?',
          answer: 'Yes, unless the tournament has rank restrictions (e.g., Mythic Only tournaments). Make sure to check the tournament requirements.'
        },
        {
          question: 'Do I need to pay to enter the tournaments?',
          answer: 'Some tournaments are free to enter, while others may require a small entry fee to contribute to the prize pool. Check the tournament details before registering.'
        },
        {
          question: 'How do I register for a tournament?',
          answer: 'You can register by visiting our website, selecting an upcoming tournament, and following the registration process. Some tournaments may require a team captain to sign up on behalf of the team.'
        }
      ]
    },
    about: {
      title: 'About Us',
      intro: 'We are an esports organization dedicated to hosting competitive Mobile Legends: Bang Bang (MLBB) tournaments in Central Europe. Our goal is to create a thriving MLBB community by providing professional and amateur players with exciting opportunities to compete and win prizes.',
      experience: ' Our tournaments are open to all MLBB players in Central Europe. Some events may have rank or region restrictions, which will be specified in the tournament details.',
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
          title: 'Format',
          description: 'Our tournaments typically follow a single-elimination, double-elimination, or round-robin format, depending on the size and type of the event. Details will be provided in the tournament description.'
        },
        groups: {
          title: 'Players',
          description: 'Standard MLBB tournaments require a 5-player team, but some events may allow substitutes. Check the specific rules of each tournament.'
        },
        playoffs: {
          title: 'Location',
          description: 'All matches are played in Custom Lobbies within Mobile Legends: Bang Bang. You will receive lobby details before your match starts.'
        },
        finals: {
          title: 'Prize',
          description: ' Prizes vary by tournament and may include cash rewards, in-game diamonds, exclusive skins, and tournament trophies. Prize details will be announced with each tournament.'
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
        generalRules: {
          title: 'Pravidlá Turnaja',
          items: [
            'Všetci hráči sa musia riadiť našim Turnajovým Pravidelníkom',
            'Pravidlá fair play musia byť dodržiavané vždy',
            'Podvádzať, zdieľať účty a toxické správanie vedie k diskvalifikácii',
            'Zistiť podrobnejšie pravidlá na (link)'
          ]
        },
        matchRules: {
          title: 'Pravidlá Zápasov',
          items: [
            'Všetky zápasy sa hrajú v móde Draft Pick',
            'Formát Best of 3 pre skupinovú fázu',
            'Formát Best of 5 pre playoff',
            'Maximálne 5 minút pauzy na tím počas zápasu'
          ]
        },
        technicalIssues: {
          title: 'Technické Problémy',
          items: [
            'Tímy musia zabezpečiť stabilné internetové pripojenie pred hrou',
            'Ak sa hráč odpojí, zápas bude pokračovať',
            'Vážne technické problémy môžu vyústiť v opakovanie zápasu (rozhodnutie organizátorov)',
            'Tímy, ktoré sa nedostaví v stanovenom čase, stratia zápas'
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
