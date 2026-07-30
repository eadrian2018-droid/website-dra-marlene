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

I'm here to answer your questions.

How can I help you?`,

    options: [

      {
        id: "pricesMenu",
        label: "💰 Prices",
      },

      {
        id: "treatmentsMenu",
        label: "😁 Treatments",
      },

      {
        id: "appointmentInfo",
        label: "📅 Appointment",
      },

      {
        id: "borderGuide",
        label: "🚗 Border Crossing",
      },

      {
        id: "hotelGuide",
        label: "🏨 Hotels",
      },

      {
        id: "emergencyInfo",
        label: "🆘 Emergency",
      },

      {
        id: "internationalInfo",
        label: "🌎 International Patients",
      },

    ],

  },

  pricesMenu: {

    id: "pricesMenu",

    message:
`💰 TREATMENT PRICING

Below are some of our most requested treatments.

Select one to learn more.`,

    options: [

      {
        id: "singleImplantPricing",
        label: "🦷 Dental Implant",
      },

      {
        id: "allOn4Pricing",
        label: "⭐⭐⭐⭐⭐ All-on-4",
      },

      {
        id: "allOn6Pricing",
        label: "⭐⭐⭐⭐⭐ All-on-6",
      },

      {
        id: "veneerPricing",
        label: "😁 Veneers",
      },

      {
        id: "zirconiaCrownPricing",
        label: "👑 Zirconia Crowns",
      },

      {
        id: "rootCanalPricing",
        label: "🦷 Root Canal",
      },

      {
        id: "whiteningPricing",
        label: "✨ Teeth Whitening",
      },

      {
        id: "consultationPricing",
        label: "📋 Consultation",
      },

    ],

  },

  treatmentsMenu: {

    id: "treatmentsMenu",

    message:
`😁 OUR MOST POPULAR TREATMENTS

Choose a treatment to learn more.`,

    options: [

      {
        id: "singleImplantInfo",
        label: "🦷 Dental Implant",
      },

      {
        id: "allOn4Info",
        label: "⭐⭐⭐⭐⭐ All-on-4",
      },

      {
        id: "allOn6Info",
        label: "⭐⭐⭐⭐⭐ All-on-6",
      },

      {
        id: "veneerInfo",
        label: "😁 Veneers",
      },

      {
        id: "zirconiaCrownInfo",
        label: "👑 Zirconia Crowns",
      },

      {
        id: "rootCanalInfo",
        label: "🦷 Root Canal",
      },

      {
        id: "whiteningInfo",
        label: "✨ Teeth Whitening",
      },

      {
        id: "invisalignInfo",
        label: "😁 Invisalign",
      },

      {
        id: "generalDentistryInfo",
        label: "🪥 General Dentistry",
      },

    ],

  },

  singleImplantInfo: {

    id: "singleImplantInfo",

    message:
`🦷 SINGLE DENTAL IMPLANT

A dental implant is the closest replacement to a natural tooth.

Treatment includes:

✔ Titanium Implant

✔ Healing Period

✔ Premium Zirconia Crown

Benefits:

• Natural appearance

• Restores chewing

• Prevents bone loss

• Long-lasting solution

What would you like to know?`,

    options: [

      {
        id: "singleImplantPricing",
        label: "💰 Pricing",
      },

      {
        id: "singleImplantTimeline",
        label: "⏱ Treatment Timeline",
      },

      {
        id: "singleImplantCandidate",
        label: "👨‍⚕️ Am I a Candidate?",
      },

      {
        id: "appointmentInfo",
        label: "📅 Schedule Consultation",
      },

    ],

  },

  singleImplantPricing: {

    id: "singleImplantPricing",

    message:
`💰 SINGLE DENTAL IMPLANT

Titanium Implant

$800 USD

Premium Zirconia Crown

$1,400 USD

Estimated Total

$2,200 USD

Your treatment includes:

✔ Clinical Evaluation

✔ Digital Planning

✔ Implant Placement

✔ Healing Follow-up

✔ Premium Zirconia Crown

✔ Post-operative Instructions`,

    options: [

      {
        id: "appointmentInfo",
        label: "📅 Free Consultation",
      },

      {
        id: "pricesMenu",
        label: "⬅️ More Prices",
      },

    ],

  },

  singleImplantTimeline: {

    id: "singleImplantTimeline",

    message:
`⏱ SINGLE IMPLANT TIMELINE

Step 1

Consultation and CT Scan

↓

Step 2

Implant Placement

↓

Step 3

Healing
(Usually 3–6 months)

↓

Step 4

Final Zirconia Crown

Every patient heals differently, so your treatment time may vary.`,

    options: [

      {
        id: "appointmentInfo",
        label: "📅 Schedule Consultation",
      },

    ],

  },

  singleImplantCandidate: {

    id: "singleImplantCandidate",

    message:
`👨‍⚕️ GOOD CANDIDATES

You may qualify if you:

✔ Are missing one tooth

✔ Have healthy gums

✔ Have adequate bone

✔ Are in good general health

If additional bone is required, we also offer bone grafting procedures.`,

    options: [

      {
        id: "appointmentInfo",
        label: "📅 Free Consultation",
      },

    ],

  },

    allOn4Info: {

    id: "allOn4Info",

    message:
`⭐⭐⭐⭐⭐ ALL-ON-4

All-on-4 replaces an entire arch of missing teeth using only four strategically placed implants.

Benefits

✔ Fixed teeth

✔ Beautiful smile

✔ Eat comfortably again

✔ No removable dentures

✔ Long-lasting solution

What would you like to know?`,

    options: [

      {
        id: "allOn4Pricing",
        label: "💰 Pricing",
      },

      {
        id: "allOn4Timeline",
        label: "⏱ Timeline",
      },

      {
        id: "allOn4Candidate",
        label: "👨‍⚕️ Candidate",
      },

      {
        id: "appointmentInfo",
        label: "📅 Free Consultation",
      },

    ],

  },

  allOn4Pricing: {

    id: "allOn4Pricing",

    message:
`💰 ALL-ON-4

Upper Arch

$12,000 USD

Lower Arch

$12,000 USD

Treatment Includes

✔ Four Premium Implants

✔ Temporary Prosthesis

✔ Final Zirconia Prosthesis

✔ Digital Planning

✔ Surgery

✔ Follow-up Visits`,

    options: [

      {
        id: "allOn4Timeline",
        label: "⏱ Timeline",
      },

      {
        id: "appointmentInfo",
        label: "📅 Schedule Consultation",
      },

    ],

  },

  allOn4Timeline: {

    id: "allOn4Timeline",

    message:
`⏱ ALL-ON-4 TIMELINE

Consultation

↓

CT Scan

↓

Treatment Planning

↓

Implant Surgery

↓

Healing

↓

Final Zirconia Prosthesis

Your exact timeline depends on your individual case.`,

    options: [

      {
        id: "appointmentInfo",
        label: "📅 Consultation",
      },

    ],

  },

  allOn4Candidate: {

    id: "allOn4Candidate",

    message:
`👨‍⚕️ GOOD CANDIDATES

You may qualify if you:

✔ Wear dentures

✔ Have several missing teeth

✔ Have failing teeth

✔ Want a fixed permanent smile

A CT Scan is required to determine your eligibility.`,

    options: [

      {
        id: "appointmentInfo",
        label: "📅 Free Consultation",
      },

    ],

  },

  allOn6Info: {

    id: "allOn6Info",

    message:
`⭐⭐⭐⭐⭐ ALL-ON-6

All-on-6 provides additional support using six implants instead of four.

Benefits

✔ Greater stability

✔ Strong chewing ability

✔ Natural appearance

✔ Long-term durability

Choose an option below.`,

    options: [

      {
        id: "allOn6Pricing",
        label: "💰 Pricing",
      },

      {
        id: "allOn6Timeline",
        label: "⏱ Timeline",
      },

      {
        id: "allOn6Candidate",
        label: "👨‍⚕️ Candidate",
      },

      {
        id: "appointmentInfo",
        label: "📅 Free Consultation",
      },

    ],

  },

  allOn6Pricing: {

    id: "allOn6Pricing",

    message:
`💰 ALL-ON-6

Upper Arch

$14,000 USD

Lower Arch

$14,000 USD

Treatment Includes

✔ Six Premium Implants

✔ Temporary Teeth

✔ Final Zirconia Prosthesis

✔ Digital Planning

✔ Surgery

✔ Follow-up Care`,

    options: [

      {
        id: "allOn6Timeline",
        label: "⏱ Timeline",
      },

      {
        id: "appointmentInfo",
        label: "📅 Schedule Consultation",
      },

    ],

  },

  allOn6Timeline: {

    id: "allOn6Timeline",

    message:
`⏱ ALL-ON-6 TIMELINE

Consultation

↓

CT Scan

↓

Treatment Planning

↓

Implant Surgery

↓

Healing

↓

Final Zirconia Prosthesis

Treatment time varies for every patient.`,

    options: [

      {
        id: "appointmentInfo",
        label: "📅 Consultation",
      },

    ],

  },

  allOn6Candidate: {

    id: "allOn6Candidate",

    message:
`👨‍⚕️ GOOD CANDIDATES

You may qualify if you:

✔ Have multiple missing teeth

✔ Wear dentures

✔ Want maximum stability

✔ Desire a fixed permanent smile

We'll determine the ideal treatment after your CT Scan.`,

    options: [

      {
        id: "appointmentInfo",
        label: "📅 Free Consultation",
      },

    ],

  },

  boneGraftInfo: {

    id: "boneGraftInfo",

    message:
`🦴 BONE GRAFTING

Bone grafting rebuilds lost bone so dental implants can be placed safely.

Benefits

✔ Increases bone volume

✔ Improves implant success

✔ Predictable treatment

✔ Long-term stability

Would you like to learn more?`,

    options: [

      {
        id: "boneGraftProcedure",
        label: "📖 Procedure",
      },

      {
        id: "boneGraftHealing",
        label: "⏱ Healing",
      },

      {
        id: "appointmentInfo",
        label: "📅 Consultation",
      },

    ],

  },

  boneGraftProcedure: {

    id: "boneGraftProcedure",

    message:
`📖 BONE GRAFT PROCEDURE

Bone graft material is placed in areas where additional support is needed before implant placement.

Healing usually takes several months before implants are placed.`,

    options: [

      {
        id: "boneGraftHealing",
        label: "⏱ Healing",
      },

      {
        id: "appointmentInfo",
        label: "📅 Consultation",
      },

    ],

  },

  boneGraftHealing: {

    id: "boneGraftHealing",

    message:
`⏱ HEALING TIME

Typical healing ranges from 3 to 6 months depending on your individual case and the amount of grafting required.`,

    options: [

      {
        id: "appointmentInfo",
        label: "📅 Free Consultation",
      },

    ],

  },

    sinusLiftInfo: {

    id: "sinusLiftInfo",

    message:
`⬆️ SINUS LIFT

A sinus lift is performed when there isn't enough bone in the upper jaw to safely place dental implants.

Benefits

✔ Creates additional bone support

✔ Improves implant success

✔ Very predictable procedure

✔ Long-term stability

What would you like to know?`,

    options: [

      {
        id: "sinusLiftProcedure",
        label: "📖 Procedure",
      },

      {
        id: "sinusLiftHealing",
        label: "⏱ Healing",
      },

      {
        id: "appointmentInfo",
        label: "📅 Consultation",
      },

    ],

  },

  sinusLiftProcedure: {

    id: "sinusLiftProcedure",

    message:
`📖 SINUS LIFT PROCEDURE

The sinus membrane is gently elevated and bone graft material is placed underneath.

Once healing is complete, dental implants can usually be placed safely.

This procedure is routinely performed with excellent long-term success.`,

    options: [

      {
        id: "sinusLiftHealing",
        label: "⏱ Healing Time",
      },

      {
        id: "appointmentInfo",
        label: "📅 Schedule Consultation",
      },

    ],

  },

  sinusLiftHealing: {

    id: "sinusLiftHealing",

    message:
`⏱ HEALING TIME

Healing normally takes between 4 and 9 months depending on the amount of bone needed.

Your doctor will determine the ideal moment to place your implants.`,

    options: [

      {
        id: "appointmentInfo",
        label: "📅 Free Consultation",
      },

    ],

  },

  veneerInfo: {

    id: "veneerInfo",

    message:
`😁 PORCELAIN VENEERS

Porcelain veneers are thin ceramic restorations that are permanently bonded to the front of your teeth.

They're one of the fastest ways to completely transform a smile.

Benefits

✔ Natural appearance

✔ Long-lasting

✔ Stain resistant

✔ Beautiful smile design

What would you like to know?`,

    options: [

      {
        id: "veneerPricing",
        label: "💰 Pricing",
      },

      {
        id: "veneerProcedure",
        label: "📖 Procedure",
      },

      {
        id: "veneerCandidate",
        label: "👨‍⚕️ Candidate",
      },

      {
        id: "appointmentInfo",
        label: "📅 Consultation",
      },

    ],

  },

  veneerPricing: {

    id: "veneerPricing",

    message:
`💰 PORCELAIN VENEERS

Premium Porcelain Veneer

$450 USD per tooth

Ideal for improving:

✔ Tooth Color

✔ Shape

✔ Size

✔ Small Spaces

✔ Worn Teeth

We'll create a personalized smile design before treatment begins.`,

    options: [

      {
        id: "appointmentInfo",
        label: "📅 Free Consultation",
      },

    ],

  },

  veneerProcedure: {

    id: "veneerProcedure",

    message:
`📖 VENEER PROCEDURE

Step 1

Consultation & Smile Design

↓

Step 2

Tooth Preparation

↓

Step 3

Digital Scan

↓

Step 4

Temporary Veneers (if needed)

↓

Step 5

Final Porcelain Veneers

Our goal is a beautiful, natural-looking smile.`,

    options: [

      {
        id: "appointmentInfo",
        label: "📅 Consultation",
      },

    ],

  },

  veneerCandidate: {

    id: "veneerCandidate",

    message:
`👨‍⚕️ GOOD CANDIDATES

Porcelain veneers are excellent if you have:

✔ Chipped teeth

✔ Stained teeth

✔ Small gaps

✔ Uneven teeth

✔ Worn enamel

We'll evaluate your smile and determine whether veneers are the best treatment for you.`,

    options: [

      {
        id: "appointmentInfo",
        label: "📅 Schedule Consultation",
      },

    ],

  },

  zirconiaCrownInfo: {

    id: "zirconiaCrownInfo",

    message:
`👑 ZIRCONIA CROWNS

A zirconia crown restores and protects damaged teeth while providing exceptional strength and natural beauty.

Benefits

✔ Extremely strong

✔ Natural appearance

✔ Metal-free

✔ Long-lasting

What would you like to know?`,

    options: [

      {
        id: "zirconiaCrownPricing",
        label: "💰 Pricing",
      },

      {
        id: "zirconiaCrownProcedure",
        label: "📖 Procedure",
      },

      {
        id: "zirconiaCrownCandidate",
        label: "👨‍⚕️ Candidate",
      },

      {
        id: "appointmentInfo",
        label: "📅 Consultation",
      },

    ],

  },

  zirconiaCrownPricing: {

    id: "zirconiaCrownPricing",

    message:
`💰 PREMIUM ZIRCONIA CROWN

Starting at

$450 USD

Treatment includes:

✔ Examination

✔ Tooth Preparation

✔ Digital Impression

✔ Premium Zirconia Crown

✔ Final Adjustment

Pricing may vary depending on your specific case.`,

    options: [

      {
        id: "appointmentInfo",
        label: "📅 Free Consultation",
      },

    ],

  },

  zirconiaCrownProcedure: {

    id: "zirconiaCrownProcedure",

    message:
`📖 ZIRCONIA CROWN PROCEDURE

Consultation

↓

Tooth Preparation

↓

Digital Scan

↓

Temporary Crown (if needed)

↓

Final Zirconia Crown

Your new crown is carefully adjusted for comfort, function and aesthetics.`,

    options: [

      {
        id: "appointmentInfo",
        label: "📅 Schedule Consultation",
      },

    ],

  },

  zirconiaCrownCandidate: {

    id: "zirconiaCrownCandidate",

    message:
`👨‍⚕️ GOOD CANDIDATES

Crowns are recommended for:

✔ Broken teeth

✔ Root canal treated teeth

✔ Large fillings

✔ Cracked teeth

✔ Severely worn teeth

Our doctors will determine whether a zirconia crown is the best solution.`,

    options: [

      {
        id: "appointmentInfo",
        label: "📅 Consultation",
      },

    ],

  },

  rootCanalInfo: {

    id: "rootCanalInfo",

    message:
`🦷 ROOT CANAL THERAPY

A root canal removes infection inside the tooth while preserving your natural tooth.

Benefits

✔ Eliminates infection

✔ Relieves pain

✔ Saves your tooth

✔ Prevents extraction

What would you like to know?`,

    options: [

      {
        id: "rootCanalPricing",
        label: "💰 Pricing",
      },

      {
        id: "rootCanalProcedure",
        label: "📖 Procedure",
      },

      {
        id: "rootCanalRecovery",
        label: "⏱ Recovery",
      },

      {
        id: "appointmentInfo",
        label: "📅 Consultation",
      },

    ],

  },

    rootCanalPricing: {

    id: "rootCanalPricing",

    message:
`💰 ROOT CANAL TREATMENT

Starting at

$3,600 MXN

Treatment Includes

✔ Clinical Examination

✔ Digital X-Rays (if needed)

✔ Complete Root Canal Therapy

✔ Canal Disinfection

✔ Permanent Filling

A zirconia crown is often recommended afterward to strengthen the tooth.`,

    options: [

      {
        id: "zirconiaCrownInfo",
        label: "👑 Zirconia Crown",
      },

      {
        id: "appointmentInfo",
        label: "📅 Schedule Consultation",
      },

    ],

  },

  rootCanalProcedure: {

    id: "rootCanalProcedure",

    message:
`📖 ROOT CANAL PROCEDURE

Step 1

Clinical Examination

↓

Digital X-Rays

↓

Local Anesthesia

↓

Removal of Infection

↓

Cleaning & Shaping

↓

Permanent Filling

The procedure is much more comfortable than most people expect.`,

    options: [

      {
        id: "appointmentInfo",
        label: "📅 Consultation",
      },

    ],

  },

  rootCanalRecovery: {

    id: "rootCanalRecovery",

    message:
`⏱ RECOVERY

Most patients return to normal activities the same day.

Mild soreness for a few days is completely normal.

A zirconia crown is usually recommended afterward to protect the tooth from fracture.`,

    options: [

      {
        id: "appointmentInfo",
        label: "📅 Free Consultation",
      },

    ],

  },

  whiteningInfo: {

    id: "whiteningInfo",

    message:
`✨ PROFESSIONAL TEETH WHITENING

Professional whitening can dramatically brighten your smile in a single appointment.

Benefits

✔ Brighter Smile

✔ Fast Results

✔ Safe Procedure

✔ Performed by Dental Professionals

What would you like to know?`,

    options: [

      {
        id: "whiteningPricing",
        label: "💰 Pricing",
      },

      {
        id: "whiteningProcedure",
        label: "📖 Procedure",
      },

      {
        id: "whiteningCandidate",
        label: "👨‍⚕️ Candidate",
      },

      {
        id: "appointmentInfo",
        label: "📅 Consultation",
      },

    ],

  },

  whiteningPricing: {

    id: "whiteningPricing",

    message:
`💰 PROFESSIONAL WHITENING

Starting at

$3,500 MXN

Treatment Includes

✔ Dental Evaluation

✔ Gum Protection

✔ Professional Whitening

✔ Final Instructions

Results vary depending on each patient's teeth and habits.`,

    options: [

      {
        id: "appointmentInfo",
        label: "📅 Schedule Consultation",
      },

    ],

  },

  whiteningProcedure: {

    id: "whiteningProcedure",

    message:
`📖 WHITENING PROCEDURE

Consultation

↓

Dental Evaluation

↓

Gum Protection

↓

Professional Whitening Gel

↓

Final Evaluation

Most appointments take approximately one hour.`,

    options: [

      {
        id: "appointmentInfo",
        label: "📅 Consultation",
      },

    ],

  },

  whiteningCandidate: {

    id: "whiteningCandidate",

    message:
`👨‍⚕️ GOOD CANDIDATES

Professional whitening is recommended if you have:

✔ Coffee stains

✔ Tea stains

✔ Tobacco stains

✔ Yellow teeth

✔ Healthy gums

We'll first verify that whitening is the right option for your smile.`,

    options: [

      {
        id: "appointmentInfo",
        label: "📅 Free Consultation",
      },

    ],

  },

  invisalignInfo: {

    id: "invisalignInfo",

    message:
`😁 INVISALIGN®

Straighten your teeth with nearly invisible clear aligners.

Benefits

✔ Comfortable

✔ Removable

✔ Nearly Invisible

✔ Easy to Clean

✔ No Metal Braces

Choose an option below.`,

    options: [

      {
        id: "invisalignPricing",
        label: "💰 Pricing",
      },

      {
        id: "invisalignProcedure",
        label: "📖 Procedure",
      },

      {
        id: "invisalignCandidate",
        label: "👨‍⚕️ Candidate",
      },

      {
        id: "appointmentInfo",
        label: "📅 Consultation",
      },

    ],

  },

  invisalignPricing: {

    id: "invisalignPricing",

    message:
`💰 INVISALIGN®

Treatment cost depends on:

✔ Complexity

✔ Number of Aligners

✔ Treatment Duration

After your digital scan we'll provide a personalized quote with no surprises.`,

    options: [

      {
        id: "appointmentInfo",
        label: "📅 Free Consultation",
      },

    ],

  },

  invisalignProcedure: {

    id: "invisalignProcedure",

    message:
`📖 INVISALIGN PROCESS

Consultation

↓

Digital Scan

↓

Treatment Planning

↓

Custom Aligners

↓

Progress Visits

↓

Retainers

Your treatment is customized specifically for your smile.`,

    options: [

      {
        id: "appointmentInfo",
        label: "📅 Consultation",
      },

    ],

  },

  invisalignCandidate: {

    id: "invisalignCandidate",

    message:
`👨‍⚕️ GOOD CANDIDATES

Invisalign may be ideal if you have:

✔ Crowded Teeth

✔ Spaces

✔ Mild Bite Problems

✔ Crooked Teeth

We'll determine if Invisalign is right for you during your consultation.`,

    options: [

      {
        id: "appointmentInfo",
        label: "📅 Schedule Consultation",
      },

    ],

  },

  generalDentistryInfo: {

    id: "generalDentistryInfo",

    message:
`🪥 GENERAL DENTISTRY

We provide comprehensive dental care for the whole family.

Choose a service below.`,

    options: [

      {
        id: "cleaningInfo",
        label: "🪥 Dental Cleaning",
      },

      {
        id: "fillingsInfo",
        label: "🦷 Tooth-Colored Fillings",
      },

      {
        id: "examInfo",
        label: "📋 Dental Examination",
      },

      {
        id: "xrayInfo",
        label: "🩻 Digital X-Rays",
      },

      {
        id: "appointmentInfo",
        label: "📅 Appointment",
      },

    ],

  },

    cleaningInfo: {

    id: "cleaningInfo",

    message:
`🪥 PROFESSIONAL DENTAL CLEANING

Routine cleanings help prevent cavities, gum disease and bad breath.

Benefits

✔ Removes plaque

✔ Removes tartar

✔ Fresh breath

✔ Healthier gums

✔ Brighter smile

We recommend a professional cleaning every 6 months.`,

    options: [

      {
        id: "cleaningPricing",
        label: "💰 Pricing",
      },

      {
        id: "appointmentInfo",
        label: "📅 Schedule Cleaning",
      },

    ],

  },

  cleaningPricing: {

    id: "cleaningPricing",

    message:
`💰 PROFESSIONAL CLEANING

Regular Cleaning

$850 MXN

Includes

✔ Oral Evaluation

✔ Plaque Removal

✔ Tartar Removal

✔ Polishing

✔ Home Care Recommendations`,

    options: [

      {
        id: "appointmentInfo",
        label: "📅 Book Appointment",
      },

    ],

  },

  fillingsInfo: {

    id: "fillingsInfo",

    message:
`🦷 TOOTH-COLORED FILLINGS

We restore cavities using modern composite fillings.

We do NOT use traditional silver amalgam fillings.

Benefits

✔ Natural Tooth Color

✔ Strong Bond

✔ Mercury-Free

✔ Long Lasting

✔ Conservative Treatment`,

    options: [

      {
        id: "fillingPricing",
        label: "💰 Pricing",
      },

      {
        id: "appointmentInfo",
        label: "📅 Consultation",
      },

    ],

  },

  fillingPricing: {

    id: "fillingPricing",

    message:
`💰 COMPOSITE FILLINGS

Pricing depends on:

✔ Tooth

✔ Size of the cavity

✔ Number of surfaces involved

After your examination we'll provide an exact estimate before beginning treatment.`,

    options: [

      {
        id: "appointmentInfo",
        label: "📅 Schedule Appointment",
      },

    ],

  },

  examInfo: {

    id: "examInfo",

    message:
`📋 COMPREHENSIVE DENTAL EXAM

Your first visit may include:

✔ Complete Oral Examination

✔ Treatment Recommendations

✔ Digital X-Rays (if needed)

✔ Personalized Treatment Plan

We explain every available treatment option before starting any procedure.`,

    options: [

      {
        id: "consultationPricing",
        label: "💰 Consultation Fee",
      },

      {
        id: "appointmentInfo",
        label: "📅 Schedule Consultation",
      },

    ],

  },

  consultationPricing: {

    id: "consultationPricing",

    message:
`💰 CONSULTATION

Consultation Fee

$500 MXN

If you begin treatment with us, this fee is commonly applied toward your treatment.

Your consultation includes:

✔ Examination

✔ Treatment Discussion

✔ Personalized Recommendations

✔ Opportunity to ask questions`,

    options: [

      {
        id: "appointmentInfo",
        label: "📅 Book Consultation",
      },

    ],

  },

  xrayInfo: {

    id: "xrayInfo",

    message:
`🩻 DIGITAL X-RAYS

Digital X-rays help detect problems that cannot be seen during a normal examination.

Benefits

✔ Fast

✔ Comfortable

✔ Low Radiation

✔ Accurate Diagnosis

✔ Better Treatment Planning`,

    options: [

      {
        id: "appointmentInfo",
        label: "📅 Schedule Appointment",
      },

    ],

  },

  appointmentInfo: {

    id: "appointmentInfo",

    message:
`📅 APPOINTMENTS

Scheduling your visit is simple.

Our team can help you by:

✔ Choosing the best appointment date

✔ Organizing multiple procedures

✔ Planning treatment around your travel schedule

✔ Answering any questions before your visit

International patients are always welcome.`,

    options: [

      {
        id: "internationalInfo",
        label: "🌎 International Patients",
      },

      {
        id: "borderGuide",
        label: "🚗 Border Crossing",
      },

      {
        id: "hotelGuide",
        label: "🏨 Hotel Recommendations",
      },

    ],

  },

  financingInfo: {

    id: "financingInfo",

    message:
`💳 PAYMENT OPTIONS

We offer several convenient payment methods.

Accepted:

✔ Cash

✔ Credit Cards

✔ Debit Cards

✔ Bank Transfer

For larger treatment plans we'll gladly discuss the best payment option during your consultation.`,

    options: [

      {
        id: "appointmentInfo",
        label: "📅 Consultation",
      },

    ],

  },

  borderGuide: {

    id: "borderGuide",

    message:
`🚗 BORDER CROSSING

Traveling from the United States?

Our office is located only minutes from the border.

We'll gladly help you with:

✔ Which Port of Entry to use

✔ Driving Directions

✔ Parking Information

✔ Typical Crossing Times

✔ Transportation Recommendations

If it's your first visit, don't worry—we'll guide you step by step.`,

    options: [

      {
        id: "hotelGuide",
        label: "🏨 Hotels",
      },

      {
        id: "appointmentInfo",
        label: "📅 Plan My Visit",
      },

    ],

  },

    hotelGuide: {

    id: "hotelGuide",

    message:
`🏨 HOTEL RECOMMENDATIONS

Many of our patients travel from the United States and Canada.

We're happy to recommend hotels based on:

✔ Budget

✔ Distance from our office

✔ Family accommodations

✔ Extended stays

We'll help you find the best option for a comfortable visit.`,

    options: [

      {
        id: "internationalInfo",
        label: "🌎 International Patients",
      },

      {
        id: "appointmentInfo",
        label: "📅 Plan My Trip",
      },

      {
        id: "welcome",
        label: "🏠 Main Menu",
      },

    ],

  },

  internationalInfo: {

    id: "internationalInfo",

    message:
`🌎 INTERNATIONAL PATIENTS

Every week we help patients travel to Mexico for affordable, high-quality dental care.

Our team can assist you with:

✔ Treatment Planning

✔ Appointment Scheduling

✔ Hotel Recommendations

✔ Border Crossing Information

✔ English & Spanish Assistance

✔ Personalized Treatment Plans

We'll do everything possible to make your dental trip simple, comfortable and stress-free.`,

    options: [

      {
        id: "borderGuide",
        label: "🚗 Border Crossing",
      },

      {
        id: "hotelGuide",
        label: "🏨 Hotels",
      },

      {
        id: "appointmentInfo",
        label: "📅 Schedule Consultation",
      },

      {
        id: "welcome",
        label: "🏠 Main Menu",
      },

    ],

  },

  emergencyInfo: {

    id: "emergencyInfo",

    message:
`🆘 DENTAL EMERGENCIES

If you're experiencing:

🚨 Severe Tooth Pain

🚨 Swelling

🚨 Broken Tooth

🚨 Knocked-Out Tooth

🚨 Lost Crown

🚨 Lost Filling

🚨 Dental Infection

Please contact our office as soon as possible.

Whenever possible, we'll make every effort to see emergency patients the same day.`,

    options: [

      {
        id: "appointmentInfo",
        label: "📅 Emergency Appointment",
      },

      {
        id: "welcome",
        label: "🏠 Main Menu",
      },

    ],

  },

};