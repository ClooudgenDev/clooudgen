"use client"
import React from 'react';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from '@/components/ui/button';
import ContactForm from '../form/ContactForm';
import Swal from 'sweetalert'; 

const SendRequDialog = () => {

    const handleSendClick = () => {
        // Trigger the thank you Swal notification
        Swal.fire({
            title: 'Thank you!',
            text: 'Your request has been sent.',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Send Request</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className='text-center'>
                        <h3 className='text-center'>Ready to send a team request?</h3>
                    </DialogTitle>
                </DialogHeader>

                {/* Form */}
                <ContactForm email={false} subject={false} />

                <DialogFooter>
                    <DialogClose asChild>
                        <Button>Change</Button>
                    </DialogClose>
                    <Button type="button" onClick={handleSendClick}>Send</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default SendRequDialog;
