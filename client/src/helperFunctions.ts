export const checkReminded = (
  remindedUserIds: number[],
  activeStyle: string,
  usualStyle: string
) => {
  if (remindedUserIds.includes(111111)) return activeStyle;
  return usualStyle;
};

export const activateStyle = (
  state: string,
  elementText: string,
  activeStyle: string,
  usualStyle: string
) => {
  if (state === elementText) return activeStyle;
  return usualStyle;
};
