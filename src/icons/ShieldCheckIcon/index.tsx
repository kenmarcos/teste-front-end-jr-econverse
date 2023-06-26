import * as React from "react";

function ShieldCheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.125 8.958V4.375a.625.625 0 01.625-.625h12.5a.625.625 0 01.625.625v4.583c0 6.564-5.57 8.739-6.683 9.107a.59.59 0 01-.384 0c-1.112-.368-6.683-2.543-6.683-9.107z"
        stroke="#9F9F9F"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.438 8.125L8.854 12.5l-2.291-2.188"
        stroke="#9F9F9F"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ShieldCheckIcon;
