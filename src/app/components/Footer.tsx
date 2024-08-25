import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-blue-600 text-white p-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
                {/* Logo and title */}
                <div className="flex items-center mb-4 md:mb-0">
                    <img src="/minber272x90.png" alt="Logo" className="h-10 mr-2" />
                    <h1 className="text-xl font-bold">MINBER TV</h1>
                </div>

                {/* Description */}
                <p className="text-center md:text-left md:w-1/3 mb-4 md:mb-0">
                    The poetry competition was conceived as a platform to celebrate the beauty and power of words. Our goal was to bring
                    together poets from diverse backgrounds, each with a unique voice and perspective, to share their art with a wider
                    audience. We believe in the transformative power of poetry to inspire, provoke thought, and evoke deep emotions.
                </p>

                {/* Social Media Links */}
                <div class="flex flex-col mb-4">
    <div class="flex space-x-4">
        <a href="#" class="text-white hover:text-gray-300" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.35C0 23.4.6 24 1.325 24h21.35c.725 0 1.325-.6 1.325-1.325V1.325C24 .6 23.4 0 22.675 0zM12 24V12h-3v-4h3V6c0-3.1 1.9-5 4.7-5 1.3 0 2.5.1 2.9.1v3.4h-2c-1.6 0-1.9.8-1.9 1.9v2.6h4l-.5 4h-3.5v12h-6z" />
            </svg>
        </a>
        <a href="#" class="text-white hover:text-gray-300" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.2c3.1 0 3.5 0 4.8.1 1.2 0 2.2.4 2.9 1.1.7.7 1.1 1.7 1.1 2.9.1 1.3.1 1.7.1 4.8s0 3.5-.1 4.8c0 1.2-.4 2.2-1.1 2.9-.7.7-1.7 1.1-2.9 1.1-1.3.1-1.7.1-4.8.1s-3.5 0-4.8-.1c-1.2 0-2.2-.4-2.9-1.1-.7-.7-1.1-1.7-1.1-2.9-.1-1.3-.1-1.7-.1-4.8s0-3.5.1-4.8c0-1.2.4-2.2 1.1-2.9.7-.7 1.7-1.1 2.9-1.1zm0-2C8.6 0 8.2 0 7.5 0c-3.5 0-5.9.1-7.8 1.1-1.9 1-3.1 2.5-3.8 4.5C0 6.5 0 7.9 0 12s0 5.5 1.1 7.8c.7 2 1.9 3.5 3.8 4.5 1.9 1 4.3 1.1 7.8 1.1s5.5 0 7.8-1.1c1.9-1 3.1-2.5 3.8-4.5C24 17.5 24 16.1 24 12s0-5.5-1.1-7.8C21.9 2.5 20.7 1 18.8 0 16.9 0 15.5 0 12 0z" />
            </svg>
        </a>
    </div>
    <div class="flex space-x-4 mt-4">
        <a href="#" class="text-white hover:text-gray-300" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.23 0h-20.46C.99 0 0 .99 0 2.23v19.54C0 23.01.99 24 2.23 24h20.54c1.24 0 2.23-.99 2.23-2.23V2.23C24 .99 23.01 0 22.23 0zm-14.74 20h-3.4v-10h3.4v10zm-1.7-11.7c-1.08 0-1.95-.87-1.95-1.95s.87-1.95 1.95-1.95 1.95.87 1.95 1.95-.87 1.95-1.95 1.95zm16.7 11.7h-3.4v-5.5c0-1.29-.03-2.93-1.77-2.93-1.77 0-2.04 1.38-2.04 2.83v5.6h-3.4v-10h3.26v1.36h.05c.45-.85 1.55-1.75 3.2-1.75 3.43 0 4.07 2.26 4.07 5.2v6.19z" />
            </svg>
        </a>
        <a href="#" class="text-white hover:text-gray-300" aria-label="Website">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12 12 6.627 0 12-5.372 12-12C24 5.373 18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm-1-15h2v6h-2zm0 8h2v2h-2z" />
            </svg>
        </a>
    </div>
</div>
            </div>
            <hr className="border-gray-300 w-full mb-4" />
            <p className="text-center text-sm">
                © 2024 SkylinkICT. All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;
