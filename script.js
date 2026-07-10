const translations = {
  es: {
    brand: 'Mi sitio',
    language: { label: 'Idioma' },
    nav: { home: 'Inicio', about: 'Sobre mí', projects: 'Proyectos', blog: 'Blog' },
    footer: { copy: '© 2026 — Mi sitio web personal' },
    home: {
      eyebrow: 'Diseño, contenido y estrategia',
      title: 'Construyo una página web con identidad propia.',
      subtitle: 'Un sitio de cuatro páginas con traducción completa entre español e inglés, pensado para presentar quién eres, tus proyectos y tus futuras publicaciones.',
      primaryCta: 'Ver proyectos',
      secondaryCta: 'Ir al blog',
      intro: 'Hola! 👋 Soy Isabel, bienvenid@ a mi página web, aquí descubrirás un poquito más de mí y de lo que voy haciendo por el mundo 😊',
      posterName: 'Isabel Escribano',
      posterWordLeft: 'DATA',
      posterWordRight: 'SCIENTIST',
      posterBadgeTopLeft: 'Turning data into decisions',
      posterBadgeTopRight: 'AI for everyone',
      posterSkillOne: 'Data Science',
      posterSkillTwo: 'Machine Learning',
      posterSkillThree: 'AI Solutions',
      posterSkillFour: 'Insights',
      posterSkillFive: 'Automation',
      posterSkillSix: 'Predictive Models',
      carouselKicker: 'Carrusel de fotos',
      carouselTitle: 'Tus imágenes favoritas',
      carouselSubtitle: 'Sustituye estas imágenes por las fotos que más te gusten.',
      slideOneTitle: 'Foto destacada 1',
      slideOneText: 'Una imagen que represente tu estilo.',
      slideTwoTitle: 'Foto destacada 2',
      slideTwoText: 'Otra foto para dar personalidad al inicio.',
      slideThreeTitle: 'Foto destacada 3',
      slideThreeText: 'Una tercera imagen para completar el carrusel.',
      cardOneTitle: 'Inicio',
      cardOneText: 'Una portada limpia con acceso rápido al resto de secciones.',
      cardTwoTitle: 'Multidioma',
      cardTwoText: 'El selector ES/EN guarda tu preferencia y la aplica en todo el sitio.',
      cardThreeTitle: 'Blog vivo',
      cardThreeText: 'Puedes añadir nuevas entradas sin cambiar la estructura de la página.'
    },
    about: {
      eyebrow: 'Conóceme mejor',
      title: 'Sobre mí',
      subtitle: '¡En busca activa de empleo!',
      storyTitle: 'Mi historia',
      storyText: 'Hola 👋 Soy Isabel Escribano, tengo 21 años y acabo de terminar mi formación en ciencia de datos e inteligencia artificial en la Universidad Politécnica de Madrid. Me encantan los deportes de equipo, leer y ver series y peliculas. A parte de todo esto, me apasiona ayudar a las personas a tomar decisiones informadas basadas en datos e implementar servicios de IA que sean capaces de mejorar la vida de las personas. Un ejemplo de ello es que durante mis prácticas estuve ayudando en un proyecto europeo para la detección de incendios mediante imágenes satelitales.',
      skillsTitle: 'Habilidades y enfoque',
      skillOne: 'Utilizo principalmente Python y R para analizar datos y construir modelos de aprendizaje automático.',
      skillTwo: 'Tengo un buen manejo de herramientas de ofimática como Excel, PowerPoint y Word.',
      skillThree: 'Tengo un nivel alto de inglés e intermendio de francés, aparte de mi español nativo.',
      skillFour: 'Tengo experiencia entrenando todo tipo de modelos de aprendizaje automático, desde modelos de regresión hasta redes neuronales profundas.'
    },
    projects: {
      eyebrow: 'Trabajo y proyectos',
      title: 'Proyectos',
      subtitle: 'Aquí podeís ver algunos de mis proyectos más recientes e incluso futuros, que iré añadiendo a medida que los vaya desarrollando.',
      listTitle: 'Proyectos destacados',
      tagOne: 'Proyecto de ciencia de datos',
      tagTwo: 'Web',
      tagThree: 'Aplicación',
      projectOneTitle: 'Proyecto 01: Mejora en el postprocesado de una serie temporal de área quemada',
      projectOneText: 'Este es un proyecto que fuí desarrollando durante mis prácticas en la Universidad Politécnica de Madrid y que culminé en mi TFG. Consistía en mejorar una serie temporal de área quemada en la fase de postprocesado, para ello utilicé datos ecológicos como por ejemplo cuanto tardan en regenerarse ciertos tipos de vegetación para estimar si las predicciones eran correctas o no, y de esta manera reducir el error en las predicciones.',
      projectTwoTitle: 'Proyecto 02: Página Web',
      projectTwoText: 'Esta página web es en sí misma un proyecto que desarrrolado en una de las asignaturas de la universidad. Está hecho desde cero, sin usar ningún tipo de plantilla, y con el objetivo de mostrar mis habilidades y proyectos de una manera clara y concisa. Está hecha con HTML, CSS y JavaScript, y es completamente responsive, adaptándose a cualquier tamaño de pantalla.',
      projectThreeTitle: 'Proyecto 03: Carplay desde una raspberry Pi',
      projectThreeText: 'Este es un proyecto que me gustaría mostrar más adelante, es un proyecto personal que me gustaría llevar a cabo en un futuro próximo y del cual me he ido informando y documentando para poder llevarlo a cabo. Consiste en crear un ordenador de abordo a partir de una raspberry Pi, tenía pensado utilizar también una pantalla de un ordenador viejo que tenía en casa y cuya pantalla era táctil para poder interactuar con el sistema.',
      contactTitle: 'Contacto',
      contactText: 'Si alguien quiere escribirte, puede usar este formulario.',
      contactLinksTitle: 'Enlaces directos',
      emailLabel: 'Correo electrónico',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
      formName: 'Nombre',
      formEmail: 'Correo electrónico',
      formMessage: 'Mensaje',
      formNamePlaceholder: 'Escribe tu nombre',
      formEmailPlaceholder: 'Escribe tu correo',
      formMessagePlaceholder: 'Cuéntame tu idea',
      formSubmit: 'Enviar mensaje',
      success: 'Gracias. Tu mensaje se ha enviado de forma local.'
    },
    blog: {
      eyebrow: 'Ideas y publicaciones',
      title: 'Blog',
      subtitle: 'Filtra por fecha, tema o busca una entrada concreta. Las publicaciones se renderizan desde JavaScript, así que puedes añadir más con el tiempo.',
      filtersTitle: 'Filtros',
      searchLabel: 'Buscar',
      searchPlaceholder: 'Busca por título, texto o etiqueta',
      dateLabel: 'Fecha de publicación',
      themeLabel: 'Tema',
      allThemes: 'Todos los temas',
      clearFilters: 'Limpiar filtros',
      readMore: 'Leer entrada',
      emptyState: 'No hay entradas que coincidan con los filtros seleccionados.',
      themes: {
        all: 'Todos los temas',
        portfolio: 'Portfolio',
        design: 'Diseño',
        strategy: 'Estrategia',
        code: 'Código',
        research: 'Investigación',
        content: 'Contenido'
      }
    },
    projectDetails: {
      back: 'Volver a proyectos',
      portfolio: {
        eyebrow: 'Proyecto web',
        title: 'Portfolio interactivo',
        subtitle: 'Una propuesta pensada para mostrar trabajos, personalidad y contacto en una sola experiencia visual.',
        sectionOneTitle: 'Qué resuelve',
        sectionOneText: 'Este proyecto ordena tu contenido para que cualquiera entienda rápidamente quién eres y qué haces.',
        sectionTwoTitle: 'Puntos clave',
        sectionTwoText: 'El diseño prioriza claridad, jerarquía visual y una navegación sencilla en todos los dispositivos.',
        pointOne: 'Estructura clara y adaptable',
        pointTwo: 'Bloques visuales listos para personalizar',
        pointThree: 'Ideal para presentar tu trabajo personal'
      },
      branding: {
        eyebrow: 'Proyecto de marca',
        title: 'Sistema visual para una marca',
        subtitle: 'Un caso para organizar identidad, tono y presentación de una forma coherente.',
        sectionOneTitle: 'Qué resuelve',
        sectionOneText: 'Sirve para mostrar una dirección visual consistente y memorable.',
        sectionTwoTitle: 'Puntos clave',
        sectionTwoText: 'Puedes añadir logo, paleta y mensajes principales sin perder la sencillez.',
        pointOne: 'Identidad visual coherente',
        pointTwo: 'Mensaje claro y directo',
        pointThree: 'Pensado para crecer con el proyecto'
      },
      app: {
        eyebrow: 'Proyecto digital',
        title: 'Aplicación para gestionar ideas',
        subtitle: 'Una página pensada para mostrar cómo organizas tareas, notas o cualquier flujo de trabajo.',
        sectionOneTitle: 'Qué resuelve',
        sectionOneText: 'Presenta una idea funcional con foco en utilidad real.',
        sectionTwoTitle: 'Puntos clave',
        sectionTwoText: 'Ideal para describir producto, alcance y aprendizajes del proceso.',
        pointOne: 'Orientada a productividad',
        pointTwo: 'Fácil de explicar en portfolio',
        pointThree: 'Lista para añadir capturas o demos'
      }
    },
    blogDetails: {
      back: 'Volver al blog',
      portfolio: {
        eyebrow: 'Entrada del blog',
        title: 'Cómo organizar un portfolio desde cero',
        dateLine: 'Publicado el 9 de julio de 2026',
        sectionOneTitle: 'Idea principal',
        sectionOneText: 'Antes de enseñar trabajos conviene decidir qué historia quieres contar y qué pieza representa mejor tu perfil.',
        sectionTwoTitle: 'Consejo práctico',
        sectionTwoText: 'Empieza con una estructura simple y añade detalle solo donde realmente aporta claridad.',
        pointOne: 'Define tu objetivo antes de publicar',
        pointTwo: 'Agrupa contenido por temas o tipos',
        pointThree: 'Revisa qué quieres que vea primero'
      },
      design: {
        eyebrow: 'Entrada del blog',
        title: 'Decisiones de diseño que sí importan',
        dateLine: 'Publicado el 3 de julio de 2026',
        sectionOneTitle: 'Idea principal',
        sectionOneText: 'Color, tipografía y espaciado cambian de forma directa la percepción de una página.',
        sectionTwoTitle: 'Consejo práctico',
        sectionTwoText: 'Haz pruebas con contraste y jerarquía para que lo importante se entienda sin esfuerzo.',
        pointOne: 'Menos ruido visual',
        pointTwo: 'Más intención en cada bloque',
        pointThree: 'Prioriza lectura y ritmo'
      },
      translation: {
        eyebrow: 'Entrada del blog',
        title: 'Mi primera entrada al blog: Los inicios de la IA',
        dateLine: 'Publicado el 1 de julio de 2026',
        sectionOneTitle: 'Idea principal',
        sectionOneText: 'Una sola fuente de verdad para los textos evita inconsistencias cuando cambias de idioma.',
        sectionTwoTitle: 'Consejo práctico',
        sectionTwoText: 'Guarda los textos en un objeto o archivo único y renderiza el idioma según la selección del usuario.',
        pointOne: 'Un solo sitio, dos idiomas',
        pointTwo: 'Menos mantenimiento manual',
        pointThree: 'Mejor escalabilidad'
      }
    }
  },
  en: {
    brand: 'My site',
    language: { label: 'Language' },
    nav: { home: 'Home', about: 'About me', projects: 'Projects', blog: 'Blog' },
    footer: { copy: '© 2026 — My personal website' },
    home: {
      eyebrow: 'Design, content and strategy',
      title: 'I build a website with its own identity.',
      subtitle: 'A four-page site with full Spanish and English translation, designed to present who you are, your projects and your future posts.',
      primaryCta: 'View projects',
      secondaryCta: 'Go to blog',
      intro: 'Hi! 👋 I am Isabel, welcome to my website, where you can discover a little more about me and what I am doing out in the world 😊',
      posterName: 'Isabel Escribano',
      posterWordLeft: 'DATA.',
      posterWordRight: 'INTELLIGENCE',
      posterBadgeTopLeft: 'Turning data into decisions',
      posterBadgeTopRight: 'AI for everyone',
      posterSkillOne: 'Data Science',
      posterSkillTwo: 'Machine Learning',
      posterSkillThree: 'AI Solutions',
      posterSkillFour: 'Insights',
      posterSkillFive: 'Automation',
      posterSkillSix: 'Predictive Models',
      carouselKicker: 'Photo carousel',
      carouselTitle: 'Your favorite images',
      carouselSubtitle: 'Replace these images with the photos you like best.',
      slideOneTitle: 'Featured photo 1',
      slideOneText: 'An image that represents your style.',
      slideTwoTitle: 'Featured photo 2',
      slideTwoText: 'Another photo to give the home page personality.',
      slideThreeTitle: 'Featured photo 3',
      slideThreeText: 'A third image to complete the carousel.',
      cardOneTitle: 'Home',
      cardOneText: 'A clean front page with fast access to the rest of the site.',
      cardTwoTitle: 'Multilingual',
      cardTwoText: 'The ES/EN selector stores your choice and applies it everywhere.',
      cardThreeTitle: 'Living blog',
      cardThreeText: 'You can add new posts without changing the page structure.'
    },
    about: {
      eyebrow: 'Get to know me',
      title: 'About me',
      subtitle: 'This is where you can tell your story, your background, your goals and the kind of work you enjoy.',
      storyTitle: 'My story',
      storyText: 'Replace this text with a personal introduction: who you are, what you study or do, and what your professional focus is.',
      skillsTitle: 'Skills and focus',
      skillOne: 'User-centered design',
      skillTwo: 'Front-end development',
      skillThree: 'Clear, useful content',
      skillFour: 'Continuous learning'
    },
    projects: {
      eyebrow: 'Work and projects',
      title: 'Projects',
      subtitle: 'Show your most important work on a single page.',
      listTitle: 'Featured projects',
      tagOne: 'Web',
      tagTwo: 'Branding',
      tagThree: 'App',
      projectOneTitle: 'Project 01',
      projectOneText: 'Describe the project goal, the technology you used and the result you achieved.',
      projectTwoTitle: 'Project 02',
      projectTwoText: 'Add a portfolio idea, campaign or relevant academic work.',
      projectThreeTitle: 'Project 03',
      projectThreeText: 'Include a case you would like to showcase later.',
      contactTitle: 'Contact',
      contactText: 'If someone wants to write to you, they can use this form.',
      contactLinksTitle: 'Direct links',
      emailLabel: 'Email',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
      formName: 'Name',
      formEmail: 'Email',
      formMessage: 'Message',
      formNamePlaceholder: 'Type your name',
      formEmailPlaceholder: 'Type your email',
      formMessagePlaceholder: 'Tell me your idea',
      formSubmit: 'Send message',
      success: 'Thanks. Your message was sent locally.'
    },
    blog: {
      eyebrow: 'Ideas and posts',
      title: 'Blog',
      subtitle: 'Filter by date, topic or search for a specific post. Posts are rendered from JavaScript, so you can keep adding more over time.',
      filtersTitle: 'Filters',
      searchLabel: 'Search',
      searchPlaceholder: 'Search by title, text or tag',
      dateLabel: 'Publication date',
      themeLabel: 'Theme',
      allThemes: 'All themes',
      clearFilters: 'Clear filters',
      readMore: 'Read post',
      emptyState: 'No posts match the selected filters.',
      themes: {
        all: 'All themes',
        portfolio: 'Portfolio',
        design: 'Design',
        strategy: 'Strategy',
        code: 'Code',
        research: 'Research',
        content: 'Content'
      }
    },
    projectDetails: {
      back: 'Back to projects',
      portfolio: {
        eyebrow: 'Web project',
        title: 'Interactive portfolio',
        subtitle: 'A proposal designed to show work, personality and contact details in a single visual experience.',
        sectionOneTitle: 'What it solves',
        sectionOneText: 'This project organizes your content so visitors can quickly understand who you are and what you do.',
        sectionTwoTitle: 'Highlights',
        sectionTwoText: 'The design focuses on clarity, visual hierarchy and easy navigation on every device.',
        pointOne: 'Clear, adaptable structure',
        pointTwo: 'Visual blocks ready to customize',
        pointThree: 'Ideal for personal work presentations'
      },
      branding: {
        eyebrow: 'Brand project',
        title: 'Visual system for a brand',
        subtitle: 'A case for organizing identity, tone and presentation in a coherent way.',
        sectionOneTitle: 'What it solves',
        sectionOneText: 'It helps show a memorable and consistent visual direction.',
        sectionTwoTitle: 'Highlights',
        sectionTwoText: 'You can add logo, palette and key messages without losing simplicity.',
        pointOne: 'Consistent visual identity',
        pointTwo: 'Clear and direct message',
        pointThree: 'Ready to grow with the project'
      },
      app: {
        eyebrow: 'Digital project',
        title: 'App to organize ideas',
        subtitle: 'A page designed to show how you organize tasks, notes or any workflow.',
        sectionOneTitle: 'What it solves',
        sectionOneText: 'It presents a functional idea with a strong focus on real usefulness.',
        sectionTwoTitle: 'Highlights',
        sectionTwoText: 'Great for describing product scope, features and lessons learned.',
        pointOne: 'Productivity oriented',
        pointTwo: 'Easy to explain in a portfolio',
        pointThree: 'Ready for screenshots or demos'
      }
    },
    blogDetails: {
      back: 'Back to blog',
      portfolio: {
        eyebrow: 'Blog post',
        title: 'How to organize a portfolio from scratch',
        dateLine: 'Published on July 1, 2026',
        sectionOneTitle: 'Main idea',
        sectionOneText: 'Before showing work it helps to decide which story you want to tell and which piece represents you best.',
        sectionTwoTitle: 'Practical advice',
        sectionTwoText: 'Start with a simple structure and add detail only where it improves clarity.',
        pointOne: 'Define your goal before publishing',
        pointTwo: 'Group content by themes or types',
        pointThree: 'Check what visitors should see first'
      },
      design: {
        eyebrow: 'Blog post',
        title: 'Design decisions that actually matter',
        dateLine: 'Published on June 18, 2026',
        sectionOneTitle: 'Main idea',
        sectionOneText: 'Color, typography and spacing directly change how a page feels.',
        sectionTwoTitle: 'Practical advice',
        sectionTwoText: 'Test contrast and hierarchy so the important parts are understood effortlessly.',
        pointOne: 'Less visual noise',
        pointTwo: 'More intention in every block',
        pointThree: 'Prioritize reading flow and rhythm'
      },
      translation: {
        eyebrow: 'Blog post',
        title: 'Translate a site without duplicating logic',
        dateLine: 'Published on May 7, 2026',
        sectionOneTitle: 'Main idea',
        sectionOneText: 'A single source of truth for text prevents inconsistencies when you change languages.',
        sectionTwoTitle: 'Practical advice',
        sectionTwoText: 'Store the copy in one object or file and render the language according to the user choice.',
        pointOne: 'One site, two languages',
        pointTwo: 'Less manual maintenance',
        pointThree: 'Better scalability'
      }
    }
  }
};

const blogPosts = [
  {
    path: 'blog-portfolio.html',
    date: '2026-07-01',
    themes: ['portfolio', 'strategy'],
    title: { es: 'Cómo organizar un portfolio desde cero', en: 'How to organize a portfolio from scratch' },
    excerpt: { es: 'Una guía corta para pensar estructura, contenido y narrativa antes de publicar tu trabajo.', en: 'A short guide to structure, content and narrative before publishing your work.' }
  },
  {
    path: 'blog-design.html',
    date: '2026-06-18',
    themes: ['design', 'content'],
    title: { es: 'Decisiones de diseño que sí importan', en: 'Design decisions that actually matter' },
    excerpt: { es: 'Color, tipografía y espaciado pueden cambiar por completo la percepción de una página.', en: 'Color, typography and spacing can completely change how a page feels.' }
  },
  {
    path: 'blog-translation.html',
    date: '2026-05-07',
    themes: ['code', 'research'],
    title: { es: 'Traducir un sitio sin duplicar lógica', en: 'Translate a site without duplicating logic' },
    excerpt: { es: 'Cómo mantener una sola fuente de verdad para textos, navegación y formularios.', en: 'How to keep a single source of truth for text, navigation and forms.' }
  }
];

function getLanguage() {
  const stored = localStorage.getItem('site-language');
  return stored === 'en' ? 'en' : 'es';
}

function getValue(path, lang) {
  return path.split('.').reduce((value, key) => (value ? value[key] : undefined), translations[lang]);
}

function translateTokens(lang, tokens) {
  return tokens.map((token) => translations[lang].blog.themes[token] || token);
}

function populateThemeFilter(lang) {
  const select = document.getElementById('blog-theme');
  if (!select) {
    return;
  }

  const selectedValue = select.value || 'all';
  const themeKeys = ['all', ...new Set(blogPosts.flatMap((post) => post.themes))];

  select.innerHTML = themeKeys
    .map((themeKey) => `<option value="${themeKey}">${translations[lang].blog.themes[themeKey] || themeKey}</option>`)
    .join('');

  select.value = themeKeys.includes(selectedValue) ? selectedValue : 'all';
}

function renderBlog(lang) {
  const searchInput = document.getElementById('blog-search');
  const dateInput = document.getElementById('blog-date');
  const themeInput = document.getElementById('blog-theme');
  const postList = document.getElementById('blog-posts');
  const emptyState = document.getElementById('blog-empty');

  if (!searchInput || !dateInput || !themeInput || !postList || !emptyState) {
    return;
  }

  const searchTerm = searchInput.value.trim().toLowerCase();
  const selectedDate = dateInput.value;
  const selectedTheme = themeInput.value;

  const filteredPosts = blogPosts.filter((post) => {
    const currentTitle = post.title[lang];
    const currentExcerpt = post.excerpt[lang];
    const combinedText = [currentTitle, currentExcerpt, ...translateTokens(lang, post.themes)].join(' ').toLowerCase();
    const matchesSearch = !searchTerm || combinedText.includes(searchTerm);
    const matchesDate = !selectedDate || post.date === selectedDate;
    const matchesTheme = selectedTheme === 'all' || !selectedTheme || post.themes.includes(selectedTheme);
    return matchesSearch && matchesDate && matchesTheme;
  });

  postList.innerHTML = '';
  emptyState.hidden = filteredPosts.length > 0;

  if (!filteredPosts.length) {
    return;
  }

  filteredPosts.forEach((post) => {
    const article = document.createElement('article');
    article.className = 'post-card';

    const dateText = new Date(`${post.date}T00:00:00`).toLocaleDateString(lang === 'en' ? 'en-US' : 'es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    article.innerHTML = `
      <div class="post-meta">
        <span class="post-date">${dateText}</span>
      </div>
      <h3>${post.title[lang]}</h3>
      <p>${post.excerpt[lang]}</p>
      <div class="post-tags">
        ${post.themes.map((theme) => `<span class="tag">${translations[lang].blog.themes[theme] || theme}</span>`).join('')}
      </div>
      <a class="btn btn-secondary post-link" href="${post.path}">${translations[lang].blog.readMore}</a>
    `;

    postList.appendChild(article);
  });
}

function applyLanguage(lang) {
  const titleEs = document.body.dataset.titleEs;
  const titleEn = document.body.dataset.titleEn;

  if (lang === 'en' && titleEn) {
    document.title = titleEn;
  } else if (titleEs) {
    document.title = titleEs;
  }

  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = getValue(element.dataset.i18n, lang);
    if (typeof value === 'string') {
      element.textContent = value;
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const value = getValue(element.dataset.i18nPlaceholder, lang);
    if (typeof value === 'string') {
      element.placeholder = value;
    }
  });

  document.querySelectorAll('.lang-btn').forEach((button) => {
    const active = button.dataset.langSwitch === lang;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });

  if ((document.body.dataset.page || 'home') === 'blog') {
    populateThemeFilter(lang);
    renderBlog(lang);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const lang = getLanguage();
  applyLanguage(lang);

  document.querySelectorAll('[data-lang-switch]').forEach((button) => {
    button.addEventListener('click', () => {
      const nextLang = button.dataset.langSwitch;
      localStorage.setItem('site-language', nextLang);
      applyLanguage(nextLang);
    });
  });

  const blogSearch = document.getElementById('blog-search');
  const blogDate = document.getElementById('blog-date');
  const blogTheme = document.getElementById('blog-theme');
  const blogClear = document.getElementById('blog-clear');

  if (blogSearch && blogDate && blogTheme) {
    const rerender = () => renderBlog(getLanguage());
    blogSearch.addEventListener('input', rerender);
    blogDate.addEventListener('change', rerender);
    blogTheme.addEventListener('change', rerender);
  }

  if (blogClear && blogSearch && blogDate && blogTheme) {
    blogClear.addEventListener('click', () => {
      blogSearch.value = '';
      blogDate.value = '';
      blogTheme.value = 'all';
      renderBlog(getLanguage());
    });
  }
});
