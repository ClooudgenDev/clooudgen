'use client';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import swal from 'sweetalert';
import { contactUsAction } from '@/app/services/actions/contactUs';
import { ImSpinner2 } from 'react-icons/im';
import ReCAPTCHA from 'react-google-recaptcha';
import { Input } from '@/components/ui/input';

const ContactForm = ({
  className,
  captcha = true,
  defaultData = { subject: '', messege: '' },
}) => {
  const recaptcha = useRef(null);
  const [checked, setChecked] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const formRef = useRef();

  /**-----------------------------------------------------------------------------
 * Function to validate form fields.
 * 
 * @param {Object} data - An object containing form field values.
 * @param {Object} fields - An object containing information about the form fields.
 * @returns {Object} An object containing error messages for invalid form fields for conditional rendering.
 */
  const validateForm = (data, fields) => {
    const errors = {};

    // Validate first name field
    if (!data.name.trim()) {
      errors.name = 'First name is required.';
    };

    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate email field
    if (!data.email.trim()) {
      errors.email = 'Email is required.';
    } else if (!emailRegex.test(data.email.trim())) {
      errors.email = 'Please enter a valid email.';
    };

    // Validate subject field
    if (!data.subject.trim()) {
      errors.subject = 'Subject is required';
    };

    // Validate WhatsApp number field
    if (!data.phone.trim()) {
      errors.phone = 'WhatsApp number is required';
    };

    // Validate message field
    if (!data.message.trim()) {
      errors.message = 'Message is required';
    };

    return errors;
  };//-------------------------------------------------------------------

  /**
   * Function to remove error messages for a specific form field.
   * 
   * @param {string} key - The key of the form field for which error messages should be removed.
   * @param {function} setErrors - A function to update the errors state in the component.
   */
  const removeErrors = (key) => {
    setErrors((prev) => {
      // Create a copy of the previous errors object
      const newErrors = { ...prev };

      // Remove the error message associated with the specified key
      delete newErrors[key];
      // Return the updated errors object
      return newErrors;
    });
  };//-------------------------------------------------------------


  /**
  * Function to handle form submission.
  * 
  * @param {Event} e - The event object representing the form submission.
  */
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Extract form field values
    const name = e.target.name?.value;
    const email = e.target.email?.value;
    const phone = e.target.phone?.value;
    const subject = e.target.subject?.value;
    const message = e.target.message?.value;
    const data = { name, email, phone, subject, message };

    // Validate form fields
    const error = validateForm(data, { name, email, phone, subject, message });
    setErrors(error);

    // If there are no validation errors, submit the form
    if (Object.keys(error).length === 0) {
      try {
        setIsLoading(true);

        // Submit form data
        const res = await contactUsAction(data);

        // If submission is successful, reset the form and show success message
        if (res?.success) {
          formRef.current.reset();
          setIsLoading(false);
          swal(
            'Thank you for your request. Within 1 hour, an executive will contact with you on email or WhatApp (If you provide a WhatApp number)', {
            icon: "success"
          }
          );
          setChecked(true); // Re-disable the button after submission
        } else {
          throw new Error('Failed to add the message');
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
  }; //--------------------


  /**
 * Function to handle changes in the reCAPTCHA widget.
 * 
 * @param {Event} e - The event object representing the change in the reCAPTCHA widget.
 * @param {function} setChecked - A function to update the checked state in the component.
 */
  const onReCAPTCHAChange = async (e) => {
    if (e) {
      setChecked(false);
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      ref={formRef}
      className={cn('grid md:grid-cols-2 grid-cols-1 sm:gap-5 gap-3  ', className)}
    >
      <div className='w-full'>
        <Input  onChange={() => removeErrors('name')} label={"Name*"} type="text" name={"name"} id={"name"} placeholder={"Your Name"} error={errors?.name} />
      </div>

      <div className='w-full'>
        <Input onChange={() => removeErrors('email')} label={"Email*"} type="text" name={"email"} id={"email"} placeholder={"Your Email"} error={errors?.email} />
      </div>
      <div className='w-full'>
        <Input defaultValue={defaultData.subject} onChange={() => removeErrors('subject')} label={"Subject*"} type="subject" name={"subject"} id={"subject"} placeholder={"Subject here"} error={errors?.subject} />
      </div>

      <div className="flex flex-col w-full">
        <Input onChange={() => removeErrors('phone')} label={"Phone*"} type="number" name={"phone"} id={"phone"} placeholder={"WhatsApp number"} error={errors?.phone} />
        <p className="text-[13px] text-red-600 font-medium" >Note: <span className='text-foreground'>Ensure the number is on WhatsApp</span></p>
      </div>

      <div className="flex flex-col w-full md:col-span-2 sm:-mt-4">
        <Textarea
          onChange={() => removeErrors('message')}
          id="message"
          name="message"
          label={'Message*'}
          defaultValue={defaultData.messege}
          placeholder="Your Message"
          error={errors?.message}
        />
      </div>

      <div className="flex flex-col sm:overflow-visible overflow-hidden sm:max-w-full max-w-[310px] sm:mt-0 mt-3">
        {captcha && (
          <ReCAPTCHA
            onClick={(e) => {
              e.stopPropagation();
            }}
            sitekey="6LcEfuIpAAAAAEx6ycqZx_EDADZ9GphiqVliG0pY"
            onChange={onReCAPTCHAChange}
            ref={recaptcha}
            className=''
          />
        )}
        <Button
          disabled={checked}
          type="submit"
          className={`w-full sm:w-2/3 mt-3 ${checked ? 'disabled:bg-gray-300' : ''
            }`}
          variant="outline"
        >
          {isLoading ? (
            <ImSpinner2 className="animate-spin" size={24} />
          ) : (
            'Submit'
          )}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;