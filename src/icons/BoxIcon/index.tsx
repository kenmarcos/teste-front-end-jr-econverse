import * as React from "react";

function BoxIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={26}
      height={26}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21.89.9v0H3.47h0V1a.727.727 0 00-.684.518L21.89.9zm0 0h.009c.3.028.573.235.68.517h0l2.47 6.717s0 0 0 0c.033.089.05.183.05.277v3.882a.834.834 0 01-.805.817.834.834 0 01-.806-.817V9.218M21.89.9l1.598 8.318m0 0H2.512v14.27h20.976V16.63h-8.623v1.665h0c-.001.296-.194.54-.434.673-.24.132-.55.165-.8.007h0l-3.883-2.47c-.235-.15-.346-.42-.346-.68 0-.26.111-.531.346-.68l3.88-2.47h.002a.813.813 0 01.54-.126h.002a.83.83 0 01.693.805m8.623-4.135L.9 8.412m13.965 4.941v0h-.1.1s0 0 0 0zm0 0v1.665m0 0h9.43c.424 0 .805.38.805.805v8.471a.833.833 0 01-.806.806H1.706a.833.833 0 01-.806-.806V8.412m13.965 6.606v.1l-.1-.1h.1zM.9 8.412v0H1 .9zm22.236-.806l-1.879-5.094H14.16v5.094h8.977zM12.547 2.512H4.088L2.751 7.606h9.796V2.512zm.706 14.32v-2.017l-1.578 1.008 1.578 1.01z"
        fill="#9F9F9F"
        stroke="#9F9F9F"
        strokeWidth={0.2}
      />
    </svg>
  );
}

export default BoxIcon;
