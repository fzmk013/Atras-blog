import styled, { css } from "styled-components";

type ButtonVariant = "outlined" |"filled" | "danger";

interface StyledButtonProps {
  $width?: string;
  $variant?: ButtonVariant;
  $hasIcon?: boolean;
  $disabled?: boolean;
}

const variantStyles = {

filled: css<StyledButtonProps>`
    background: ${(props) => (props.$disabled ? "var(--color-grey-200)" : "var(--color-primary-400)")};
    color: var(--color-grey-0);

    &:hover {
      background: ${(props) => (props.$disabled ? "var(--color-grey-200)" : "var(--color-primary-300)")};
      cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")}
    }
  `,

  outlined: css<StyledButtonProps>`
    width: auto;
    /* background: ${(props) => (props.$disabled ? "var(--color-grey-200)" : "var(--color-grey-0)")}; */
    background: inherit;
    border: 1px solid var(--color-grey-0);
    border-radius: 8px;
    color: var(--color-grey-0);

    &:hover {
      background: ${(props) =>
        props.$disabled ? "var(--color-grey-200)" : "rgba(139, 231, 73, 0.33)"};
    }


    padding: clamp(8px, 0.8vw, 12px);

    @media (max-width: 480px) {
      padding: clamp(6px, 0.6vw, 10px);
    }
  `,


  danger: css<StyledButtonProps>`
    width: auto;
    background: ${(props) => (props.$disabled ? "var(--color-grey-200)" : "var(--color-grey-0)")};
    border: 1px solid #FF2D55;
    border-radius: 8px;
    color: #FF2D55;

    &:hover {
      background: ${(props) =>
        props.$disabled ? "var(--color-grey-200)" : "rgba(255, 45, 83, 0.21)"};
    }

    & svg {
      stroke: var(--color-primary-500);
    }
    padding: clamp(8px, 0.8vw, 12px);

    @media (max-width: 480px) {
      padding: clamp(6px, 0.6vw, 10px);
    }
  `,
};

const StyledButton = styled.button<StyledButtonProps>`
  width: ${(props) => props.$width || "100%"};
  border-radius: 8px;
  height: clamp(36px, 3vw, 48px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(14px, 1.4vw, 16px);
  font-family : "IRANSans";
  line-height: 24px;
  letter-spacing: -0.196px;
  color: var(--color-grey-0);

  transition: all ease-out 0.5s;
  padding: clamp(8px, 0.8vw, 12px);
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  gap: ${(props) => (props.$hasIcon ? "10px" : "0")};
  ${(props) => variantStyles[props.$variant || "outlined"]};

  & svg{
    stroke : var(--color-grey-0);
  }

  & svg {
        width: clamp(16px, 1.6vw, 24px);
        height: clamp(16px, 1.6vw, 24px);
      }
  @media (max-width: 768px) {
    font-size: clamp(14px, 1.2vw, 18px);
    padding: clamp(6px, 0.6vw, 10px);
    height: clamp(34px, 2.8vw, 44px);
  }

  @media (max-width: 480px) {
    font-size: clamp(12px, 1vw, 16px);
    padding: clamp(4px, 0.5vw, 8px);
    height: clamp(32px, 2.5vw, 40px);
  }

  
    &:hover {
      /* background: ${(props) => (props.$disabled ? "var(--color-grey-200)" : "var(--color-primary-300)")}; */
      cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")}
    }
`;

type ButtonProps = {
  variant?: ButtonVariant;
  width?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

function Button({
  onClick,
  variant = "outlined",
  width,
  children,
  icon,
  type = "button",
  disabled,
}: ButtonProps) {
  return (
    <StyledButton
      dir="rtl"
      onClick={onClick}
      $variant={variant}
      $width={width}
      type={type}
      $hasIcon={!!icon}
      $disabled={disabled}
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </StyledButton>
  );
}

export default Button;