import React, { useState, useEffect, useCallback, useMemo } from "react";

// ==================== COMPOSANT ICON ====================
const Icon = React.memo(({ name, className = "", size = "md", ...props }) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
    xl: "h-8 w-8",
  };

  const icons = {
    globe: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    user: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    creditCard: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    message: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    shield: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    search: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    filter: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
      </svg>
    ),
    chevronDown: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    ),
    check: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    arrowUp: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    ),
  };

  const IconComponent = icons[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return React.cloneElement(IconComponent, {
    className: `${sizeClasses[size]} ${className}`,
    "aria-hidden": "true",
    ...props,
  });
});

// ==================== COMPOSANT HEADER ====================
const Header = React.memo(() => {
  const navItems = [
    { name: "Accueil", icon: "user", href: "#" },
    { name: "Fonctionnalités", icon: "creditCard", href: "#" },
    { name: "À propos", icon: "message", href: "#" },
    { name: "Contact", icon: "shield", href: "#" },
  ];

  return (
    <header 
      className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg text-gray-800 py-4 shadow-lg border-b border-violet-100"
      role="banner"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <div className="p-2 bg-gradient-to-br from-violet-600 to-purple-600 rounded-full animate-pulse-slow shadow-lg">
            <Icon name="globe" className="text-white" size="lg" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-violet-700 via-purple-600 to-violet-800 bg-clip-text text-transparent">
              Perenkap
            </span>
          </h1>
        </div>
        
        <nav className="flex flex-wrap justify-center gap-4 md:gap-6" aria-label="Navigation principale">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-600 hover:text-violet-700 transition-all duration-300 font-medium flex items-center px-3 py-2 rounded-lg hover:bg-violet-50 group"
            >
              <Icon name={item.icon} className="mr-2 group-hover:scale-110 transition-transform text-violet-600" />
              <span className="hidden md:inline">{item.name}</span>
            </a>
          ))}
          <button className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:from-violet-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            Se Connecter
          </button>
        </nav>
      </div>
    </header>
  );
});

// ==================== COMPOSANT SEARCH BAR ====================
const SearchBar = React.memo(({ searchTerm, setSearchTerm, selectedOperator, setSelectedOperator, allOperators, filteredCountries }) => {
  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, [setSearchTerm]);

  const handleOperatorChange = useCallback((e) => {
    setSelectedOperator(e.target.value);
  }, [setSelectedOperator]);

  return (
    <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center items-center animate-fade-in">
      <div className="relative w-full max-w-lg">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <Icon name="search" className="text-violet-500" />
        </div>
        <input
          type="text"
          placeholder="Rechercher un pays ou un opérateur..."
          className="w-full pl-12 pr-4 py-3 rounded-full bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 shadow-lg transition-all duration-300 focus:shadow-xl border border-violet-100"
          value={searchTerm}
          onChange={handleSearchChange}
          aria-label="Rechercher un pays ou un opérateur Mobile Money"
        />
      </div>
      
      <div className="relative">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
          <Icon name="filter" className="text-violet-600" />
        </div>
        <select
          className="pl-12 pr-10 py-3 rounded-full bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 appearance-none shadow-lg transition-all duration-300 focus:shadow-xl border border-violet-100"
          value={selectedOperator}
          onChange={handleOperatorChange}
          aria-label="Filtrer par opérateur Mobile Money"
        >
          <option value="Tous">Tous les opérateurs</option>
          {allOperators.map((operator, index) => (
            <option key={`operator-${index}`} value={operator}>{operator}</option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <Icon name="chevronDown" className="text-violet-600" />
        </div>
      </div>
    </div>
  );
});

// ==================== COMPOSANT COUNTRY CARD ====================
const CountryCard = React.memo(({ country, index }) => {
  const [imageError, setImageError] = useState(false);
  const flagBaseUrl = "https://flagcdn.com/w80";

  const handleMouseEnter = useCallback((e) => {
    e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
    e.currentTarget.style.boxShadow = "0 25px 50px rgba(124, 58, 237, 0.15)";
  }, []);

  const handleMouseLeave = useCallback((e) => {
    e.currentTarget.style.transform = "translateY(0) scale(1)";
    e.currentTarget.style.boxShadow = "0 10px 20px rgba(124, 58, 237, 0.08)";
  }, []);

  const handleImageError = useCallback(() => {
    setImageError(true);
  }, []);

  return (
    <article
      className="bg-white p-6 rounded-2xl shadow-lg border border-violet-100 transition-all duration-500 hover:border-violet-300 group cursor-pointer animate-fade-up"
      style={{
        animationDelay: `${index * 50}ms`,
        boxShadow: "0 10px 20px rgba(124, 58, 237, 0.08)",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={`Informations sur ${country.name}`}
      tabIndex="0"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="text-3xl animate-bounce-slow" aria-hidden="true">
            {country.flag}
          </div>
          {!imageError ? (
            <img
              src={`${flagBaseUrl}/${country.code}.png`}
              alt={`Drapeau de ${country.name}`}
              className="w-12 h-9 rounded-md shadow-lg transition-transform duration-300 group-hover:scale-110 border border-gray-200"
              onError={handleImageError}
              loading="lazy"
            />
          ) : (
            <div className="text-3xl">{country.flag}</div>
          )}
        </div>
        <div 
          className="bg-gradient-to-r from-violet-50 to-purple-50 text-violet-700 text-sm font-medium px-3 py-1 rounded-full transition-all duration-300 group-hover:from-violet-100 group-hover:to-purple-100 border border-violet-200"
          aria-label={`${country.operators.length} opérateur${country.operators.length > 1 ? 's' : ''}`}
        >
          {country.operators.length} opérateur{country.operators.length > 1 ? 's' : ''}
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-violet-700 transition-colors duration-300">
        {country.name}
      </h3>

      <ul className="space-y-3" aria-label={`Opérateurs disponibles en ${country.name}`}>
        {country.operators.map((operator, i) => (
          <li key={`${country.code}-operator-${i}`}>
            <div className="flex items-center p-3 bg-gradient-to-r from-violet-50/50 to-purple-50/50 rounded-lg hover:from-violet-100 hover:to-purple-100 transition-all duration-300 group-hover:shadow-md border border-violet-100">
              <div className="p-1 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mr-3 group-hover:scale-110 transition-transform border border-green-200">
                <Icon name="check" className="text-green-600" />
              </div>
              <span className="text-gray-700 font-medium">{operator}</span>
            </div>
          </li>
        ))}
      </ul>
      
      <div className="mt-6 pt-4 border-t border-gray-100 text-sm text-gray-500 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-2 animate-pulse"></div>
          <span>Intégration complète</span>
        </div>
        <span className="text-violet-600 font-medium group-hover:text-violet-800 transition-colors">
          ✓ Disponible
        </span>
      </div>
    </article>
  );
});

// ==================== COMPOSANT STATISTICS ====================
const Statistics = React.memo(({ filteredCountries, allOperators }) => {
  const stats = [
    { value: filteredCountries.length, label: "Pays filtrés", color: "from-blue-500 to-cyan-500", icon: "🌍" },
    { value: allOperators.length, label: "Opérateurs uniques", color: "from-purple-500 to-pink-500", icon: "📱" },
    { value: "100%", label: "Intégration complète", color: "from-green-500 to-emerald-500", icon: "✓" },
    { value: 26, label: "Pays africains", color: "from-orange-500 to-red-500", icon: "✨" },
  ];

  return (
    <div className="mt-16 bg-gradient-to-r from-white to-violet-50 rounded-2xl p-8 shadow-xl animate-fade-in border border-violet-100">
      <h3 className="text-3xl font-bold mb-8 text-center">
        <span className="bg-gradient-to-r from-violet-700 via-purple-600 to-violet-800 bg-clip-text text-transparent">
          Notre Couverture en Chiffres
        </span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="text-center bg-white rounded-xl p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-violet-100"
          >
            <div className="text-3xl mb-3">{stat.icon}</div>
            <div className={`text-5xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent animate-count-up`}>
              {stat.value}
            </div>
            <div className="text-gray-600 text-lg font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
});

// ==================== COMPOSANT FOOTER ====================
const Footer = React.memo(() => {
  const socialLinks = [
    { name: "Facebook", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "Instagram", href: "#" },
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-violet-50 text-gray-800 py-12 mt-16 border-t border-violet-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
          <div className="mb-8 lg:mb-0 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-violet-600 to-purple-600 rounded-full animate-pulse shadow-lg">
                <Icon name="globe" className="text-white" size="xl" />
              </div>
              <h2 className="text-3xl font-bold">
                <span className="bg-gradient-to-r from-violet-700 via-purple-600 to-violet-800 bg-clip-text text-transparent">
                  Perenkap
                </span>
              </h2>
            </div>
            <p className="text-gray-600 max-w-md text-lg">
              La plateforme de paiement Mobile Money la plus étendue en Afrique.
            </p>
          </div>
          
          <div className="text-center lg:text-right">
            <p className="mb-6 text-lg text-gray-600">&copy; {new Date().getFullYear()} Perenkap. Tous droits réservés.</p>
            <div className="flex flex-wrap justify-center lg:justify-end gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-violet-700 hover:text-violet-900 transition-all duration-300 hover:scale-110 font-medium hover:underline"
                  aria-label={`Suivez-nous sur ${link.name}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-8 border-t border-violet-200 text-center">
          <p className="text-gray-600 text-sm">
            Perenkap est disponible dans tous les pays listés ci-dessus avec une intégration complète des opérateurs Mobile Money locaux.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="#" className="text-sm text-violet-600 hover:text-violet-800 hover:underline">Mentions légales</a>
            <a href="#" className="text-sm text-violet-600 hover:text-violet-800 hover:underline">Politique de confidentialité</a>
            <a href="#" className="text-sm text-violet-600 hover:text-violet-800 hover:underline">Conditions d'utilisation</a>
          </div>
        </div>
      </div>
    </footer>
  );
});

// ==================== COMPOSANT HERO ====================
const HeroSection = React.memo(({ filteredCountries, searchTerm, setSearchTerm, selectedOperator, setSelectedOperator, allOperators }) => {
  return (
    <div className="relative bg-gradient-to-br from-violet-600 via-purple-600 to-violet-700 text-white py-20 px-6 overflow-hidden">
      {/* Effets visuels d'arrière-plan */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-violet-500/30 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/30 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/20 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative container mx-auto text-center z-10">
        <div className="inline-block mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full animate-fade-down">
          <span className="text-sm font-medium">🌍 Plateforme Panafricaine</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-down">
          <span className="bg-gradient-to-r from-white via-violet-100 to-white bg-clip-text text-transparent">
            Couverture Mobile Money
          </span>
          <br />
          <span className="text-3xl md:text-5xl font-semibold text-violet-100">
            de Perenkap en Afrique
          </span>
        </h1>
        
        <p className="text-xl opacity-90 max-w-3xl mx-auto mb-10 animate-fade-up">
          Découvrez les pays africains et leurs opérateurs Mobile Money partenaires de Perenkap
        </p>
        
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedOperator={selectedOperator}
          setSelectedOperator={setSelectedOperator}
          allOperators={allOperators}
          filteredCountries={filteredCountries}
        />
        
        <div className="mt-12 flex flex-wrap justify-center gap-4 animate-fade-in">
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 flex items-center hover:bg-white/30 transition-all duration-300 hover:scale-105 border border-white/30">
            <span className="font-bold text-2xl mr-2">{filteredCountries.length}</span> pays
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 flex items-center hover:bg-white/30 transition-all duration-300 hover:scale-105 border border-white/30">
            <span className="font-bold text-2xl mr-2">{allOperators.length}</span> opérateurs
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 flex items-center hover:bg-white/30 transition-all duration-300 hover:scale-105 border border-white/30">
            <span className="font-bold text-2xl mr-2">26</span> pays africains
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 flex items-center hover:bg-white/30 transition-all duration-300 hover:scale-105 border border-white/30">
            <span className="font-bold text-2xl mr-2">100%</span> intégration
          </div>
        </div>
      </div>
    </div>
  );
});

// ==================== COMPOSANT PRINCIPAL ====================
const Home = () => {
  // Données des pays (memoïsées)
  const countries = useMemo(() => [
    { name: "Côte d'Ivoire", code: "ci", flag: "🇨🇮", operators: ["Orange Money", "MTN Mobile Money", "Moov Money"] },
    { name: "Cameroun", code: "cm", flag: "🇨🇲", operators: ["MTN Mobile Money", "Orange Money"] },
    { name: "Kenya", code: "ke", flag: "🇰🇪", operators: ["M-Pesa", "Airtel Money", "T-Kash"] },
    { name: "Ghana", code: "gh", flag: "🇬🇭", operators: ["MTN Mobile Money", "Vodafone Cash", "AirtelTigo Money"] },
    { name: "Togo", code: "tg", flag: "🇹🇬", operators: ["Moov Money", "TMoney", "MTN Mobile Money"] },
    { name: "Burkina Faso", code: "bf", flag: "🇧🇫", operators: ["Orange Money", "MTN Mobile Money"] },
    { name: "Niger", code: "ne", flag: "🇳🇪", operators: ["Orange Money", "Moov Money", "Airtel Money"] },
    { name: "Mali", code: "ml", flag: "🇲🇱", operators: ["Orange Money", "MTN Mobile Money", "Moov Money"] },
    { name: "Sénégal", code: "sn", flag: "🇸🇳", operators: ["Orange Money", "Wave", "Free Money"] },
    { name: "Nigeria", code: "ng", flag: "🇳🇬", operators: ["Paga", "Opay", "MTN Mobile Money"] },
    { name: "Tchad", code: "td", flag: "🇹🇩", operators: ["Tigo Cash", "Orange Money", "MTN Mobile Money"] },
    { name: "Gabon", code: "ga", flag: "🇬🇦", operators: ["Airtel Money", "Moov Money", "MTN Mobile Money"] },
    { name: "République Démocratique du Congo", code: "cd", flag: "🇨🇩", operators: ["Airtel Money", "Orange Money", "Vodacom M-Pesa"] },
    { name: "Rwanda", code: "rw", flag: "🇷🇼", operators: ["MTN Mobile Money", "Airtel Money", "Tigo Cash"] },
    { name: "Burundi", code: "bi", flag: "🇧🇮", operators: ["MTN Mobile Money", "EcoCash"] },
    { name: "Ouganda", code: "ug", flag: "🇺🇬", operators: ["MTN Mobile Money", "Airtel Money"] },
    { name: "Tanzanie", code: "tz", flag: "🇹🇿", operators: ["M-Pesa", "Airtel Money", "Tigo Pesa"] },
    { name: "Zambie", code: "zm", flag: "🇿🇲", operators: ["MTN Mobile Money", "Airtel Money", "Zoona"] },
    { name: "Zimbabwe", code: "zw", flag: "🇿🇼", operators: ["EcoCash", "Telecash", "OneMoney"] },
    { name: "Sierra Leone", code: "sl", flag: "🇸🇱", operators: ["Orange Money", "Africell Money"] },
    { name: "Liberia", code: "lr", flag: "🇱🇷", operators: ["MTN Mobile Money", "Orange Money"] },
    { name: "Congo", code: "cg", flag: "🇨🇬", operators: ["MTN Mobile Money", "Airtel Money"] },
    { name: "Maurice", code: "mu", flag: "🇲🇺", operators: ["Mautilus Mobile", "Orange Money"] },
    { name: "Seychelles", code: "sc", flag: "🇸🇨", operators: ["MTN Mobile Money", "Air Seychelles Pay"] },
    { name: "Botswana", code: "bw", flag: "🇧🇼", operators: ["Orange Money", "MTN Mobile Money"] },
    { name: "Namibie", code: "na", flag: "🇳🇦", operators: ["MTN Mobile Money", "FNB Pay"] },
  ], []);

  // États
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOperator, setSelectedOperator] = useState("Tous");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Opérateurs uniques (memoïsés)
  const allOperators = useMemo(() => 
    [...new Set(countries.flatMap(country => country.operators))], 
    [countries]
  );

  // Filtrage (optimisé avec useMemo)
  useEffect(() => {
    const timer = setTimeout(() => {
      let result = countries;
      
      if (searchTerm.trim()) {
        const term = searchTerm.toLowerCase();
        result = result.filter(country => 
          country.name.toLowerCase().includes(term) ||
          country.operators.some(op => op.toLowerCase().includes(term))
        );
      }
      
      if (selectedOperator !== "Tous") {
        result = result.filter(country => 
          country.operators.includes(selectedOperator)
        );
      }
      
      setFilteredCountries(result);
    }, 150); // Debounce pour améliorer les performances

    return () => clearTimeout(timer);
  }, [searchTerm, selectedOperator, countries]);

  // Gestion du scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fonction pour remonter en haut
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-violet-50/30 to-white">
      {/* CSS pour les animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes countUp {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in { animation: fadeIn 0.8s ease-out; }
        .animate-fade-up { animation: fadeUp 0.8s ease-out; }
        .animate-fade-down { animation: fadeDown 0.8s ease-out; }
        .animate-blob { animation: blob 7s infinite; }
        .animate-count-up { animation: countUp 0.6s ease-out; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animate-pulse-slow { animation: pulse 3s infinite; }
        .animate-bounce-slow { animation: bounce 2s infinite; }
      `}</style>

      <Header />
      
      <HeroSection
        filteredCountries={filteredCountries}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedOperator={selectedOperator}
        setSelectedOperator={setSelectedOperator}
        allOperators={allOperators}
      />

      {/* Main Content */}
      <main className="p-6 md:p-8" role="main">
        <div className="container mx-auto">
          <div className="mb-12 text-center animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-violet-700 via-purple-600 to-violet-800 bg-clip-text text-transparent">
                Pays Couverts
              </span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Perenkap est présent dans <span className="font-bold text-violet-700">{filteredCountries.length}</span> pays africains avec une intégration complète des principaux opérateurs Mobile Money.
            </p>
          </div>

          {filteredCountries.length === 0 ? (
            <div className="text-center py-16 animate-fade-in">
              <div className="inline-block p-6 bg-gradient-to-r from-violet-50 to-purple-50 rounded-full mb-6 border border-violet-200">
                <div className="text-5xl">🌍</div>
              </div>
              <h3 className="text-3xl font-semibold text-gray-700 mb-4">Aucun résultat trouvé</h3>
              <p className="text-gray-500 max-w-md mx-auto">
                Essayez avec d'autres termes de recherche ou sélectionnez un autre opérateur
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredCountries.map((country, index) => (
                <CountryCard key={`${country.code}-${index}`} country={country} index={index} />
              ))}
            </div>
          )}

          <Statistics 
            filteredCountries={filteredCountries} 
            allOperators={allOperators} 
          />
        </div>
      </main>

      <Footer />

      {/* Bouton de retour en haut */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-violet-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:from-violet-700 hover:to-purple-700 transition-all duration-500 hover:scale-110 z-50 animate-fade-in border border-white/20"
          aria-label="Retour en haut"
        >
          <Icon name="arrowUp" size="lg" />
        </button>
      )}
    </div>
  );
};

export default Home;