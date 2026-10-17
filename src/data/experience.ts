// Curated experience timeline (PRD section 18) — intentionally NOT a full
// resume dump. Each entry supports the professional/analytics narrative.

export interface ExperienceRole {
  role: string;
  period: string;
}

export interface ExperienceEntry {
  id: string;
  organization: string;
  roles: ExperienceRole[]; // most recent first
  location?: string;
  points: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: "iibf",
    organization: "Independent International Business Forum (IIBF)",
    location: "Dhaka, Bangladesh",
    roles: [
      { role: "Vice President", period: "Sep 2026 – Present" },
      { role: "Executive, Media & Communications", period: "Jun 2025 – Jul 2026" },
    ],
    points: [
      "Oversee organizational administration, strategic planning and cross-departmental coordination, working with university authorities and internal leadership.",
      "Lead media and communications strategy, digital engagement and brand development, building on 1,500+ organic Facebook followers gained earlier.",
      "Spearhead flagship initiatives and external representation — event operations, registration systems, participant databases and stakeholder communications for ELEVATRIX Season 1, Rise Above All 2026 and the Nestle Corporate Talk.",
      "Designed social media content, banners and event materials; recruited and trained the media team.",
    ],
  },
  {
    id: "dabur",
    organization: "Dabur Bangladesh",
    location: "Dhaka, Bangladesh",
    roles: [{ role: "Campus Star", period: "May 2026 – Present" }],
    points: [
      "Selected as campus brand ambassador from 1,300+ applicants for Dabur Bangladesh's flagship program.",
      "Generated on-campus consumer insights and coordinated activities with the brand team.",
      "Supported recruitment programs on social media and club channels for Marketing, Sales and Production Engineering.",
      "Joined field visits and generated sales insights in Dhaka under the Territory Sales Manager (Dhanmondi Zone).",
      "Provided operational assistance in organizing the Skincare Co-Creation Circle.",
    ],
  },
  {
    id: "hult-prize",
    organization: "Hult Prize at IUB",
    location: "Dhaka, Bangladesh",
    roles: [{ role: "Head of Content Creation & Copywriting", period: "Feb 2025 – Dec 2025" }],
    points: [
      "Led content and copy strategy for campaign communications as part of the 2024–25 Organizing Committee.",
      "Collaborated across teams to keep messaging and branding consistent.",
    ],
  },
];
