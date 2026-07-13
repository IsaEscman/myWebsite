const translations = {
  es: {
    brand: 'Isabel Escribano',
    language: { label: 'Idioma' },
    nav: { home: 'Inicio', about: 'Sobre mí', projects: 'Proyectos', blog: 'Blog' },
    footer: { copy: '© 2026 — Isabel Escribano Website' },
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
      storyText: 'Hola 👋 Soy Isabel Escribano, tengo 21 años y recientemente completé mi formación en Ciencia de Datos y Inteligencia Artificial en la Universidad Técnica de Madrid. Disfruto de los deportes de equipo, la lectura y ver series y películas. Me apasiona ayudar a las personas a tomar decisiones informadas y basadas en datos, así como construir servicios de IA que puedan mejorar la vida de las personas. Por ejemplo, durante mis prácticas en empresa estuve en el CTB trabajando en un proyecto europeo para la detección de incendios forestales utilizando imágenes satelitales.',
      skillsTitle: 'Habilidades y enfoque',
      skillOne: 'Principalmente uso Python y R para analizar datos y construir modelos de aprendizaje automático. También tengo conocimientos en SQL, en algunas herramientas cloud como AWS y en frameworks de deep learning como TensorFlow y PyTorch.',
      skillTwo: 'Tengo una sólida competencia con herramientas ofimáticas como Excel, PowerPoint y Word.',
      skillThree: 'Tengo un alto nivel de inglés y un nivel intermedio de francés, además de mi español nativo.',
      skillFour: 'Tengo experiencia entrenando una amplia gama de modelos de aprendizaje automático, desde modelos de regresión hasta redes neuronales profundas.'
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
      projectOneText: 'Este es un proyecto que fui desarrollando durante mis prácticas en la Universidad Politécnica de Madrid y que culminé en mi TFG. Consistía en mejorar una serie temporal de área quemada en la fase de postprocesado; para ello utilicé datos ecológicos, por ejemplo, cuánto tardan en regenerarse ciertos tipos de vegetación, para estimar si las predicciones eran correctas y así reducir el error en las predicciones.',
      projectTwoTitle: 'Proyecto 02: Página Web',
      projectTwoText: 'Esta página web es en sí misma un proyecto que desarrollé en una asignatura de la universidad. Está hecha desde cero, sin usar plantillas, con el objetivo de mostrar mis habilidades y proyectos de una manera clara y concisa. Está realizada con HTML, CSS y JavaScript y es completamente responsive.',
      projectThreeTitle: 'Proyecto 03: Carplay desde una Raspberry Pi',
      projectThreeText: 'Este es un proyecto personal que me gustaría desarrollar en el futuro: crear un ordenador de abordo a partir de una Raspberry Pi. La idea es reutilizar la pantalla táctil de un equipo antiguo para interactuar con el sistema y ofrecer una interfaz de infoentretenimiento básica. He investigado opciones de hardware y software para crear un prototipo robusto.',
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
        eyebrow: 'Proyecto 01',
        title: 'Mejora en el postprocesado de una serie temporal de área quemada',
        subtitle: 'Este proyecto resume mis prácticas en el Centro Tecnológico de Biomedicina de la Universidad Politécnica de Madrid y mi TFG, en el que mejoré una serie temporal de área quemada en la fase de postprocesado.',
        sectionOneTitle: '¿Cúal fue el problema que resolví?',
        sectionOneText: 'Este proyecto se basaba en mejorar el error que tenía una serie de área quemada, en concreto, un error de sobrestimación siendo la serie de área quemada la salida de una red neuronal autoencoder.',
        sectionTwoTitle: 'Cómo lo hice',
        sectionTwoTextOne: 'Me centré en dotar a la serie temporal de coherencia temporal ya que la propia naturaleza de la red neuronal intentaba minimizar el error sin tener en cuenta el factor de regeneración de la vegetación quemada. Para llevar a cabo este proyecto hice una investigación previa sobre el FRI (Fire Return Interval) de los distintos tipos de vegetación y utilizando máscaras anuales para dividir los tipos de vegetación determiné el valor de unas ventanas temporales para cada tipo de vegetación y así poder asignar un porcentaje de confianza a cada predicción de la serie temporal.',
        sectionTwoTextTwo: 'Para ello utilicé Python y librerías como Pandas, NumPy, Matplotlib, Rioxarray y Numba.',
        sectionThreeTitle: 'Resultados',
        sectionThreeText: 'El resultado final fue una serie temporal de área quemada con un error de sobrestimación mucho menor y con una coherencia temporal mucho mayor, lo que permite a los investigadores y gestores de incendios forestales tomar decisiones más informadas y basadas en datos.',
        sectionFourTitle: 'Puntos clave',
        sectionFourText: 'El diseño del algoritmo prioriza la optimización. Evita calculos innecesarios y aprovecha la memoria al máximo. Además, el código está preparado para su procesamiento en paralelo, lo que permite reducir el tiempo de ejecución en equipos con múltiples núcleos.',
        pointOne: 'El hecho de la utilización de ventanas temporales variables para cada tipo de vegetación es algo novedoso dentro de este área.',
        pointTwo: 'El código está optimizado al máximo para reducir el tiempo de ejecución y aprovechar la memoria al máximo.',
        pointThree: 'Se tiene en cuenta que Python es un lenguaje interpretado y que no es el más rápido, por lo que se ha utilizado Numba para compilar las funciones críticas y mejorar el rendimiento.'
      },
      branding: {
        eyebrow: 'Proyecto 02',
        title: 'Página Web',
        subtitle: 'Esta página web es en sí misma un proyecto que desarrollé en una asignatura de la universidad. Está hecha desde cero, sin usar plantillas, con el objetivo de mostrar mis habilidades y proyectos de una manera clara y concisa.',
        sectionOneTitle: 'Cómo está hecha',
        sectionOneText: 'Esta página web viene a reflejar mis avances dentro del mundo de la programación, la ciencia de datos y la inteligencia artificial. Los lenguajes que se han empleado en la realización de esta página Web han sido HTML, CSS y JavaScript, yo no estoy muy acostumbrada a estos lenajes y he requerido la ayuda también de un modelo de IA para su realización. Aún así con este proyecto he aprendido bastante sobre diseño web.',
        sectionTwoTitle: 'Puntos clave',
        sectionTwoText: 'Esta práctica la he entendido no solo como un trabajo para esa asignatura sino como un proyecto que puede seguir siendome útil a futuro y supongo que es una de las razones por las que he intentado que sea lo más atractiva visualmente posible y que encierta manera me represente como persona y como programadora',
        pointOne: 'Identidad visual coherente y personal',
        pointTwo: 'Mensaje claro y directo',
        pointThree: 'Pensado para seguir siendo útil en el futuro'
      },
      app: {
        eyebrow: 'Proyecto 03',
        title: 'Carplay desde una Raspberry Pi',
        subtitle: 'Un dispositivo de infoentretenimiento para el coche a partir de una Raspberry Pi y una pantalla táctil reutilizada de un equipo antiguo.',
        sectionOneTitle: 'Teoría',
        sectionOneText: 'Sobre este proyecto todavía no puedo hablar más que lo teórico y de lo que pretendo hacer, ya que todavía no está en fase de \'producción\'. La idea es hacer una interfaz fácil de usar y práctica con todos los pluses que tendría un ordenador de abordo de un coche de alta gama. Por ahora he pensado en los mínimos, reproducción de música, GPS y conexión con el móvil para poder hacer llamadas y enviar mensajes, y algunas otras características más potentes como una colección de comandos por voz conectada con una IA para no tener la necesidad de tocar la pantalla. ',
        sectionTwoTitle: 'Puntos clave',
        sectionTwoText: 'Como todavía está fase de desarrollo no puedo hablar de resultados, pero sí de lo que pretendo conseguir con este proyecto.',
        pointOne: 'Para empezar la interfaz debe ser lo más simple posible y fácil de usar',
        pointTwo: 'Necesitaré aprender algunos conocimientos de electrónica para conectar la pantalla del ordenador antiguo a los puertos de las Raspberry Pi y que funcione correctamente, así como un microfono y también que la Raspberry Pi pueda conectarse con el coche para poder leer datos del mismo y poder mostrar información en la pantalla.',
        pointThree: 'Además de la electrónica, también tendré que aprender a programar la interfaz de usuario y a conectar la Raspberry Pi con el móvil para poder hacer llamadas y enviar mensajes, así como también a conectar la Raspberry Pi con una IA para poder dar comandos por voz.'
      }
    },
    blogDetails: {
      back: 'Volver al blog',
      portfolio: {
        eyebrow: 'Entrada del blog',
        title: 'Cómo organizar un portfolio desde cero',
        dateLine: 'Publicado el 9 de julio de 2026',
        intro: 'Montar un portfolio no va solo de subir proyectos bonitos: va de demostrar cómo piensas y cómo resuelves problemas reales. Si alguien de selección entra en tu web, en menos de un minuto debería entender qué sabes hacer, para qué tipo de retos encajas y por qué merece la pena hablar contigo.',
        sectionOneTitle: 'De escaparate a evidencia: qué debe demostrar tu portfolio',
        sectionOneText: 'En ciencia de datos y tecnología, un portfolio útil funciona como evidencia técnica. No basta con decir "sé usar Python" o "sé entrenar modelos"; lo que genera confianza es explicar el contexto del problema, el dato disponible, la metodología y el resultado. Ese hilo narrativo convierte una práctica académica en una historia profesional comprensible.',
        sectionOneTextTwo: 'Una forma práctica de estructurar cada proyecto es: problema, enfoque, resultado y aprendizaje. El problema responde al "para qué". El enfoque muestra cómo decidiste entre varias opciones. El resultado enseña impacto con una métrica concreta. Y el aprendizaje demuestra criterio, porque también cuenta lo que no funcionó y cómo lo corregiste.',
        sectionTwoTitle: 'Cómo escribir para que te lean personas técnicas y no técnicas',
        sectionTwoText: 'Un error común es escribir cada proyecto como un informe denso o, en el extremo opuesto, como una frase genérica de marketing. Lo más efectivo es un estilo divulgativo: lenguaje cercano, tecnicismos explicados y ejemplos concretos. Por ejemplo, si hablas de "validación cruzada", puedes añadir una frase breve: "es una técnica para comprobar que el modelo no solo funciona bien con los datos que ya ha visto".',
        sectionTwoTextTwo: 'También ayuda mucho priorizar la legibilidad: párrafos cortos, subtítulos claros y una conclusión por proyecto. Piensa que tu lector puede ser una persona de RRHH, un perfil de negocio o una persona técnica senior. Si todas entienden la misma historia, tu portfolio está haciendo su trabajo.',
        glossaryTitle: 'Mini glosario rápido',
        glossaryOne: 'Métrica: indicador numérico para evaluar si una solución funciona (por ejemplo, error medio, precisión o tiempo de respuesta).',
        glossaryTwo: 'Baseline: referencia inicial simple que sirve para comparar si una versión nueva realmente mejora.',
        glossaryThree: 'Generalización: capacidad de un modelo para funcionar bien con datos nuevos, no solo con los datos de entrenamiento.'
      },
      design: {
        eyebrow: 'Entrada del blog',
        title: 'Decisiones de diseño que sí importan',
        dateLine: 'Publicado el 3 de julio de 2026',
        intro: 'Cuando hablamos de diseño digital no hablamos solo de estética: hablamos de cómo una interfaz guía la atención, reduce errores y facilita decisiones. En otras palabras, el diseño también es rendimiento. Una web bonita pero confusa pierde usuarios igual que un modelo con mala precisión pierde fiabilidad.',
        sectionOneTitle: 'La jerarquía visual: cómo dirigir la mirada sin forzarla',
        sectionOneText: 'La jerarquía visual es el orden en el que el ojo interpreta la información. Se construye con tamaño, contraste, posición y espacio en blanco. Si todo tiene el mismo peso visual, nada destaca y la persona usuaria se cansa antes. Por eso un buen diseño decide qué se ve primero, qué se entiende después y qué acción se espera al final.',
        sectionOneTextTwo: 'En una página de portfolio, por ejemplo, lo primero debería ser tu propuesta de valor, lo segundo tus proyectos y lo tercero cómo contactar contigo. Si esos tres bloques compiten entre sí, se pierde claridad. Si están ordenados, aumenta la comprensión y también la confianza en tu perfil.',
        sectionTwoTitle: 'Diseño basado en evidencia: medir también importa',
        sectionTwoText: 'Aquí entra un enfoque más científico: observar comportamiento real y ajustar. Puedes medir clics en botones, tiempo de lectura o porcentaje de rebote para detectar fricción. Si una sección importante no recibe atención, quizá el problema no es el contenido, sino su presentación visual.',
        sectionTwoTextTwo: 'No hace falta complicarlo: pequeños experimentos A/B ya dan señales útiles. Un A/B test consiste en comparar dos versiones de un elemento (por ejemplo, un titular) para ver cuál funciona mejor en la práctica. Diseñar con datos no quita creatividad: la enfoca.',
        glossaryTitle: 'Mini glosario rápido',
        glossaryOne: 'Jerarquía visual: organización de elementos para indicar qué es prioritario y qué es secundario.',
        glossaryTwo: 'Contraste: diferencia perceptible entre elementos (color, tamaño o forma) que mejora lectura y foco.',
        glossaryThree: 'A/B test: experimento controlado entre dos variantes para validar cuál produce mejor resultado.'
      },
      'first-one': {
        eyebrow: 'Entrada del blog',
        title: 'Mi primera entrada al blog: Los inicios de la IA',
        dateLine: 'Publicado el 1 de julio de 2026',
        intro: 'Para empezar quiero daros la bienvenida a todos a mi blog. Pretendo que sea un espacio en el que se hable de curiosidad y novedades dentro del mundo de la IA y la ciencia de datos. Posiblemente la mayoría de las entradas estén más relacionadas con el primer tema que con el segundo pero quiero recalcar que ambos temas van de la mano ya que sin datos no habría IA.En esta primera entrada quiero hablar sobre los inicios de la inteligencia artificial y cómo ha evolucionado a lo largo de los años. La IA ha pasado de ser un concepto teórico a una herramienta práctica que impacta en nuestra vida diaria. A todos nos suena ChatGPT que fue el primer modelo de lenguaje que se hizo popular y que nos permitió interactuar con la IA de una manera más natural. Pero la historia de la IA es mucho más amplia y compleja, y en esta entrada quiero daros un pequeño recorrido por sus inicios y su evolución hasta llegar a lo que conocemos hoy en día.',
        sectionOneTitle: 'Para empezar: ¿cuando surgió la IA?',
        sectionOneText: 'La primera vevz que se acuñó el término "inteligencia artificial" fue en 1956 durante la Conferencia de Dartmouth en donde se definió como la capacidad de una máquina para realizar tareas que normalmente requieren inteligencia humana. De ahí nació el test de Turing, que es una prueba para determinar si una máquina puede exhibir un comportamiento inteligente indistinguible del de un ser humano. Esta prueba consiste en la realización de una serie de preguntas las cuales pueden ser respondidas por un humano o por una máquina, si el evaluador que realiza las preguntas es incapaz de distinguir la máquina del humano, entonces se considera que la máquina ha pasado el test y por lo tanto es inteligente. Ya desde entonces la humanidad se puso a divagar de todo lo que podría hacer la IA y de cómo podría cambiar el mundo. El problema fue que durante muchos años la IA no fue capaz de cumplir con las expectativas y se produjo lo que se conoce como "el invierno de la IA", un periodo en el que la investigación en este campo se estancó debido a la falta de resultados y avances significativos. Sin embargo, a partir de los años 80 y 90, la IA comenzó a resurgir gracias a los avances en algoritmos, hardware y disponibilidad de datos, lo que permitió el desarrollo de sistemas más sofisticados y eficientes. A partir de esos nuevos avances, la IA comenzó a aplicarse en una amplia variedad de campos, desde la medicina y la industria hasta el entretenimiento y la vida cotidiana.',
        sectionOneTextTwo: 'Es verdad que la mayoría de las personas solo se acuerdan de ChatGPT, algo que es normal porque es una de las herramientas que mas nos ha cambiado la vida, el hecho de que una máquina nos responda en lenguaje natural, redactando frases perfectas y adaptandose a todas nuestras peticiones, es algo fascinante y que por ende produjo un shock para toda la sociedad. Pero realmente la IA ya se estaba utilizando antes aunque no de una manera tan directa y visible para la mayoría de nosotros. Por ejemplo, los sistemas de recomendación que nos sugieren películas o productos basados en nuestro historial de navegación y compras, los asistentes virtuales que nos ayudan a realizar tareas diarias, o incluso los algoritmos que detectan fraudes en transacciones financieras, son todos ejemplos de cómo la IA ya estaba presente en nuestras vidas antes de la popularización de ChatGPT.',
        sectionTwoTitle: '¿Qué tipos de IA existen y cómo se clasifican?',
        sectionTwoText: 'Existen diferentes tipos de IA que se clasifican según su capacidad y funcionalidad. Una clasificación común es la siguiente: IA débil o estrecha, IA general y IA superinteligente. La IA débil o estrecha está diseñada para realizar tareas específicas y limitadas, como reconocimiento de voz, traducción de idiomas o recomendaciones de productos. La IA general, por otro lado, es un concepto más avanzado que se refiere a sistemas capaces de realizar cualquier tarea cognitiva que un ser humano pueda hacer, aunque todavía no se ha logrado desarrollar una IA general completa. Finalmente, la IA superinteligente es una forma hipotética de inteligencia artificial que supera la inteligencia humana en todos los aspectos, incluyendo creatividad, resolución de problemas y toma de decisiones.',
        sectionTwoTextTwo: 'En cuanto a la clasificación por funcionalidad, podemos encontrar sistemas de IA basados en reglas, sistemas de aprendizaje supervisado, sistemas de aprendizaje no supervisado y sistemas de aprendizaje por refuerzo. Los sistemas basados en reglas siguen un conjunto de instrucciones predefinidas para tomar decisiones, mientras que los sistemas de aprendizaje supervisado utilizan datos etiquetados para aprender patrones y hacer predicciones. Los sistemas de aprendizaje no supervisado buscan patrones en datos no etiquetados, y los sistemas de aprendizaje por refuerzo aprenden a través de la interacción con el entorno y la retroalimentación recibida.',
        sectionThreeTitle: '¿Entonces que es la IA en el fondo?',
        sectionThreeText: 'En resumen, la IA no es más que un conjunto de reglas lógicas y matemáticas avanzadas, la IA son números, al igual que el resto de la informática, numeros que sí los simplificamos podemos decir que son pulsos de corriente, 1 y 0, es increíble pensar que la máquina que nos responde tan correctamente con lenguaje que entendemos por detrás son solo números, probabilidades, operaciones matemáticas y operaciones lógicas. Es a mí parecer, el máximo culmen de la mezcla de todas estas disciplinas. No con ello pretendo quitarle importancia ni mucho menos pero si que me gustaría aclarar que la IA no es magia, no es un ente que piensa por sí mismo, no tiene conciencia ni emociones, simplemente es un conjunto de algoritmos y modelos matemáticos que procesan datos y generan resultados basados en patrones aprendidos. La IA es una herramienta poderosa que puede mejorar nuestra vida y facilitar muchas tareas, pero siempre debemos recordar que detrás de ella hay personas que la diseñan, la entrenan y la supervisan para asegurar que funcione de manera ética y responsable.'
      }
    }
  },
  en: {
    brand: 'Isabel Escribano',
    language: { label: 'Language' },
    nav: { home: 'Home', about: 'About me', projects: 'Projects', blog: 'Blog' },
    footer: { copy: '© 2026 — Isabel Escribano Website' },
    home: {
      eyebrow: 'Design, content and strategy',
      title: 'I build a website with its own identity.',
      subtitle: 'A four-page site with full Spanish and English translation, designed to present who you are, your projects and your future posts.',
      primaryCta: 'View projects',
      secondaryCta: 'Go to blog',
      intro: 'Hi! 👋 I am Isabel, welcome to my website, where you can discover a little more about me and what I am doing out in the world 😊',
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
      storyText: 'Hi 👋 I am Isabel Escribano, I am 21 years old and I recently completed my training in Data Science and Artificial Intelligence at the Technical University of Madrid. I enjoy team sports, reading, and watching series and films. I am passionate about helping people make informed, data-driven decisions and about building AI services that can improve people\'s lives. For example, during my internship I contributed to a European project for wildfire detection using satellite imagery.',
      skillsTitle: 'Skills and focus',
      skillOne: 'I primarily use Python and R to analyse data and build machine learning models.',
      skillTwo: 'I have strong proficiency with office tools such as Excel, PowerPoint and Word.',
      skillThree: 'I have a high level of English and intermediate French, in addition to my native Spanish.',
      skillFour: 'I have experience training a wide range of machine learning models, from regression models to deep neural networks.'
    },
    projects: {
      eyebrow: 'Work and projects',
      title: 'Projects',
      subtitle: 'Show your most important work on a single page.',
      listTitle: 'Featured projects',
      tagOne: 'Data science project',
      tagTwo: 'Web',
      tagThree: 'Application',
      projectOneTitle: 'Project 01: Improving post-processing of a burned-area time series',
      projectOneText: 'This project was developed during my internship at the Technical University of Madrid and culminated in my final degree project. It focused on improving the post-processing of a burned-area time series. I incorporated ecological information — for example, the typical recovery times of certain vegetation types — to assess whether predictions were plausible and to reduce prediction error.',
      projectTwoTitle: 'Project 02: Personal website',
      projectTwoText: 'This website is itself a project I developed for a university course. It was built from scratch without templates to showcase my skills and projects clearly. Implemented with HTML, CSS and vanilla JavaScript, it is fully responsive and adapts to different screen sizes.',
      projectThreeTitle: 'Project 03: CarPlay using a Raspberry Pi',
      projectThreeText: 'This is a personal project I plan to develop: creating an onboard computer from a Raspberry Pi. The idea is to reuse a touchscreen from an old computer to interact with the system and provide a simple infotainment interface. I have been researching software and hardware options to make a robust prototype.',
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
        eyebrow: 'Project 01',
        title: 'Improving post-processing of a burned-area time series',
        subtitle: 'This project summarizes my internship at the Biomedical Technology Center of the Technical University of Madrid and my final degree project, where I improved a burned-area time series in the post-processing phase.',
        sectionOneTitle: 'What problem did I solve?',
        sectionOneText: 'This project focused on improving the error in a burned-area time series, specifically an overestimation error, as the burned-area series was the output of an autoencoder neural network.',
        sectionTwoTitle: 'How I did it',
        sectionTwoTextOne: 'I focused on giving the time series temporal coherence, as the neural network itself tried to minimize error without considering the regeneration factor of burned vegetation. To carry out this project, I conducted prior research on the Fire Return Interval (FRI) of different vegetation types and, using annual masks to divide vegetation types, I determined the value of temporal windows for each vegetation type to assign a confidence percentage to each prediction in the time series.',
        sectionTwoTextTwo: 'This project utilized Python for data processing and analysis, TensorFlow for implementing the autoencoder neural network, and QGIS for spatial analysis.',
        sectionThreeTitle: 'Results',
        sectionThreeText: 'The final result was a burned-area time series with significantly reduced overestimation error and much greater temporal coherence, allowing researchers and wildfire managers to make more informed, data-driven decisions.',
        sectionFourTitle: 'Key points',
        sectionFourText: 'The algorithm design prioritizes optimization. It avoids unnecessary calculations and maximizes memory usage. Additionally, the code is prepared for parallel processing, which reduces execution time on multi-core systems.',
        pointOne: 'The use of variable temporal windows for each vegetation type is a novel approach in this area.',
        pointTwo: 'The code is optimized to minimize execution time and maximize memory usage.',
        pointThree: 'It takes into account that Python is an interpreted language and not the fastest, so Numba was used to compile critical functions and improve performance.'
      },
      branding: {
        eyebrow: 'Project 02',
        title: 'Website',
        subtitle: 'This website is itself a project I developed for a university course. It was built from scratch, without using templates, with the goal of showcasing my skills and projects in a clear and concise manner.',
        sectionOneTitle: 'How it\'s built',
        sectionOneText: 'This website reflects my progress in the world of web development, data science, and artificial intelligence. The languages used in its creation were HTML, CSS, and JavaScript. I am not very familiar with these languages, so I also sought the help of an AI model to assist in its development. Nevertheless, through this project I have learned a lot about web design.',
        sectionTwoTitle: 'Highlights',
        sectionTwoText: 'This practice has not only been a task for that subject but also a project that can continue to be useful in the future, and I suppose that is one of the reasons why I have tried to make it as visually appealing as possible and in a way that represents me as a person and as a programmer.',
        pointOne: 'Consistent visual identity and personal representation',
        pointTwo: 'Clear and direct message',
        pointThree: 'Designed to remain useful in the future'
      },
      app: {
        eyebrow: 'Project 03',
        title: 'CarPlay using a Raspberry Pi',
        subtitle: 'An infotainment device for the car using a Raspberry Pi and a touchscreen repurposed from an old computer.',
        sectionOneTitle: 'Theory',
        sectionOneText: 'At this stage, I can only discuss the theoretical aspects and my intentions for the project, as it is not yet in the "production" phase. The goal is to create an easy-to-use and practical interface with all the features of a high-end car infotainment system. For now, I have considered basic functionalities such as music playback, GPS navigation, and mobile connectivity for calls and messages, along with more advanced features like voice command integration with AI to minimize the need for touchscreen interaction.',
        sectionTwoTitle: 'Highlights',
        sectionTwoText: 'As it is still in the development phase, I cannot discuss results yet, but I can outline my objectives for this project.',
        pointOne: 'The interface should be as simple and user-friendly as possible',
        pointTwo: 'I will need to learn some electronics knowledge to connect the old computer\'s touchscreen to the Raspberry Pi ports and ensure proper functionality, as well as a microphone and the ability for the Raspberry Pi to connect with the car to read data and display information on the screen.',
        pointThree: 'In addition to electronics, I will also need to learn how to program the user interface and connect the Raspberry Pi with a mobile device for calls and messages, as well as integrate it with AI for voice commands.'
      }
    },
    blogDetails: {
      back: 'Back to blog',
      portfolio: {
        eyebrow: 'Blog post',
        title: 'How to organize a portfolio from scratch',
        dateLine: 'Published on July 9, 2026',
        intro: 'Building a portfolio is not only about displaying pretty projects. It is about showing how you think and how you solve real problems. If a recruiter lands on your site, they should understand in under a minute what you can do, what kind of challenges fit your profile, and why they should contact you.',
        sectionOneTitle: 'From showcase to evidence: what your portfolio should prove',
        sectionOneText: 'In data science and tech, a useful portfolio works as technical evidence. Saying "I know Python" is not enough. Trust comes from explaining problem context, available data, chosen method, and measurable outcome. That narrative turns an academic exercise into a professional case study.',
        sectionOneTextTwo: 'A practical structure for each project is: problem, approach, result, and learning. The problem explains the purpose. The approach shows decision-making. The result demonstrates impact with a concrete metric. Learning proves judgement, because what did not work and how you fixed it also matters.',
        sectionTwoTitle: 'How to write for technical and non-technical readers',
        sectionTwoText: 'A common mistake is writing like a dense report, or the opposite: using vague marketing language. A better middle ground is a science-communication style: close tone, explained terms, and concrete examples. If you mention "cross-validation", add one sentence such as: "a technique to verify that a model also performs well on unseen data".',
        sectionTwoTextTwo: 'Readability also matters: short paragraphs, clear headings, and one conclusion per project. Your reader may be HR, product, or senior engineering. If all of them can follow the same story, your portfolio is doing its job.',
        glossaryTitle: 'Quick glossary',
        glossaryOne: 'Metric: numerical indicator used to evaluate performance (for example, error, precision, or response time).',
        glossaryTwo: 'Baseline: simple reference solution used to verify whether a new approach is actually better.',
        glossaryThree: 'Generalization: a model capability to perform well on new data, not only on training data.'
      },
      design: {
        eyebrow: 'Blog post',
        title: 'Design decisions that actually matter',
        dateLine: 'Published on July 3, 2026',
        intro: 'Digital design is not only about aesthetics. It shapes attention, reduces mistakes, and supports decision-making. In other words, design is also performance. A beautiful but confusing interface can fail just as much as a model with poor accuracy.',
        sectionOneTitle: 'Visual hierarchy: guiding attention without forcing it',
        sectionOneText: 'Visual hierarchy is the order in which the eye reads information. It is built with size, contrast, placement, and whitespace. If everything has the same visual weight, nothing stands out and users get tired faster. Good design decides what people see first, understand second, and act on third.',
        sectionOneTextTwo: 'In a portfolio page, your value proposition should come first, projects second, and contact options third. If these blocks compete visually, clarity drops. If they are ordered well, comprehension and trust increase.',
        sectionTwoTitle: 'Evidence-based design: measuring matters too',
        sectionTwoText: 'This is where a scientific mindset helps: observe real behavior and iterate. You can track button clicks, reading depth, or bounce rate to detect friction. If an important section gets ignored, the issue may be visual presentation rather than content quality.',
        sectionTwoTextTwo: 'It does not need to be complex. Small A/B experiments already provide useful signals. An A/B test compares two versions of the same element (for example, a headline) to see which performs better in practice. Data-informed design does not reduce creativity; it focuses it.',
        glossaryTitle: 'Quick glossary',
        glossaryOne: 'Visual hierarchy: arrangement of elements to communicate priority.',
        glossaryTwo: 'Contrast: perceptual difference (color, size, or shape) that improves readability and focus.',
        glossaryThree: 'A/B test: controlled experiment between two variants to validate which one performs better.'
      },
      'first-one': {
        eyebrow: 'Blog post',
        title: 'My first blog post: The beginnings of AI',
        dateLine: 'Published on July 1, 2026',
        intro: 'First of all, welcome to my blog. I hope this becomes a space for curiosity and updates from the world of AI and data science. Most entries will probably lean more toward AI than raw data, but it is important to stress that both go hand in hand: without data there is no AI. In this first post I want to share a brief look at the origins of artificial intelligence and how it has evolved over the years. AI has moved from a theoretical idea to a practical tool that impacts our daily lives. Many of us know ChatGPT — the language model that popularized natural interactions with AI — but the history of AI is much wider and more complex. Here I offer a short tour from its early days to the systems we see today.',
        sectionOneTitle: 'To begin: when did AI emerge?',
        sectionOneText: 'The term "artificial intelligence" was first coined in 1956 at the Dartmouth Conference, and it was framed as the ability of a machine to perform tasks that normally require human intelligence. Around that time the idea of the Turing test also became central: a way to assess whether a machine’s behaviour can be distinguished from a human’s. Early optimism about what machines could do was high, but for many years the field failed to meet expectations, leading to periods known as "AI winters", when research slowed due to limited progress and scarce results. From the 1980s and 1990s onward, AI experienced a revival thanks to advances in algorithms, better hardware and increased data availability, enabling more sophisticated and practical systems that found applications in medicine, industry, entertainment and everyday life.',
        sectionOneTextTwo: 'It is true that many people remember ChatGPT first — understandably, since it was a striking step for public interaction with language models. However, AI was already present in less visible but pervasive ways: recommendation systems that suggest movies or products, virtual assistants that automate routine tasks, or fraud-detection algorithms in finance. These practical uses predate ChatGPT and show how AI has been quietly embedded in services we use every day.',
        sectionTwoTitle: 'What types of AI exist and how are they classified?',
        sectionTwoText: 'A common classification separates AI by capability: narrow (or weak) AI, general AI, and superintelligent AI. Narrow AI is built to perform specific tasks — for example, speech recognition, translation or recommendation. General AI refers to systems that could perform any cognitive task a human can, a goal that has not yet been achieved. Superintelligent AI is a hypothetical future form that would surpass human intelligence across the board, including creativity and problem solving.',
        sectionTwoTextTwo: 'We can also classify systems by how they work: rule-based systems, supervised learning, unsupervised learning and reinforcement learning. Rule-based systems follow predefined instructions, supervised learning learns patterns from labelled data, unsupervised learning finds structure in unlabelled data, and reinforcement learning learns through interaction and feedback from an environment.',
        sectionThreeTitle: 'So what is AI at its core?',
        sectionThreeText: 'At its core, AI is a collection of mathematical and logical techniques — numbers, probabilities and operations that we simplify into models and algorithms. Behind the impressive responses and fluent language there are statistical models and computations, not a thinking, feeling entity. AI is a powerful toolkit that can improve lives and automate tasks, but it is designed, trained and supervised by people. Responsible development and ethical oversight are essential to ensure these systems work as intended and serve society positively.'
      }
    }
  }
};

const blogPosts = [
  {
    path: 'blog-portfolio.html',
    date: '2026-07-09',
    themes: ['portfolio', 'strategy'],
    title: { es: 'Cómo organizar un portfolio desde cero', en: 'How to organize a portfolio from scratch' },
    excerpt: { es: 'Una guía corta para pensar estructura, contenido y narrativa antes de publicar tu trabajo.', en: 'A short guide to structure, content and narrative before publishing your work.' }
  },
  {
    path: 'blog-design.html',
    date: '2026-07-03',
    themes: ['design', 'content'],
    title: { es: 'Decisiones de diseño que sí importan', en: 'Design decisions that actually matter' },
    excerpt: { es: 'Color, tipografía y espaciado pueden cambiar por completo la percepción de una página.', en: 'Color, typography and spacing can completely change how a page feels.' }
  },
  {
    path: 'blog-first-one/',
    date: '2026-07-01',
    themes: ['code', 'research'],
    title: { es: 'Mi primera entrada al blog: Los inicios de la IA', en: 'My first blog post: The beginnings of AI' },
    excerpt: { es: 'Bienvenid@s a mi blog, en esta primera entrada compartiré un poco sobre la historia de la inteligencia artificial, que es lo que las personas piensan que es, frente a la realidad de esta caja negra.', en: 'Welcome to my blog, in this first post I will share a bit about the history of artificial intelligence, what people think it is, versus the reality of this black box.'}
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
    article.className = 'post-entry';

    const dateText = new Date(`${post.date}T00:00:00`).toLocaleDateString(lang === 'en' ? 'en-US' : 'es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    article.innerHTML = `
      <div class="post-meta">
        <span class="post-date">${dateText}</span>
      </div>
      <h3 class="post-title">${post.title[lang]}</h3>
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
