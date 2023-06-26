import * as React from "react";

function TruckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0_1_1273)" stroke="#9F9F9F" strokeWidth={2}>
        <path
          d="M18.75 9.375h-5V6.25h3.327a.625.625 0 01.58.393l1.093 2.732zM1.25 11.25h12.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.688 16.875a1.875 1.875 0 100-3.75 1.875 1.875 0 000 3.75zM5.313 16.875a1.875 1.875 0 100-3.75 1.875 1.875 0 000 3.75z"
          strokeMiterlimit={10}
        />
        <path
          d="M12.813 15H7.186M3.438 15H1.875a.625.625 0 01-.625-.625v-8.75A.625.625 0 011.875 5H13.75v8.376M13.75 13.376V9.375h5v5a.624.624 0 01-.625.625h-1.563"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_1_1273">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default TruckIcon;
