export const delay = async (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const enum ButtonColor {
  Default,
  Red,
}

export const enum ButtonSize {
  Default,
  XS,
}

export const enum QuestionListScenarios {
  Empty,
  Sorted,
  Default,
}
