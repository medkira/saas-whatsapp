import * as React from 'react';

function AppointmentsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" fill="none" viewBox="0 0 15 15" {...props}>
      <path
        className="fill-default-400"
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2h1.5A1.5 1.5 0 0115 3.5v10a1.5 1.5 0 01-1.5 1.5h-12A1.5 1.5 0 010 13.5v-10A1.5 1.5 0 011.5 2H3V0h1v2h7V0h1v2zM6 8H3V7h3v1zm6-1H9v1h3V7zm-6 4H3v-1h3v1zm3 0h3v-1H9v1z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default AppointmentsIcon;
