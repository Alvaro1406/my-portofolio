import React from "react";
import { Card, CardBody, Input, Textarea, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const ContactSection = () => {
  const { t } = useTranslation();
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formState);
      setIsSubmitting(false);
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      alert("¡Mensaje enviado con éxito! Te responderé lo antes posible.");
    }, 1500);
  };

  const contactInfo = [
    {
      icon: "lucide:mail",
      label: t('contact.info.email'),
      value: "contacto@ejemplo.com",
      link: "mailto:contacto@ejemplo.com",
    },
    {
      icon: "lucide:phone",
      label: t('contact.info.phone'),
      value: "+34 123 456 789",
      link: "tel:+34123456789",
    },
    {
      icon: "lucide:map-pin",
      label: t('contact.info.location'),
      value: "Madrid, España",
      link: "https://maps.google.com/?q=Madrid,España",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <motion.div 
        className="lg:col-span-2"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Card className="border border-divider">
          <CardBody className="p-6">
            <h3 className="text-xl font-semibold mb-6">{t('contact.form.send')}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label={t('contact.form.name')}
                  placeholder={t('contact.form.namePlaceholder')}
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  variant="bordered"
                  radius="sm"
                  isRequired
                />
                <Input
                  label={t('contact.form.email')}
                  placeholder={t('contact.form.emailPlaceholder')}
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  type="email"
                  variant="bordered"
                  radius="sm"
                  isRequired
                />
              </div>
              <Input
                label={t('contact.form.subject')}
                placeholder={t('contact.form.subjectPlaceholder')}
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                variant="bordered"
                radius="sm"
                isRequired
              />
              <Textarea
                label={t('contact.form.message')}
                placeholder={t('contact.form.messagePlaceholder')}
                name="message"
                value={formState.message}
                onChange={handleChange}
                variant="bordered"
                radius="sm"
                minRows={4}
                isRequired
              />
              <Button
                type="submit"
                color="primary"
                className="w-full sm:w-auto"
                isLoading={isSubmitting}
                startContent={!isSubmitting && <Icon icon="lucide:send" width={18} />}
              >
                {t('contact.form.send')}
              </Button>
            </form>
          </CardBody>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Card className="border border-divider h-full">
          <CardBody className="p-6">
            <h3 className="text-xl font-semibold mb-6">{t('contact.info.title')}</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a 
                  key={index} 
                  href={info.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Icon icon={info.icon} width={20} />
                  </div>
                  <div>
                    <p className="text-default-500">{info.label}</p>
                    <p className="font-medium group-hover:text-primary transition-colors">{info.value}</p>
                  </div>
                </a>
              ))}

              <div className="pt-4">
                <p className="text-default-500 mb-3">{t('contact.info.followMe')}</p>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-default-100 hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <Icon icon="logos:github-icon" width={20} />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-default-100 hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <Icon icon="logos:linkedin-icon" width={20} />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-default-100 hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <Icon icon="logos:twitter" width={20} />
                  </a>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
};