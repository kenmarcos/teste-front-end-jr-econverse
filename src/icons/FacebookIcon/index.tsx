import * as React from "react";

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={22}
      height={22}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0_1_1496)">
        <path
          d="M14.317 3.563h1.96V.151C15.94.105 14.777 0 13.421 0c-2.827 0-4.764 1.777-4.764 5.042v3.005h-3.12v3.815h3.12v9.598h3.825v-9.597h2.994l.475-3.815h-3.47V5.42c.001-1.102.298-1.857 1.836-1.857z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_1_1496">
          <path fill="#fff" d="M0 0h21.479v21.46H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default FacebookIcon;
