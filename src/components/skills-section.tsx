import React from "react";
import { Card, CardBody, Progress } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface SkillCategory {
  name: string;
  icon: string;
  skills: {
    name: string;
    level: number;
    icon?: string;
  }[];
}

export const SkillsSection = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      icon: "lucide:layout",
      skills: [
        { name: "JavaScript", level: 95, icon: "logos:javascript" },
        { name: "TypeScript", level: 90, icon: "logos:typescript-icon" },
        { name: "React", level: 92, icon: "logos:react" },
        { name: "Vue 3", level: 95, icon: "logos:vue" },
        { name: "Tailwind CSS", level: 90, icon: "logos:tailwindcss-icon" },
      ],
    },
    {
      name: "Frameworks",
      icon: "lucide:layers",
      skills: [
        { name: "Next.js", level: 88, icon: "logos:nextjs-icon" },
        { name: "Nuxt", level: 85, icon: "logos:nuxt-icon" },
        { name: "React Native", level: 85, icon: "logos:react" },
        { name: "Vite", level: 90, icon: "logos:vitejs" },
        { name: "Redux", level: 85, icon: "logos:redux" },
      ],
    },
    {
      name: "Herramientas",
      icon: "lucide:wrench",
      skills: [
        { name: "Git", level: 95, icon: "logos:git-icon" },
        { name: "Webpack", level: 85, icon: "logos:webpack" },
        { name: "Jira", level: 88, icon: "logos:jira" },
        { name: "Trello", level: 92, icon: "logos:trello" },
        { name: "VS Code", level: 90, icon: "logos:visual-studio-code" },
      ],
    },
  ];

  const softSkills = [
    { name: "Comunicación", icon: "lucide:message-square", description: "Capacidad para expresar ideas de manera clara y efectiva, tanto verbalmente como por escrito." },
    { name: "Resolución de problemas", icon: "lucide:puzzle", description: "Habilidad para identificar problemas complejos y desarrollar soluciones efectivas." },
    { name: "Trabajo en equipo", icon: "lucide:users", description: "Experiencia colaborando en equipos multidisciplinarios para alcanzar objetivos comunes." },
    { name: "Adaptabilidad", icon: "lucide:refresh-cw", description: "Flexibilidad para adaptarme a nuevos entornos, tecnologías y metodologías de trabajo." },
    { name: "Gestión del tiempo", icon: "lucide:clock", description: "Capacidad para priorizar tareas y cumplir con plazos ajustados." },
    { name: "Pensamiento crítico", icon: "lucide:lightbulb", description: "Análisis objetivo de situaciones para tomar decisiones fundamentadas." }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="space-y-12">
      {/* Technical Skills */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {skillCategories.map((category, index) => (
          <motion.div key={index} variants={item}>
            <Card className="border border-divider h-full">
              <CardBody>
                <div className="flex items-center gap-2 mb-6">
                  <div className="p-2 rounded-md bg-primary/10 text-primary">
                    <Icon icon={category.icon} width={24} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          {skill.icon && (
                            <div className="flex items-center justify-center w-7 h-7 bg-default-50 dark:bg-default-800 rounded-md p-1">
                              <Icon icon={skill.icon} width={20} height={20} />
                            </div>
                          )}
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-default-500">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        color="primary" 
                        size="sm" 
                        radius="sm"
                        classNames={{
                          track: "bg-default-100",
                          indicator: "bg-gradient-to-r from-primary-500 to-primary-400",
                        }}
                      />
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Soft Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Card className="border border-divider">
          <CardBody>
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-md bg-primary/10 text-primary">
                <Icon icon="lucide:heart-handshake" width={24} />
              </div>
              <h3 className="text-xl font-semibold">Habilidades Blandas</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 bg-default-50 dark:bg-default-800 rounded-lg"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <Icon icon={skill.icon} width={18} />
                    </div>
                    <h4 className="font-semibold text-foreground dark:text-foreground-200">
                      {skill.name}
                    </h4>
                  </div>
                  <p className="text-default-500 text-sm">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
};