import * as React from "react";

function PrevArrowIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={34}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M20 3.04L16.967 0 0 17l16.967 17L20 30.96 6.067 17 20 3.04z" />
    </svg>
  );
}

export default PrevArrowIcon;
