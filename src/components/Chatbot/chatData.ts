export interface ChatOption {
  id: string;
  label: string;
}


export interface ChatNode {
  id: string;
  title?: string;
  message: string;
  options?: ChatOption[];
}


export const chatData: Record<string, ChatNode> = {


  welcome: {

    id: "welcome",

    message:
`👋 Welcome to Dra. Marlene Group!

I'm your AI Dental Assistant.

I'm here to answer your questions and help you plan your dental visit.

When you're ready, let's talk about your smile.`,

    options: [

      {
        id: "startConversation",
        label: "💬 Start Conversation",
      },

    ],

  },


startConversation: {

  id: "startConversation",

  message:
`Welcome! I'm happy to help you.

How can I assist you today?`,

  options: [

    {
      id: "treatments",
      label: "😁 Treatments & Dental Care",
    },


    {
      id: "travelPlanning",
      label: "🚗 Travel Planning",
    },


    {
      id: "freeSmileConsultation",
      label: "💬 Free Smile Consultation",
    },


    {
      id: "generalQuestions",
      label: "❓ General Questions",
    },

  ],

},


  mainMenu: {

    id: "mainMenu",

    message:
`How can I help you today?`,

    options: [

      {
        id: "treatments",
        label: "😁 Treatments & Dental Care",
      },


      {
        id: "travelPlanning",
        label: "🚗 Travel Planning",
      },


      {
        id: "freeSmileConsultation",
        label: "💬 Free Smile Consultation",
      },


      {
        id: "generalQuestions",
        label: "❓ General Questions",
      },

    ],

  },

    treatments: {

    id: "treatments",

    message:
`😁 TREATMENTS & DENTAL CARE

We provide personalized dental care using modern technology and high-quality materials.

I can help you learn more about our treatments.

Which option would you like to explore?`,

    options: [

      {
        id: "implantInfo",
        label: "🦷 Dental Implants",
      },


      {
        id: "allOn4Info",
        label: "⭐ Full Arch Implants",
      },


      {
        id: "veneerInfo",
        label: "✨ Smile Design & Veneers",
      },


      {
        id: "crownInfo",
        label: "👑 Crowns & Bridges",
      },


      {
        id: "rootCanalInfo",
        label: "🦷 Root Canal Treatment",
      },


      {
        id: "whiteningInfo",
        label: "✨ Teeth Whitening",
      },


      {
        id: "generalDentistryInfo",
        label: "🪥 General Dentistry",
      },


      {
        id: "freeSmileConsultation",
        label: "💬 Talk About My Smile",
      },

    ],

  },

implantInfo: {

  id: "implantInfo",

  message:
`🦷 DENTAL IMPLANTS

Dental implants are one of the most advanced solutions to replace missing teeth.

An implant works as an artificial tooth root that supports a dental crown, helping restore your smile, chewing function, and confidence.

Dental implants may be recommended for patients who:

✔ Have one or more missing teeth

✔ Want a fixed and natural-looking solution

✔ Want to improve chewing ability

✔ Want to preserve bone structure

Every case is unique. During your consultation, we evaluate your oral health, discuss your goals, and create a personalized treatment plan.

Would you like to learn more about your options?`,

  options: [

    {
      id: "implantEstimate",
      label: "💰 Get a Treatment Estimate",
    },


    {
      id: "freeSmileConsultation",
      label: "💬 Talk About My Smile",
    },


    {
      id: "treatments",
      label: "😁 Explore Other Treatments",
    },

  ],

},


  implantEstimate: {

    id: "implantEstimate",

    message:
`💰 TREATMENT ESTIMATE

Every dental case is different, and the final cost depends on:

✔ Number of implants needed

✔ Bone condition

✔ Type of restoration

✔ Additional procedures if required

The best way to receive an accurate estimate is through a personalized consultation.

Would you like to tell us more about your smile goals?`,

    options: [

      {
        id: "freeSmileConsultation",
        label: "💬 Free Smile Consultation",
      },

    ],

  },

 allOn4Info: {

  id: "allOn4Info",

  message:
`⭐ FULL ARCH IMPLANTS (ALL-ON-4)

Full arch implants are an advanced solution for patients who need to replace an entire arch of missing or failing teeth.

This treatment uses strategically placed dental implants to support a fixed set of teeth, helping restore:

✔ A complete smile

✔ Chewing function

✔ Confidence when speaking and smiling

✔ A more natural appearance

Full arch treatment requires a complete evaluation to determine if this option is right for you.

During your consultation, we review your oral health, your goals, and create a personalized treatment plan.

Would you like to learn more about your options?`,

  options: [

    {
      id: "implantEstimate",
      label: "💰 Get a Treatment Estimate",
    },


    {
      id: "freeSmileConsultation",
      label: "💬 Talk About My Smile",
    },


    {
      id: "treatments",
      label: "😁 Explore Other Treatments",
    },

  ],

},


allOn6Info: {

  id: "allOn6Info",

  message:
`⭐ FULL ARCH IMPLANTS (ALL-ON-6)

Full arch implants with six implants are designed to provide additional support and stability for patients who need a complete smile restoration.

By using six strategically placed implants, this treatment may provide a strong foundation for a fixed set of teeth.

Benefits may include:

✔ Improved stability

✔ Natural-looking results

✔ Better chewing function

✔ Restored confidence

✔ A long-term solution with proper care

Every patient has different needs. A complete evaluation allows us to determine whether this option is appropriate for your situation.

Would you like to discuss your smile goals with our team?`,

  options: [

    {
      id: "implantEstimate",
      label: "💰 Get a Treatment Estimate",
    },


    {
      id: "freeSmileConsultation",
      label: "💬 Talk About My Smile",
    },


    {
      id: "treatments",
      label: "😁 Explore Other Treatments",
    },

  ],

},

  veneerInfo: {

  id: "veneerInfo",

  message:
`✨ SMILE DESIGN & VENEERS

Veneers are thin, custom-made restorations designed to improve the appearance of your smile.

They can help improve:

✔ Tooth color

✔ Tooth shape

✔ Minor chips or wear

✔ Small spaces between teeth

✔ Overall smile harmony

Every smile is unique. During your consultation, we evaluate your facial features, your goals, and recommend the best option to create natural-looking results.

Our goal is not just a beautiful smile, but a smile that looks natural and fits you.

Would you like to learn more about creating your ideal smile?`,

  options: [

    {
      id: "freeSmileConsultation",
      label: "💬 Talk About My Smile",
    },


    {
      id: "treatments",
      label: "😁 Explore Other Treatments",
    },

  ],

},


 crownInfo: {

  id: "crownInfo",

  message:
`👑 CROWNS & BRIDGES

Dental crowns are custom restorations used to protect, strengthen, and restore damaged teeth.

Crowns may be recommended for teeth that have:

✔ Extensive damage or decay

✔ Large fillings

✔ Fractures or weakening

✔ Previous root canal treatment

Dental bridges can also help replace missing teeth by using neighboring teeth as support.

Modern crowns are designed to provide:

✔ Natural appearance

✔ Strength and durability

✔ Improved function

During your consultation, we will evaluate your smile and recommend the best restoration option for your needs.

Would you like to learn more about your options?`,

  options: [

    {
      id: "freeSmileConsultation",
      label: "💬 Talk About My Smile",
    },


    {
      id: "treatments",
      label: "😁 Explore Other Treatments",
    },

  ],

},

   rootCanalInfo: {

  id: "rootCanalInfo",

  message:
`🦷 ROOT CANAL TREATMENT

A root canal treatment is designed to save a tooth that has infected or damaged internal tissue.

Instead of removing the tooth, this procedure allows us to preserve your natural tooth while removing infection and relieving discomfort.

A root canal may be recommended if you experience:

✔ Severe tooth pain

✔ Sensitivity to hot or cold

✔ Deep decay

✔ Dental infection

✔ Tooth damage or trauma

Our goal is to make the procedure as comfortable as possible while helping you maintain your natural smile.

Would you like to discuss your situation with our team?`,

  options: [

    {
      id: "freeSmileConsultation",
      label: "💬 Talk About My Smile",
    },


    {
      id: "treatments",
      label: "😁 Explore Other Treatments",
    },

  ],

},


whiteningInfo: {

  id: "whiteningInfo",

  message:
`✨ TEETH WHITENING

Professional teeth whitening is a simple and effective way to improve the brightness of your smile.

Over time, teeth can become darker due to:

✔ Coffee

✔ Tea

✔ Wine

✔ Tobacco

✔ Natural aging

Professional whitening is designed to safely improve your smile while protecting your teeth and gums.

During your consultation, we can evaluate your smile and recommend the best option based on your goals.

Would you like to learn more about improving your smile?`,

  options: [

    {
      id: "freeSmileConsultation",
      label: "💬 Talk About My Smile",
    },


    {
      id: "treatments",
      label: "😁 Explore Other Treatments",
    },

  ],

},

  invisalignInfo: {

  id: "invisalignInfo",

  message:
`😁 INVISALIGN

Invisalign is a modern orthodontic option that uses clear aligners to gradually improve the position of your teeth.

It is a popular choice for patients who want a more discreet alternative to traditional braces.

Invisalign may help with:

✔ Crowded teeth

✔ Spaces between teeth

✔ Mild to moderate alignment concerns

✔ Improving overall smile appearance

Benefits include:

✔ Nearly invisible aligners

✔ Removable design

✔ Easier cleaning

✔ Personalized treatment planning

During your consultation, we can evaluate your smile and determine if Invisalign is a good option for your goals.

Would you like to discuss your smile with our team?`,

  options: [

    {
      id: "freeSmileConsultation",
      label: "💬 Talk About My Smile",
    },


    {
      id: "treatments",
      label: "😁 Explore Other Treatments",
    },

  ],

},


 generalDentistryInfo: {

  id: "generalDentistryInfo",

  message:
`🪥 GENERAL DENTISTRY

Maintaining a healthy smile starts with prevention, regular checkups, and personalized dental care.

Our general dentistry services include:

✔ Dental examinations

✔ Professional cleanings

✔ Digital X-rays

✔ Tooth-colored fillings

✔ Preventive care

✔ Treatment planning

Regular dental visits help identify problems early and keep your smile healthy for the future.

Whether you need routine care or have a specific concern, our team is here to help.

How can we assist you with your smile?`,

  options: [

    {
      id: "freeSmileConsultation",
      label: "💬 Talk About My Smile",
    },


    {
      id: "treatments",
      label: "😁 Explore Other Treatments",
    },


    {
      id: "generalQuestions",
      label: "❓ Ask Another Question",
    },

  ],

},


 travelPlanning: {

  id: "travelPlanning",

  message:
`🚗 TRAVEL PLANNING

Planning a dental visit from another city or country can feel overwhelming.

We help our patients make their trip easier by providing guidance with:

✔ Border crossing information

✔ Hotel recommendations

✔ Transportation options

✔ Treatment timelines

✔ Planning your visit around your schedule

What would you like help with?`,

  options: [

    {
      id: "borderGuide",
      label: "🚗 Border Crossing Information",
    },


    {
      id: "hotelGuide",
      label: "🏨 Hotel Recommendations",
    },


    {
      id: "transportationInfo",
      label: "🚕 Transportation Options",
    },


    {
      id: "treatmentTimeline",
      label: "⏱ Treatment Timeline",
    },


    {
      id: "freeSmileConsultation",
      label: "💬 Talk About My Smile",
    },

  ],

},


 borderGuide: {

  id: "borderGuide",

  message:
`🚗 BORDER CROSSING INFORMATION

Our office is located in San Luis Río Colorado, Sonora, Mexico, just minutes from the United States border.

Many of our patients travel from Arizona and other areas, and we help make the process easier.

We can guide you with:

✔ General border crossing information

✔ Directions to our office

✔ Parking recommendations

✔ Planning your arrival time

✔ Transportation options

If this is your first dental visit in Mexico, our team will help answer your questions and make your experience comfortable.

What else can I help you with?`,

  options: [

    {
      id: "hotelGuide",
      label: "🏨 Hotel Recommendations",
    },


    {
      id: "transportationInfo",
      label: "🚕 Transportation Options",
    },


    {
      id: "treatmentTimeline",
      label: "⏱ Treatment Timeline",
    },


    {
      id: "freeSmileConsultation",
      label: "💬 Talk About My Smile",
    },

  ],

},
hotelGuide: {

  id: "hotelGuide",

  message:
`🏨 HOTEL RECOMMENDATIONS

Many of our patients travel from the United States and Canada for dental care and need a comfortable place to stay during their visit.

We can help guide you with hotel recommendations based on:

✔ Distance from our office

✔ Length of your stay

✔ Comfort and convenience

✔ Your travel plans

Our goal is to make your dental trip simple and stress-free from the moment you arrive.

Would you like help planning another part of your visit?`,

  options: [

    {
      id: "borderGuide",
      label: "🚗 Border Crossing Information",
    },


    {
      id: "transportationInfo",
      label: "🚕 Transportation Options",
    },


    {
      id: "treatmentTimeline",
      label: "⏱ Treatment Timeline",
    },


    {
      id: "freeSmileConsultation",
      label: "💬 Talk About My Smile",
    },

  ],

},


 transportationInfo: {

  id: "transportationInfo",

  message:
`🚕 TRANSPORTATION OPTIONS

We understand that traveling for dental care requires planning.

We can help you prepare your visit with guidance about:

✔ Driving directions

✔ Border arrival planning

✔ Transportation recommendations

✔ Airport transportation information

✔ Coordinating your visit schedule

Our goal is to make your dental journey as comfortable and simple as possible.

What else would you like to know?`,

  options: [

    {
      id: "borderGuide",
      label: "🚗 Border Crossing Information",
    },


    {
      id: "hotelGuide",
      label: "🏨 Hotel Recommendations",
    },


    {
      id: "treatmentTimeline",
      label: "⏱ Treatment Timeline",
    },


    {
      id: "freeSmileConsultation",
      label: "💬 Talk About My Smile",
    },

  ],

},


treatmentTimeline: {

  id: "treatmentTimeline",

  message:
`⏱ TREATMENT TIMELINE

Every treatment plan is personalized because every patient's needs are different.

The time required depends on:

✔ Type of treatment

✔ Number of teeth involved

✔ Complexity of the case

✔ Additional procedures that may be needed

Many patients traveling from the United States and Canada plan their visit in advance so treatment can be organized efficiently.

After reviewing your case, we can provide a better estimate of:

✔ Number of visits

✔ Expected timeline

✔ Treatment steps

Would you like to discuss your specific situation?`,

  options: [

    {
      id: "freeSmileConsultation",
      label: "💬 Talk About My Smile",
    },


    {
      id: "treatments",
      label: "😁 Explore Treatments",
    },


    {
      id: "travelPlanning",
      label: "🚗 Travel Planning",
    },

  ],

},


  freeSmileConsultation: {

    id: "freeSmileConsultation",

    message:
`💬 FREE SMILE CONSULTATION

We would love to learn more about your smile goals.

I'll ask you a few questions so our team can better understand your needs.

Let's start.

What is your full name?`,

    options: [],

  },

   consultationPhone: {

  id: "consultationPhone",

  message:
`Nice to meet you!

What is the best phone number or WhatsApp where we can reach you?`,

  options: [],

},


 consultationEmail: {

  id: "consultationEmail",

  message:
`Thank you!

What email address can we use to send you information about your consultation?`,

  options: [],

},


 consultationContactMethod: {

  id: "consultationContactMethod",

  message:
`How would you prefer us to contact you?`,

  options: [

    {
      id: "whatsappContact",
      label: "📱 WhatsApp",
    },


    {
      id: "phoneContact",
      label: "📞 Phone Call",
    },


    {
      id: "emailContact",
      label: "📧 Email",
    },


    {
      id: "facebookContact",
      label: "💬 Facebook Messenger",
    },

  ],

},


  consultationFacebook: {

  id: "consultationFacebook",

  message:
`Perfect!

Please share your Facebook profile or link so our team can contact you there.`,

  options: [],

},


 consultationTreatment: {

  id: "consultationTreatment",

  message:
`Thank you!

What type of dental care are you interested in learning more about?`,

  options: [

    {
      id: "implantInterest",
      label: "🦷 Dental Implants",
    },


    {
      id: "cosmeticInterest",
      label: "✨ Cosmetic Dentistry",
    },


    {
      id: "veneerInterest",
      label: "😁 Smile Design & Veneers",
    },


    {
      id: "crownInterest",
      label: "👑 Crowns & Bridges",
    },


    {
      id: "generalInterest",
      label: "🪥 General Dentistry",
    },


    {
      id: "notSureInterest",
      label: "❓ Not sure yet",
    },

  ],

},

    consultationMessage: {

  id: "consultationMessage",

  message:
`Almost done!

Please tell us a little more about your smile goals, concerns, or any questions you have.

This will help our team better understand how we can assist you.`,

  options: [],

},

consultationComplete: {

  id: "consultationComplete",

  message:
`Thank you for sharing your information! 😊

Your smile consultation request has been received.

Our team will review your information and contact you shortly.

We look forward to helping you achieve the smile you deserve.`,

  options: [

    {
      id: "treatments",
      label: "😁 Explore Treatments",
    },


    {
      id: "travelPlanning",
      label: "🚗 Travel Planning",
    },


    {
      id: "generalQuestions",
      label: "❓ Ask Another Question",
    },

  ],

},


 generalQuestions: {

  id: "generalQuestions",

  message:
`❓ GENERAL QUESTIONS

I'm here to help answer your questions about our office, treatments, and your dental visit.

What would you like to know more about?`,

  options: [

    {
      id: "locationInfo",
      label: "📍 Our Location",
    },


    {
      id: "technologyInfo",
      label: "🦷 Dental Technology",
    },


    {
      id: "paymentInfo",
      label: "💳 Payment Options",
    },


    {
      id: "emergencyInfo",
      label: "🆘 Dental Emergency",
    },


    {
      id: "freeSmileConsultation",
      label: "💬 Talk About My Smile",
    },

  ],

},

    locationInfo: {

    id: "locationInfo",

    message:
`📍 OUR LOCATION

Dra. Marlene Group is located in:

San Luis Río Colorado, Sonora, Mexico.

Our office is conveniently located near the United States border, making it easier for patients traveling from Arizona and other areas.

We can help guide you through your visit and answer any questions about traveling for dental care.`,

    options: [

      {
        id: "travelPlanning",
        label: "🚗 Travel Planning",
      },


      {
        id: "freeSmileConsultation",
        label: "💬 Free Smile Consultation",
      },

    ],

  },


  technologyInfo: {

    id: "technologyInfo",

    message:
`🦷 DENTAL TECHNOLOGY

We use modern dental technology to provide accurate diagnosis, personalized treatment planning, and comfortable care.

Our approach includes:

✔ Digital imaging

✔ Modern restorative materials

✔ Personalized treatment plans

✔ Advanced dental techniques

Every patient receives recommendations based on their specific needs and smile goals.`,

    options: [

      {
        id: "treatments",
        label: "😁 Explore Treatments",
      },


      {
        id: "freeSmileConsultation",
        label: "💬 Free Smile Consultation",
      },

    ],

  },


  paymentInfo: {

    id: "paymentInfo",

    message:
`💳 PAYMENT OPTIONS

We understand that dental treatment is an important investment.

During your consultation, our team can discuss:

✔ Available payment methods

✔ Treatment options based on your goals

✔ Personalized estimates

✔ Planning your dental visit

Every treatment plan is different, so we provide information based on your specific needs.`,

    options: [

      {
        id: "freeSmileConsultation",
        label: "💬 Free Smile Consultation",
      },

    ],

  },


  emergencyInfo: {

    id: "emergencyInfo",

    message:
`🆘 DENTAL EMERGENCY

If you are experiencing a dental emergency, please contact our office as soon as possible.

Examples include:

🚨 Severe tooth pain

🚨 Dental infection

🚨 Swelling

🚨 Broken tooth

🚨 Lost filling or crown

We will do our best to guide you and determine the best next step.`,

    options: [

      {
        id: "freeSmileConsultation",
        label: "💬 Contact Our Team",
      },

    ],

  },


};