export const getSetActiveHandler =
  (setActive: (category: string) => void, category: string) => () =>
    setActive(category)
