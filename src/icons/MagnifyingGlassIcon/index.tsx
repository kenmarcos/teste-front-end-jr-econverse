import * as React from "react";

function MagnifyingGlassIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={28}
      height={28}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#prefix__clip0_1_1316)"
        stroke="#9F9F9F"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12.688 21.875a9.188 9.188 0 100-18.375 9.188 9.188 0 000 18.375zM19.184 19.184l5.315 5.316" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_1_1316">
          <path fill="#fff" d="M0 0h28v28H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default MagnifyingGlassIcon;
