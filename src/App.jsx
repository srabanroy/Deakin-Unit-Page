import React, { useEffect, useState } from "react";
import { MemoryRouter, Routes, Route, Link, useNavigate } from "react-router-dom";

const catalogue = [
            { type: "Program", name: "Bachelor of Information Technology", description: "Study information technology and develop practical digital skills." },
            { type: "Program", name: "Master of Artificial Intelligence", description: "Develop advanced skills in artificial intelligence and machine learning." },
            { type: "Course", name: "Information Technology", description: "Explore computing, software and information systems." },
            { type: "Unit", name: "SIT753 Professional Practice in IT", description: "Develop professional, ethical and teamwork skills for IT practice." }
];

        // --- Shared Components ---

        const TopUtilityBar = () => (
            <div className="bg-on-primary-fixed-variant text-on-primary py-2 px-margin-mobile md:px-margin-desktop hidden md:block">
                <div className="max-w-container-max mx-auto flex justify-end items-center gap-6">
                    <nav className="flex gap-6 font-label-caps text-label-caps">
                        <a className="hover:text-primary-fixed-dim transition-colors" href="#">Students</a>
                        <a className="hover:text-primary-fixed-dim transition-colors" href="#">Staff</a>
                        <a className="hover:text-primary-fixed-dim transition-colors" href="#">Library</a>
                        <a className="hover:text-primary-fixed-dim transition-colors" href="#">International</a>
                        <a className="hover:text-primary-fixed-dim transition-colors" href="#">Contact</a>
                    </nav>
                    <button aria-label="Search" className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-primary/20 transition-colors">
                        <span className="material-symbols-outlined text-[20px]" aria-hidden="true">search</span>
                    </button>
                </div>
            </div>
        );

        const Header = () => {
            const navigate = useNavigate();
            const [menuOpen, setMenuOpen] = useState(false);
            const goToNews = (e) => {
                e.preventDefault();
                setMenuOpen(false);
                navigate("/");
                setTimeout(() => {
                    const el = document.getElementById("news-section");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                }, 100);
            };
            const navLinkClass = "font-label-caps text-label-caps text-on-primary/80 font-medium hover:text-on-primary hover:opacity-100 transition-opacity";
            return (
            <header className="bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container docked full-width top-0 z-50 sticky">
                <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
                    <Link to="/" onClick={() => setMenuOpen(false)} className="font-display-lg text-display-lg font-bold text-on-primary tracking-tight leading-none">
                        <img alt="Deakin University logo" className="h-16 w-auto" src="logo.svg"/>
                    </Link>
                    <nav aria-label="Primary" className="hidden lg:flex items-center gap-8">
                        <Link to="/" className={navLinkClass}>Home</Link>
                        <Link to="/" className={navLinkClass}>Study</Link>
                        <Link to="/" className={navLinkClass}>Research</Link>
                        <Link to="/" className={navLinkClass}>About Deakin</Link>
                        <Link to="/" onClick={goToNews} className={navLinkClass}>News</Link>
                        <Link to="/" className={navLinkClass}>Contact</Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        <Link to="/portals" className="hidden md:flex font-label-caps text-label-caps text-on-primary hover:text-primary-fixed-dim transition-colors items-center gap-2">
                            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">login</span> Portals
                        </Link>
                        <button className="hidden sm:inline-flex font-label-caps text-label-caps bg-surface-container-lowest text-primary px-6 py-3 rounded-lg font-bold hover:bg-surface-variant transition-colors">
                            Apply now
                        </button>
                        <button
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={menuOpen}
                            aria-controls="mobile-nav-menu"
                            onClick={() => setMenuOpen((open) => !open)}
                            className="lg:hidden flex items-center justify-center text-on-primary">
                            <span className="material-symbols-outlined text-3xl" aria-hidden="true">{menuOpen ? "close" : "menu"}</span>
                        </button>
                    </div>
                </div>
                {menuOpen && (
                    <nav id="mobile-nav-menu" aria-label="Mobile" className="lg:hidden bg-primary border-t border-on-primary/20 px-margin-mobile py-4">
                        <div className="flex flex-col gap-4 max-w-container-max mx-auto">
                            <Link to="/" onClick={() => setMenuOpen(false)} className={navLinkClass}>Home</Link>
                            <Link to="/" onClick={() => setMenuOpen(false)} className={navLinkClass}>Study</Link>
                            <Link to="/" onClick={() => setMenuOpen(false)} className={navLinkClass}>Research</Link>
                            <Link to="/" onClick={() => setMenuOpen(false)} className={navLinkClass}>About Deakin</Link>
                            <Link to="/" onClick={goToNews} className={navLinkClass}>News</Link>
                            <Link to="/" onClick={() => setMenuOpen(false)} className={navLinkClass}>Contact</Link>
                            <Link to="/portals" onClick={() => setMenuOpen(false)} className="font-label-caps text-label-caps text-on-primary font-medium flex items-center gap-2">
                                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">login</span> Portals
                            </Link>
                            <button className="sm:hidden w-full font-label-caps text-label-caps bg-surface-container-lowest text-primary px-6 py-3 rounded-lg font-bold hover:bg-surface-variant transition-colors">
                                Apply now
                            </button>
                        </div>
                    </nav>
                )}
            </header>
            );
        };

        const Footer = () => (
            <footer className="bg-surface-container-highest dark:bg-inverse-surface full-width bottom border-t border-outline-variant dark:border-outline">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-stack-lg max-w-container-max mx-auto text-on-surface dark:text-inverse-on-surface font-body-md text-body-md">
                    <div className="col-span-1 md:col-span-4 mb-8">
                        <div className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed mb-4">
                            <img alt="Deakin University" className="h-10 w-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDch46hPk6A3VgdnCuuCp0ziNSkLC-l3HXG9svIRNX0qL0XdwoRDGUpO3A1BjNGXPg4vyQuS3jQ8IgtbHW8b8AkcZ7lhR-CfjApv9Nj9Td6oCLsCKAqZPNADj8F0Qwf9V2DAG3Wl9Rh0U6roC1dc4Ro7HQQewhiIOz3zqB1YtnhhqewZX29lcDI4mYuF-2-lxee5ovP9ZV_2gmVRzLdDERnk_1jB9-E2NikARq1S-RcQghoSf8aa7npjKys8DchXo5qHw"/>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-label-caps text-label-caps font-bold mb-4 text-on-surface-variant dark:text-surface-variant uppercase">Explore</h4>
                        <ul className="space-y-3">
                            <li><a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed underline transition-colors duration-200" href="#">Study</a></li>
                            <li><a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed underline transition-colors duration-200" href="#">Research</a></li>
                            <li><a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed underline transition-colors duration-200" href="#">About Deakin</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-label-caps text-label-caps font-bold mb-4 text-on-surface-variant dark:text-surface-variant uppercase">Connect</h4>
                        <ul className="space-y-3">
                            <li><a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed underline transition-colors duration-200" href="#">International Students</a></li>
                            <li><a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed underline transition-colors duration-200" href="#">Alumni</a></li>
                            <li><a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed underline transition-colors duration-200" href="#">Give to Deakin</a></li>
                            <li><a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed underline transition-colors duration-200" href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-label-caps text-label-caps font-bold mb-4 text-on-surface-variant dark:text-surface-variant uppercase">Legal</h4>
                        <ul className="space-y-3">
                            <li><a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed underline transition-colors duration-200" href="#">Privacy</a></li>
                            <li><a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed underline transition-colors duration-200" href="#">Terms of Use</a></li>
                        </ul>
                    </div>
                    <div className="col-span-1 md:col-span-4 mt-8 pt-8 border-t border-outline-variant/30 text-sm text-on-surface-variant">
                        <p className="mb-2">© 2024 Deakin University. CRICOS Provider Code: 00113B.</p>
                        <p>Deakin University acknowledges the Traditional Custodians of the lands on which we live and work.</p>
                    </div>
                </div>
            </footer>
        );

        // --- Screen 1: Home Page ---

        const heroSlides = [
    {
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCV9oHbjKal05Gy9R03TsEa198sqy8dHKFBChu97N8j3FaAgjdRzCBjfRObk_QINyAO2SG9Nxfw5UGoGcQtixpFmbu1Qffk6h0nkWrbuyhSBdcY_Ngnzs-FQHWXjhceLWiaDZiznISEdZjwkb63E2fpRG0qgl7DAVstkRnldAjkjb6j_yR2UBLrialZqlYplkXYy-sTieftuarsaJb4d-9Nz9Lf4m3NhpBdczB1IOsMQjJ265noDyBQ",
        heading: "Shape a future that matters",
        subtitle: "Join Australia's most progressive university. Gain real-world experience, learn from industry experts, and prepare for the careers of tomorrow."
    },
    {
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBp6Ju0snV2Bnjyh542VKweBoRKmCJeqBnBofVdstAVktbP9wl7RInmI4qWtwrTFcpOGNWjHreU4uoZ725sVlX8K4Cr-OvvWOdPPPNchYDWHBQMnDLll26YGi3j_B6CNYmEQqbX2nA6VVa4LIzYhLQ2Js6EoO21h71URl6LJNLdhsI3GxwUTwLHrFfAd3EcfEP1Dj4dJZc-3IZTQgtITlvqgDFeDR5EWy4qbcrH32gTVNcfJeMZt3as",
        heading: "Research that leads the world",
        subtitle: "Deakin researchers are tackling global challenges in sustainability, health and technology."
    },
    {
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKKrwZdL6xnhhAJVBFV6C9P5V_ZXXFpn0worv5utFO_j1GCG2KK3jmnlh9Aqkr4iZfeTKNegyvB-T8A1gwpYlxLBuO9IRyYrR8sF5ZiKAEjyYPmV-VFXZgs_bUjZ7onypKfjJO6aheCyyRfeBjZ_qRVO8cQ39Dw97G9q7z7UJ06rx9Lb66Fyo72c3MlXbLm0tgQk-6TmfM_7HZkz2Kq31tymyoo5Aq_EXYNPX2y_nlQ0t1Za-PBN2_",
        heading: "State-of-the-art campuses",
        subtitle: "Explore new facilities designed for the future of learning, in Melbourne, Geelong and beyond."
    }
];

const HeroBanner = ({ onSearchResults }) => {
    const [current, setCurrent] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const goToSlide = (index) => setCurrent(index);
    const goPrev = () => setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    const goNext = () => setCurrent((prev) => (prev + 1) % heroSlides.length);

    const slide = heroSlides[current];
    const handleSearch = () => {
        const q = searchQuery.toLowerCase();
        if (q.includes("sit753") || q.includes("professional practice in it")) {
            navigate("/unit/sit753");
        } else {
            const results = catalogue.filter(item =>
                item.name.toLowerCase().includes(q)
            );
            onSearchResults({ query: searchQuery, results });
        }
    };

                    return (
        <section className="relative w-full min-h-[400px] lg:min-h-[460px] flex flex-col md:flex-row md:items-center bg-surface-variant overflow-hidden pb-4 md:pb-0">
            <div className="absolute inset-0 z-0">
                <div className="bg-cover bg-center w-full h-full" style={{backgroundImage: `url('${slide.image}')`}}></div>
                <div className="absolute inset-0 bg-gradient-to-r from-on-primary-fixed-variant/90 via-on-primary-fixed-variant/70 to-transparent"></div>
            </div>

            <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8">
                <div className="max-w-3xl">
                    <h1 className="font-display-lg text-display-lg text-on-primary mb-3 drop-shadow-md">
                        {slide.heading}
                    </h1>
                    <p className="font-body-lg text-body-lg text-on-primary/90 mb-4 max-w-lg">
                        {slide.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <button className="font-label-caps text-label-caps bg-primary-fixed text-on-primary-fixed px-6 py-3 rounded-lg hover:bg-primary-fixed-dim transition-colors shadow-lg">
                            Explore courses
                        </button>
                        <button className="font-label-caps text-label-caps bg-transparent border-2 border-on-primary text-on-primary px-6 py-3 rounded-lg hover:bg-on-primary/10 transition-colors">
                            Book a tour
                        </button>
                    </div>
                </div>
            </div>

            {/* Search bar - static flow on mobile/tablet so it can't overlap hero content or overflow; pinned to bottom on desktop */}
            <div className="relative md:absolute md:bottom-6 left-0 right-0 z-20 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
                <div className="w-full max-w-3xl bg-surface-container-lowest p-4 rounded-xl shadow-2xl flex flex-col md:flex-row items-stretch md:items-center gap-3">
                    <div className="flex-1 relative w-full">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-tertiary-fixed-dim font-bold" aria-hidden="true">search</span>
                        <label htmlFor="hero-search-input" className="sr-only">Search courses, study areas or careers</label>
                        <input
                            id="hero-search-input"
                            className="w-full bg-surface text-on-surface font-body-md py-2 pl-12 pr-4 rounded-lg border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-on-surface-variant/60"
                            placeholder="Search courses, study areas or careers"
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={(e) => { if (e.key === "Enter") handleSearch(); }}
                        />                    </div>
                    <div className="w-full md:w-40">
                        <label htmlFor="hero-study-level" className="sr-only">Study level</label>
                        <select id="hero-study-level" className="w-full bg-surface text-on-surface font-body-md py-2 px-3 rounded-lg border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary appearance-none">
                            <option value="">Study level</option>
                            <option value="ug">Undergraduate</option>
                            <option value="pg">Postgraduate</option>
                        </select>
                    </div>
                    <div className="w-full md:w-40">
                        <label htmlFor="hero-location" className="sr-only">Location</label>
                        <select id="hero-location" className="w-full bg-surface text-on-surface font-body-md py-2 px-3 rounded-lg border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary appearance-none">
                            <option value="">Location</option>
                            <option value="melbourne">Melbourne</option>
                            <option value="geelong">Geelong</option>
                            <option value="warrnambool">Warrnambool</option>
                            <option value="online">Online</option>
                        </select>
                    </div>
                        <button
                            onClick={handleSearch}
                            className="w-full md:w-auto font-label-caps text-label-caps bg-tertiary-fixed-dim text-on-tertiary-fixed px-6 py-2 rounded-lg hover:bg-tertiary-fixed transition-colors flex items-center justify-center gap-2 font-bold shadow-md">
                            Search
</button>
                    </div>
            </div>

            <button onClick={goPrev} aria-label="Previous slide" className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-surface-container-lowest/80 hover:bg-surface-container-lowest flex items-center justify-center text-on-surface transition-colors">
                <span className="material-symbols-outlined" aria-hidden="true">chevron_left</span>
            </button>
            <button onClick={goNext} aria-label="Next slide" className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-surface-container-lowest/80 hover:bg-surface-container-lowest flex items-center justify-center text-on-surface transition-colors">
                <span className="material-symbols-outlined" aria-hidden="true">chevron_right</span>
            </button>

            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {heroSlides.map((s, i) => (
                    <button
                        key={i}
                        onClick={() => goToSlide(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={i === current ? "w-6 h-1.5 rounded-full bg-on-primary transition-all" : "w-1.5 h-1.5 rounded-full bg-on-primary/50 hover:bg-on-primary/80 transition-all"}
                    ></button>
                ))}
            </div>
        </section>
    );
};

        const HomePage = () => {
            const [searchResults, setSearchResults] = useState(null);

            return (
                <div className="flex flex-col min-h-screen">
                    <TopUtilityBar />
                    <Header />
                    
                   {/* Hero Section */}
<HeroBanner onSearchResults={setSearchResults} />

                    {/* Search Results Section */}
                    {searchResults && (
                        <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-surface" aria-live="polite">
                            <div className="max-w-container-max mx-auto">
                                <h2 className="font-display-lg text-display-lg text-on-surface mb-8">
                                    Search results for "{searchResults.query}"
                                </h2>
                                {searchResults.results.length ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
                                        {searchResults.results.map((item, i) => (
                                            <div key={i} className="bg-surface-container-lowest rounded-xl soft-shadow border border-outline-variant p-6">
                                                <span className="font-label-caps text-label-caps text-tertiary font-bold uppercase">{item.type}</span>
                                                <h3 className="font-headline-sm text-headline-sm text-on-surface mt-2 mb-2">{item.name}</h3>
                                                <p className="font-body-md text-body-md text-on-surface-variant">{item.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="font-body-lg text-body-lg text-on-surface-variant">No results found.</p>
                                )}
                            </div>
                        </section>
                    )}

                    {/* Quick Action Cards */}
                    <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-secondary-fixed/40">
                        <div className="max-w-container-max mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
                                <QuickActionCard icon="menu_book" title="Find a course" desc="Browse our comprehensive range of degrees." />
                                <QuickActionCard icon="edit_document" title="Apply now" desc="Start your application journey today." />
                                <QuickActionCard icon="workspace_premium" title="Scholarships" desc="Discover financial support options." />
                                <QuickActionCard icon="location_on" title="Visit a campus" desc="Experience our world-class facilities." />
                            </div>
                        </div>
                    </section>

                    {/* News Section */}
                    <section id="news-section" className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-surface">
                        <div className="max-w-container-max mx-auto">
                            <h2 className="font-display-lg text-display-lg text-on-surface mb-8">Latest News</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                                <NewsCard 
                                    img="https://lh3.googleusercontent.com/aida-public/AB6AXuBp6Ju0snV2Bnjyh542VKweBoRKmCJeqBnBofVdstAVktbP9wl7RInmI4qWtwrTFcpOGNWjHreU4uoZ725sVlX8K4Cr-OvvWOdPPPNchYDWHBQMnDLll26YGi3j_B6CNYmEQqbX2nA6VVa4LIzYhLQ2Js6EoO21h71URl6LJNLdhsI3GxwUTwLHrFfAd3EcfEP1Dj4dJZc-3IZTQgtITlvqgDFeDR5EWy4qbcrH32gTVNcfJeMZt3as"
                                    title="Deakin research leads global sustainability efforts"
                                />
                                <NewsCard 
                                    img="https://lh3.googleusercontent.com/aida-public/AB6AXuAKKrwZdL6xnhhAJVBFV6C9P5V_ZXXFpn0worv5utFO_j1GCG2KK3jmnlh9Aqkr4iZfeTKNegyvB-T8A1gwpYlxLBuO9IRyYrR8sF5ZiKAEjyYPmV-VFXZgs_bUjZ7onypKfjJO6aheCyyRfeBjZ_qRVO8cQ39Dw97G9q7z7UJ06rx9Lb66Fyo72c3MlXbLm0tgQk-6TmfM_7HZkz2Kq31tymyoo5Aq_EXYNPX2y_nlQ0t1Za-PBN2_"
                                    title="New state-of-the-art campus facilities open in Geelong"
                                />
                                <NewsCard 
                                    img="https://lh3.googleusercontent.com/aida-public/AB6AXuAxYg4T2RJvSo00abmCmSvsALxzQ1w4-6YyE3iL_1vI-Glg2e_sXF5tnTHXqJvJzNL2HW7pzw2fX93HXMf12wMhzwyv9Y-xrQWdQQlyZEC896s0i-h3TNPWll-uZcsFn8NGEeUTDakhJJNMHbdjDmy8SpGZEWBZjei-aqCvWuMtXnltSjhJbsKCBFh5kb4pJyOX948P5Jb-jBGODkmzTSvF0Q36SDi4SXCmacqkR77w3VynmjN1sAdk"
                                    title="Record number of international students welcomed for Trimester 1"
                                />
                            </div>
                        </div>
                    </section>

                    <Footer />
                </div>
            );
        };

        const QuickActionCard = ({ icon, title, desc }) => (
            <a className="group block bg-surface-container-lowest rounded-xl p-6 border border-outline-variant hover:border-tertiary-fixed-dim soft-shadow transition-all hover:-translate-y-1" href="#">
                <div className="w-12 h-12 bg-tertiary-fixed rounded-full flex items-center justify-center text-tertiary mb-4 group-hover:bg-tertiary-fixed-dim transition-colors">
                    <span className="material-symbols-outlined" aria-hidden="true">{icon}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">{title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4">{desc}</p>
                <div className="flex items-center text-tertiary font-label-caps text-label-caps group-hover:underline font-bold">
                    Explore <span className="material-symbols-outlined ml-1 text-[16px] transition-transform group-hover:translate-x-1" aria-hidden="true">arrow_forward</span>
                </div>
            </a>
        );

        const NewsCard = ({ img, title }) => (
            <article className="flex flex-col group cursor-pointer bg-surface-container-lowest rounded-xl overflow-hidden soft-shadow border border-outline-variant hover:border-primary transition-all hover:-translate-y-1">
                <div className="aspect-[16/10] w-full bg-surface-variant overflow-hidden">
                    <img alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={img}/>
                </div>
                <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4 group-hover:text-primary transition-colors line-clamp-2">{title}</h3>
                    <a className="mt-auto font-label-caps text-label-caps text-tertiary flex items-center font-bold hover:underline w-fit" href="#">
                        Read more <span className="material-symbols-outlined ml-1 text-[16px]" aria-hidden="true">arrow_forward</span>
                    </a>
                </div>
            </article>
        );

        // --- Screen 2: Portal Selection Page ---
        const SIT753Page = () => (
    <div className="flex flex-col min-h-screen bg-surface">
        <Header />

        <main className="flex-grow py-stack-lg px-margin-mobile md:px-margin-desktop">
            <div className="max-w-container-max mx-auto">

                <h1 className="font-display-lg text-display-lg text-primary mb-8">
                    SIT753 - Professional Practice in IT
                </h1>

                <div className="bg-surface-container-lowest rounded-xl soft-shadow border border-outline-variant overflow-hidden">
                    <table style={{width: "100%", borderCollapse: "collapse"}}>
                        <tbody>
                            <tr>
                                <td className="py-4 px-5 font-bold text-primary">Year:</td>
                                <td className="py-4 px-5">2025 unit information</td>
                            </tr>
                            <tr>
                                <td className="py-4 px-5 font-bold text-primary">Enrolment modes:</td>
                                <td className="py-4 px-5">Trimester 2: Burwood (Melbourne), Cloud (online)</td>
                            </tr>
                            <tr>
                                <td className="py-4 px-5 font-bold text-primary">Credit point(s):</td>
                                <td className="py-4 px-5">1</td>
                            </tr>
                            <tr>
                                <td className="py-4 px-5 font-bold text-primary">Unit Chair:</td>
                                <td className="py-4 px-5">Trimester 2: Azadeh Ghari Neiat</td>
                            </tr>
                            <tr>
                                <td className="py-4 px-5 font-bold text-primary">Scheduled Learning Activities:</td>
                                <td className="py-4 px-5">1 x 3 hour active class per week, weekly drop-in support.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2 className="font-display-lg text-display-lg text-on-surface mt-12 mb-6">
                    Content
                </h2>

                <div className="bg-surface-container-lowest rounded-xl soft-shadow border border-outline-variant p-8 mb-6">
                    <p className="font-body-lg text-body-lg text-on-surface-variant">
                        To be successful IT graduates need to understand the use of industry tools and practices, the ways these tools work and connect together, and the underlying professional, ethical, and teamwork knowledge and skills needed to put these into practice in a professional manner.
                    </p>
                </div>

                <div className="bg-tertiary-fixed/30 border-l-4 border-tertiary-fixed-dim rounded-lg p-6 mb-8">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 flex items-center gap-2">
                        <span className="material-symbols-outlined text-tertiary" aria-hidden="true">flag</span>
                        Hurdle requirement
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                        To be eligible to obtain a pass in this unit, students must meet certain milestones as part of the portfolio.
                    </p>
                </div>

                <a className="font-label-caps text-label-caps bg-primary text-on-primary px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors inline-flex items-center gap-2 w-fit mb-8" href="https://www.deakin.edu.au/students/enrolment-and-fees/fees">
                    Current students: Enrolment & Fees <span className="material-symbols-outlined text-[18px]" aria-hidden="true">arrow_forward</span>
                </a>

                <div>
                    <Link to="/" aria-label="Back to Home" className="font-label-caps text-label-caps text-primary flex items-center gap-2 hover:underline w-fit">
                        <span className="material-symbols-outlined" aria-hidden="true">arrow_back</span> Back to Home
                    </Link>
                </div>

            </div>
        </main>

        <Footer />
    </div>
);

        const PortalLoginForm = ({ portal, onCancel }) => {
            const [username, setUsername] = useState("");
            const [password, setPassword] = useState("");
            const [submitted, setSubmitted] = useState(false);

            const handleSubmit = (e) => {
                e.preventDefault();
                setSubmitted(true);
            };

            return (
                <div className="w-full max-w-md mx-auto bg-surface-container-lowest rounded-xl shadow-md border-t-4 border-t-primary p-gutter">
                    <h2 className="font-headline-sm text-headline-sm text-on-surface mb-2">{portal.title} Login</h2>
                    <p className="text-on-surface-variant mb-stack-md">Demo login form. No real authentication is performed.</p>

                    {submitted ? (
                        <div>
                            <p className="font-body-lg text-body-lg text-primary mb-stack-md" role="status">
                                Demo login submitted for {portal.title}.
                            </p>
                            <button
                                onClick={onCancel}
                                className="w-full bg-primary hover:bg-primary/90 text-on-primary font-label-caps text-label-caps py-3 px-6 rounded transition-colors duration-200">
                                Back to portals
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="mb-stack-sm">
                                <label htmlFor={`username-${portal.title}`} className="block font-label-caps text-label-caps text-on-surface-variant mb-1">Username or email</label>
                                <input
                                    id={`username-${portal.title}`}
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full bg-surface text-on-surface font-body-md py-2 px-3 rounded-lg border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary"
                                />
                            </div>
                            <div className="mb-stack-md">
                                <label htmlFor={`password-${portal.title}`} className="block font-label-caps text-label-caps text-on-surface-variant mb-1">Password</label>
                                <input
                                    id={`password-${portal.title}`}
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-surface text-on-surface font-body-md py-2 px-3 rounded-lg border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary"
                                />
                            </div>
                            <div className="flex flex-col gap-3">
                                <button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-primary/90 text-on-primary font-label-caps text-label-caps py-3 px-6 rounded transition-colors duration-200">
                                    LOGIN
                                </button>
                                <button
                                    type="button"
                                    onClick={onCancel}
                                    className="w-full bg-surface-container-highest hover:bg-surface-variant text-on-surface font-label-caps text-label-caps py-3 px-6 rounded transition-colors duration-200">
                                    Cancel
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            );
        };

        const PortalSelectionPage = () => {
            const navigate = useNavigate();
            const [selectedPortal, setSelectedPortal] = useState(null);
            return (
                <div className="flex flex-col min-h-screen bg-surface">
                    <header className="w-full bg-surface-container-lowest border-b border-outline-variant py-4 px-margin-mobile md:px-margin-desktop flex justify-center items-center">
                        <div className="max-w-container-max w-full flex justify-between items-center">
                            <Link to="/">
                                <img alt="Deakin University Logo" className="h-12 w-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXF-E36stuMNWNszNQbEPkdc6Z1k_jnjjjejrczJ__AlZy4zDD3q66aXaqllXKSXmbQ6gc7YPusf2mZ5hGnmyDi03FTuJn4F6crNzitf8TWRSFrCFJGrtxz8QzO4gek1aykns3LPoY7lTUeXqleUquBMHuF-MiTVN-0ijMhivIIBnk6CLq80n4RofdSXn4K1I3UJKmyaFpbaLpiHRfabucRl1TDzjpUY3ZTpTcsh2xpiL9zrQAxJnIYvG-jkm52Z-uUg"/>
                            </Link>
                            <button onClick={() => navigate(-1)} className="text-primary flex items-center gap-2 font-label-caps text-label-caps hover:underline">
                                <span className="material-symbols-outlined" aria-hidden="true">arrow_back</span> Back
                            </button>
                        </div>
                    </header>

                    <main className="flex-grow flex flex-col items-center justify-center px-margin-mobile md:px-margin-desktop py-stack-lg">
                        <div className="max-w-container-max w-full flex flex-col items-center">
                            <div className="text-center mb-stack-lg max-w-2xl mx-auto">
                                <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-stack-sm">Select your portal to log in</h1>
                                <p className="font-body-lg text-body-lg text-on-surface-variant">Choose the appropriate portal to access your personalized resources and university systems.</p>
                            </div>

                            {selectedPortal ? (
                                <PortalLoginForm portal={selectedPortal} onCancel={() => setSelectedPortal(null)} />
                            ) : (
                                <React.Fragment>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter w-full max-w-5xl mx-auto">
                                        <PortalCard icon="school" title="Student Portal" desc="Access your timetable, units, and results." onLogin={() => setSelectedPortal({ title: "Student Portal" })} />
                                        <PortalCard icon="menu_book" title="Faculty Portal" desc="Teaching resources and academic systems." onLogin={() => setSelectedPortal({ title: "Faculty Portal" })} />
                                        <PortalCard icon="work" title="Staff Portal" desc="Workplace services and university systems." onLogin={() => setSelectedPortal({ title: "Staff Portal" })} />
                                    </div>

                                    <div className="mt-stack-lg w-full max-w-5xl rounded-xl overflow-hidden flat-shadow relative h-64 md:h-80 shadow-lg">
                                        <div className="bg-cover bg-center w-full h-full absolute inset-0" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCkOKGYkgqg_kSEPPmaqwFOPqit5u0yrjyxt23Kxl3H_x-LcNReY5Cp8w_CzVge0ijLKy5lZSwrf54Q8NevRXnCaXLQbL1Vm1MnkDQ-KQK9eIZTJR17zIAyL2o-QM-g-3HtMvQW8wwOz2CeIV-JmehnuiL8FjyAILp5rF3a21z-xWGixoCwh_IUHoVmcMEvrK7PDSHchHrDMONeygEtPj-ANBLpePo3anZ4eWzE9w1cX7ltJK5tFmL6')"}}></div>
                                        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
                                        <div className="absolute bottom-0 left-0 p-gutter w-full bg-gradient-to-t from-on-background/80 to-transparent">
                                            <p className="text-on-primary font-headline-sm text-headline-sm">Progressive education for a digital future.</p>
                                        </div>
                                    </div>
                                </React.Fragment>
                            )}
                        </div>
                    </main>

                    <Footer />
                </div>
            );
        };

        const PortalCard = ({ icon, title, desc, onLogin }) => (
            <div className="bg-surface-container-lowest rounded-xl shadow-md border-t-4 border-t-primary p-gutter flex flex-col items-start transition-transform hover:-translate-y-1 hover:shadow-lg duration-300">
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center mb-stack-sm text-primary">
                    <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: "'FILL' 1"}} aria-hidden="true"> {icon} </span>
                </div>
                <h2 className="font-headline-sm text-headline-sm text-on-surface mb-2">{title}</h2>
                <p className="text-on-surface-variant flex-grow mb-stack-md">{desc}</p>
                <button onClick={onLogin} className="w-full bg-primary hover:bg-primary/90 text-on-primary font-label-caps text-label-caps py-3 px-6 rounded transition-colors duration-200">
                    LOGIN
                </button>
            </div>
        );

        // --- App Component ---

        const App = () => {
            return (
                <MemoryRouter>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/unit/sit753" element={<SIT753Page />} />
                        <Route path="/portals" element={<PortalSelectionPage />} />
                    </Routes>
                </MemoryRouter>
            );
        };
export default App;
