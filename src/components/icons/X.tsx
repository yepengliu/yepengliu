import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width={48}
    height={48}
    fillRule="none"
    {...props}
  >
    <g
      fill="none"
      strokeMiterlimit={10}
      fontFamily="none"
      fontWeight="none"
      fontSize="none"
      textAnchor="none"
      style={{
        mixBlendMode: "normal",
      }}
    >
      <path
        d="M202.667 224H53.333C41.552 224 32 214.448 32 202.667V53.333C32 41.552 41.552 32 53.333 32h149.334C214.447 32 224 41.552 224 53.333v149.334c0 11.78-9.552 21.333-21.333 21.333z"
        fill="#6b7280"
        fillRule="evenodd"
      />
      <path
        d="M182.704 181.333h-34.33L73.753 74.667h34.331zm-30.24-9.045h13.67l-62.14-88.576H90.326z"
        fill="#fff"
        fillRule="nonzero"
      />
      <path
        d="m84.619 181.333 38.416-44.501-5.024-6.661-44.288 51.162zM130.4 115.845l4.827 6.875 41.498-48.053H166.06z"
        fill="#fff"
        fillRule="nonzero"
      />
    </g>
  </svg>
)
