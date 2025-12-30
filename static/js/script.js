/**
 * Vimerk.com - Language Toggle & i18n
 * Bilingual support (English/Swedish)
 */

// Translation dictionary
const translations = {
  en: {
    // Meta
    'meta.title': 'Vimerk - Small, low-maintenance digital products',
    'meta.description': 'Vimerk builds small, low-maintenance digital products. APIs, applied ML tools, and pragmatic AI services.',

    // Accessibility
    'accessibility.skip': 'Skip to main content',

    // Navigation
    'nav.projects': 'Projects',
    'nav.principles': 'Principles',
    'nav.contact': 'Contact',

    // Hero
    'hero.headline': 'Vimerk builds small, low-maintenance digital products.',
    'hero.subheadline': 'Small, precise, durable technical products. Built solo. Built to last.',
    'hero.cta1': 'Explore projects',
    'hero.cta2': 'Follow updates',

    // About
    'about.intro': 'Vimerk is a solo digital products company based in Uppsala, Sweden. We build small, precise, and durable technical products: APIs, applied machine-learning tools, and AI-assisted services that solve real problems with minimal operational overhead.',
    'about.positioning': 'This is not a startup chasing scale for its own sake. It's a long-term, independent engineering practice—productized.',
    'about.belief': 'Most digital products fail not because the ideas are bad, but because they are overengineered, overpromised, and overdependent on complexity or constant intervention. Vimerk exists to do the opposite.',

    // Projects
    'projects.title': 'Projects',
    'projects.intro': 'Small, focused tools solving narrow, well-defined problems.',
    'projects.badge.tba': 'TBA',
    'projects.badge.planned': 'Planned',

    'projects.nomacore.category': 'Commercial Intelligence API',
    'projects.nomacore.desc': 'Commercial intelligence API deriving demographic insights from customer names and addresses.',

    'projects.talaria.category': 'Applied Machine Learning',
    'projects.talaria.desc': 'Quantitative trading system generating signals and predictions for swing trading strategies.',

    'projects.tinyfutures.category': 'AI-Assisted Photography',
    'projects.tinyfutures.desc': 'Playful tool to visualize how babies and young children might look as adults.',

    'projects.more.title': 'More Planned',
    'projects.more.desc': 'Utilities that often begin as internal tools—becoming products only when they prove genuinely useful.',

    // Principles
    'principles.title': 'Principles',

    'principles.solo.title': 'Solo-Engineered, Solo-Maintained',
    'principles.solo.desc': 'If one person can\'t build, deploy, and maintain it with minimal ongoing attention, it doesn\'t belong at Vimerk.',

    'principles.scope.title': 'Narrow Scope, Clear Boundaries',
    'principles.scope.desc': 'Each product solves one well-defined problem. Ambiguity is a liability, not a feature.',

    'principles.ai.title': 'AI as Tool, Not Identity',
    'principles.ai.desc': 'Used where it adds genuine leverage. Avoided where deterministic or statistical methods are superior. Never an excuse for opacity.',

    'principles.builttolast.title': 'Built to Last, Not to Exit',
    'principles.builttolast.desc': 'Every project must stand alone economically—able to generate revenue independently or be shut down without threatening the rest.',

    // What We Don't Build
    'avoid.title': 'What We Don\'t Build',
    'avoid.vc': 'No venture-capital dependency',
    'avoid.growth': 'No growth-at-all-costs strategies',
    'avoid.greyzone': 'No regulatory grey zones',

    // Follow Updates
    'updates.title': 'Follow Updates',
    'updates.bluesky.label': 'Follow us on Bluesky for updates:',

    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Get in touch for inquiries or collaboration.',

    'contact.form.name': 'Name',
    'contact.form.name.placeholder': 'Your name',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'your@email.com',
    'contact.form.topic': 'Topic',
    'contact.form.topic.general': 'General inquiry',
    'contact.form.topic.project': 'Project collaboration',
    'contact.form.topic.updates': 'Notify me of updates',
    'contact.form.topic.other': 'Other',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Your message...',
    'contact.form.submit': 'Send message',

    'contact.alternative': 'Prefer email? You can also write directly to ',

    // Footer
    'footer.tagline': 'Independent engineering practice. Uppsala, Sweden. Built to last.',
    'footer.analytics': 'Static site. No analytics by default. Project pages will be added progressively.',
    'footer.manifesto': 'Company Manifesto',

    // Thanks Page
    'thanks.meta.title': 'Thank you - Vimerk',
    'thanks.title': 'Thank you for reaching out',
    'thanks.subtitle': 'Your message has been received.',
    'thanks.message': 'We\'ll review your message and respond as soon as possible. If your inquiry is time-sensitive, feel free to email directly at ',
    'thanks.back': 'Return to homepage',
  },

  sv: {
    // Meta
    'meta.title': 'Vimerk - Små, lättunderhållna digitala produkter',
    'meta.description': 'Vimerk bygger små, lättunderhållna digitala produkter. API:er, tillämpade ML-verktyg och pragmatiska AI-tjänster.',

    // Accessibility
    'accessibility.skip': 'Hoppa till huvudinnehåll',

    // Navigation
    'nav.projects': 'Projekt',
    'nav.principles': 'Principer',
    'nav.contact': 'Kontakt',

    // Hero
    'hero.headline': 'Vimerk bygger små, lättunderhållna digitala produkter.',
    'hero.subheadline': 'Små, precisa, varaktiga tekniska produkter. Byggd solo. Byggd för att bestå.',
    'hero.cta1': 'Utforska projekt',
    'hero.cta2': 'Följ uppdateringar',

    // About
    'about.intro': 'Vimerk är ett solo digitalt produktföretag baserat i Uppsala, Sverige. Vi bygger små, precisa och varaktiga tekniska produkter: API:er, tillämpade maskininlärningsverktyg och AI-assisterade tjänster som löser verkliga problem med minimalt driftskostnader.',
    'about.positioning': 'Detta är inte en startup som jagar tillväxt för sin egen skull. Det är en långsiktig, oberoende ingenjörspraxis—produktifierad.',
    'about.belief': 'De flesta digitala produkter misslyckas inte för att idéerna är dåliga, utan för att de är överkomplicerade, överlovade och beroende av komplexitet eller ständig intervention. Vimerk finns för att göra tvärtom.',

    // Projects
    'projects.title': 'Projekt',
    'projects.intro': 'Små, fokuserade verktyg som löser smala, väldefinierade problem.',
    'projects.badge.tba': 'Kommer',
    'projects.badge.planned': 'Planerat',

    'projects.nomacore.category': 'Kommersiell Intelligens-API',
    'projects.nomacore.desc': 'Kommersiell intelligens-API som härleder demografiska insikter från kundnamn och adresser.',

    'projects.talaria.category': 'Tillämpad Maskininlärning',
    'projects.talaria.desc': 'Kvantitativt handelssystem som genererar signaler och prediktioner för swing trading-strategier.',

    'projects.tinyfutures.category': 'AI-Assisterad Fotografi',
    'projects.tinyfutures.desc': 'Lekfullt verktyg för att visualisera hur bebisar och småbarn kan se ut som vuxna.',

    'projects.more.title': 'Fler planerade',
    'projects.more.desc': 'Verktyg som ofta börjar som interna projekt—blir produkter endast när de visar sig genuint användbara.',

    // Principles
    'principles.title': 'Principer',

    'principles.solo.title': 'Solo-Konstruerad, Solo-Underhållen',
    'principles.solo.desc': 'Om en person inte kan bygga, distribuera och underhålla det med minimal pågående uppmärksamhet, hör det inte hemma på Vimerk.',

    'principles.scope.title': 'Smal Omfattning, Tydliga Gränser',
    'principles.scope.desc': 'Varje produkt löser ett väldefinierat problem. Tvetydighet är en skuld, inte en funktion.',

    'principles.ai.title': 'AI som Verktyg, Inte Identitet',
    'principles.ai.desc': 'Används där det ger genuint utnyttjande. Undviks där deterministiska eller statistiska metoder är överlägsna. Aldrig en ursäkt för opacitet.',

    'principles.builttolast.title': 'Byggd för att Bestå, Inte för Exit',
    'principles.builttolast.desc': 'Varje projekt måste stå ekonomiskt självständigt—kunna generera intäkter oberoende eller stängas ner utan att hota resten.',

    // What We Don't Build
    'avoid.title': 'Vad Vi Inte Bygger',
    'avoid.vc': 'Inget riskkapitalberoende',
    'avoid.growth': 'Inga tillväxt-till-varje-pris strategier',
    'avoid.greyzone': 'Inga regulatoriska gråzoner',

    // Follow Updates
    'updates.title': 'Följ uppdateringar',
    'updates.bluesky.label': 'Följ oss på Bluesky för uppdateringar:',

    // Contact
    'contact.title': 'Kontakt',
    'contact.subtitle': 'Hör av dig för förfrågningar eller samarbete.',

    'contact.form.name': 'Namn',
    'contact.form.name.placeholder': 'Ditt namn',
    'contact.form.email': 'E-post',
    'contact.form.email.placeholder': 'din@epost.se',
    'contact.form.topic': 'Ämne',
    'contact.form.topic.general': 'Allmän förfrågan',
    'contact.form.topic.project': 'Projektsamarbete',
    'contact.form.topic.updates': 'Meddela mig om uppdateringar',
    'contact.form.topic.other': 'Annat',
    'contact.form.message': 'Meddelande',
    'contact.form.message.placeholder': 'Ditt meddelande...',
    'contact.form.submit': 'Skicka meddelande',

    'contact.alternative': 'Föredrar e-post? Du kan också skriva direkt till ',

    // Footer
    'footer.tagline': 'Oberoende ingenjörspraxis. Uppsala, Sverige. Byggd för att bestå.',
    'footer.analytics': 'Statisk webbplats. Ingen analys som standard. Projektsidor kommer att läggas till progressivt.',
    'footer.manifesto': 'Företagsmanifest',

    // Thanks Page
    'thanks.meta.title': 'Tack - Vimerk',
    'thanks.title': 'Tack för att du hörde av dig',
    'thanks.subtitle': 'Ditt meddelande har mottagits.',
    'thanks.message': 'Vi kommer att granska ditt meddelande och svara så snart som möjligt. Om din förfrågan är tidskänslig, tveka inte att e-posta direkt till ',
    'thanks.back': 'Tillbaka till startsidan',
  }
};

// Current language state
let currentLang = 'en';

/**
 * Detect browser language
 * Returns 'sv' if browser language starts with 'sv', otherwise 'en'
 */
function detectBrowserLanguage() {
  const browserLang = navigator.language || navigator.userLanguage;
  return browserLang.toLowerCase().startsWith('sv') ? 'sv' : 'en';
}

/**
 * Get saved language preference from localStorage
 */
function getSavedLanguage() {
  try {
    return localStorage.getItem('vimerk_lang') || null;
  } catch (e) {
    console.warn('localStorage not available:', e);
    return null;
  }
}

/**
 * Save language preference to localStorage
 */
function saveLanguage(lang) {
  try {
    localStorage.setItem('vimerk_lang', lang);
  } catch (e) {
    console.warn('Could not save language preference:', e);
  }
}

/**
 * Update all translatable elements on the page
 */
function updatePageLanguage(lang) {
  currentLang = lang;

  // Update html lang attribute
  document.documentElement.lang = lang;

  // Update all elements with data-i18n attribute (text content)
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // Update all elements with data-i18n-content attribute (content attributes like title, meta description)
  document.querySelectorAll('[data-i18n-content]').forEach(element => {
    const key = element.getAttribute('data-i18n-content');
    if (translations[lang][key]) {
      if (element.hasAttribute('content')) {
        element.setAttribute('content', translations[lang][key]);
      }
    }
  });

  // Update all elements with data-i18n-placeholder attribute (placeholder text)
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      element.setAttribute('placeholder', translations[lang][key]);
    }
  });

  // Update page title
  if (translations[lang]['meta.title']) {
    document.title = translations[lang]['meta.title'];
  }

  // Update current language display in dropdown
  const currentLangDisplay = document.getElementById('current-lang');
  if (currentLangDisplay) {
    currentLangDisplay.textContent = lang === 'sv' ? 'Svenska' : 'English';
  }

  // Save preference
  saveLanguage(lang);
}

/**
 * Initialize language toggle
 */
function initLanguageToggle() {
  // Determine initial language: saved preference > browser detection > default to English
  const savedLang = getSavedLanguage();
  const initialLang = savedLang || detectBrowserLanguage();

  // Set initial language
  updatePageLanguage(initialLang);

  // Add click handlers to language toggle links
  document.querySelectorAll('[data-lang]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const selectedLang = link.getAttribute('data-lang');
      updatePageLanguage(selectedLang);

      // Close dropdown after selection (Pico.css specific)
      const dropdown = link.closest('details');
      if (dropdown) {
        dropdown.removeAttribute('open');
      }
    });
  });
}

/**
 * Smooth scroll to anchor links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      // Don't prevent default for hash-only links (used in dropdown)
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);

      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Update URL without jumping
        history.pushState(null, null, href);
      }
    });
  });
}

/**
 * Initialize on DOM ready
 */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initLanguageToggle();
    initSmoothScroll();
  });
} else {
  initLanguageToggle();
  initSmoothScroll();
}
