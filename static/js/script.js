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
    'hero.subheadline': 'APIs, applied ML tools, and pragmatic AI services.',
    'hero.cta1': 'Explore projects',
    'hero.cta2': 'Follow updates',

    // Projects
    'projects.title': 'Projects',
    'projects.badge.tba': 'TBA',
    'projects.badge.planned': 'Planned',

    'projects.nomacore.desc': 'Commercial intelligence API deriving demographic insights from customer names and addresses.',

    'projects.talaria.desc': 'Quantitative trading system generating signals and predictions for swing trading strategies.',

    'projects.tinyfutures.desc': 'A playful photo tool for imagining "older" versions of personal family photos.',

    'projects.futhark.desc': 'Nordic and Viking-inspired cultural initiative.',

    'projects.antares.desc': 'Astrology tools and resources for personal exploration.',

    'projects.more.title': 'More Planned',
    'projects.more.desc': 'Additional apps, websites, and social media content generation tools with productized, low-support models.',

    // Principles
    'principles.title': 'Principles',
    'principles.subtitle': 'Core design philosophy guiding all Vimerk projects.',

    'principles.scope.title': 'Small scope, clear boundaries',
    'principles.scope.desc': 'Every project has well-defined limits. No feature creep, no endless roadmaps.',

    'principles.maintenance.title': 'Low maintenance by design',
    'principles.maintenance.desc': 'Built to run reliably with minimal ongoing intervention. Simplicity over complexity.',

    'principles.ai.title': 'Pragmatic AI usage',
    'principles.ai.desc': 'AI where it adds genuine value, not for novelty. Applied machine learning focused on practical outcomes.',

    'principles.resilience.title': 'Portfolio resilience',
    'principles.resilience.desc': 'Multiple independent projects reduce single-point dependency. Diversified by design.',

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
    'footer.analytics': 'Static site. No analytics by default. Project pages will be added progressively.',

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
    'hero.subheadline': 'API:er, tillämpade ML-verktyg och pragmatiska AI-tjänster.',
    'hero.cta1': 'Utforska projekt',
    'hero.cta2': 'Följ uppdateringar',

    // Projects
    'projects.title': 'Projekt',
    'projects.badge.tba': 'Kommer',
    'projects.badge.planned': 'Planerat',

    'projects.nomacore.desc': 'Kommersiell intelligens-API som härleder demografiska insikter från kundnamn och adresser.',

    'projects.talaria.desc': 'Kvantitativt handelssystem som genererar signaler och prediktioner för swing trading-strategier.',

    'projects.tinyfutures.desc': 'Ett lekfullt fotoverktyg för att föreställa sig "äldre" versioner av personliga familjefoton.',

    'projects.futhark.desc': 'Nordisk och vikinginspirerat kulturinitiativ.',

    'projects.antares.desc': 'Astrologiverktyg och resurser för personlig utforskning.',

    'projects.more.title': 'Fler planerade',
    'projects.more.desc': 'Ytterligare appar, webbplatser och verktyg för generering av innehåll för sociala medier med produktifierade, lågsupport-modeller.',

    // Principles
    'principles.title': 'Principer',
    'principles.subtitle': 'Kärnfilosofi som vägleder alla Vimerk-projekt.',

    'principles.scope.title': 'Liten omfattning, tydliga gränser',
    'principles.scope.desc': 'Varje projekt har väldefinierade gränser. Ingen funktionskrypning, inga oändliga färdplaner.',

    'principles.maintenance.title': 'Lågunderhåll genom design',
    'principles.maintenance.desc': 'Byggd för att köra tillförlitligt med minimal pågående intervention. Enkelhet framför komplexitet.',

    'principles.ai.title': 'Pragmatisk AI-användning',
    'principles.ai.desc': 'AI där det ger verkligt värde, inte för nyhets skull. Tillämpad maskininlärning fokuserad på praktiska resultat.',

    'principles.resilience.title': 'Portföljmotståndskraft',
    'principles.resilience.desc': 'Flera oberoende projekt minskar enskilda beroenden. Diversifierat genom design.',

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
    'footer.analytics': 'Statisk webbplats. Ingen analys som standard. Projektsidor kommer att läggas till progressivt.',

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
