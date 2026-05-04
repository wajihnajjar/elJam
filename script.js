document.addEventListener('DOMContentLoaded', () => {
 

    // 4. Scroll Reveal Animations (Creative Idea)
    const sections = document.querySelectorAll('section');
    
    // Add the 'reveal' class to all sections dynamically
    sections.forEach(section => {
        section.classList.add('reveal');
    });

    const revealOptions = {
        threshold: 0.15, // Trigger when 15% of the element is visible
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Stop observing once revealed
        });
    }, revealOptions);

    sections.forEach(section => {
        revealOnScroll.observe(section);
    });

    // 5. Timeline Animation Logic
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // Optional: Stop observing once animated
                // observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.2, // Trigger when 20% visible
    });

    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });

    // 6. Scroll Progress Bar
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.getElementById("progressBar").style.width = scrolled + "%";
    });

    // 7. Weather Widget Simulator (Randomizes slightly to feel alive)
    const tempElement = document.querySelector('.weather-widget .temp');
    if (tempElement) {
        // Base temp for El Jem (inland, slightly hotter)
        let baseTemp = 29; 
        setInterval(() => {
            // Randomly fluctuate temp by -1, 0, or +1 degree every 30 seconds for realism
            const fluctuation = Math.floor(Math.random() * 3) - 1; 
            tempElement.textContent = `${baseTemp + fluctuation}°C`;
        }, 30000);
    }

    // 8. Multilingual Support
    const translations = {
        en: {
            "nav-about": "About", "nav-hl": "Highlights", "nav-facts": "Fun Facts", "nav-hist": "History", "nav-gal": "Gallery", "nav-loc": "Location",
            "hero-h1": "Step Into Ancient Rome at El Jem", "hero-p": "Walk the corridors of gladiators and emperors in one of the most impressive and best-preserved Roman ruins in the world.",
            "about-h2": "The Crown Jewel of Roman Africa", "about-p": "The Amphitheatre of El Jem is an exceptionally well-preserved colosseum that lets you step into Ancient Rome right here in Tunisia. Built around 238 AD, it is the largest colosseum in North Africa and could hold up to 35,000 spectators. Walking through its massive stone arches, you are instantly transported back to a time of epic gladiator battles and chariot races.",
            "hl-h2": "Historical Highlights", "hl-1-h3": "The Underground Tunnels", "hl-1-p": "Descend into the dark, intact underground corridors where gladiators and wild animals were kept before entering the arena.", "hl-2-h3": "El Jem Museum", "hl-2-p": "Visit the nearby archaeological museum to view some of the most exquisite and vibrant Roman mosaics ever discovered in Africa.", "hl-3-h3": "Symphony Under the Stars", "hl-3-p": "Experience the magical acoustics of the arena during the International Festival of Symphonic Music held here every summer.",
            "facts-h2": "Did You Know?", "facts-p": "Discover some fascinating secrets about the Amphitheatre of El Jem.",
            "fact-1-h3": "A Hollywood Star", "fact-1-p": "The amphitheatre was famously used as a filming location for several movies, including the blockbuster 'Gladiator' and 'Life of Brian'.",
            "fact-2-h3": "UNESCO Heritage", "fact-2-p": "It was declared a World Heritage Site in 1979 because it is one of the most accomplished examples of Roman architecture in the world.",
            "fact-3-h3": "Built from Scratch", "fact-3-p": "Unlike other amphitheatres built against hillsides, El Jem is entirely freestanding, built on flat ground using massive stone blocks.",
            "time-h2": "Journey Through Time", "time-p": "Trace the epic history of El Jem from its Roman foundations to modern times.",
            "time-1-p": "Construction of the Amphitheatre begins under the proconsul Gordian I, intended to showcase the wealth of the olive oil-rich city of Thysdrus.",
            "time-2-p": "The arena hosts spectacular gladiator combats, wild beast hunts, and chariot races, entertaining up to 35,000 spectators.",
            "time-3-p": "After serving as a fortress for centuries, parts of the stone structure are dismantled by locals to build the nearby city of Kairouan and local mosques.",
            "time-4-p": "The Amphitheatre of El Jem is officially declared a UNESCO World Heritage Site, recognizing its status as a masterpiece of Roman architecture.",
            "gal-h2": "Captivating Views", "gal-p": "Explore the stunning ancient architecture of El Jem.",
            "loc-h2": "Where to Find Us", "loc-p": "The Amphitheatre is located in the town of El Jem, situated in the Mahdia Governorate of Tunisia, halfway between Sousse and Sfax.",
            "footer-about-h3": "Discover El Jem", "footer-about-p": "A journey through time and history in the heart of Tunisia.",
            "footer-links-h3": "Quick Links", "foot-link-about": "About", "foot-link-hl": "Highlights", "foot-link-gal": "Gallery",
            "footer-contact-h3": "Contact Us",
            "foot-p": "&copy; 2026 Tunisia Travel. All rights reserved."
        },
        fr: {
            "nav-about": "À Propos", "nav-hl": "Points Forts", "nav-facts": "Le Saviez-vous", "nav-hist": "Histoire", "nav-gal": "Galerie", "nav-loc": "Emplacement",
            "hero-h1": "Plongez dans la Rome Antique à El Jem", "hero-p": "Parcourez les couloirs des gladiateurs dans l'une des ruines romaines les mieux conservées au monde.",
            "about-h2": "Le Joyau de l'Afrique Romaine", "about-p": "L'amphithéâtre d'El Jem est un colisée exceptionnellement bien conservé qui vous permet de plonger dans la Rome Antique ici même en Tunisie. Construit vers 238 après J.-C., c'est le plus grand d'Afrique du Nord, pouvant accueillir 35 000 spectateurs. Vous êtes instantanément transporté à l'époque des batailles épiques.",
            "hl-h2": "Points Forts Historiques", "hl-1-h3": "Tunnels Souterrains", "hl-1-p": "Descendez dans les sombres couloirs souterrains intacts où gladiateurs et animaux sauvages étaient gardés.", "hl-2-h3": "Musée d'El Jem", "hl-2-p": "Visitez le musée pour admirer certaines des mosaïques romaines les plus exquises jamais découvertes en Afrique.", "hl-3-h3": "Symphonie", "hl-3-p": "Découvrez l'acoustique magique lors du Festival International de Musique Symphonique chaque été.",
            "facts-h2": "Le Saviez-vous ?", "facts-p": "Découvrez quelques secrets fascinants sur l'amphithéâtre d'El Jem.",
            "fact-1-h3": "Star d'Hollywood", "fact-1-p": "L'amphithéâtre a été utilisé comme lieu de tournage pour plusieurs films, dont le blockbuster 'Gladiator'.",
            "fact-2-h3": "Patrimoine UNESCO", "fact-2-p": "Déclaré site du patrimoine mondial en 1979 car il s'agit d'un chef-d'œuvre de l'architecture romaine.",
            "fact-3-h3": "Construit à Partir de Zéro", "fact-3-p": "Contrairement à d'autres amphithéâtres, El Jem est entièrement autoportant sur un terrain plat.",
            "time-h2": "Voyage à Travers le Temps", "time-p": "Retracez l'histoire épique d'El Jem, de ses fondations à l'époque moderne.",
            "time-1-p": "La construction commence sous Gordien Ier pour montrer la richesse de la ville de Thysdrus.",
            "time-2-p": "L'arène accueille des combats spectaculaires, divertissant jusqu'à 35 000 spectateurs.",
            "time-3-p": "Après avoir servi de forteresse, certaines parties sont démantelées pour construire Kairouan.",
            "time-4-p": "L'amphithéâtre d'El Jem est officiellement déclaré site du patrimoine mondial de l'UNESCO.",
            "gal-h2": "Vues Captivantes", "gal-p": "Explorez la magnifique architecture ancienne d'El Jem.",
            "loc-h2": "Où Nous Trouver", "loc-p": "L'amphithéâtre est situé dans la ville d'El Jem, à mi-chemin entre Sousse et Sfax.",
            "footer-about-h3": "Découvrez El Jem", "footer-about-p": "Un voyage à travers le temps et l'histoire au cœur de la Tunisie.",
            "footer-links-h3": "Liens Rapides", "foot-link-about": "À Propos", "foot-link-hl": "Points Forts", "foot-link-gal": "Galerie",
            "footer-contact-h3": "Contactez-nous",
            "foot-p": "&copy; 2026 Tunisia Travel. Tous droits réservés."
        }
    };

    const selectors = {
        "nav-about": "a[href='#about']", "nav-hl": "a[href='#highlights']", "nav-facts": "a[href='#facts']", "nav-hist": "a[href='#timeline']", "nav-gal": "a[href='#gallery']", "nav-loc": "a[href='#location']",
        "hero-h1": ".hero-content h1", "hero-p": ".hero-content p",
        "about-h2": ".about h2", "about-p": ".about p",
        "hl-h2": ".highlights h2", "hl-1-h3": ".card:nth-child(1) h3", "hl-1-p": ".card:nth-child(1) p", "hl-2-h3": ".card:nth-child(2) h3", "hl-2-p": ".card:nth-child(2) p", "hl-3-h3": ".card:nth-child(3) h3", "hl-3-p": ".card:nth-child(3) p",
        "facts-h2": ".facts h2", "facts-p": ".facts > p",
        "fact-1-h3": ".flip-card:nth-child(1) h3", "fact-1-p": ".flip-card:nth-child(1) .flip-card-back p",
        "fact-2-h3": ".flip-card:nth-child(2) h3", "fact-2-p": ".flip-card:nth-child(2) .flip-card-back p",
        "fact-3-h3": ".flip-card:nth-child(3) h3", "fact-3-p": ".flip-card:nth-child(3) .flip-card-back p",
        "time-h2": ".timeline-section h2", "time-p": ".timeline-section > p",
        "time-1-p": ".timeline-item:nth-child(1) .timeline-content p", "time-2-p": ".timeline-item:nth-child(2) .timeline-content p", "time-3-p": ".timeline-item:nth-child(3) .timeline-content p", "time-4-p": ".timeline-item:nth-child(4) .timeline-content p",
        "gal-h2": ".gallery h2", "gal-p": ".gallery p",
        "loc-h2": ".location h2", "loc-p": ".location p",
        "footer-about-h3": ".footer-about-h3", "footer-about-p": ".footer-about-p",
        "footer-links-h3": ".footer-links-h3", "foot-link-about": ".foot-link-about", "foot-link-hl": ".foot-link-hl", "foot-link-gal": ".foot-link-gal",
        "footer-contact-h3": ".footer-contact-h3",
        "foot-p": ".foot-copy"
    };

    const langSwitcher = document.getElementById('langSwitcher');
    if (langSwitcher) {
        langSwitcher.addEventListener('change', (e) => {
            const lang = e.target.value;
            for (let key in selectors) {
                const element = document.querySelector(selectors[key]);
                console.log(selectors[key])
                if (element) {
                    element.innerHTML = translations[lang][key];
                }
            }
        });
    }
});