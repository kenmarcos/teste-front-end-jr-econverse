import * as React from "react";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={23}
      height={22}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0_1_1492)" fill="#fff">
        <path d="M11.488 5.351a5.647 5.647 0 00-5.65 5.645c0 3.12 2.53 5.645 5.65 5.645a5.647 5.647 0 005.65-5.645c0-3.12-2.53-5.645-5.65-5.645zm0 9.31a3.664 3.664 0 110-7.329 3.665 3.665 0 110 7.328z" />
        <path d="M16.022.07c-2.025-.093-7.043-.089-9.07 0C5.168.155 3.597.585 2.33 1.85.213 3.966.484 6.817.484 10.998c0 4.279-.239 7.063 1.847 9.147 2.125 2.123 5.02 1.845 9.155 1.845 4.243 0 5.707.003 7.207-.577 2.04-.791 3.58-2.613 3.73-5.884.095-2.025.09-7.038 0-9.063-.182-3.862-2.256-6.204-6.4-6.395zm3.207 18.675c-1.388 1.387-3.314 1.263-7.77 1.263-4.587 0-6.426.068-7.769-1.276-1.546-1.538-1.266-4.006-1.266-7.75 0-5.064-.52-8.711 4.567-8.971 1.17-.042 1.513-.055 4.456-.055l.041.027c4.89 0 8.726-.511 8.956 4.57.052 1.16.064 1.509.064 4.444 0 4.53.085 6.379-1.279 7.748z" />
        <path d="M17.36 6.448a1.32 1.32 0 10.002-2.64 1.32 1.32 0 00-.001 2.64z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_1_1492">
          <path fill="#fff" transform="translate(.473)" d="M0 0h22.02v22H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default InstagramIcon;
