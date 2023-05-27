import * as React from "react";

function CreditCardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.5 4.375h-15A.625.625 0 001.875 5v10c0 .345.28.625.625.625h15c.345 0 .625-.28.625-.625V5a.625.625 0 00-.625-.625zM13.124 13.125h2.5M9.375 13.125h1.25M1.875 7.567h16.25"
        stroke="#9F9F9F"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CreditCardIcon;
