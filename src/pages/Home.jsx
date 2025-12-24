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
    wifi: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
    sparkles: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    chartBar: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    bolt: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
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
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 sm:px-6">
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <div className="p-2 bg-gradient-to-br from-violet-600 to-purple-600 rounded-full animate-pulse-slow shadow-lg">
            <Icon name="globe" className="text-white" size="lg" />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-violet-700 via-purple-600 to-violet-800 bg-clip-text text-transparent">
              Perenkap
            </span>
          </h1>
        </div>
        
        <nav className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6" aria-label="Navigation principale">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-600 hover:text-violet-700 transition-all duration-300 font-medium flex items-center px-2 sm:px-3 py-2 rounded-lg hover:bg-violet-50 group"
            >
              <Icon name={item.icon} className="mr-1 sm:mr-2 group-hover:scale-110 transition-transform text-violet-600" />
              <span className="hidden md:inline text-sm sm:text-base">{item.name}</span>
            </a>
          ))}
          <button className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-4 sm:px-6 py-2 rounded-full font-medium hover:from-violet-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm sm:text-base">
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
    <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in px-4">
      <div className="relative w-full max-w-md sm:max-w-lg">
        <div className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2">
          <Icon name="search" className="text-violet-500 w-4 h-4 sm:w-5 sm:h-5" />
        </div>
        <input
          type="text"
          placeholder="Rechercher un pays ou un opérateur..."
          className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-full bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 shadow-lg transition-all duration-300 focus:shadow-xl border border-violet-100 text-sm sm:text-base"
          value={searchTerm}
          onChange={handleSearchChange}
          aria-label="Rechercher un pays ou un opérateur Mobile Money"
        />
      </div>
      
      <div className="relative w-full sm:w-auto">
        <div className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 z-10">
          <Icon name="filter" className="text-violet-600 w-4 h-4 sm:w-5 sm:h-5" />
        </div>
        <select
          className="w-full sm:w-auto pl-10 sm:pl-12 pr-8 sm:pr-10 py-2.5 sm:py-3 rounded-full bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 appearance-none shadow-lg transition-all duration-300 focus:shadow-xl border border-violet-100 text-sm sm:text-base"
          value={selectedOperator}
          onChange={handleOperatorChange}
          aria-label="Filtrer par opérateur Mobile Money"
        >
          <option value="Tous">Tous les opérateurs</option>
          {allOperators.map((operator, index) => (
            <option key={`operator-${index}`} value={operator}>{operator}</option>
          ))}
        </select>
        <div className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <Icon name="chevronDown" className="text-violet-600 w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      </div>
    </div>
  );
});

// ==================== COMPOSANT COUNTRY CARD ====================
const CountryCard = React.memo(({ country, index }) => {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const flagBaseUrl = "https://flagcdn.com/w80";

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  }, []);

  const handleMouseMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 à 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 à 1
    
    setMousePosition({ x, y });
  }, []);

  const handleImageError = useCallback(() => {
    setImageError(true);
  }, []);

  // Calcul des transformations basées sur la position de la souris
  const rotateX = useMemo(() => mousePosition.y * 3, [mousePosition.y]);
  const rotateY = useMemo(() => mousePosition.x * 3, [mousePosition.x]);
  const translateZ = useMemo(() => Math.abs(mousePosition.x * 20) + Math.abs(mousePosition.y * 20), [mousePosition.x, mousePosition.y]);
  
  // Effet de brillance qui suit la souris
  const gradientPosition = useMemo(() => {
    const x = (mousePosition.x + 1) * 50;
    const y = (mousePosition.y + 1) * 50;
    return `${x}% ${y}%`;
  }, [mousePosition.x, mousePosition.y]);

  return (
    <article
      className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl border border-violet-100 transition-all duration-300 ease-out group cursor-pointer animate-fade-up"
      style={{
        animationDelay: `${index * 50}ms`,
        transform: isHovered 
          ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px) scale3d(1.02, 1.02, 1.02)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale3d(1, 1, 1)',
        transformStyle: 'preserve-3d',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      aria-label={`Informations sur ${country.name}`}
      tabIndex="0"
    >
      {/* Effet de brillance qui suit la souris */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle at ${gradientPosition}, rgba(139, 92, 246, 0.2) 0%, transparent 50%)`,
        }}
      />
      
      {/* Background gradient effect */}
      <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-violet-50/50 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'} z-0`}></div>
      
      {/* Decorative floating elements */}
      <div 
        className="absolute -right-6 -top-6 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-full blur-xl transition-all duration-700 group-hover:scale-150"
        style={{
          transform: isHovered 
            ? `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px) scale(1.5)`
            : 'translate(0, 0) scale(1)',
        }}
      ></div>
      
      {/* Card content */}
      <div className="relative p-4 sm:p-6 z-10 transform-style-preserve-3d">
        {/* Header with country info */}
        <div className="flex items-start justify-between mb-4 sm:mb-6">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="relative">
              <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div 
                className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full shadow-lg border-2 border-white transition-transform duration-500 group-hover:scale-110"
                style={{
                  transform: isHovered 
                    ? `rotateY(${mousePosition.x * 10}deg) rotateX(${-mousePosition.y * 10}deg)`
                    : 'rotateY(0deg) rotateX(0deg)',
                }}
              >
                {!imageError ? (
                  <img
                    src={`${flagBaseUrl}/${country.code}.png`}
                    alt={`Drapeau de ${country.name}`}
                    className="w-10 h-7 sm:w-12 sm:h-9 rounded-md object-cover"
                    onError={handleImageError}
                    loading="lazy"
                  />
                ) : (
                  <div className="text-xl sm:text-2xl">{country.flag}</div>
                )}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-violet-800 transition-colors duration-300 truncate pr-2">
                  {country.name}
                </h3>
                {/* Nombre d'opérateurs - Version avec texte réduit */}
                <span className="text-xs font-semibold text-violet-700 group-hover:text-violet-800 transition-colors duration-300 whitespace-nowrap flex-shrink-0 ml-2">
                  {country.operators.length} op{country.operators.length > 1 ? 's' : ''}
                </span>
              </div>
              <div className="flex items-center mt-1">
                <Icon name="wifi" className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-500 mr-1 sm:mr-2 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-gray-500 truncate">Connecté</span>
              </div>
            </div>
          </div>
        </div>

        {/* Operators list */}
        <div className="mb-4 sm:mb-6">
          <div className="flex items-center mb-2 sm:mb-3">
            <Icon name="sparkles" className="w-4 h-4 sm:w-5 sm:h-5 text-violet-500 mr-1 sm:mr-2 flex-shrink-0" />
            <h4 className="font-semibold text-gray-700 text-sm sm:text-base truncate">Opérateurs partenaires</h4>
          </div>
          <ul className="space-y-2 sm:space-y-3" aria-label={`Opérateurs disponibles en ${country.name}`}>
            {country.operators.map((operator, i) => (
              <li 
                key={`${country.code}-operator-${i}`}
                style={{
                  transform: isHovered 
                    ? `translateX(${mousePosition.x * 5}px)`
                    : 'translateX(0)',
                  transitionDelay: `${i * 50}ms`,
                }}
              >
                <div className="flex items-center p-2 sm:p-3 bg-gradient-to-r from-violet-50/80 to-purple-50/80 rounded-lg sm:rounded-xl hover:from-violet-100 hover:to-purple-100 transition-all duration-300 group-hover:shadow-md border border-violet-100/50 backdrop-blur-sm">
                  <div className="relative mr-2 sm:mr-3 flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full blur opacity-50"></div>
                    <div className="relative p-1 bg-gradient-to-r from-emerald-100 to-green-100 rounded-full border border-emerald-200">
                      <Icon name="check" className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-600" />
                    </div>
                  </div>
                  <span className="font-medium text-gray-800 text-sm sm:text-base truncate flex-1 min-w-0">{operator}</span>
                  <Icon name="bolt" className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer with status */}
        <div className="pt-3 sm:pt-5 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="relative mr-2 sm:mr-3 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur animate-pulse"></div>
                <div className="relative w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-600 truncate">Disponible 24h/24</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
              <Icon name="chartBar" className="w-3 h-3 sm:w-4 sm:h-4 text-violet-500" />
              <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent truncate">
                API Live
              </span>
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="mt-2 sm:mt-4">
            <div className="flex justify-between text-xs text-gray-500 mb-0.5 sm:mb-1">
              <span className="text-xs">Couverture</span>
              <span className="text-xs">100%</span>
            </div>
            <div className="h-1 sm:h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-violet-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                style={{ 
                  width: isHovered ? '100%' : '100%',
                  transform: isHovered 
                    ? `translateX(${mousePosition.x * 2}%)`
                    : 'translateX(0)',
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Subtle shadow effect on hover */}
        <div 
          className="absolute -inset-1 sm:-inset-2 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
          style={{
            transform: isHovered 
              ? `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
              : 'translate(0, 0)',
          }}
        />
      </div>
    </article>
  );
});

// ==================== COMPOSANT STATISTICS ====================
const Statistics = React.memo(({ filteredCountries, allOperators }) => {
  const stats = [
    { value: filteredCountries.length, label: "Pays filtrés", color: "from-blue-500 to-cyan-500", icon: "🌍", description: "Pays actifs" },
    { value: allOperators.length, label: "Opérateurs uniques", color: "from-purple-500 to-pink-500", icon: "📱", description: "Partenaires" },
    { value: "100%", label: "Intégration complète", color: "from-green-500 to-emerald-500", icon: "✓", description: "API stable" },
    { value: 26, label: "Pays africains", color: "from-orange-500 to-red-500", icon: "✨", description: "Couverture totale" },
  ];

  return (
    <div className="mt-12 sm:mt-16 bg-gradient-to-br from-white via-violet-50/50 to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl animate-fade-in border border-violet-100/50 backdrop-blur-sm mx-4 sm:mx-0">
      <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
        <span className="bg-gradient-to-r from-violet-700 via-purple-600 to-violet-800 bg-clip-text text-transparent">
          Notre Couverture en Chiffres
        </span>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-xl sm:rounded-2xl blur-xl transition-all duration-500 group-hover:opacity-50"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-violet-100/50">
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">{stat.icon}</div>
              <div className={`text-3xl sm:text-5xl font-bold mb-1 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent animate-count-up`}>
                {stat.value}
              </div>
              <div className="text-gray-800 text-base sm:text-lg font-semibold mb-0.5 sm:mb-1">{stat.label}</div>
              <div className="text-gray-500 text-xs sm:text-sm">{stat.description}</div>
            </div>
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
    <footer className="bg-gradient-to-b from-white via-violet-50/30 to-white text-gray-800 py-8 sm:py-12 mt-12 sm:mt-16 border-t border-violet-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-6 sm:mb-8">
          <div className="mb-6 sm:mb-8 lg:mb-0 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-2 sm:space-x-3 mb-3 sm:mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-purple-600 rounded-full blur opacity-50 animate-pulse"></div>
                <div className="relative p-1.5 sm:p-2 bg-gradient-to-br from-violet-600 to-purple-600 rounded-full shadow-lg">
                  <Icon name="globe" className="text-white w-6 h-6 sm:w-8 sm:h-8" />
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">
                <span className="bg-gradient-to-r from-violet-700 via-purple-600 to-violet-800 bg-clip-text text-transparent">
                  Perenkap
                </span>
              </h2>
            </div>
            <p className="text-gray-600 max-w-md text-sm sm:text-lg">
              La plateforme de paiement Mobile Money la plus étendue en Afrique.
            </p>
          </div>
          
          <div className="text-center lg:text-right">
            <p className="mb-4 sm:mb-6 text-sm sm:text-lg text-gray-600">&copy; {new Date().getFullYear()} Perenkap. Tous droits réservés.</p>
            <div className="flex flex-wrap justify-center lg:justify-end gap-3 sm:gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-violet-700 hover:text-violet-900 transition-all duration-300 font-medium group text-sm sm:text-base"
                  aria-label={`Suivez-nous sur ${link.name}`}
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-violet-200/50 text-center">
          <p className="text-gray-600 text-xs sm:text-sm mb-4">
            Perenkap est disponible dans tous les pays listés ci-dessus avec une intégration complète des opérateurs Mobile Money locaux.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-6">
            <a href="#" className="relative text-xs sm:text-sm text-violet-600 hover:text-violet-800 group">
              <span className="relative z-10">Mentions légales</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="relative text-xs sm:text-sm text-violet-600 hover:text-violet-800 group">
              <span className="relative z-10">Politique de confidentialité</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="relative text-xs sm:text-sm text-violet-600 hover:text-violet-800 group">
              <span className="relative z-10">Conditions d'utilisation</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
});

// ==================== COMPOSANT HERO ====================
const HeroSection = React.memo(({ filteredCountries, searchTerm, setSearchTerm, selectedOperator, setSelectedOperator, allOperators }) => {
  return (
    <div className="relative bg-gradient-to-br from-violet-900 via-purple-800 to-violet-950 text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-violet-500/20 rounded-full mix-blend-overlay filter blur-xl sm:blur-3xl animate-blob"></div>
        <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-purple-500/20 rounded-full mix-blend-overlay filter blur-xl sm:blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-80 sm:h-80 bg-pink-500/10 rounded-full mix-blend-overlay filter blur-xl sm:blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem] opacity-[0.05]"></div>
      
      <div className="relative container mx-auto text-center z-10">
        {/* Badge */}
        <div className="inline-flex items-center mb-4 sm:mb-6 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full animate-fade-down border border-white/20">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full mr-1.5 sm:mr-2 animate-pulse"></div>
          <span className="text-xs sm:text-sm font-medium">🌍 Plateforme Panafricaine</span>
        </div>
        
        {/* Main title */}
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 animate-fade-down">
          <span className="bg-gradient-to-r from-white via-violet-100 to-white bg-clip-text text-transparent">
            Couverture Mobile Money
          </span>
          <br />
          <span className="text-xl sm:text-3xl md:text-5xl font-semibold text-violet-100">
            de Perenkap en Afrique
          </span>
        </h1>
        
        {/* Description */}
        <p className="text-sm sm:text-lg md:text-xl opacity-90 max-w-2xl md:max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 animate-fade-up">
          Découvrez les pays africains et leurs opérateurs Mobile Money partenaires de Perenkap
        </p>
        
        {/* Search components */}
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedOperator={selectedOperator}
          setSelectedOperator={setSelectedOperator}
          allOperators={allOperators}
          filteredCountries={filteredCountries}
        />
        
        {/* Stats */}
        <div className="mt-8 sm:mt-10 md:mt-12 flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 animate-fade-in">
          {[
            { value: filteredCountries.length, label: "pays" },
            { value: allOperators.length, label: "opérateurs" },
            { value: 26, label: "pays africains" },
            { value: "100%", label: "intégration" },
          ].map((stat, index) => (
            <div key={index} className="group relative bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 flex items-center hover:bg-white/20 transition-all duration-300 border border-white/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="font-bold text-lg sm:text-xl md:text-2xl mr-1.5 sm:mr-2 relative z-10">{stat.value}</span>
              <span className="relative z-10 text-xs sm:text-sm md:text-base">{stat.label}</span>
            </div>
          ))}
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
    }, 150);

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
    <div className="min-h-screen bg-gradient-to-b from-white via-violet-50/20 to-white">
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
          33% { transform: translate(20px, -30px) scale(1.1); }
          66% { transform: translate(-15px, 15px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes countUp {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-fade-in { animation: fadeIn 0.8s ease-out; }
        .animate-fade-up { animation: fadeUp 0.8s ease-out; }
        .animate-fade-down { animation: fadeDown 0.8s ease-out; }
        .animate-blob { animation: blob 7s infinite; }
        .animate-count-up { animation: countUp 0.6s ease-out; }
        .animate-shimmer { animation: shimmer 2s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        
        /* Optimisations pour les transitions 3D */
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        
        /* Amélioration des performances sur mobile */
        @media (max-width: 640px) {
          .animate-blob {
            animation-duration: 10s;
          }
        }
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
      <main className="p-4 sm:p-6 md:p-8" role="main">
        <div className="container mx-auto">
          <div className="mb-8 sm:mb-10 md:mb-12 text-center animate-fade-in px-4">
            <div className="inline-block relative mb-4 sm:mb-6">
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full blur-xl"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold relative">
                <span className="bg-gradient-to-r from-violet-700 via-purple-600 to-violet-800 bg-clip-text text-transparent">
                  Pays Couverts
                </span>
              </h2>
            </div>
            <p className="text-gray-600 max-w-2xl md:max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
              Perenkap est présent dans <span className="font-bold text-violet-700">{filteredCountries.length}</span> pays africains avec une intégration complète des principaux opérateurs Mobile Money.
            </p>
          </div>

          {filteredCountries.length === 0 ? (
            <div className="text-center py-12 sm:py-16 animate-fade-in px-4">
              <div className="inline-block relative p-4 sm:p-6 mb-4 sm:mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-100 to-purple-100 rounded-full blur-xl opacity-50"></div>
                <div className="relative p-6 sm:p-8 bg-white rounded-full shadow-lg border border-violet-100">
                  <div className="text-4xl sm:text-5xl">🌍</div>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mb-3 sm:mb-4">Aucun résultat trouvé</h3>
              <p className="text-gray-500 max-w-md mx-auto text-sm sm:text-base">
                Essayez avec d'autres termes de recherche ou sélectionnez un autre opérateur
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-0">
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
          className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-gradient-to-r from-violet-600 to-purple-600 text-white p-2.5 sm:p-3 md:p-4 rounded-full shadow-xl sm:shadow-2xl hover:from-violet-700 hover:to-purple-700 transition-all duration-500 hover:scale-110 z-50 animate-fade-in border border-white/20 group"
          aria-label="Retour en haut"
        >
          <Icon name="arrowUp" size="md" className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="absolute right-full mr-2 sm:mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-xs sm:text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Retour en haut
          </span>
        </button>
      )}
    </div>
  );
};

export default Home;