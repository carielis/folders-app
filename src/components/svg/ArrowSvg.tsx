import { FC } from "react";

interface Props {
  isOpen: boolean;
}

export const ArrowSvg: FC<Props> = (props) => (
  <svg
    style={
      props.isOpen
        ? { transition: "all 0.2s" }
        : { transition: "all 0.2s", rotate: "-90deg" }
    }
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.48"
      d="M1.41 -7.62939e-08L6 4.59L10.59 -7.62939e-08L12 1.42L6 7.42L0 1.42L1.41 -7.62939e-08Z"
      fill="#78909C"
    />
  </svg>
);
