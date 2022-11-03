import React, { useState } from 'react';
import { addDoc, collection } from "firebase/firestore"
import user_img from './../assets/img/user.png'
import { db } from '../firebase';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation()
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formKey, setFormkey] = useState(0)
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const resetForm = () => {
    setFirstname("");
    setLastname("");
    setEmail("");
    setMessage("");
    setFormkey(formKey + 1);
  }

  const createContact = async (fn, ln, em, ms) => {
    const contactRef = collection(db, "contact");
    if(fn !== "" && ln !== "" && em !== "" && ms !== ""){
      await addDoc(contactRef, {firstname: fn, lastname: ln, email: em, message: ms});
      resetForm();
      setError(false);
      setSuccess(true)
    }else {
      setSuccess(false);
      setError(true);
    }   
  };

  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:gap-x-[100px]'>
          <div className='flex-1 flex flex-col justify-end'>
            <h2 className='title'>{t("CONTACT_TITLE")}</h2>
            <div className='subtitle flex flex-col lg:flex-row'>{t("CONTACT_SUBTITLE_1")}<div className='text-violet-700 lg:mx-1'>{t("CONTACT_SUBTITLE_2")}</div>{t("CONTACT_SUBTITLE_3")}</div>
            <div className='subtitle flex flex-col'>{t("CONTACT_EMAIL_ADDRESSE")}<div className='text-violet-700'>{t("CONTACT_EA")}</div></div>             
            <div className='flex flex-row justify-center w-full mt-5 transition-all duration-500'>
              {error && <div className='bg-gradient-to-r from-red-600 to-red-500 py-5 px-10 rounded-full shadow-2xl text-white'>{t("ERROR")}</div>}
              {success && <div className='bg-gradient-to-r from-green-600 to-green-500 py-5 px-10 rounded-full shadow-2xl text-white'>{t("SUCCESS")}</div>}
            </div>
            <div key={formKey} className='flex flex-col mx-auto border p-10 mt-10 rounded-2xl shadow-xl'>
              <div className='flex flex-col lg:flex-row lg:gap-20 mb-10'>
                <div className='flex flex-col mb-5'>
                  <div className='flex flex-row'>
                    <h2 className='text-xl mb-2'>{t("CONTACT_FN_TITLE")}</h2>
                    <div className='text-red-500 ml-2'>*</div>
                  </div>
                  <div className='flex flex-row items-center'>
                    <div className='border-y border-l p-3 rounded-l-xl'><img alt='' className='w-5' src={user_img} /></div>
                    <input onChange={(e) => {setFirstname(e.target.value);}} type='text' className='border p-2 rounded-r-xl' placeholder={t("CONTACT_FN_PLACEHOLDER")} />
                  </div>
                </div>
                <div className='flex flex-col'>
                  <div className='flex flex-row'>
                    <h2 className='text-xl mb-2'>{t("CONTACT_LN_TITLE")}</h2>
                    <div className='text-red-500 ml-2'>*</div>
                  </div>
                  <div className='flex flex-row items-center'>
                    <div className='border-y border-l p-3 rounded-l-xl'><img alt='' className='w-5' src={user_img} /></div>
                    <input onChange={(e) => {setLastname(e.target.value);}} type='text' className='border p-2 rounded-r-xl' placeholder={t("CONTACT_LN_PLACEHOLDER")} />
                  </div>
                </div>
              </div>
              <div className='mb-10'>
                <div className='flex flex-row'>
                  <h2 className='text-xl mb-2'>{t("CONTACT_EM_TITLE")}</h2>
                  <div className='text-red-500 ml-2'>*</div>
                </div>
                <div className='flex flex-row items-center'>
                  <div className='border-y border-l py-2 px-3 rounded-l-xl'>@</div>
                  <input onChange={(e) => {setEmail(e.target.value);}} type='email' className='border p-2 lg:w-[400px] rounded-r-xl' placeholder={t("CONTACT_EM_PLACEHOLDER")} />
                </div>
              </div>
              <div>
                <div className='flex flex-row'>
                  <h2 className='text-xl mb-2'>{t("CONTACT_ME_TITLE")}</h2>
                  <div className='text-red-500 ml-2'>*</div>
                </div>
                <textarea onChange={(e) => {setMessage(e.target.value);}} className='border w-[65vw] lg:w-[700px]' />
              </div>
              <div className='w-full flex flex-row justify-end mt-10'><button onClick={() => {createContact(firstname, lastname, email, message);}} className='px-3 py-2 bg-gray-600 hover:bg-gray-800 text-white rounded-full'>{t("CONTACT_BTN_TXT")}</button></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
