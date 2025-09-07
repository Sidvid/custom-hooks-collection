import React from "react";
interface ParagraphProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: React.ReactNode;
  type: "sm" | "lg" | "xl" | "xxl";
}
function Paragraph({ children, type, ...rest }: ParagraphProps) {
  const mapping: Record<string, string> = {
    sm: ".p-sm",
    lg: ".p-lg",
    xl: ".p-xl",
    xxl: ".p-xxl",
  };

  return (
    <p className={mapping[type as keyof typeof mapping]} {...rest}>
      {children}
    </p>
  );
}

export default Paragraph;
