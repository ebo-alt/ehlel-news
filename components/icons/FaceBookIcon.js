import * as React from "react";
const Icons = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={172}
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
        maskType: "alpha",
      }}
    >
      <path fill="url(#a)" d="M0 0h20v20H0z" />
    </mask>
    <g mask="url(#b)">
      <path fill="#E5E5E5" d="M0 0h20v20H0z" />
    </g>
    <mask
      id="d"
      width={20}
      height={20}
      x={38}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="url(#c)" d="M38 0h20v20H38z" />
    </mask>
    <g mask="url(#d)">
      <path fill="#E5E5E5" d="M38 0h20v20H38z" />
    </g>
    <mask
      id="f"
      width={20}
      height={20}
      x={76}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="url(#e)" d="M76 0h20v20H76z" />
    </mask>
    <g mask="url(#f)">
      <path fill="#E5E5E5" d="M76 0h20v20H76z" />
    </g>
    <mask
      id="h"
      width={20}
      height={20}
      x={114}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="url(#g)" d="M114 0h20v20h-20z" />
    </mask>
    <g mask="url(#h)">
      <path fill="#E5E5E5" d="M114 0h20v20h-20z" />
    </g>
    <mask
      id="j"
      width={20}
      height={20}
      x={152}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="url(#i)" d="M152 0h20v20h-20z" />
    </mask>
    <g mask="url(#j)">
      <path fill="#E5E5E5" d="M152 0h20v20h-20z" />
    </g>
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#k" transform="scale(.03333)" />
      </pattern>
      <pattern
        id="c"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#l" transform="scale(.03333)" />
      </pattern>
      <pattern
        id="e"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#m" transform="scale(.03333)" />
      </pattern>
      <pattern
        id="g"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#n" transform="scale(.03333)" />
      </pattern>
      <pattern
        id="i"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#o" transform="scale(.03333)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABgElEQVRIie3WsU5UQRTG8R+GYGGxBRCirgSCGJ6CysaowHsYl2ehg4AWlnQghMS3sLLbmGhsrFwqAsta3CUMm3vnnt0FY8GXTHJnzpz7nzkzc2a41z/SxBB957GO11hAs9/+E99xhAP8uK3BPcUOLtCrKV3s9wc2ljZwGgAOlg7WRoVuKmYwLDSdfWtY6MaY0BQennlTLLyfsYppPMQcvpX06+BJBPwhAP2CByW+Xyv679ZB58V278sK/yrwhevjV6r3AWgPjcTnI84DPu9y4JMgOE08Z0Gf4xQ0uE7Pc6NK1Eu+p4I+SzljbjdH9Dvjf5p2LNuZo6qBmYz9Mgf+NQZ4ucZ+49+TA8Y2XlQ4puGeqGjPqZ1WBmd87O50lDM+E0sgqSJH6VxNAoG9OwBv10EpLv7OLYL/4HEEDK/kQx4Fd/E2Cr1SS/WdHAF3Fbl/JK0pD/sKHinSZVV434wKvdIstsRuoC4+CazpMM/bpuvn7aKbz9u2Igcc9uv3+n/0F/3XIhNXKv3KAAAAAElFTkSuQmCC"
        id="k"
        width={30}
        height={30}
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABjElEQVRIie3Wv0vVURjH8ZdKEojYD9ocHTTE1RYTIxAy3ARRaBcM+hfEWaJoaysaxEGJWhpadBSHEBx0KYWWCkJIM38N537hcvvec7/n3tuSfuDZzvm8z/OcH8/hUv+7WprkcxUPMYAzfMJ7HFaMa8dRnsFtXEuEjmC3BCyPzxjGDUzjAzqrmbzCamxAhe7gIAeaxRGOcYopkQpvliaso7sAeCMCzeIUy1jA42pG22UTvmEyAu0rAC2PJbRVM1vJmbCKB/4u03gC9CVaI0lEzb7gGSZK2Y4lgCdiULiC1wmGRWO4ElSZ/oZwGL7XWmGivtYa8E7zs90XHo6oRv8B+G0taKb5JoNnioLhEfaaAP2hyiuYd7daMYQt/E5ZbY6eC3tcWE80nu0erqeutAUvGoCe4F4qtFz3hVOZ1/ZiMdcINFMv1hKgTzXwwegQ7vQi/hQEHoq0vZiGhO/KjtDAU0r7Ef31QDN1YVb4CNSC/cQb3K0HFNuLWxhED24KneuXcE02hYZyXA/0UhdD5+q+K5z2ztKIAAAAAElFTkSuQmCC"
        id="l"
        width={30}
        height={30}
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABCElEQVRIie3WQUrDUBSF4a/OBNFuwLZOBJfRjbge12FFxInuwC3oyKkWQdJRKQ4cWQd5kVqSmpcmUUsPHAiPd/PfXC7hsNWmq1NwvoMBToL7wT3so4u9cPcNU8wwxnPwY/ATPn5qpI/z8JJ5TZ7hInxIro4wqRG47EkR/KpBaObLPHDSAjjJYIvLNc/rpgF1SLc3Vrc1N1J6XDDEfUTNcn1lMOm0TsXvxtrgTF2c4b1tcKZjXJetr7Jcq7RbpejfjPpXlmuIh0jg2uCbisBv4D/xy0wKLtap1+xhEXzXAjiX0XQQSKxIIQOM1B99RtJY9aWyYa8XCg9xID/sTfEiDXpjkWFvq83TJ7+9WWkwMPCBAAAAAElFTkSuQmCC"
        id="m"
        width={30}
        height={30}
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAACUklEQVRIie3V3WvPURwH8BejTBFCjVkuxgWJFFluuKLGHkryHwiNC//E7iRNLQllKdrFNCmltvgDaBebtJrMQ+Rh5KnNw8U5v/bd+X1/v/1+aFd71+mc83l6n4fP5xzmMUdYUIVtA1rRjI2oj/JxjKEffXj+vxa3Ht2Ywu9Z2k/cjAv7J7ThcwWEafuElr8lPSPsoFrS7O5Plwpe6o7b0IuFObpRDOIFvmEt9mAXahLbX2jH7bJbjKiXf7wDkaAUGoX7zTv2dZUQX85xPpfZzWLsxwkcR5OZJ3M2x//SbKQNirO31/SVtAjlkgZ+jG2ZOF2Jfsp0+eWiI3H4jg1R1658sr3NBF+BD4n+VDniu4lxX5TX4lWU3cdW7MsJfiET62qiu1OO+ElifDbKm+P8q5DFBVxP7J9mdOnpjWSJ0nKpS+ZvYr8p9kMZGSxP7Ndkxu8T3YzMTonTOlwZ+9eKUYO9iexjZrwqx6ck8btk3hT7h/iBLUI5we6c4I8y4+2J7mU54qFk3ioc0Th6hIdlMuoOKsaN2C/CgUQ3Wo54MJnX4krsl+JBRrcssR3ArTg+prhuy2Z1vfzvb0goneyj3yCU1phQRoWF1Ak5kfWfzFlIEXpyiAttZ7RplP+BbMZwjl/3bKSU/iQmTGd9V9xtG3YIdX5RqPM8v7RMS+KI8KVlA9zL6EdyCEr9yYcrJS3gTEJeOK7GKkg7qiUt4Kjp97gzyjorIJ3Aob8lLaAe13AeqxV/DGn2dqviTivBEuGJ7MczfBGScFio0ZMqKJl5zDn+AJARCsGCUVyTAAAAAElFTkSuQmCC"
        id="n"
        width={30}
        height={30}
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABQ0lEQVRIie3WTytEYRTH8Q9R/ixEWcjOQhZKWSgWFrIwUZLZsrHyFhTWSknJiqWNlaXyDqytyGZmFCUrZcVY3Gd0Z7q4pjs2M786dc+5zz3f89znOc+9tNSMWkQJ5YysiFwacDFDaMUKtZC2BHA5TXV1qIrV3iDIr2qB/00dKcac4jrmD2EdI7HYKO7C9TE26ymmthU60Yd5TIve0gCeEsb+ZH8Gw0zM3wqxy+B/4ASryOMsS/Ak7nETZj6Ml3B/W9SjeSyF8UdZgePqxkGY6Tt6sRAKecEExrICT4WkReyG2H7wk9SZFTi+xrchtoI30WZbT3juR3CadoIH7OEVFyE2hy4s4xzj6MGOaE9cpcz9pdpKN0Q9W7FZHIrWt4xnrGEQ/aJN9piQp0qtr1NzgksN4HzX71XKyfa/qyA62VpqMn0CzOaynAtCBCAAAAAASUVORK5CYII="
        id="o"
        width={30}
        height={30}
      />
    </defs>
  </svg>
);
export default Icons;
