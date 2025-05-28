import React from "react";
import { Link, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-content1 border-t border-divider py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <p className="font-bold text-xl mb-4">
              <span className="text-primary">Dev</span>Portfolio
            </p>
            <p className="text-default-500 mb-6 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <Link href="https://github.com" isExternal aria-label="GitHub">
                <Icon icon="logos:github-icon" width={20} />
              </Link>
              <Link href="https://linkedin.com" isExternal aria-label="LinkedIn">
                <Icon icon="logos:linkedin-icon" width={20} />
              </Link>
              <Link href="https://twitter.com" isExternal aria-label="Twitter">
                <Icon icon="logos:twitter" width={20} />
              </Link>
              <Link href="mailto:contact@example.com" aria-label="Email">
                <Icon icon="lucide:mail" width={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('footer.links')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" color="foreground" className="hover:text-primary">{t('navbar.about')}</Link>
              </li>
              <li>
                <Link href="#projects" color="foreground" className="hover:text-primary">{t('navbar.projects')}</Link>
              </li>
              <li>
                <Link href="#experience" color="foreground" className="hover:text-primary">{t('navbar.experience')}</Link>
              </li>
              <li>
                <Link href="#skills" color="foreground" className="hover:text-primary">{t('navbar.skills')}</Link>
              </li>
              <li>
                <Link href="#contact" color="foreground" className="hover:text-primary">{t('navbar.contact')}</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" color="foreground" className="hover:text-primary">{t('footer.webDev')}</Link>
              </li>
              <li>
                <Link href="#" color="foreground" className="hover:text-primary">{t('footer.mobileDev')}</Link>
              </li>
              <li>
                <Link href="#" color="foreground" className="hover:text-primary">{t('footer.uxConsulting')}</Link>
              </li>
              <li>
                <Link href="#" color="foreground" className="hover:text-primary">{t('footer.cloudArch')}</Link>
              </li>
              <li>
                <Link href="#" color="foreground" className="hover:text-primary">{t('footer.webOpt')}</Link>
              </li>
            </ul>
          </div>
        </div>

        <Divider className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-default-500 text-sm">
            © {new Date().getFullYear()} Alvaro Beruvides Guzmán. {t('footer.rights')}
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" color="foreground" className="text-sm hover:text-primary">{t('footer.privacy')}</Link>
            <Link href="#" color="foreground" className="text-sm hover:text-primary">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};