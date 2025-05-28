import React from "react";
import { Card, CardBody, Image } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const AboutSection = () => {
  const { t } = useTranslation();
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <motion.div
        className="lg:col-span-1"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Card className="border border-divider h-full">
          <CardBody className="p-0">
            <Image
              alt="Alvaro Beruvides Guzmán"
              className="w-full h-full object-cover"
              src="https://img.heroui.chat/image/avatar?w=600&h=800&u=2"
            />
          </CardBody>
        </Card>
      </motion.div>
      
      <motion.div
        className="lg:col-span-2"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Card className="border border-divider h-full">
          <CardBody className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Icon icon="lucide:user" className="text-primary" />
                  {t('about.personalTitle')}
                </h3>
                <p className="text-default-600">
                  {t('about.personalDescription')}
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Icon icon="lucide:graduation-cap" className="text-primary" />
                  {t('about.educationTitle')}
                </h3>
                <ul className="space-y-4">
                  <li className="space-y-1">
                    <p className="font-medium">
                      {t('about.education.degree1')}
                    </p>
                    <p className="text-default-500 text-sm">
                      {t('about.education.university1')} • 2014 - 2018
                    </p>
                  </li>
                  <li className="space-y-1">
                    <p className="font-medium">
                      {t('about.education.degree2')}
                    </p>
                    <p className="text-default-500 text-sm">
                      {t('about.education.university2')} • 2018 - 2020
                    </p>
                  </li>
                  <li className="space-y-1">
                    <p className="font-medium">
                      {t('about.education.certification')}
                    </p>
                    <p className="text-default-500 text-sm">
                      {t('about.education.certificationOrg')} • 2021
                    </p>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Icon icon="lucide:heart" className="text-primary" />
                  {t('about.interestsTitle')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {t('about.interests', { returnObjects: true }).map((interest: string, index: number) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Icon icon="lucide:globe" className="text-primary" />
                  {t('about.languagesTitle')}
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between">
                    <span>{t('about.languages.spanish')}</span>
                    <span className="text-default-500">{t('about.languages.native')}</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>{t('about.languages.english')}</span>
                    <span className="text-default-500">{t('about.languages.fluent')}</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>{t('about.languages.french')}</span>
                    <span className="text-default-500">{t('about.languages.intermediate')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
};