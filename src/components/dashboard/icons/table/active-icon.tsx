// icon:file-arrow-up | Bootstrap https://icons.getbootstrap.com/ | Bootstrap
import * as React from 'react';

function ActiveIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1.5em"
      width="1.5em"
      {...props}
    >
      <path d="M8 11a.5.5 0 00.5-.5V6.707l1.146 1.147a.5.5 0 00.708-.708l-2-2a.5.5 0 00-.708 0l-2 2a.5.5 0 10.708.708L7.5 6.707V10.5a.5.5 0 00.5.5z" />
      <path d="M4 0a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2H4zm0 1h8a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V2a1 1 0 011-1z" />
    </svg>
  );
}

export default ActiveIcon;
