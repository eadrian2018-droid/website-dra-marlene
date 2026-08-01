export interface ChatOption {
  id: string;

  label: {
    en: string;
    es: string;
  };
}


export interface ChatNode {

  id: string;

  title?: string;

  message: {
    en: string;
    es: string;
  };

  options?: ChatOption[];

}



export const chatData: Record<string, ChatNode> = {


  welcome: {

    id: "welcome",

    message: {

      en:
`👋 Welcome to Dra. Marlene Group!

I'm your AI Dental Assistant.

I'm here to answer your questions and help you plan your dental visit.

When you're ready, let's talk about your smile.`,

      es:
`👋 ¡Bienvenido a Dra. Marlene Group!

Soy tu Asistente Dental con Inteligencia Artificial.

Estoy aquí para responder tus preguntas y ayudarte a planear tu visita dental.

Cuando estés listo, hablemos sobre tu sonrisa.`,

    },


    options: [

      {

        id: "startConversation",

        label: {

          en: "💬 Start Conversation",

          es: "💬 Iniciar Conversación",

        },

      },

    ],

  },




  startConversation: {


    id: "startConversation",


    message: {

      en:
`Welcome! I'm happy to help you.

How can I assist you today?`,

      es:
`¡Bienvenido! Estoy aquí para ayudarte.

¿Cómo puedo ayudarte hoy?`,

    },


    options: [

      {

        id: "treatments",

        label: {

          en: "😁 Treatments & Dental Care",

          es: "😁 Tratamientos y Atención Dental",

        },

      },


      {

        id: "travelPlanning",

        label: {

          en: "🚗 Travel Planning",

          es: "🚗 Planeación de Viaje",

        },

      },


      {

        id: "freeSmileConsultation",

        label: {

          en: "💬 Free Smile Consultation",

          es: "💬 Consulta Gratuita de Sonrisa",

        },

      },


      {

        id: "generalQuestions",

        label: {

          en: "❓ General Questions",

          es: "❓ Preguntas Generales",

        },

      },

    ],

  },





  mainMenu: {


    id: "mainMenu",


    message: {

      en:
`How can I help you today?`,

      es:
`¿Cómo puedo ayudarte hoy?`,

    },


    options: [

      {

        id: "treatments",

        label: {

          en: "😁 Treatments & Dental Care",

          es: "😁 Tratamientos y Atención Dental",

        },

      },


      {

        id: "travelPlanning",

        label: {

          en: "🚗 Travel Planning",

          es: "🚗 Planeación de Viaje",

        },

      },


      {

        id: "freeSmileConsultation",

        label: {

          en: "💬 Free Smile Consultation",

          es: "💬 Consulta Gratuita de Sonrisa",

        },

      },


      {

        id: "generalQuestions",

        label: {

          en: "❓ General Questions",

          es: "❓ Preguntas Generales",

        },

      },

    ],

  },

    treatments: {

    id: "treatments",

    message: {

      en:
`😁 TREATMENTS & DENTAL CARE

We provide personalized dental care using modern technology and high-quality materials.

I can help you learn more about our treatments.

Which option would you like to explore?`,

      es:
`😁 TRATAMIENTOS Y ATENCIÓN DENTAL

Ofrecemos atención dental personalizada utilizando tecnología moderna y materiales de alta calidad.

Puedo ayudarte a conocer más sobre nuestros tratamientos.

¿Qué opción te gustaría explorar?`,

    },


    options: [

      {

        id: "implantInfo",

        label: {

          en: "🦷 Dental Implants",

          es: "🦷 Implantes Dentales",

        },

      },


      {

        id: "allOn4Info",

        label: {

          en: "⭐ Full Arch Implants",

          es: "⭐ Implantes de Arcada Completa",

        },

      },


      {

        id: "veneerInfo",

        label: {

          en: "✨ Smile Design & Veneers",

          es: "✨ Diseño de Sonrisa y Carillas",

        },

      },


      {

        id: "crownInfo",

        label: {

          en: "👑 Crowns & Bridges",

          es: "👑 Coronas y Puentes",

        },

      },


      {

        id: "rootCanalInfo",

        label: {

          en: "🦷 Root Canal Treatment",

          es: "🦷 Tratamiento de Endodoncia",

        },

      },


      {

        id: "whiteningInfo",

        label: {

          en: "✨ Teeth Whitening",

          es: "✨ Blanqueamiento Dental",

        },

      },


      {

        id: "generalDentistryInfo",

        label: {

          en: "🪥 General Dentistry",

          es: "🪥 Odontología General",

        },

      },


      {

        id: "freeSmileConsultation",

        label: {

          en: "💬 Talk About My Smile",

          es: "💬 Hablar Sobre Mi Sonrisa",

        },

      },

    ],

  },

    implantInfo: {

    id: "implantInfo",

    message: {

      en:
`🦷 DENTAL IMPLANTS

Dental implants are a long-term solution to replace missing teeth.

They look, feel, and function like natural teeth.

Our implant treatment includes:

• Digital evaluation
• Personalized treatment planning
• High-quality implant systems
• Natural-looking crowns

Would you like more information or a free consultation?`,

      es:
`🦷 IMPLANTES DENTALES

Los implantes dentales son una solución a largo plazo para reemplazar dientes perdidos.

Se ven, se sienten y funcionan como dientes naturales.

Nuestro tratamiento de implantes incluye:

• Evaluación digital
• Plan de tratamiento personalizado
• Sistemas de implantes de alta calidad
• Coronas con apariencia natural

¿Te gustaría recibir más información o una consulta gratuita?`,

    },


    options: [

      {

        id: "freeSmileConsultation",

        label: {

          en: "💬 Free Smile Consultation",

          es: "💬 Consulta Gratuita de Sonrisa",

        },

      },

      {

        id: "mainMenu",

        label: {

          en: "⬅ Back to Menu",

          es: "⬅ Regresar al Menú",

        },

      },

    ],

  },





  allOn4Info: {

    id: "allOn4Info",

    message: {

      en:
`⭐ FULL ARCH IMPLANTS

Full arch implant treatment can restore an entire upper or lower arch with a fixed solution.

Benefits include:

• Improved chewing ability
• Better confidence
• Natural appearance
• Fixed teeth instead of removable dentures

Each case requires a personalized evaluation.`,

      es:
`⭐ IMPLANTES DE ARCADA COMPLETA

El tratamiento de implantes de arcada completa puede restaurar una arcada superior o inferior completa con una solución fija.

Beneficios:

• Mejor capacidad para masticar
• Mayor confianza
• Apariencia natural
• Dientes fijos en lugar de dentaduras removibles

Cada caso requiere una evaluación personalizada.`,

    },


    options: [

      {

        id: "freeSmileConsultation",

        label: {

          en: "💬 Request Free Consultation",

          es: "💬 Solicitar Consulta Gratuita",

        },

      },

      {

        id: "mainMenu",

        label: {

          en: "⬅ Back to Menu",

          es: "⬅ Regresar al Menú",

        },

      },

    ],

  },





  veneerInfo: {

    id: "veneerInfo",

    message: {

      en:
`✨ SMILE DESIGN & VENEERS

Veneers can improve the appearance of your smile by correcting:

• Tooth shape
• Color
• Minor imperfections
• Smile harmony

Every smile design is customized for each patient.`,

      es:
`✨ DISEÑO DE SONRISA Y CARILLAS

Las carillas pueden mejorar la apariencia de tu sonrisa corrigiendo:

• Forma dental
• Color
• Pequeñas imperfecciones
• Armonía de la sonrisa

Cada diseño de sonrisa es personalizado para cada paciente.`,

    },


    options: [

      {

        id: "freeSmileConsultation",

        label: {

          en: "💬 Talk About My Smile",

          es: "💬 Hablar Sobre Mi Sonrisa",

        },

      },

      {

        id: "mainMenu",

        label: {

          en: "⬅ Back to Menu",

          es: "⬅ Regresar al Menú",

        },

      },

    ],

  },





  crownInfo: {

    id: "crownInfo",

    message: {

      en:
`👑 CROWNS & BRIDGES

Crowns and bridges help restore damaged or missing teeth.

They can improve:

• Function
• Strength
• Appearance

Treatment recommendations depend on each patient's needs.`,

      es:
`👑 CORONAS Y PUENTES

Las coronas y puentes ayudan a restaurar dientes dañados o ausentes.

Pueden mejorar:

• Función
• Resistencia
• Apariencia

La recomendación del tratamiento depende de las necesidades de cada paciente.`,

    },


    options: [

      {

        id: "freeSmileConsultation",

        label: {

          en: "💬 Free Smile Consultation",

          es: "💬 Consulta Gratuita de Sonrisa",

        },

      },

      {

        id: "mainMenu",

        label: {

          en: "⬅ Back to Menu",

          es: "⬅ Regresar al Menú",

        },

      },

    ],

  },

    rootCanalInfo: {

    id: "rootCanalInfo",

    message: {

      en:
`🦷 ROOT CANAL TREATMENT

Root canal treatment helps save a tooth that has an infected or damaged nerve.

The procedure focuses on:

• Removing infection
• Relieving pain
• Preserving your natural tooth

Our team uses modern techniques for comfortable treatment.`,

      es:
`🦷 TRATAMIENTO DE ENDODONCIA

La endodoncia ayuda a salvar un diente con un nervio infectado o dañado.

El procedimiento se enfoca en:

• Eliminar la infección
• Aliviar el dolor
• Conservar tu diente natural

Nuestro equipo utiliza técnicas modernas para un tratamiento cómodo.`,

    },


    options: [

      {

        id: "freeSmileConsultation",

        label: {

          en: "💬 Free Smile Consultation",

          es: "💬 Consulta Gratuita de Sonrisa",

        },

      },

      {

        id: "mainMenu",

        label: {

          en: "⬅ Back to Menu",

          es: "⬅ Regresar al Menú",

        },

      },

    ],

  },





  whiteningInfo: {

    id: "whiteningInfo",

    message: {

      en:
`✨ TEETH WHITENING

Professional teeth whitening can brighten your smile safely and effectively.

Benefits:

• Brighter smile
• Professional results
• Personalized recommendations

Ask us about the best option for your smile.`,

      es:
`✨ BLANQUEAMIENTO DENTAL

El blanqueamiento dental profesional puede mejorar el brillo de tu sonrisa de manera segura y efectiva.

Beneficios:

• Sonrisa más blanca
• Resultados profesionales
• Recomendaciones personalizadas

Pregúntanos cuál es la mejor opción para tu sonrisa.`,

    },


    options: [

      {

        id: "freeSmileConsultation",

        label: {

          en: "💬 Talk About My Smile",

          es: "💬 Hablar Sobre Mi Sonrisa",

        },

      },

      {

        id: "mainMenu",

        label: {

          en: "⬅ Back to Menu",

          es: "⬅ Regresar al Menú",

        },

      },

    ],

  },





  generalDentistryInfo: {

    id: "generalDentistryInfo",

    message: {

      en:
`🪥 GENERAL DENTISTRY

We provide comprehensive dental care including:

• Dental cleanings
• Exams
• Fillings
• Preventive care
• Restorative treatments

Our goal is to keep your smile healthy for the long term.`,

      es:
`🪥 ODONTOLOGÍA GENERAL

Ofrecemos atención dental integral incluyendo:

• Limpiezas dentales
• Revisiones
• Restauraciones
• Atención preventiva
• Tratamientos restaurativos

Nuestro objetivo es mantener tu sonrisa saludable a largo plazo.`,

    },


    options: [

      {

        id: "freeSmileConsultation",

        label: {

          en: "💬 Free Smile Consultation",

          es: "💬 Consulta Gratuita de Sonrisa",

        },

      },

      {

        id: "mainMenu",

        label: {

          en: "⬅ Back to Menu",

          es: "⬅ Regresar al Menú",

        },

      },

    ],

  },





  travelPlanning: {

    id: "travelPlanning",

    message: {

      en:
`🚗 TRAVEL PLANNING

Planning dental care in Mexico?

We help international patients with:

• Treatment planning
• Appointment scheduling
• Hotel recommendations
• Border crossing guidance
• English and Spanish assistance

We make your dental journey simple and comfortable.`,

      es:
`🚗 PLANEACIÓN DE VIAJE

¿Estás planeando recibir atención dental en México?

Ayudamos a pacientes internacionales con:

• Planeación de tratamientos
• Programación de citas
• Recomendaciones de hoteles
• Orientación para cruzar la frontera
• Atención en inglés y español

Hacemos tu experiencia dental simple y cómoda.`,

    },


    options: [

      {

        id: "freeSmileConsultation",

        label: {

          en: "💬 Start Free Consultation",

          es: "💬 Iniciar Consulta Gratuita",

        },

      },

      {

        id: "mainMenu",

        label: {

          en: "⬅ Back to Menu",

          es: "⬅ Regresar al Menú",

        },

      },

    ],

  },

    freeSmileConsultation: {

    id: "freeSmileConsultation",

    message: {

      en:
`💬 FREE SMILE CONSULTATION

Let's get some information so our team can better assist you.

What is your name?`,

      es:
`💬 CONSULTA GRATUITA DE SONRISA

Vamos a recopilar algunos datos para que nuestro equipo pueda ayudarte mejor.

¿Cuál es tu nombre?`,

    },

  },




  consultationName: {

    id: "consultationName",

    message: {

      en:
`Nice to meet you! 😊

What is the best phone number to contact you?`,

      es:
`¡Mucho gusto! 😊

¿Cuál es el mejor número de teléfono para contactarte?`,

    },

  },




  consultationPhone: {

    id: "consultationPhone",

    message: {

      en:
`Thank you!

What is your email address?`,

      es:
`¡Gracias!

¿Cuál es tu correo electrónico?`,

    },

  },




  consultationEmail: {

    id: "consultationEmail",

    message: {

      en:
`Great!

How would you prefer to be contacted?`,

      es:
`¡Excelente!

¿Cómo prefieres que te contactemos?`,

    },

  },




  consultationContactMethod: {

    id: "consultationContactMethod",

    message: {

      en:
`Please select your preferred contact method:`,

      es:
`Selecciona tu método de contacto preferido:`,

    },


    options: [

      {

        id: "whatsappContact",

        label: {

          en: "📱 WhatsApp",

          es: "📱 WhatsApp",

        },

      },


      {

        id: "phoneContact",

        label: {

          en: "☎️ Phone Call",

          es: "☎️ Llamada Telefónica",

        },

      },


      {

        id: "emailContact",

        label: {

          en: "✉️ Email",

          es: "✉️ Correo Electrónico",

        },

      },


      {

        id: "facebookContact",

        label: {

          en: "📘 Facebook Messenger",

          es: "📘 Facebook Messenger",

        },

      },


    ],

  },




  consultationFacebook: {

    id: "consultationFacebook",

    message: {

      en:
`Please enter your Facebook profile or link.`,

      es:
`Por favor escribe tu perfil o enlace de Facebook.`,

    },

  },




  consultationTreatment: {

    id: "consultationTreatment",

    message: {

      en:
`Thank you! 😊

What treatment are you interested in?`,

      es:
`¡Gracias! 😊

¿Qué tratamiento te interesa?`,

    },


    options: [

      {

        id: "implantInterest",

        label: {

          en: "🦷 Dental Implants",

          es: "🦷 Implantes Dentales",

        },

      },


      {

        id: "cosmeticInterest",

        label: {

          en: "✨ Cosmetic Dentistry",

          es: "✨ Odontología Estética",

        },

      },


      {

        id: "veneerInterest",

        label: {

          en: "😁 Veneers / Smile Design",

          es: "😁 Carillas / Diseño de Sonrisa",

        },

      },


      {

        id: "crownInterest",

        label: {

          en: "👑 Crowns",

          es: "👑 Coronas",

        },

      },


      {

        id: "generalInterest",

        label: {

          en: "🪥 General Dentistry",

          es: "🪥 Odontología General",

        },

      },


      {

        id: "notSureInterest",

        label: {

          en: "❓ Not Sure Yet",

          es: "❓ Aún No Estoy Seguro",

        },

      },


    ],

  },




  consultationMessage: {

    id: "consultationMessage",

    message: {

      en:
`Almost done!

Is there anything else you would like us to know about your dental needs?`,

      es:
`¡Casi terminamos!

¿Hay algo más que te gustaría contarnos sobre tus necesidades dentales?`,

    },

  },




  consultationComplete: {

    id: "consultationComplete",

    message: {

      en:
`Thank you! 😊

Your consultation request has been received.

Our team will contact you shortly.`,

      es:
`¡Gracias! 😊

Hemos recibido tu solicitud de consulta.

Nuestro equipo se pondrá en contacto contigo pronto.`,

    },

  },

    generalQuestions: {

    id: "generalQuestions",

    message: {

      en:
`❓ GENERAL QUESTIONS

I can help you with information about:

• Dental treatments
• Prices and estimates
• Travel planning
• Appointments
• International patient assistance

What would you like to know?`,

      es:
`❓ PREGUNTAS GENERALES

Puedo ayudarte con información sobre:

• Tratamientos dentales
• Precios y estimados
• Planeación de viaje
• Citas
• Atención para pacientes internacionales

¿Qué te gustaría saber?`,

    },


    options: [

      {

        id: "treatments",

        label: {

          en: "😁 Treatments",

          es: "😁 Tratamientos",

        },

      },


      {

        id: "travelPlanning",

        label: {

          en: "🚗 Travel Planning",

          es: "🚗 Planeación de Viaje",

        },

      },


      {

        id: "freeSmileConsultation",

        label: {

          en: "💬 Free Consultation",

          es: "💬 Consulta Gratuita",

        },

      },


    ],

  },



};