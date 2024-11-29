import React from "react";

interface StepResultProps {
  children: React.ReactNode;
}

const StepResult = ({ children }: StepResultProps) => {
  const formatString = (str: string): string => {
    if (typeof str !== "string" || str.length === 0) return str;
    return str[0].toLowerCase() + str.slice(1) + (str.endsWith('.') ? '' : '.');
  };

  const extractText = (node: React.ReactNode): string => {
    if (typeof node === "string") return node;
    if (Array.isArray(node)) return node.map(extractText).join("");
    if (React.isValidElement(node) && node.props.children) return extractText(node.props.children);
    return "";
  };

  const formattedText = formatString(extractText(children));

  return (
    <p>
      <b>Результат шага:</b> {formattedText}
    </p>
  );
};

export const StepResultTest = ({ text }) => {
  const formatString = (str: string): string => {
    if (typeof str !== "string" || str.length === 0) return str;
    return str[0].toLowerCase() + str.slice(1) + (str.endsWith('.') ? '' : '.');
  };

  return (
    <p>
      <b>Результат шага:</b> {formatString(text)}
    </p>
  );
};

export default StepResult;
