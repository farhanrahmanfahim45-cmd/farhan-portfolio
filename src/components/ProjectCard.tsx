import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
    >
      <Link
        to={`/work/${project.slug}`}
        className="group block rounded-2xl border border-line bg-white overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 hover:border-purple-200 transition-all duration-300"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-surface-lilac">
          <img
            src={project.coverImage}
            alt={`${project.title} preview`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="absolute top-4 left-4 font-display text-xs font-semibold tracking-widest text-white bg-ink/70 backdrop-blur-sm rounded-full px-2.5 py-1">
            {project.number}
          </span>
          <span className="absolute top-4 right-4 text-[11px] font-medium tracking-wide text-white bg-purple-600/90 backdrop-blur-sm rounded-full px-2.5 py-1">
            {project.role}
          </span>
        </div>

        <div className="p-5 sm:p-6">
          <h3 className="font-display text-lg font-semibold text-ink group-hover:text-purple-600 transition-colors">
            {project.shortTitle}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-body line-clamp-3">
            {project.cardDescription}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="text-[11px] font-medium text-purple-700 bg-purple-50 border border-purple-100 rounded-full px-2.5 py-1"
              >
                {tool}
              </span>
            ))}
          </div>

          {project.featuredMetric && (
            <div className="mt-5 pt-4 border-t border-line-soft flex items-baseline gap-2">
              <span className="font-display text-xl font-bold text-ink">
                {project.featuredMetric.value}
              </span>
              <span className="text-xs text-body">{project.featuredMetric.label}</span>
            </div>
          )}

          <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-purple-600">
            Explore {project.depthStars >= 5 ? "Case Study" : "Project"}
            <ArrowUpRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
