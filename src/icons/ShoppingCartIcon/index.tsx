import * as React from "react";

function ShoppinCartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={32}
      height={32}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#prefix__clip0_1_1261)"
        stroke="#9F9F9F"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M23 23H8.727L5.24 3.821A1 1 0 004.256 3H2M10 28a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM23 28a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
        <path d="M7.818 18h15.695a2 2 0 001.967-1.642L27 8H6" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_1_1261">
          <path fill="#fff" d="M0 0h32v32H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default ShoppinCartIcon;
