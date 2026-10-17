// Capabilities are grouped by what they enable, not by subjective
// proficiency percentages (per PRD section 15).

export interface CapabilityGroup {
  id: string;
  title: string;
  description: string;
  skills: string[];
}

export const capabilities: CapabilityGroup[] = [
  {
    id: "data-analysis",
    title: "Data Analysis",
    description: "Querying, cleaning and exploring data to find what matters.",
    skills: ["SQL", "MySQL", "PostgreSQL", "Python", "Excel", "Exploratory Data Analysis"],
  },
  {
    id: "business-intelligence",
    title: "Business Intelligence",
    description: "Turning raw numbers into dashboards people can act on.",
    skills: ["Power BI", "Tableau", "KPI Reporting", "Data Visualization"],
  },
  {
    id: "business-analysis",
    title: "Business Analysis",
    description: "Connecting analytical findings back to business decisions.",
    skills: ["Problem Solving", "Business Case Analysis", "Decision Support"],
  },
  {
    id: "communication",
    title: "Communication & Leadership",
    description: "Presenting findings clearly and coordinating teams.",
    skills: ["Team Coordination", "Event Management", "Stakeholder Communication", "Google Workspace"],
  },
  {
    id: "design-content",
    title: "Design & Content",
    description: "Visual design and writing that make ideas easy to understand.",
    skills: ["Graphic Design", "Canva", "Content Strategy", "Social Media"],
  },
  {
    id: "full-stack",
    title: "Full-Stack Development",
    description: "Building and maintaining web systems end to end.",
    skills: ["React", "Supabase", "Vercel", "Netlify", "VS Code", "Snowflake"],
  },
];
