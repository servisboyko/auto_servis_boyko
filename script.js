// AUTOSERVIS BOYKO - JavaScript

// Translations
const translations = {
    cs: {
        'nav-home': 'Domů',
        'nav-about': 'O nás',
        'nav-services': 'Služby',
        'nav-pricing': 'Ceník',
        'nav-contact': 'Kontakt',
        'hero-badge': 'Profesionální autoservis v Brně',
        'hero-text': 'Provádíme práci co nejproduktivněji, váš automobil bude sloužit déle a spolehlivě pouze s námi',
        'hero-btn-primary': 'Rezervovat servis',
        'hero-btn-secondary': 'Naše služby',
        'hero-phone': 'Telefon',
        'hero-address': 'Adresa',
        'hero-hours': 'Otevírací doba',
        'hero-hours-value': 'Po-Pá: 8:00-18:00',
        'about-badge': 'O našem servisu',
        'about-title': 'AUTOSERVIS <span class="gold">BOYKO</span>',
        'about-lead': 'Provádíme práci co nejproduktivněji, váš automobil bude sloužit déle a spolehlivě pouze s námi.',
        'about-text': 'Specializujeme se na opravy a údržbu vozidel všech značek. Náš tým profesionálů zajišťuje kvalitní servis pomocí moderního vybavení a originálních náhradních dílů.',
        'about-experience': 'let zkušeností',
        'feature-oil': 'Výměna oleje (motor, převodovka)',
        'feature-exhaust': 'Oprava výfukového systému',
        'feature-ac': 'Doplňování klimatizace',
        'feature-suspension': 'Oprava podvozku',
        'feature-fuel': 'Oprava palivového systému',
        'feature-engine': 'Opravy motorů',
        'feature-parts': 'Autodíly',
        'feature-chip': 'Chip tuning, kódování',
        'services-badge': 'Naše služby',
        'services-title': 'Kompletní nabídka <span class="gold">služeb</span>',
        'services-subtitle': 'Autoservis a pneuservis - provádíme všechny druhy prací rychle a kvalitně',
        'service-oil': 'Výměna oleje a filtrů',
        'service-oil-desc': 'V motoru a automatické převodovce',
        'service-brakes': 'Brzdové kotouče a destičky',
        'service-brakes-desc': 'Výměna a údržba',
        'service-belts': 'Řemeny a kladky',
        'service-belts-desc': 'Výměna rozvodů a pohonových řemenů',
        'service-suspension': 'Oprava podvozku',
        'service-suspension-desc': 'Diagnostika a oprava zavěšení',
        'service-exhaust': 'Oprava výfukového systému',
        'service-exhaust-desc': 'Výměna tlumičů a katalyzátorů',
        'service-diagnostics': 'Počítačová diagnostika',
        'service-diagnostics-desc': 'Kompletní kontrola elektroniky',
        'service-buy': 'Pomoc při koupi auta',
        'service-buy-desc': 'Kontrola před nákupem',
        'service-taxi': 'Flotila pro taxikáře',
        'service-taxi-desc': 'Speciální servisní podmínky',
        'service-stk': 'Prohlídka před STK',
        'service-stk-desc': 'Příprava a doprovod',
        'pricing-badge': 'Ceník',
        'pricing-title': 'Naše <span class="gold">ceny</span>',
        'pricing-subtitle': 'Transparentní ceny bez skrytých poplatků',
        'pricing-wheels': 'Výměna kol',
        'pricing-wheels-sub': 'Včetně vyvážení',
        'pricing-wheels-desc': 'Jedná se o výměnu sady kol a tato služba obsahuje: demontáž kol z osy, vyvážení kol a následná montáž kol na osu.',
        'pricing-tires': 'Přezutí pneumatik',
        'pricing-tires-sub': 'Včetně vyvážení',
        'pricing-tires-desc': 'Jedná se o přezutí 4 kusů pneumatik a tato služba obsahuje následující úkony: demontáž kol z osy, demontáž a montáž pneu z/na disku, vyvážení kol a montáž kol na osu vozidla.',
        'pricing-note': '* Příplatek za nadměrné množství závaží',
        'contact-badge': 'Kontaktujte nás',
        'contact-title': 'Potřebuje váš vůz <span class="gold">servis?</span>',
        'contact-text': 'Napište nám na email nebo zavolejte, rádi vám pomůžeme',
        'contact-email': 'Email',
        'contact-phone': 'Telefon',
        'contact-address': 'Adresa',
        'contact-btn-email': 'Napsat email',
        'contact-btn-call': 'Zavolat',
        'contact-map-badge': 'Kde nás najdete',
        'contact-map-title': 'Naše lokace',
        'contact-map-btn': 'Otevřít v Google Maps',
        'footer-text': 'Profesionální autoservis v Brně. Kvalitní opravy, pneuservis a údržba vozidel.',
        'footer-contact': 'Kontakt',
        'footer-hours': 'Otevírací doba',
        'footer-mon': 'Pondělí',
        'footer-tue': 'Úterý',
        'footer-wed': 'Středa',
        'footer-thu': 'Čtvrtek',
        'footer-fri': 'Pátek',
        'footer-weekend': 'Sobota-Neděle',
        'footer-closed': 'Zavřeno',
        'footer-copyright': '© 2025 AUTOSERVIS BOYKO. Všechna práva vyhrazena.'
    },
    uk: {
        'nav-home': 'Головна',
        'nav-about': 'Про нас',
        'nav-services': 'Послуги',
        'nav-pricing': 'Ціни',
        'nav-contact': 'Контакти',
        'hero-badge': 'Професійний автосервіс у Брні',
        'hero-text': 'Виконуємо роботу максимально продуктивно, ваш автомобіль буде служити довше і надійніше тільки з нами',
        'hero-btn-primary': 'Забронювати сервіс',
        'hero-btn-secondary': 'Наші послуги',
        'hero-phone': 'Телефон',
        'hero-address': 'Адреса',
        'hero-hours': 'Години роботи',
        'hero-hours-value': 'Пн-Пт: 8:00-18:00',
        'about-badge': 'Про наш сервіс',
        'about-title': 'АВТОСЕРВІС <span class="gold">BOYKO</span>',
        'about-lead': 'Виконуємо роботу максимально продуктивно, ваш автомобіль буде служити довше і надійніше тільки з нами.',
        'about-text': 'Спеціалізуємося на ремонті та обслуговуванні автомобілів усіх марок. Наша команда професіоналів забезпечує якісний сервіс за допомогою сучасного обладнання та оригінальних запчастин.',
        'about-experience': 'років досвіду',
        'feature-oil': 'Заміна олії (двигун, КПП)',
        'feature-exhaust': 'Ремонт вихлопної системи',
        'feature-ac': 'Заправка кондиціонера',
        'feature-suspension': 'Ремонт підвіски',
        'feature-fuel': 'Ремонт паливної системи',
        'feature-engine': 'Ремонт двигунів',
        'feature-parts': 'Автозапчастини',
        'feature-chip': 'Чіп тюнінг, кодування',
        'services-badge': 'Наші послуги',
        'services-title': 'Повний перелік <span class="gold">послуг</span>',
        'services-subtitle': 'Автосервіс та шиномонтаж - виконуємо всі види робіт швидко та якісно',
        'service-oil': 'Заміна олії та фільтрів',
        'service-oil-desc': 'У двигуні та автоматичній КПП',
        'service-brakes': 'Гальмівні диски та колодки',
        'service-brakes-desc': 'Заміна та обслуговування',
        'service-belts': 'Ремені та шківи',
        'service-belts-desc': 'Заміна ГРМ та приводних ременів',
        'service-suspension': 'Ремонт підвіски',
        'service-suspension-desc': 'Діагностика та ремонт ходової',
        'service-exhaust': 'Ремонт вихлопної системи',
        'service-exhaust-desc': 'Заміна глушників та каталізаторів',
        'service-diagnostics': 'Комп\'ютерна діагностика',
        'service-diagnostics-desc': 'Повна перевірка електроніки',
        'service-buy': 'Допомога при купівлі авто',
        'service-buy-desc': 'Перевірка перед покупкою',
        'service-taxi': 'Флот для таксистів',
        'service-taxi-desc': 'Спеціальні сервісні умови',
        'service-stk': 'Огляд перед ТО',
        'service-stk-desc': 'Підготовка та супровід',
        'pricing-badge': 'Ціни',
        'pricing-title': 'Наші <span class="gold">ціни</span>',
        'pricing-subtitle': 'Прозорі ціни без прихованих платежів',
        'pricing-wheels': 'Заміна коліс',
        'pricing-wheels-sub': 'Включаючи балансування',
        'pricing-wheels-desc': 'Це заміна комплекту коліс, послуга включає: демонтаж коліс з осі, балансування коліс та подальший монтаж коліс на вісь.',
        'pricing-tires': 'Перезування шин',
        'pricing-tires-sub': 'Включаючи балансування',
        'pricing-tires-desc': 'Це перезування 4 шин, послуга включає: демонтаж коліс з осі, демонтаж та монтаж шин з/на диск, балансування коліс та монтаж коліс на вісь автомобіля.',
        'pricing-note': '* Доплата за надмірну кількість вантажів',
        'contact-badge': 'Зв\'яжіться з нами',
        'contact-title': 'Вашому авто потрібен <span class="gold">сервіс?</span>',
        'contact-text': 'Напишіть нам на email або зателефонуйте, ми раді вам допомогти',
        'contact-email': 'Email',
        'contact-phone': 'Телефон',
        'contact-address': 'Адреса',
        'contact-btn-email': 'Написати email',
        'contact-btn-call': 'Подзвонити',
        'contact-map-badge': 'Де нас знайти',
        'contact-map-title': 'Наша локація',
        'contact-map-btn': 'Відкрити в Google Maps',
        'footer-text': 'Професійний автосервіс у Брні. Якісний ремонт, шиномонтаж та обслуговування автомобілів.',
        'footer-contact': 'Контакти',
        'footer-hours': 'Години роботи',
        'footer-mon': 'Понеділок',
        'footer-tue': 'Вівторок',
        'footer-wed': 'Середа',
        'footer-thu': 'Четвер',
        'footer-fri': 'П\'ятниця',
        'footer-weekend': 'Субота-Неділя',
        'footer-closed': 'Зачинено',
        'footer-copyright': '© 2025 АВТОСЕРВІС BOYKO. Всі права захищені.'
    }
};

// Get saved language or default to Czech
let currentLang = 'cs';
try {
    const savedLang = localStorage.getItem('autoservis-lang');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
    }
} catch (e) {
    console.log('localStorage not available');
}

// Function to update page content based on language
function updateLanguage(lang) {
    if (!translations[lang]) return;
    
    currentLang = lang;
    
    // Save to localStorage
    try {
        localStorage.setItem('autoservis-lang', lang);
    } catch (e) {
        console.log('localStorage not available');
    }
    
    // Update current lang display
    const langCode = document.getElementById('currentLang');
    if (langCode) {
        langCode.textContent = lang.toUpperCase();
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

// Initialize when DOM is ready
function init() {
    // Initialize language
    updateLanguage(currentLang);
    
    // Language switcher - simple toggle between CZ and UK
    const langSwitch = document.getElementById('langSwitch');
    
    if (langSwitch) {
        langSwitch.addEventListener('click', function(e) {
            e.preventDefault();
            // Toggle between Czech and Ukrainian
            const newLang = currentLang === 'cs' ? 'uk' : 'cs';
            updateLanguage(newLang);
        });
    }
    
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
    
    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Change icon
            const isOpen = navMenu.classList.contains('active');
            menuToggle.innerHTML = isOpen 
                ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'
                : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                menuToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
            });
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
