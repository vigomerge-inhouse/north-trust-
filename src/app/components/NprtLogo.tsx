import logo from "../../imports/nprt-logo2.png";

interface NprtLogoProps {
  size?: number;
  className?: string;
}

export function NprtLogo({ size = 40, className = "" }: NprtLogoProps) {
  return (
    <img
      src={logo}
      alt="North Pond Realty Trust"
      width={size}
      height={size}
      className={className}
    />
  );
}