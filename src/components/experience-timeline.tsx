import React from "react";
import { Card, CardBody, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
  logo: string;
}

export const ExperienceTimeline = () => {
  const experiences: Experience[] = [
    {
      company: "Tech Innovations Inc.",
      position: "Senior Front-end Developer",
      period: "2021 - Presente",
      description: "Lidero el desarrollo de interfaces de usuario con React y TypeScript. Implementé una arquitectura de componentes reutilizables que redujo el tiempo de desarrollo en un 30%. Colaboro con equipos de diseño para crear experiencias de usuario excepcionales.",
      technologies: ["React", "TypeScript", "Redux", "Next.js", "Tailwind CSS"],
      logo: "logos:react",
    },
    {
      company: "Digital Solutions",
      position: "Desarrollador Front-end",
      period: "2018 - 2021",
      description: "Desarrollé interfaces de usuario modernas utilizando Vue 3 y Nuxt. Implementé sistemas de autenticación en el cliente y optimicé el rendimiento de aplicaciones web. Colaboré en la migración de una aplicación legacy a Vue 3.",
      technologies: ["Vue 3", "Nuxt", "JavaScript", "SCSS", "Jest"],
      logo: "logos:vue",
    },
    {
      company: "Creative Web Agency",
      position: "Desarrollador Front-end Junior",
      period: "2016 - 2018",
      description: "Creé interfaces de usuario responsivas y accesibles para diversos clientes. Trabajé con diseñadores para implementar experiencias web atractivas y funcionales. Optimicé el rendimiento de sitios web existentes.",
      technologies: ["JavaScript", "HTML5", "CSS3", "React", "Webpack"],
      logo: "logos:javascript",
    },
  ];

  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="border border-divider">
            <CardBody>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-shrink-0 flex items-start justify-center md:justify-start">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon icon={exp.logo} width={32} height={32} />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">{exp.position}</h3>
                    <div className="flex items-center gap-2 text-default-500">
                      <Icon icon="lucide:calendar" width={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-primary font-medium mb-4">{exp.company}</p>
                  <p className="text-default-600 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};