
document.addEventListener('DOMContentLoaded', () => {
    // Configuration
    const CONFIG = {
        defaultLanguage: 'uk',
        supportedLanguages: ['uk', 'en', 'sk']
    };

    // Translations object (Embedded to avoid fetch/CORS issues)
    const translations = {
        uk: {
            "nav_about": "ПРО НАС",
            "nav_contacts": "КОНТАКТИ",
            "nav_price": "ПРАЙС",
            "hero_title": "Твоє авто — наша пристрасть!",
            "hero_desc_1": "Професійне обслуговування вашого авто з використанням сучасного обладнання.",
            "hero_desc_2": "Ми дбаємо про вашу безпеку на дорозі, гарантуючи якість кожної деталі та виконаної роботи.",
            "hero_desc_3": "Прозорі ціни, досвідчені майстри та індивідуальний підхід до кожного клієнта.",
            "cta_button": "Записатись на ремонт ➜",
            "service_working": "Service is working",
            "features_title": "НАШІ ПЕРЕВАГИ",
            "feature_warranty_title": "ГАРАНТІЯ ЯКОСТІ",
            "feature_warranty_desc": "Ми надаємо офіційну гарантію на всі виды робіт та запчастини.",
            "feature_speed_title": "ШВИДКІСТЬ",
            "feature_speed_desc": "Оперативний ремонт без втрати якості. Ми цінуємо ваш час.",
            "feature_reliability_title": "НАДІЙНІСТЬ",
            "feature_reliability_desc": "Тільки оригінальні запчастини та сертифіковані майстри.",
            "feature_price_title": "ЧЕСНІ ЦІНИ",
            "feature_price_desc": "Прозорий розрахунок без прихованих платежів.",
            "stat_repairs": "Успішних ремонтів",
            "stat_experience": "Років досвіду",
            "stat_clients": "Задоволених клієнтів",
            "stat_team": "Майстрів у команді",
            "works_title": "НАШІ РОБОТИ",
            "work_problem": "PROBLEM SOLVED:",
            "work_engine": "Engine Overhaul",
            "work_transmission": "Transmission Fix",
            "work_brake": "Brake System",
            "work_electronics": "Electronics Diagnostics",
            "about_title": "ПРО НАС",
            "about_text_1": "Наша майстерня відкрилася у 2020 році і з того часу ми невпинно працюємо над удосконаленням сервісу. За цей час ми обслужили тисячі автомобілів та здобули довіру клієнтів.",
            "about_text_2": "Ми пишаємося нашою командою професіоналів та результатами нашої роботи. У нас завжди йдуть справи вгору, тому що ми любимо те, що робимо.",
            "why_us_title": "ЧОМУ ОБИРАЮТЬ НАС?",
            "why_us_text": "Наша майстерня - це поєднання багаторічного досвіду та сучасних технологій. Ми не просто ремонтуємо авто, ми дбаємо про вашу безпеку на дорозі. Індивідуальний підхід до кожного клієнта та прозоре ціноутворення - наші головні принципи.",
            "contact_form_title": "Запис на ремонт",
            "input_name_placeholder": "Ім'я",
            "btn_submit": "Відправити",
            "footer_desc": "Професійний автосервіс для вашого авто. Якість, швидкість та надійність — наші головні принципи з 2020 року.",
            "footer_contacts_title": "КОНТАКТИ",
            "footer_address": "📍 Україна, м. Івано-Франківськ,<br>вул. Валова 34",
            "footer_schedule": "🕒 Пн-Пт: 09:00 - 18:00<br>Сб: 10:00 - 15:00<br>Нд: Вихідний",
            "footer_nav_title": "НАВІГАЦІЯ",
            "footer_nav_about": "Про нас",
            "footer_nav_price": "Прайс-лист",
            "footer_nav_book": "Записатись",
            "footer_social_title": "МИ В СОЦМЕРЕЖАХ",
            "copyright": "&copy; 2026 KUZENKY STO. All rights reserved.",
            "price_title": "ПРАЙС-ЛИСТ ПОСЛУГ",
            "table_service": "Послуга",
            "table_price": "Ціна (від)",
            "service_diagnostics": "Комп'ютерна діагностика",
            "service_oil": "Заміна мастила та фільтрів",
            "service_chassis": "Діагностика ходової частини",
            "service_brakes": "Заміна гальмівних колодок (вісь)",
            "service_engine": "Ремонт двигуна",
            "service_tires": "Шиномонтаж (комплект)",
            "service_ac": "Заправка кондиціонера",
            "service_alignment": "Розвал-сходження",
            "service_battery": "Перевірка акумулятора",
            "service_lights": "Регулювання фар",
            "service_antifreeze": "Заміна антифризу",
            "service_pre_purchase": "Комплексна діагностика перед покупкою",
            "price_disclaimer": "Ціни можуть змінюватися в залежності від марки та моделі авто.",
            "cta_book_repair": "Записатись на ремонт"
        },
        en: {
            "nav_about": "ABOUT US",
            "nav_contacts": "CONTACTS",
            "nav_price": "PRICES",
            "hero_title": "Your Car — Our Passion!",
            "hero_desc_1": "Professional maintenance of your car using modern equipment.",
            "hero_desc_2": "We care about your safety on the road, guaranteeing the quality of every detail and work performed.",
            "hero_desc_3": "Transparent prices, experienced masters, and an individual approach to every client.",
            "cta_button": "Book a Repair ➜",
            "service_working": "Service is working",
            "features_title": "OUR ADVANTAGES",
            "feature_warranty_title": "QUALITY WARRANTY",
            "feature_warranty_desc": "We provide an official warranty for all types of work and spare parts.",
            "feature_speed_title": "SPEED",
            "feature_speed_desc": "Prompt repair without loss of quality. We value your time.",
            "feature_reliability_title": "RELIABILITY",
            "feature_reliability_desc": "Only original spare parts and certified masters.",
            "feature_price_title": "HONEST PRICES",
            "feature_price_desc": "Transparent calculation without hidden fees.",
            "stat_repairs": "Successful Repairs",
            "stat_experience": "Years of Experience",
            "stat_clients": "Satisfied Clients",
            "stat_team": "Masters in Team",
            "works_title": "OUR WORKS",
            "work_problem": "PROBLEM SOLVED:",
            "work_engine": "Engine Overhaul",
            "work_transmission": "Transmission Fix",
            "work_brake": "Brake System",
            "work_electronics": "Electronics Diagnostics",
            "about_title": "ABOUT US",
            "about_text_1": "Our workshop opened in 2020, and since then we have been tirelessly working to improve our service. During this time, we have serviced thousands of cars and earned the trust of clients.",
            "about_text_2": "We are proud of our team of professionals and the results of our work. Things are always looking up for us because we love what we do.",
            "why_us_title": "WHY CHOOSE US?",
            "why_us_text": "Our workshop combines years of experience and modern technologies. We don't just repair cars; we care about your safety on the road. Individual approach to every client and transparent pricing are our main principles.",
            "contact_form_title": "Book a Repair",
            "input_name_placeholder": "Name",
            "btn_submit": "Send",
            "footer_desc": "Professional car service for your car. Quality, speed, and reliability are our main principles since 2020.",
            "footer_contacts_title": "CONTACTS",
            "footer_address": "📍 Ukraine, Ivano-Frankivsk,<br>Valova St. 34",
            "footer_schedule": "🕒 Mon-Fri: 09:00 - 18:00<br>Sat: 10:00 - 15:00<br>Sun: Closed",
            "footer_nav_title": "NAVIGATION",
            "footer_nav_about": "About Us",
            "footer_nav_price": "Price List",
            "footer_nav_book": "Book Now",
            "footer_social_title": "WE ARE ON SOCIAL MEDIA",
            "copyright": "&copy; 2026 KUZENKY STO. All rights reserved.",
            "price_title": "SERVICE PRICE LIST",
            "table_service": "Service",
            "table_price": "Price (from)",
            "service_diagnostics": "Computer Diagnostics",
            "service_oil": "Oil and Filter Change",
            "service_chassis": "Chassis Diagnostics",
            "service_brakes": "Brake Pads Replacement (axle)",
            "service_engine": "Engine Repair",
            "service_tires": "Tire Fitting (set)",
            "service_ac": "A/C Refilling",
            "service_alignment": "Wheel Alignment",
            "service_battery": "Battery Check",
            "service_lights": "Headlight Adjustment",
            "service_antifreeze": "Antifreeze Replacement",
            "service_pre_purchase": "Comprehensive Pre-purchase Diagnostics",
            "price_disclaimer": "Prices may vary depending on the car make and model.",
            "cta_book_repair": "Book a Repair"
        },
        sk: {
            "nav_about": "O NÁS",
            "nav_contacts": "KONTAKTY",
            "nav_price": "CENNÍK",
            "hero_title": "Vaše auto — naša vášeň!",
            "hero_desc_1": "Profesionálna údržba vášho auta s použitím moderného vybavenia.",
            "hero_desc_2": "Dbáme na vašu bezpečnosť na cestách a garantujeme kvalitu každého detailu a vykonanej práce.",
            "hero_desc_3": "Transparentné ceny, skúsení majstri a individuálny prístup ku každému klientovi.",
            "cta_button": "Objednať opravu ➜",
            "service_working": "Servis funguje",
            "features_title": "NAŠE VÝHODY",
            "feature_warranty_title": "ZÁRUKA KVALITY",
            "feature_warranty_desc": "Poskytujeme oficiálnu záruku na všetky druhy prác a náhradné diely.",
            "feature_speed_title": "RÝCHLOSŤ",
            "feature_speed_desc": "Rýchla oprava bez straty kvality. Ceníme si váš čas.",
            "feature_reliability_title": "SPOĽAHLIVOSŤ",
            "feature_reliability_desc": "Iba originálne náhradné diely a certifikovaní majstri.",
            "feature_price_title": "FÉROVÉ CENY",
            "feature_price_desc": "Transparentný výpočet bez skrytých poplatkov.",
            "stat_repairs": "Úspešných opráv",
            "stat_experience": "Rokov skúseností",
            "stat_clients": "Spokojných klientov",
            "stat_team": "Majstrov v tíme",
            "works_title": "NAŠE PRÁCE",
            "work_problem": "PROBLEM SOLVED:",
            "work_engine": "Generálna oprava motora",
            "work_transmission": "Oprava prevodovky",
            "work_brake": "Brzdový systém",
            "work_electronics": "Diagnostika elektroniky",
            "about_title": "O NÁS",
            "about_text_1": "Naša dielňa bola otvorená v roku 2020 a od tej doby neustále pracujeme na zlepšovaní našich služieb. Za tento čas sme obslúžili tisíce áut a získali dôveru klientov.",
            "about_text_2": "Sme hrdí na náš tím profesionálov a výsledky našej práce. Vždy napredujeme, pretože milujeme to, čo robíme.",
            "why_us_title": "PREČO SI VYBRAŤ NÁS?",
            "why_us_text": "Naša dielňa kombinuje dlhoročné skúsenosti a moderné technológie. Nielenže opravujeme autá, ale dbáme aj na vašu bezpečnosť na cestách. Individuálny prístup ku každému klientovi a transparentné ceny sú našimi hlavnými zásadami.",
            "contact_form_title": "Objednať opravu",
            "input_name_placeholder": "Meno",
            "btn_submit": "Odoslať",
            "footer_desc": "Profesionálny autoservis pre vaše auto. Kvalita, rýchlosť a spoľahlivosť sú naše hlavné zásady od roku 2020.",
            "footer_contacts_title": "KONTAKTY",
            "footer_address": "📍 Ukrajina, Ivano-Frankivsk,<br>ul. Valova 34",
            "footer_schedule": "🕒 Po-Pi: 09:00 - 18:00<br>So: 10:00 - 15:00<br>Ne: Zatvorené",
            "footer_nav_title": "NAVIGÁCIA",
            "footer_nav_about": "O nás",
            "footer_nav_price": "Cenník",
            "footer_nav_book": "Objednať",
            "footer_social_title": "SME NA SOCIÁLNYCH SIEŤACH",
            "copyright": "&copy; 2026 KUZENKY STO. Všetky práva vyhradené.",
            "price_title": "CENNÍK SLUŽIEB",
            "table_service": "Služba",
            "table_price": "Cena (od)",
            "service_diagnostics": "Počítačová diagnostika",
            "service_oil": "Výmena oleja a filtrov",
            "service_chassis": "Diagnostika podvozku",
            "service_brakes": "Výmena brzdových doštičiek (náprava)",
            "service_engine": "Oprava motora",
            "service_tires": "Pneuservis (sada)",
            "service_ac": "Plnenie klimatizácie",
            "service_alignment": "Geometria kolies",
            "service_battery": "Kontrola batérie",
            "service_lights": "Nastavenie svetiel",
            "service_antifreeze": "Výmena nemrznúcej zmesi",
            "service_pre_purchase": "Komplexná diagnostika pred kúpou",
            "price_disclaimer": "Ceny sa môžu meniť v závislosti od značky a modelu auta.",
            "cta_book_repair": "Objednať opravu"
        }
    };

    // State
    let currentLanguage = localStorage.getItem('site_language') || CONFIG.defaultLanguage;

    // Elements
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    const languageControls = document.querySelectorAll('.lang-btn');

    // Initialize
    init();

    function init() {
        // Apply translations
        updatePageContent();

        // Update active state of buttons
        updateActiveButton();

        // Bind events
        bindLanguageSwitchers();
    }

    function updatePageContent() {
        const langData = translations[currentLanguage];
        if (!langData) return;

        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (langData[key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    if (element.hasAttribute('placeholder')) {
                        element.placeholder = langData[key];
                    }
                } else {
                    // Check if we need to preserve HTML (for <br> tags etc)
                    if (langData[key].includes('<')) {
                        element.innerHTML = langData[key];
                    } else {
                        element.textContent = langData[key];
                    }
                }
            }
        });

        // Update specific placeholders if needed (e.g. data-i18n-placeholder)
        const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
        placeholders.forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (langData[key]) {
                el.placeholder = langData[key];
            }
        });

        document.documentElement.lang = currentLanguage;
    }

    function bindLanguageSwitchers() {
        languageControls.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.target.getAttribute('data-lang');
                if (lang && CONFIG.supportedLanguages.includes(lang) && lang !== currentLanguage) {
                    setLanguage(lang);
                }
            });
        });
    }

    function setLanguage(lang) {
        currentLanguage = lang;
        localStorage.setItem('site_language', lang);

        // Show loading state if needed
        document.body.style.opacity = '0.8';

        // No async load needed anymore
        updatePageContent();
        updateActiveButton();

        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    }

    function updateActiveButton() {
        languageControls.forEach(btn => {
            if (btn.getAttribute('data-lang') === currentLanguage) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
});
