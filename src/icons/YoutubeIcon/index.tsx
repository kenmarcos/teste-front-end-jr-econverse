import * as React from "react";

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={23}
      height={22}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0_1_1490)">
        <path
          d="M22.513 5.435l.027.18a2.79 2.79 0 00-1.897-1.936l-.02-.005C18.908 3.208 12 3.208 12 3.208s-6.89-.009-8.624.466c-.93.27-1.65.997-1.911 1.921l-.005.02c-.641 3.346-.646 7.368.028 10.951l-.028-.181a2.79 2.79 0 001.897 1.936l.02.004c1.714.467 8.624.467 8.624.467s6.89 0 8.625-.467a2.791 2.791 0 001.912-1.921l.004-.02c.292-1.556.459-3.347.459-5.177l-.001-.202v-.211c0-1.83-.166-3.622-.486-5.359zM9.795 14.347V7.662l5.75 3.347-5.75 3.338z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_1_1490">
          <path fill="#fff" transform="translate(.98)" d="M0 0h22.02v22H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default YoutubeIcon;
