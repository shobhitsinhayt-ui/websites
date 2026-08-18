// src/lib/services.ts
// Single source of truth for the clinic's services — shared by the homepage
// interactive grid (ServicesGrid) and the dedicated /services page.
import {
  Stethoscope,
  Shield,
  Baby,
  Heart,
  ClipboardCheck,
  TrendingUp,
  Apple,
  Users,
  Video,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  icon: LucideIcon;
  /** URL-safe id, used for the services-page anchor links */
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image?: string; // drop a /img/*.jpg here to show a photo instead of the icon
};

export const SERVICES: Service[] = [
  {
    icon: Stethoscope,
    slug: "general-pediatric-opd",
    title: "General Pediatric OPD",
    subtitle: "Up to 18 years",
    image: "/img/checkup.jpg",
    description:
      "Expert day-to-day medical care for children of every age, from common fevers, coughs, and infections to ongoing health concerns, with patience, clear explanations, and a calm, child-friendly approach.",
  },
  {
    icon: Shield,
    slug: "vaccination-clinic",
    title: "Vaccination Clinic",
    subtitle: "IAP 2025 Schedule",
    image: "/img/mother-child.jpg",
    description:
      "Complete immunization following the Indian Academy of Pediatrics (IAP) 2025 schedule, from birth-dose vaccines through adolescent boosters, with a personal immunization record and timely reminders.",
  },
  {
    icon: Baby,
    slug: "newborn-care-opd",
    title: "Newborn Care OPD",
    subtitle: "Neonatology",
    image: "/img/newborn-mother.jpg",
    description:
      "Specialised care for your baby's most delicate first weeks, newborn examinations, jaundice and weight monitoring, feeding guidance, and reassurance for new parents.",
  },
  {
    icon: Heart,
    slug: "breastfeeding-clinic",
    title: "Breastfeeding Clinic",
    subtitle: "Antenatal & Postnatal",
    image: "/img/newborn-feet.jpg",
    description:
      "Dedicated lactation support before and after delivery. From preparing during pregnancy to resolving latch and supply difficulties, our certified lactation consultant helps you give your baby the healthiest start.",
  },
  {
    icon: ClipboardCheck,
    slug: "well-baby-clinic",
    title: "Well Baby Clinic",
    subtitle: "Routine Wellness",
    image: "/img/baby-sitting.jpg",
    description:
      "Routine wellness visits that track your baby's healthy growth and development, catching concerns early and keeping vaccinations on schedule.",
  },
  {
    icon: TrendingUp,
    slug: "growth-and-development",
    title: "Growth & Development",
    subtitle: "Milestone Monitoring",
    image: "/img/baby-smile.jpg",
    description:
      "Structured monitoring of your child's height, weight, head circumference, and developmental milestones, so any concern is identified early and supported with the right guidance.",
  },
  {
    icon: Apple,
    slug: "infant-and-child-nutrition",
    title: "Infant & Child Nutrition",
    subtitle: "Personalised Guidance",
    image: "/img/baby-laugh.jpg",
    description:
      "Personalised nutrition guidance for every stage: breastfeeding, weaning, fussy eaters, and growing children, building habits that support strong growth and immunity.",
  },
  {
    icon: Users,
    slug: "teenage-health-clinic",
    title: "Teenage Health Clinic",
    subtitle: "Counselling Centre",
    image: "/img/clinic.jpg",
    description:
      "A safe, confidential space for adolescents to discuss physical changes, nutrition, emotional wellbeing, and growth, with caring medical guidance and counselling.",
  },
  {
    icon: Video,
    slug: "teleconsultation",
    title: "Teleconsultation",
    subtitle: "Breastfeeding Support",
    image: "/img/newborn-mother.jpg",
    description:
      "Can't visit in person? Get expert lactation support from home through online consultations, practical, reassuring guidance for feeding challenges whenever you need it.",
  },
];
