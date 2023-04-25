export const getTextValue = (
  value: string,
  texts: Record<string, string>
): string => {
  if (texts.hasOwnProperty(value)) {
    return texts[value];
  }
  return value;
};

export const getElementByText = (
  value: string,
  texts: Record<string, any>
): string => {
  if (texts.hasOwnProperty(value)) {
    return texts[value];
  }
  return value;
};
