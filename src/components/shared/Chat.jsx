'use client'

// import { useEffect } from 'react';

// const Chat = () => {
//     useEffect(() => {
//         // Add Tawk.to script
//         var Tawk_API = Tawk_API || {},
//             Tawk_LoadStart = new Date();
//         (function () {
//             var s1 = document.createElement("script"),
//                 s0 = document.getElementsByTagName("script")[0];
//             s1.async = true;
//             s1.src = 'https://embed.tawk.to/660b2ad71ec1082f04ddae9f/1hqdpundk';
//             s1.charset = 'UTF-8';
//             s1.setAttribute('crossorigin', '*');
//             s0.parentNode.insertBefore(s1, s0);
//         })();
//     }, []);

// };

// export default Chat;


import { useEffect } from 'react';

const Chat = () => {
    useEffect(() => {
        const onLoad = () => {
            const tawkContainer = document.querySelector("#tawkchat-container");
            if (tawkContainer) {
                tawkContainer.style.width = "400px !important";
                tawkContainer.style.height = "500px !important";
            }
        };

        window.Tawk_API = window.Tawk_API || {};
        window.Tawk_LoadStart = new Date();

        const s1 = document.createElement("script");
        const s0 = document.getElementsByTagName("script")[0];

        s1.async = true;
        s1.src = 'https://embed.tawk.to/660b2ad71ec1082f04ddae9f/1hqdpundk';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');

        s0.parentNode.insertBefore(s1, s0);

        window.Tawk_API.onLoad = onLoad;

        return () => {
            window.Tawk_API = undefined;
        };
    }, []);

    return null;
};

export default Chat;