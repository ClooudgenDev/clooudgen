import React from 'react';
import { Button } from '../ui/button';

const FourButton = () => {
    return (
        <div className="grid justify-center grid-cols-2 gap-3 my-5 mt-5 sm:grid-cols-4 md:mt-10">
            <a
                target="_blank"
                href="https://tawk.to/chat/660b2ad71ec1082f04ddae9f/1hqdpundk"
            >
                <Button className="w-full uppercase bg-primary text-background lg:w-auto hover:text-foreground effect-white">
                    Live Chat
                </Button>
            </a>

            <a target="_blank" href="https://wa.me/8801531770084">
                <Button className="w-full uppercase bg-primary text-background lg:w-auto hover:text-foreground effect-white">
                    WhatsApp
                </Button>
            </a>

            <a target='_blank' href="tel:8801531770084">
                <Button className="w-full uppercase bg-primary text-background lg:w-auto hover:text-foreground effect-white">
                    Call Now
                </Button>
            </a>
            <a target='_blank' href="mailto:info@clooudgen.com">
                <Button className="w-full uppercase bg-primary text-background lg:w-auto hover:text-foreground effect-white">
                    Mail Now
                </Button>
            </a>
        </div>
    );
};

export default FourButton;