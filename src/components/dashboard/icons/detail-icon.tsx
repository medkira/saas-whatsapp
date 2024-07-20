// icon:list-details | Tabler Icons https://tablericons.com/ | Csaba Kissi
import * as React from 'react';
interface Props {
  size?: number;
  fill?: string;
  width?: number;
  height?: number;
}

function IconListDetails({ fill, size, height, width, ...props }: Props) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      //   height="1em"
      //   width="1em"
      width={size || width || 24}
      height={size || height || 24}
      //   {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M13 5h8M13 9h5M13 15h8M13 19h5" />
      <path d="M4 4 H8 A1 1 0 0 1 9 5 V9 A1 1 0 0 1 8 10 H4 A1 1 0 0 1 3 9 V5 A1 1 0 0 1 4 4 z" />
      <path d="M4 14 H8 A1 1 0 0 1 9 15 V19 A1 1 0 0 1 8 20 H4 A1 1 0 0 1 3 19 V15 A1 1 0 0 1 4 14 z" />
    </svg>
  );
}

export default IconListDetails;
