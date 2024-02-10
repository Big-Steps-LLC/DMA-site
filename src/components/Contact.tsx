import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";
import axios from "axios";
import { Highlight, themes } from "prism-react-renderer";
import { contactData, toastMessages } from "../assets/lib/data.tsx";
import { useSectionInView } from "../assets/lib/hooks";
import { useLanguage } from "../context/language-context";
import { ToastContainer, toast } from "react-toastify";
import { useTheme } from "../context/theme-context";
import { motion, useScroll, useTransform } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";


const apiBaseUrl = import.meta.env.VITE_BASEURL;
console.log("API Base URL:", apiBaseUrl);

const Contact: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [cursor, setCursor] = useState<string>("");
  const [lastUpdatedField, setLastUpdatedField] = useState<string | null>(null);
  const { ref } = useSectionInView("Contact");
  const { language } = useLanguage();
  const { theme } = useTheme();

  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);






  const notifySentForm: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
  

    const protocol = "https";
    const host = "192.168.1.178";
    const port = "8443"; 
    const apiUrlString = `${protocol}://${host}:${port}/send-email`;
    const formDataObj: Record<string, FormDataEntryValue> = {};
    const data = new FormData(e.currentTarget);
  
    for (let [key, value] of data.entries()) {
      formDataObj[key] = sanitizeInput(value);
    }
  
    if (!validateFormData(formDataObj)) {
      toast.error("Please correct the form data.");
      return;
    }
  
    try {
      const formDataJSON = JSON.stringify(formDataObj);

      console.log("Form data JSON:", formDataJSON);
      console.log("API URL:", apiUrlString);

      const response = await axios.post(apiUrlString, formDataJSON, {
        headers: { 'Content-Type': 'application/json' },
      });

      console.log("This is what the api responded: ", response);
  
      const successMessage = language === "DE" ? toastMessages.successEmailSent.de : toastMessages.successEmailSent.en;
      toast.success(successMessage);
    } catch (error) {
      console.error("Error occurred while sending email:", error); // Log the error for debugging purposes
  
      const errorMessage = language === "DE" ? toastMessages.failedEmailSent.de : toastMessages.failedEmailSent.en;
      toast.error(errorMessage);
  }  
  };


  


  
  function sanitizeInput(value: FormDataEntryValue): string | FormDataEntryValue {
    if (typeof value === 'string') {
      return value.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    return value;
  }
  

  function validateFormData(formDataObj: Record<string, FormDataEntryValue>): boolean {
    // Example validation rules
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const requiredFields = ['email', 'name']; // Add more required fields as needed
  
    for (const field of requiredFields) {
      const value = formDataObj[field];
      if (!value || typeof value !== 'string' || value.trim() === '') {
        toast.error(`${field} is required.`);
        return false;
      }
    }
  
    // Specific field validation
    if (typeof formDataObj['email'] === 'string' && !emailRegex.test(formDataObj['email'])) {
      toast.error("Invalid email format.");
      return false;
    }
  
    // Add more field-specific validations as necessary
  
    return true; // All validations passed
  }
  
  
  
  

  const handleInputFocus = (fieldName: string) => {
    setCursor(`${fieldName}${cursor}`);
  };



  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "subject") {
      setSubject(value);
    } else if (name === "message") {
      setMessage(value);
    }

    setLastUpdatedField(name);
  };

  const [cursorBlink, setCursorBlink] = useState<boolean>(true);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorBlink((prev) => !prev);
    }, 400);

    return () => {
      clearInterval(blinkInterval);
    };
  }, []);

  const codeSnippet = `${name}${
    lastUpdatedField === "name" ? (cursorBlink ? "|" : " ") : ""
  }\n
Get ready to grow your business!\n`;



  return (
    <React.Fragment>
      <section
        className="contact-container w-full min-[1921px]:px-[55rem] mt-16"
        id="contact"
      >
        <div
          className="title-container flex flex-col gap-6 justify-center items-center py-16  max-lg:p-16"
          ref={ref}
        >
          <motion.div
            ref={animationReference}
            style={{
              scale: scaleProgess,
              opacity: opacityProgess,
              textAlign: "center",
            }}
          >
         

          <h2 className="text-[--black] text-center" style={{ marginTop: '80px' }}>
            {language === "DE"
              ? contactData.description.de
              : contactData.description.en}
          </h2>
          </motion.div>
        </div>
        <div className="flex flex-row justify-center items-start px-32 pt-32 mb-32 max-lg:flex-col max-lg:p-10">
          <div className="w-1/34 md:w-1/3 bg-[--darkblue] text-[--white] flex flex-col justify-center items-start gap-10 rounded-2xl p-8 md:p-20 border-solid border-[0.4rem] border-[--lightblue] hover:border-orange duration-500 transition-all quote-outer-container text-left max-lg:hidden cursor-progress">
            <Highlight
              code={codeSnippet}
              language="tsx"
              theme={themes.nightOwl}
            >
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={`${className} text-4xl `} style={style}>
                  {tokens.map((line, i) => (
                    <div {...getLineProps({ line, key: i })}>
                      {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </div>
          <form
            className="flex flex-col gap-6 justify-center items-center  px-32 w-1/2 max-lg:w-full max-lg:p-10"
            onSubmit={notifySentForm}
            autoComplete="off"
          >
            {contactData.inputfields.map((input, index) => (
              <input
                key={index}
                type={input.type}
                placeholder={
                  language === "DE"
                    ? `${input.placeholder.de}`
                    : `${input.placeholder.en}`
                }
                name={input.name}
                value={
                  input.name === "name"
                    ? name
                    : input.name === "email"
                    ? email
                    : input.name === "subject"
                    ? subject
                    : message
                }
                required
                onFocus={() => {
                  handleInputFocus(input.name);
                  setLastUpdatedField(input.name);
                }}
                onMouseEnter={() => {
                  handleInputFocus(input.name);
                  setLastUpdatedField(input.name);
                }}
                onChange={handleInputChange}
                className={`${
                  theme === "dark"
                    ? "bg-[--blackblue] dark-mode-shadow "
                    : "bg-[--icewhite] dark-shadow "
                }`}
              />
            ))}
            <textarea
              rows={contactData.textarea.rows}
              placeholder={
                language === "DE"
                  ? `${contactData.textarea.placeholder.de}`
                  : `${contactData.textarea.placeholder.en}`
              }
              name={contactData.textarea.name}
              onFocus={() => {
                handleInputFocus(contactData.textarea.name);
                setLastUpdatedField(contactData.textarea.name);
              }}
              onMouseEnter={() => {
                handleInputFocus(contactData.textarea.name);
                setLastUpdatedField(contactData.textarea.name);
              }}
              onChange={handleInputChange}
              className={`${
                theme === "dark"
                  ? "bg-[--blackblue] dark-mode-shadow"
                  : "bg-[--icewhite] dark-shadow"
              }`}
            />
            <div className="privacy-checkbox flex gap-16">
              <label
                className="block w-2 h-2 cursor-pointer"
                htmlFor="checkbox-label"
              >
                <input
                  type="checkbox"
                  required
                  name="checkbox-label"
                  id="checkbox-label"
                />
                <span className="checkbox"></span>
              </label>
              <p>
                {language === "DE"
                  ? `${contactData.privacyOptIn.checkbox.de}`
                  : `${contactData.privacyOptIn.checkbox.en}`}
              </p>
            </div>
            <p>
              {language === "DE"
                ? `${contactData.privacyOptIn.description.de}`
                : `${contactData.privacyOptIn.description.en}`}
            </p>
            <Button
              value={
                language === "DE"
                  ? `${contactData.button.value.de}`
                  : `${contactData.button.value.en}`
              }
              iconSVG={contactData.icon}
              buttoncolor={contactData.colors.main}
              iconcolor={contactData.colors.icon}
              type="submit"
              elementType="input"
            />
            <ToastContainer
              className="w-max text-3xl block p-3 max-lg:w-full "
              position="bottom-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme={theme}
            />
          </form>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
