import * as React from "react";
import { useColor } from "../hooks/use-color";

export default function LogoSvg(props: React.SVGProps<SVGSVGElement>) {
  const { colors } = useColor();

  return (
    <svg viewBox="0 0 228 186" {...props}>
      <path
        d="m94.7-.5 17 8.8c4.9 2.5 9.5 5.5 13.8 8.7l1.2.9h82.9v61.2h-22.8V168h-60l-1.2.9c-4.3 3.3-8.9 6.2-13.8 8.7l-17 8.8H205V97.7h23V-.5H94.7z"
        fill={props.fill || colors.text.primary.hex}
      />
      <path
        d="M146 93C146 41.5 104.1-.5 52.5-.5H0v186.9h52.6c51.5.1 93.4-41.9 93.4-93.4zm-93.4 75H18.4V18h34.1c20.3 0 39.1 7.8 53.1 22 14.2 13.9 22 32.7 22 53 0 20.3-7.8 39.1-22 53.1-13.9 14.1-32.8 21.9-53 21.9z"
        fill={props.fill || colors.text.primary.hex}
      />
    </svg>
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 355 345.5"
      fill={props.fill || colors.text.primary.hex}
      {...props}
    >
      <path d="m316.8.7-92.2 344h38l37-138 4.3-16.1 9.6-35.9 4-15L354.8.7zM132.8.7h-41l-37.3 139-4 15-9.6 35.9-4.3 16.1-37 138h41zM257.8.7l-37.3 139h-69L188.8.7h-38l-92.2 344h38l37-138h69l-37 138h41L298.8.7z" />
    </svg>
  );
}
