import * as React from "react";

function UserCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={32}
      height={32}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0_1_1254)" stroke="#9F9F9F" strokeWidth={2}>
        <path
          d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12z"
          strokeMiterlimit={10}
        />
        <path d="M16 20a5 5 0 100-10 5 5 0 000 10z" strokeMiterlimit={10} />
        <path
          d="M7.975 24.922a9.004 9.004 0 0116.05 0"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_1_1254">
          <path fill="#fff" d="M0 0h32v32H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default UserCircleIcon;
