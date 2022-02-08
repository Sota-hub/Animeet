export const checkReminded = (
  remindedUserIds: number[],
  activeStyle: string,
  usualStyle: string
) => {
  if (remindedUserIds.includes(111111)) return activeStyle;
  return usualStyle;
};
