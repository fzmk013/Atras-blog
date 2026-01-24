import type { ElementType, HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

type TextVariant =
  | "light 10"
  | "light 12"
  | "light 14"
  | "light 16"
  | "light 18"
  | "light 20"
  | "light 24"
  | "light 40"
  | "light 48"
  | "regular 12"
  | "regular 16"
  | "regular 18"
  | "regular 20"
  | "regular 24"
  | "regular 26"
  | "medium 16"
  | "medium 18"
  | "medium 20"
  | "medium 24"
  | "medium 32"
  | "medium 30"
  | "bold 16";

export type ColorVariant =
  | "black"
  | "greyDark"
  | "greenPrimary"
  | "greenLight"
  | "white"
  | "greenSecondary"
  | "greyMedium"
  | "greyLight"
  | "greyExtraLight"
  | "greyMediumDark"
  | "danger"
  | "anchor"
  | "greenMediumDark";

interface TextProps extends HTMLAttributes<HTMLElement> {
  variant?: TextVariant;
  colorvariant?: ColorVariant;
  color?: string;
  textalign?: "left" | "center" | "right" | "justify";
  texttransform?: "none" | "capitalize" | "uppercase" | "lowercase";
  as?: ElementType;
  lineheight?: string | number; 
  children: ReactNode;
  delay? :string;
}

const TextElement = styled.span<TextProps>`
  font-size: var(--font-size-16);
  font-weight: var(--font-weight-regular);
  color: var(--color-grey-0); 

  
  animation-delay: ${({ delay }) => delay || "0s"};
    @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }


  ${(props) => {
    let baseStyles = '';
    switch (props.variant) {
      case "light 10":
        baseStyles = `
          font-size: var(--font-size-10);
          font-weight: var(--font-weight-light);
        `;
        break;
      case "light 12":
        baseStyles = `
          font-size: var(--font-size-12);
          font-weight: var(--font-weight-light);
        `;
        break;
      case "light 14":
        baseStyles = `
          font-size: var(--font-size-14);
          font-weight: var(--font-weight-light);
        `;
        break;
      case "light 16":
        baseStyles = `
          font-size: var(--font-size-16);
          font-weight: var(--font-weight-light);
        `;
        break;
      case "light 18":
        baseStyles = `
          font-size: var(--font-size-18);
          font-weight: var(--font-weight-light);
        `;
        break;
      case "light 20":
        baseStyles = `
          font-size: var(--font-size-20);
          font-weight: var(--font-weight-light);
        `;
        break;
      case "light 24":
        baseStyles = `
          font-size: var(--font-size-24);
          font-weight: var(--font-weight-light);
        `;
        break;
      case "light 40":
        baseStyles = `
          font-size: var(--font-size-40);
          font-weight: var(--font-weight-light);
        `;
        break;
      case "light 48":
        baseStyles = `
          font-size: var(--font-size-48);
          font-weight: var(--font-weight-light);
        `;
        break;
      case "regular 12":
        baseStyles = `
          font-size: var(--font-size-12);
          font-weight: var(--font-weight-regular);
        `;
        break;
      case "regular 16":
        baseStyles = `
          font-size: var(--font-size-16);
          font-weight: var(--font-weight-regular);
        `;
        break;
      case "regular 18":
        baseStyles = `
          font-size: var(--font-size-18);
          font-weight: var(--font-weight-regular);
        `;
        break;
      case "regular 20":
        baseStyles = `
          font-size: var(--font-size-20);
          font-weight: var(--font-weight-regular);
        `;
        break;
      case "regular 24":
        baseStyles = `
          font-size: var(--font-size-24);
          font-weight: var(--font-weight-regular);
        `;
        break;
      case "regular 26":
        baseStyles = `
          font-size: var(--font-size-26);
          font-weight: var(--font-weight-regular);
        `;
        break;
      case "medium 16":
        baseStyles = `
          font-size: var(--font-size-16);
          font-weight: var(--font-weight-medium);
        `;
        break;
      case "medium 18":
        baseStyles = `
          font-size: var(--font-size-18);
          font-weight: var(--font-weight-medium);
        `;
        break;
      case "medium 20":
        baseStyles = `
          font-size: var(--font-size-20);
          font-weight: var(--font-weight-medium);
        `;
        break;
      case "medium 24":
        baseStyles = `
          font-size: var(--font-size-24);
          font-weight: var(--font-weight-medium);
        `;
        break;
      case "medium 30":
        baseStyles = `
          font-size: var(--font-size-30);
          font-weight: var(--font-weight-medium);
        `;
        break;
      case "medium 32":
        baseStyles = `
          font-size: var(--font-size-32);
          font-weight: var(--font-weight-medium);
        `;
        break;
      case "bold 16":
        baseStyles = `
          font-size: var(--font-size-16);
          font-weight: var(--font-weight-bold);
        `;
        break;
      default:
        baseStyles = `
          font-size: var(--font-size-16);
          font-weight: var(--font-weight-regular);
        `;
    }

    return baseStyles;
  }}

 
  ${(props) => {
    switch (props.colorvariant) {
      case "black":
        return `color: #000000;`;
      case "greyDark":
        return `color: var(--color-grey-600);`;
      case "greenPrimary":
        return `color: var(--color-primary-500);`;
      case "white":
        return `color: #FFFFFF;`;
      case "greenSecondary":
        return `color: var(--color-primary-400);`;
      case "greyMedium":
        return `color: var(--color-grey-500);`;
      case "greyLight":
        return `color: var(--color-grey-300);`;
      case "greyExtraLight":
        return `color: var(--color-grey-200);`;
      case "greyMediumDark":
        return `color: var(--color-grey-400);`;
      case "danger":
        return `color: #FF3B30;`;
      case "anchor":
        return `color: var(--color-brand-500);`;
      case "greenLight":
        return `color: var(--color-primary-300);`;
      case "greenMediumDark" :
        return `color: var(--color-primary-600);`;
      default:
        return ``; 
    }
  }}


  ${(props) => props.color && `color: ${props.color};`}


  ${(props) => props.lineheight && `line-height: ${props.lineheight};`}


  ${(props) => props.textalign && `text-align: ${props.textalign};`}
  ${(props) => props.texttransform && `text-transform: ${props.texttransform};`}


`;

const Text = ({
  variant = "regular 20",
  colorvariant,
  color,
  textalign,
  texttransform,
  as,
  lineheight = "32px", 
  children,
  delay,
  ...props
}: TextProps) => {
  return (
    <TextElement
      as={as || "span"}
      variant={variant}
      colorvariant={colorvariant}
      color={color}
      textalign={textalign}
      texttransform={texttransform}
      lineheight={lineheight}
      {...props}
    >
      {children}
    </TextElement>
  );
};

export default Text;