'use client';
import { contactUsAction } from '@/app/services/actions/contactUs';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import React, { useRef, useState } from 'react';
import swal from 'sweetalert';
// import { ImSpinner2 } from 'react-icons/im';

export default function OrderForm({
  className,
  // captcha = true,
  defaultData = { name: '', email: '', phone: '', address: '' },
}) {
  const recaptcha = useRef(null);
  const [checked, setChecked] = useState(false); // State for checkbox
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
    }

    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate email field
    if (!data.email.trim()) {
      errors.email = 'Email is required.';
    } else if (!emailRegex.test(data.email.trim())) {
      errors.email = 'Please enter a valid email.';
    }

    // Validate subject field
    if (!data.address.trim()) {
      errors.address = 'Address is required';
    }

    // Validate WhatsApp number field
    if (!data.phone.trim()) {
      errors.phone = 'WhatsApp number is required';
    }

    return errors;
  }; //-------------------------------------------------------------------

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
  }; //-------------------------------------------------------------

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
    const address = e.target.address?.value;
    const data = { name, email, phone, address };

    // Validate form fields
    const error = validateForm(data, { name, email, phone, address });
    setErrors(error);

    // If there are no validation errors, submit the form
    if (Object.keys(error).length === 0 && checked) {
      try {
        setIsLoading(true);

        // Submit form data
        const res = await contactUsAction(data);

        // If submission is successful, reset the form and show success message
        if (res?.success) {
          formRef.current.reset();
          setIsLoading(false);
          swal(
            'Thank you for your order!',
            'We will get back to you as soon as possible.',
            {
              icon: 'success',
            }
          );
        } else {
          throw new Error('Failed to add your order');
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
  }; //--------------------

  return (
    <form onSubmit={handleFormSubmit} ref={formRef}>
      <div
        className={cn(
          'grid md:grid-cols-2 grid-cols-1 sm:gap-5 gap-3  ',
          className
        )}
      >
        <div className="w-full">
          <Input
            onChange={() => removeErrors('name')}
            label={'Name*'}
            type="text"
            name={'name'}
            id={'name'}
            placeholder={'Your Name'}
            error={errors?.name}
          />
        </div>

        <div className="w-full">
          <Input
            onChange={() => removeErrors('email')}
            label={'Email*'}
            type="text"
            name={'email'}
            id={'email'}
            placeholder={'Your Email'}
            error={errors?.email}
          />
        </div>

        <div className="flex flex-col w-full">
          <Input
            onChange={() => removeErrors('phone')}
            label={'Phone*'}
            type="number"
            name={'phone'}
            id={'phone'}
            placeholder={'WhatsApp number'}
            error={errors?.phone}
          />
          <p className="text-[13px] text-red-600 font-medium">
            Note:{' '}
            <span className="text-foreground">
              Ensure the number is on WhatsApp
            </span>
          </p>
        </div>
        <div className="w-full">
          <Input
            onChange={() => removeErrors('address')}
            label={'Address*'}
            type="text"
            name={'address'}
            id={'address'}
            placeholder={'Your Address'}
            error={errors?.address}
          />
        </div>
        <div className=""></div>
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          name="terms"
          id="terms"
          checked={checked}
          onChange={() => setChecked(!checked)}
          className="w-6 h-6 "
        />
        <label htmlFor="terms" className="ml-2 text-lg my-3">
          I am ready to order your product
        </label>
      </div>

      <input
        type="submit"
        value="Submit"
        disabled={!checked || isLoading} // Disable if checkbox not checked or loading
        className={`mt-3 w-full py-3 rounded-md text-foreground text-xl ${
          !checked || isLoading
            ? 'disabled:bg-gray-300'
            : 'bg-primary cursor-pointer text-white w-full  border  hover:bg-background hover:text-foreground border-primary duration-300 ease-in'
        }`}
      />
    </form>
  );
}
