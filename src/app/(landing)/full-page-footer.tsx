import React from 'react';

export default function FullPageFooter() {
  return (
    <footer
      className="flex min-h-[100vh] flex-col items-center  justify-between bg-gradient-to-br 
         from-gray-900 to-gray-800 px-4 py-8 pt-28 text-gray-100
          sm:pt-36"
    >
      <div className="container mx-auto max-w-4xl">
        <h1 className="mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl md:text-5xl">
          MMC Moknine
        </h1>
        <p className="mb-8 text-base text-gray-300 sm:text-lg">
          Agent tunisien des machines à coudre JAKI
        </p>

        <div className="mb-8 grid gap-8 sm:grid-cols-2">
          <div className="space-y-4">
            <h2 className="mb-4 text-xl font-bold text-gray-100 sm:text-2xl">
              Informations de Contact
            </h2>
            <ContactInfo icon="phone" text="+216 98 403 153" />
            <ContactInfo icon="email" text="mmc184@yahoo.com" />
            <ContactInfo
              icon="location"
              text="AVENUE HABIB BOURGUIBA MOKNINE, Tunisia"
            />
          </div>

          <div className="space-y-4">
            <h2 className="mb-4 text-xl font-bold text-gray-100 sm:text-2xl">
              Suivez-nous
            </h2>
            <div className="flex justify-start space-x-4 sm:justify-start">
              <SocialLink
                href="https://www.facebook.com/mondialemateriel.confection1"
                icon="facebook"
              />
              <SocialLink href="" icon="twitter" />
              <SocialLink href="" icon="linkedin" />
            </div>
          </div>
        </div>
      </div>
      <p className=" border-t border-gray-700 pt-6 text-xs text-gray-400 sm:text-sm">
        &copy; 2024 MMC Moknine. Tous droits réservés.
      </p>
    </footer>
  );
}
type ContactInfoProps = {
  icon: 'phone' | 'email' | 'location';
  text: string;
};

function ContactInfo({ icon, text }: ContactInfoProps) {
  const iconMap = {
    phone: (
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    ),
    email: (
      <>
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </>
    ),
    location: (
      <path
        clipRule="evenodd"
        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
        fillRule="evenodd"
      />
    ),
  };

  return (
    <p className="flex items-center text-sm sm:text-base">
      <svg
        className="mr-3 h-5 w-5 flex-shrink-0"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        {iconMap[icon]}
      </svg>
      <span className="break-all">{text}</span>
    </p>
  );
}

type SocialLinkProps = {
  href: string;
  icon: 'facebook' | 'twitter' | 'linkedin';
};

function SocialLink({ href, icon }: SocialLinkProps) {
  const iconMap = {
    facebook: (
      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
    ),
    twitter: (
      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
    ),
    linkedin: (
      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
    ),
  };

  return (
    <a
      className="text-gray-300 transition-colors duration-300 hover:text-blue-500"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <svg
        className="h-6 w-6 sm:h-8 sm:w-8"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {iconMap[icon]}
      </svg>
    </a>
  );
}
