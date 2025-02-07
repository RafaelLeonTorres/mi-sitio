// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      home: {
        title: "Hello, I’m Rafael León",
        description: `I’m a Systems Engineer with 6 years of experience as a backend developer.
        I specialize in .NET C# and have worked in all stages of the software development lifecycle: requirements gathering, analysis, coding, testing, production deployment, and support.
        I’ve worked in the financial industry at CECOBAN (Authorized Certification Provider) and in the banking industry at CITIBANAMEX.
        I was part of the team that carried out the regulatory process for transitioning from CFDI version 3.3 to 4.0, as well as the implementation of the Carta Porte 2.0 add-on. I worked on various projects related to invoice generation for different banks within CECOBAN.
        Additionally, I contributed to CITI’s bank separation efforts, migrating components to new infrastructure, making necessary adjustments, and conducting deployments and testing to ensure proper functionality across different environments.`,
        leadership: "Leadership",
        teamwork: "Team Work",
        problemResolution: "Problem Resolution",
        persistence: "Persistence",
        myResume: "My Resume"
      },
      navbar: {
        brand: "Rafael León",
        skills: "Skills",
        experiences: "Experiences",
        posts: "Posts",
        contact: "Contact",
        language: "Language",
        english: "English",
        spanish: "Español"
      },
      skills: {
        title: "Skills",
        dotNet: ".NET Platform",
        dotNetDescription: "Proficient using .NET platform to build tools like APIs, service workers, WPF, etc. using C# coding language.",
        database: "Database Design and Development",
        databaseDescription: "Capable of designing databases from scratch, proficient working with SQL databases like SQL Server.",
        ciCd: "CI/CD",
        ciCdDescription: "Experience with Jenkins, TFS, GIT, BITBUCKET to deploy components to different environments.",
        cloud: "Cloud Computing",
        cloudDescription: "Some experience with some services from Azure."
      },
      experiences: {
        title: "Experience",
        solutionsTeamLeader: {
          title: "Solutions Team Leader",
          company: "NTT DATA Europe & Latam",
          period: "May 2022 - May 2024",
          description: "I worked with the client CITIBANAMEX on behalf of NTT DATA on desktop applications and APIs for the bank's applications. The tasks I performed include the following:",
          task1: "Adding functionality to the bank's applications (application and database objects).",
          task2: "Change analysis to validate impacts.",
          task3: "Bug resolution and QA team support.",
          task4: "Deployment of applications and DB components using Jenkins.",
          task5: "Collaborating with people from other countries to resolve various issues that arise during development (specialized teams have server access, and we must raise tickets to resolve these issues).",
          task6: "Other tasks related to software development."
        },
        dotNetDeveloper: {
          title: ".NET Software Developer",
          company: "Cecoban",
          period: "March 2019 - April 2022",
          description: "I worked on digital billing for banks, focusing on the analysis and design of components for different clients. I participated in the migration of CFDI from version 3.3 to 4.0 for billing, as well as in the process for the Carta Porte 2.0 complement, among other projects for generating invoices for various banks.",
          task1: "Requirements analysis.",
          task2: "Implementation and deployment of new components.",
          task3: "Adding functionality and modifications to existing components.",
          task4: "Bug resolution and QA team support for new requirements.",
          task5: "Analysis, design, and development of DB components.",
          task6: "Performance improvement of invoice processing.",
          task7: "Using more modern frameworks, SOLID principles, and design patterns for new components and improving existing ones."
        },
        juniorDeveloper: {
          title: "Junior Developer",
          company: "TOWA Software",
          period: "January 2018 - March 2019",
          description: "I attended an intensive course on JAVA and C#, where we were taught best programming practices in these languages. We learned to analyze technical requirements to simplify their implementation in code, delegating responsibilities to functions and classes, making them smaller and easier to maintain. We also covered databases in SQL Server and, finally, web services.",
          task1: "Course on best software practices in JAVA, .NET, and SQL Server.",
          task2: "Web services.",
          task3: "Various projects to improve programming skills."
        }
      },
      contact: {
        title: "Contact me"
      },
      post: {
        title: "Understanding REST APIs",
        intro: "REST APIs allow for communication between different software systems. They use HTTP requests to perform CRUD operations.",
        restTitle: "What is a REST API?",
        restDescription: "A REST API (Representational State Transfer) provides a set of rules for building and interacting with web services. REST APIs use HTTP requests to perform CRUD operations.",
        getTitle: "GET Request",
        getDescription: "The GET method is used to retrieve data from a server.",
        postTitle: "POST Request",
        postDescription: "The POST method is used to send data to a server to create or update a resource.",
        putTitle: "PUT Request",
        putDescription: "The PUT method is used to update an existing resource on a server.",
        deleteTitle: "DELETE Request",
        deleteDescription: "The DELETE method is used to delete a resource from a server."
      }
    }
  },
  es: {
    translation: {
      home: {
        title: "Hola, soy Rafael León",
        description: `Soy Ingeniero en Sistemas con 6 años de experiencia como desarrollador backend.
        Me especializo en .NET C# y he trabajado en todas las etapas del ciclo de vida del desarrollo de software: recopilación de requisitos, análisis, codificación, pruebas, despliegue en producción y soporte.
        He trabajado en la industria financiera en CECOBAN (Proveedor de Certificación Autorizado) y en la industria bancaria en CITIBANAMEX.
        Fui parte del equipo que llevó a cabo el proceso regulatorio para la transición de la versión 3.3 a la 4.0 del CFDI, así como la implementación del complemento Carta Porte 2.0. Trabajé en varios proyectos relacionados con la generación de facturas para diferentes bancos dentro de CECOBAN.
        Además, contribuí a los esfuerzos de separación del banco de CITI, migrando componentes a la nueva infraestructura, realizando los ajustes necesarios y llevando a cabo despliegues y pruebas para asegurar el funcionamiento adecuado en los diferentes entornos.`,
        leadership: "Liderazgo",
        teamwork: "Trabajo en Equipo",
        problemResolution: "Resolución de Problemas",
        persistence: "Persistencia",
        myResume: "Mi Currículum"
      },
      navbar: {
        brand: "Rafael León",
        skills: "Habilidades",
        experiences: "Experiencias",
        posts: "Publicaciones",
        contact: "Contacto",
        language: "Idioma",
        english: "Inglés",
        spanish: "Español"
      },
      skills: {
        title: "Habilidades",
        dotNet: "Plataforma .NET",
        dotNetDescription: "Competente en el uso de la plataforma .NET para construir herramientas como API, trabajadores de servicio, WPF, etc., utilizando el lenguaje de programación C#.",
        database: "Diseño y Desarrollo de Bases de Datos",
        databaseDescription: "Capaz de diseñar bases de datos desde cero, competente trabajando con bases de datos SQL como SQL Server.",
        ciCd: "CI/CD",
        ciCdDescription: "Experiencia con Jenkins, TFS, GIT, BITBUCKET para desplegar componentes en diferentes entornos.",
        cloud: "Computación en la Nube",
        cloudDescription: "Algo de experiencia con algunos servicios de Azure."
      },
      experiences: {
        title: "Experiencia",
        solutionsTeamLeader: {
          title: "Solutions Team Leader",
          company: "NTT DATA Europe & Latam",
          period: "Mayo 2022 - Mayo 2024",
          description: "Trabajé con el cliente CITIBANAMEX por parte de de NTT DATA en aplicaciones de escritorio y API para las aplicaciones del banco. Las tareas que realicé incluyen las siguientes:",
          task1: "Agregar funcionalidad a las aplicaciones del banco (aplicación y objetos de base de datos).",
          task2: "Análisis de cambios para validar impactos.",
          task3: "Resolución de errores y soporte al equipo de QA.",
          task4: "Despliegue de aplicaciones y componentes de base de datos utilizando Jenkins.",
          task5: "Colaborar con personas de otros países para resolver varios problemas que surgen durante el desarrollo (los equipos especializados tienen acceso al servidor y debemos levantar tickets para resolver estos problemas).",
          task6: "Otras tareas relacionadas con el desarrollo de software."
        },
        dotNetDeveloper: {
          title: "Desarrollador de software .NET",
          company: "Cecoban",
          period: "Marzo 2019 - Abril 2022",
          description: "Trabajé en facturación digital para bancos, enfocándome en el análisis y diseño de componentes para diferentes clientes. Participé en la migración de CFDI de la versión 3.3 a 4.0 para facturación, así como en el proceso para el complemento Carta Porte 2.0, entre otros proyectos para la generación de facturas para varios bancos.",
          task1: "Análisis de requisitos.",
          task2: "Implementación y despliegue de nuevos componentes.",
          task3: "Agregar funcionalidad y modificaciones a componentes existentes.",
          task4: "Resolución de errores y soporte al equipo de QA para nuevos requisitos.",
          task5: "Análisis, diseño y desarrollo de componentes de base de datos.",
          task6: "Mejora del rendimiento del procesamiento de facturas.",
          task7: "Uso de marcos de trabajo más modernos, principios SOLID y patrones de diseño para nuevos componentes y mejora de los existentes."
        },
        juniorDeveloper: {
          title: "Desarrollador Junior",
          company: "TOWA Software",
          period: "Enero 2018 - Marzo 2019",
          description: "Asistí a un curso intensivo sobre JAVA y C#, donde nos enseñaron las mejores prácticas de programación en estos lenguajes. Aprendimos a analizar requisitos técnicos para simplificar su implementación en el código, delegando responsabilidades a funciones y clases, haciéndolas más pequeñas y fáciles de mantener. También cubrimos bases de datos en SQL Server y, finalmente, servicios web.",
          task1: "Curso sobre mejores prácticas de software en JAVA, .NET y SQL Server.",
          task2: "Servicios web.",
          task3: "Varios proyectos para mejorar las habilidades de programación."
        }
      },
      contact: {
        title: "Contáctame"
      },
      post: {
      title: "Entendiendo las API REST",
      intro: "Las API REST permiten la comunicación entre diferentes sistemas de software. Utilizan solicitudes HTTP para realizar operaciones CRUD.",
      restTitle: "¿Qué es una API REST?",
      restDescription: "Una API REST (Transferencia de Estado Representacional) proporciona un conjunto de reglas para construir e interactuar con servicios web. Las API REST utilizan solicitudes HTTP para realizar operaciones CRUD.",
      getTitle: "Solicitud GET",
      getDescription: "El método GET se utiliza para recuperar datos de un servidor.",
      postTitle: "Solicitud POST",
      postDescription: "El método POST se utiliza para enviar datos a un servidor para crear o actualizar un recurso.",
      putTitle: "Solicitud PUT",
      putDescription: "El método PUT se utiliza para actualizar un recurso existente en un servidor.",
      deleteTitle: "Solicitud DELETE",
      deleteDescription: "El método DELETE se utiliza para eliminar un recurso de un servidor."
    }
    }
  }
};

const storedLang = localStorage.getItem('i18nextLng') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: storedLang, // idioma por defecto
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
