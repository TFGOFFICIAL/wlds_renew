import React from 'react'
import CookieConsent from "react-cookie-consent";
import { useTranslation } from 'react-i18next';

export default function CookiePopUp() {
  const { t } = useTranslation()
  return (
    <CookieConsent location="bottom" cookieName="accepted" expires={1} overlay>
        {t('COOKIE_TXT')}
    </CookieConsent>
  )
}