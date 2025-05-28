import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="light" 
          size="sm"
          startContent={<Icon icon="lucide:globe" width={18} />}
          endContent={<Icon icon="lucide:chevron-down" width={16} />}
        >
          {currentLanguage === 'es' ? 'ES' : 'EN'}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Language selection">
        <DropdownItem 
          key="es" 
          startContent={<Icon icon="lucide:check" className={currentLanguage === 'es' ? 'opacity-100' : 'opacity-0'} width={16} />}
          onPress={() => changeLanguage('es')}
        >
          {t('language.es')}
        </DropdownItem>
        <DropdownItem 
          key="en" 
          startContent={<Icon icon="lucide:check" className={currentLanguage === 'en' ? 'opacity-100' : 'opacity-0'} width={16} />}
          onPress={() => changeLanguage('en')}
        >
          {t('language.en')}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};