import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Tabs, Tab, Card, CardBody, Badge, Avatar, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Hero } from "./components/hero";
import { ProjectCard } from "./components/project-card";
import { SkillsSection } from "./components/skills-section";
import { ExperienceTimeline } from "./components/experience-timeline";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";
import { ThemeSwitcher } from "./components/theme-switcher";
import { LanguageSwitcher } from "./components/language-switcher";
import { AboutSection } from "./components/about-section";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <Navbar maxWidth="xl" className="bg-background/70 backdrop-blur-md border-b border-divider">
        <NavbarBrand>
          <p className="font-bold text-inherit text-xl">
            <span className="text-primary">Dev</span>Portfolio
          </p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link href="#about" color="foreground">{t('navbar.about')}</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#projects" color="foreground">{t('navbar.projects')}</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#experience" color="foreground">{t('navbar.experience')}</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#skills" color="foreground">{t('navbar.skills')}</Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="flex items-center">
            <LanguageSwitcher />
          </NavbarItem>
          <NavbarItem className="flex items-center mr-4">
            <ThemeSwitcher />
          </NavbarItem>
          <NavbarItem>
            <Button 
              as={Link} 
              href="#contact" 
              color="primary" 
              variant="flat"
              radius="full"
              startContent={<Icon icon="lucide:mail" width={18} />}
            >
              {t('navbar.contact')}
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* About Section */}
        <section id="about" className="mb-24">
          <div className="flex flex-col gap-2 mb-8">
            <h2 className="text-3xl font-semibold">{t('about.title')}</h2>
            <p className="text-default-500">{t('about.subtitle')}</p>
          </div>
          
          <AboutSection />
        </section>

        {/* Projects Section - Now separate */}
        <section id="projects" className="mb-24">
          <div className="flex flex-col gap-2 mb-8">
            <h2 className="text-3xl font-semibold">{t('projects.title')}</h2>
            <p className="text-default-500">{t('projects.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard 
              title="E-commerce Dashboard"
              description="Panel de administración para tienda online con análisis de ventas, gestión de inventario y seguimiento de pedidos."
              tags={["React", "TypeScript", "Tailwind CSS", "Node.js"]}
              image="dashboard"
              demoUrl="#"
              repoUrl="#"
            />
            <ProjectCard 
              title="App de Finanzas Personales"
              description="Aplicación para gestionar presupuestos, gastos e inversiones con visualización de datos y reportes personalizados."
              tags={["React Native", "Firebase", "Redux", "Chart.js"]}
              image="finance"
              demoUrl="#"
              repoUrl="#"
            />
            <ProjectCard 
              title="Plataforma Educativa"
              description="Sistema de gestión de aprendizaje con cursos, evaluaciones y seguimiento de progreso para estudiantes."
              tags={["Vue.js", "MongoDB", "Express", "AWS"]}
              image="ai"
              demoUrl="#"
              repoUrl="#"
            />
            <ProjectCard 
              title="Red Social para Profesionales"
              description="Plataforma para conectar profesionales, compartir proyectos y oportunidades laborales en el sector tecnológico."
              tags={["Next.js", "GraphQL", "PostgreSQL", "Prisma"]}
              image="crm"
              demoUrl="#"
              repoUrl="#"
            />
            <ProjectCard 
              title="Aplicación de Reservas"
              description="Sistema de reservas para restaurantes con gestión de mesas, pedidos y pagos integrados."
              tags={["Angular", "Node.js", "MongoDB", "Stripe"]}
              image="calendar"
              demoUrl="#"
              repoUrl="#"
            />
            <ProjectCard 
              title="Marketplace de Diseño"
              description="Plataforma para comprar y vender recursos de diseño con sistema de pagos y gestión de licencias."
              tags={["React", "Django", "PostgreSQL", "AWS"]}
              image="ai"
              demoUrl="#"
              repoUrl="#"
            />
          </div>
        </section>

        {/* Experience Section - Now separate */}
        <section id="experience" className="mb-24">
          <div className="flex flex-col gap-2 mb-8">
            <h2 className="text-3xl font-semibold">{t('experience.title')}</h2>
            <p className="text-default-500">{t('experience.subtitle')}</p>
          </div>
          
          <ExperienceTimeline />
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-24">
          <div className="flex flex-col gap-2 mb-8">
            <h2 className="text-3xl font-semibold">{t('skills.title')}</h2>
            <p className="text-default-500">{t('skills.subtitle')}</p>
          </div>
          
          <SkillsSection />
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-24">
          <div className="flex flex-col gap-2 mb-8">
            <h2 className="text-3xl font-semibold">{t('contact.title')}</h2>
            <p className="text-default-500">{t('contact.subtitle')}</p>
          </div>
          
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}