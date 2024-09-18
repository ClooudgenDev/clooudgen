"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import swal from "sweetalert";
import { ImSpinner2 } from "react-icons/im";
import { Input } from "@/components/ui/input";
import { Team } from '@/lib/data/subscription/teamMake';
import { teamRequestAction } from "@/app/services/actions/teamRequestAction";

const TeamRequestForm = ({ className, captcha = true, team, cards, defaultData = { subject: '', messege: '' }, errors, setErrors }) => {
    const recaptcha = useRef(null);
    const formRef = useRef();
    const [checked, setChecked] = useState(true);
    const [isLoading, setIsLoading] = useState(false);


    // Function to validate form fields
    const validateForm = (data) => {
        const errors = {};
        if (!data.name.trim()) {
            errors.name = 'First name is required';
        }
        if (!data.phone.trim()) {
            errors.phone = 'WhatsApp number is required';
        }
        if (!data.message.trim()) {
            errors.message = 'Message is required';
        }
        if (!Object.keys(team).length) {
            errors.team = 'Please select at least one member and make sure the team selected card is on to process farther.';
        }
        cards.map(card => {

            if (card.isSwitchOn && card.hasTags && !card.selectedTags.length) {

                const current = Team.filter((team) => team.id === card.id)

                errors.team = `Please select at least one member from ${current[0].title}, and if you don't need any of them just turn the switch off.`
            }
        })

        return errors;
    };


    const removeErrors = (key) => {
        setErrors((prev) => {
            const newErrors = { ...prev };
            delete newErrors[key];
            return newErrors;
        });
    }

    const handleFormSubmit = async (e) => {

        e.preventDefault();
        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const message = e.target.message.value;
        const data = { team: team, contact: { name, phone, message } };
        const formData = { name, phone, message };
        const error = validateForm(formData)

        setErrors(error)

        if (Object.keys(error).length === 0) {
            console.log(team);
            // const text = `Thank you for selecting your team. Based on your preferences, you have chosen expertise in ${team.mern ? 'MERN: ' + team.mern + ', ' : ''}${team.react ? 'React: ' + team.react + ', ' : ''}${team.next ? 'Next: ' + team.next + ', ' : ''}${team.vue ? 'Vue: ' + team.vue + ', ' : ''}${team.node ? 'Node: ' + team.node + ', ' : ''}${team.laravel ? 'Laravel: ' + team.laravel + ', ' : ''}${team.express ? 'Express: ' + team.express + ', ' : ''}${team.reactNative ? 'React Native: ' + team.reactNative + ', ' : ''}${team.flutter ? 'Flutter: ' + team.flutter + ', ' : ''}${team.kotlin ? 'Kotlin: ' + team.kotlin + ', ' : ''}${team.java ? 'Java: ' + team.java + ', ' : ''}${team.uiUxDesigner ? 'UI/UX Designer: ' + team.uiUxDesigner + ', ' : ''}${team.illustrator ? 'Illustrator: ' + team.illustrator + ', ' : ''}${team.photoshop ? 'PhotoShop: ' + team.photoshop + ', ' : ''}${team.canva ? 'Canva: ' + team.canva + ', ' : ''}${team.videoEditor ? 'Video Editor: ' + team.videoEditor + ', ' : ''}${team.emailMarketing ? 'Email marketing: ' + team.emailMarketing + ', ' : ''}${team.seo ? 'SEO: ' + team.seo + ', ' : ''}${team.socialMediaMarketing ? 'Social Media marketing: ' + team.socialMediaMarketing + ', ' : ''}${team.contentMarketing ? 'Content marketing: ' + team.contentMarketing + ', ' : ''}${team.contentWriter ? 'Content writer: ' + team.contentWriter + ', ' : ''}${team.socialMediaManagement ? 'Social media management: ' + team.socialMediaManagement + ', ' : ''} and your message comes with:
            //  Name: ${data.contact.name}, Whatsapp: ${data.contact.phone} and Message: ${data.contact.message}.`;
            // swal({
            //     title: "Are you sure?",
            //     text: "<p>This is a paragraph.</p><ul><li>Item 1</li><li>Item 2</li></ul>",
            //     buttons: ["Edit", 'Confirm'],
            //     dangerMode: true,


            function generateListItems(obj) {
                return Object.entries(obj)
                    .map(([key, value]) => `<li class="capitalize">${key}: ${value}</li>`)
                    .join('');
            }
            swal({
                buttons: ["Edit", 'Confirm'],
                content: {
                    element: "div",
                    attributes: {
                        innerHTML: `
                <p class="text-start">Thank you for selecting your team. Based on your preferences, you have chosen expertise in</p>
                <ul class="grid grid-cols-2 justify-around text-start my-3">
                    ${generateListItems(team)} 
                </ul>
                <p class="text-start">and your message comes with: <span class="whitespace-nowrap">Name: ${data.contact.name}</span>, <span class="whitespace-nowrap">Whatsapp: ${data.contact.phone}</span> and Message: ${data.contact.message}.</p>
                 
            `,
                    },
                },
            })

                .then(async (submit) => {
                    if (submit) {
                        try {
                            setIsLoading(true);
                            const res = await teamRequestAction(data);
                            if (res?.success) {
                                formRef.current.reset();

                                setIsLoading(false);

                                swal("Thank you for your request. Within 1 hour, one of our executives will reach out to you via email or WhatsApp (if you've provided a WhatsApp number).", {
                                    icon: "success"
                                });

                                setChecked(true); // Re-disable the button after submission
                            } else {
                                throw new Error("Failed to add the message");
                            }
                        } catch (error) {
                            console.log(error);
                            setIsLoading(false);
                        }
                    } else {
                        swal("Feel free to adjust your team selection as needed. You can either select a new team or make changes to your current selection based on your preferences.", { buttons: 'Go ahead', });
                    }
                });

        }


    };

    const onReCAPTCHAChange = async (e) => {
        if (e) {
            setChecked(false);
        }
        const inputVal = await e.target[0].value;
        const tokenData = recaptcha.current.getValue();

    };

    return (
        <form
            onSubmit={handleFormSubmit}
            ref={formRef}
            className={cn("sm:grid grid-cols-2 gap-5 items-start", className)}
        >
            <div>
                <Input onChange={() => removeErrors('name')} label={"Name*"} type="text" name={"name"} placeholder={"Your Name"} error={errors?.name} />
            </div>


            <div className="flex flex-col w-full">
                <Input onChange={() => removeErrors('phone')} label={"Phone*"} type="number" name={"phone"} placeholder={"WhatsApp number"} error={errors?.phone} />
                <p className="text-[13px] text-red-600 font-medium" >Note: <span className='text-foreground'>Ensure the number is on WhatsApp</span></p></div>

            <div className="flex flex-col col-span-2">
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

            <div className="flex flex-col overflow-hidden sm:overflow-visible sm:max-w-[300px]">
                {captcha && <ReCAPTCHA
                    onClick={(e) => { e.stopPropagation() }}
                    sitekey="6LcEfuIpAAAAAEx6ycqZx_EDADZ9GphiqVliG0pY"
                    onChange={onReCAPTCHAChange}
                    ref={recaptcha}
                />}
                <Button
                    disabled={checked}
                    type="submit"
                    className={`w-1/2 mt-5 ${checked ? 'disabled:bg-gray-300' : ''}`}
                >
                    {isLoading ? <ImSpinner2 className="animate-spin" size={24} /> : "Send Request"}
                </Button>
            </div>
        </form>
    );
};

export default TeamRequestForm;
