import { FC } from "react";

interface Props {
  isOpen: boolean;
}

export const TriangleSvg: FC<Props> = (props) => (
  <svg
    style={
      props.isOpen
        ? { rotate: "90deg", transition: "all 0.2s" }
        : { transition: "all 0.2s" }
    }
    width="13"
    height="20"
    viewBox="0 0 13 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4.74193 6L8.9086 10.1667L4.74193 14.3333V6Z" fill="#78909C" />
    <path d="M4.74193 6L8.9086 10.1667L4.74193 14.3333V6Z" fill="#78909C" />
  </svg>
);
