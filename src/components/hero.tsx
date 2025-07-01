// Import necessary libraries and components
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Button, Link, Avatar } from "@heroui/react";
import { Icon } from "@iconify/react";
// Import assets
import imgMain from "../assets/images/personal_image.png";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative bg-gradient-to-b from-primary-50 to-background dark:from-primary-900/20 dark:to-background pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                {t("hero.greeting")}{" "}
                <span className="text-primary">Alvaro Beruvides Guzmán</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-default-700 mb-6">
                {t("hero.role")}
              </h2>
              <p className="text-default-600 text-lg max-w-2xl mb-8">
                {t("hero.description")}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                as={Link}
                href="#projects"
                color="primary"
                size="lg"
                endContent={<Icon icon="lucide:arrow-right" width={18} />}
              >
                {t("hero.viewProjects")}
              </Button>
              <Button
                as={Link}
                href="#contact"
                variant="bordered"
                size="lg"
                endContent={<Icon icon="lucide:mail" width={18} />}
              >
                {t("hero.contactMe")}
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <Link href="https://github.com" isExternal aria-label="GitHub">
                <Icon icon="logos:github-icon" width={24} />
              </Link>
              <Link
                href="https://linkedin.com"
                isExternal
                aria-label="LinkedIn"
              >
                <Icon icon="logos:linkedin-icon" width={24} />
              </Link>
              <Link href="https://twitter.com" isExternal aria-label="Twitter">
                <Icon icon="logos:twitter" width={24} />
              </Link>
              <Link href="mailto:contact@example.com" aria-label="Email">
                <Icon icon="lucide:mail" width={24} />
              </Link>
              <Link
                href="https://wa.me/5355651996"
                isExternal
                aria-label="WhatsApp"
                className="p-1.5 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors"
              >
                <Icon icon="lucide:message-circle" width={20} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Avatar
              src={imgMain}
              className="w-64 h-64 text-large"
              isBordered
              color="primary"
            />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-12"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-background"
          ></path>
        </svg>
      </div>
    </section>
  );
};
