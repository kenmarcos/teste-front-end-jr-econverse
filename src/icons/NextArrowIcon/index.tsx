import * as React from "react";

function NextArrowIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={34}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 30.96L3.033 34 20 17 3.033 0 0 3.04 13.933 17 0 30.96z" />
    </svg>
  );
}

export default NextArrowIcon;
