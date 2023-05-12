import * as React from 'react';
const FaceBookIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <mask
      id="b"
      width={20}
      height={20}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path fill="url(#a)" d="M0 0h20v20H0z" />
    </mask>
    <g mask="url(#b)">
      <path fill="#E5E5E5" d="M0 0h20v20H0z" />
    </g>
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#c" transform="scale(.03333)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABgElEQVRIie3WsU5UQRTG8R+GYGGxBRCirgSCGJ6CysaowHsYl2ehg4AWlnQghMS3sLLbmGhsrFwqAsta3CUMm3vnnt0FY8GXTHJnzpz7nzkzc2a41z/SxBB957GO11hAs9/+E99xhAP8uK3BPcUOLtCrKV3s9wc2ljZwGgAOlg7WRoVuKmYwLDSdfWtY6MaY0BQennlTLLyfsYppPMQcvpX06+BJBPwhAP2CByW+Xyv679ZB58V278sK/yrwhevjV6r3AWgPjcTnI84DPu9y4JMgOE08Z0Gf4xQ0uE7Pc6NK1Eu+p4I+SzljbjdH9Dvjf5p2LNuZo6qBmYz9Mgf+NQZ4ucZ+49+TA8Y2XlQ4puGeqGjPqZ1WBmd87O50lDM+E0sgqSJH6VxNAoG9OwBv10EpLv7OLYL/4HEEDK/kQx4Fd/E2Cr1SS/WdHAF3Fbl/JK0pD/sKHinSZVV434wKvdIstsRuoC4+CazpMM/bpuvn7aKbz9u2Igcc9uv3+n/0F/3XIhNXKv3KAAAAAElFTkSuQmCC"
        id="c"
        width={30}
        height={30}
      />
    </defs>
  </svg>
);
export default FaceBookIcon;
