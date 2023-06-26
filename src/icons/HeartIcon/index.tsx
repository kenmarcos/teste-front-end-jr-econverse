import * as React from "react";

function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={32}
      height={32}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0_1_1268)">
        <path
          d="M16 27S3.5 20 3.5 11.5A6.501 6.501 0 0116 8.996h0A6.501 6.501 0 0128.5 11.5C28.5 20 16 27 16 27z"
          stroke="#9F9F9F"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_1_1268">
          <path fill="#fff" d="M0 0h32v32H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default HeartIcon;
