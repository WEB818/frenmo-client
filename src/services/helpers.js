export const findCategory = (frenmoCategories = [], categoryId) =>
  frenmoCategories.find(category => category.id === categoryId);

export const findFrenmo = (frenmos = [], frenmoId) =>
  frenmos.find(frenmo => frenmo.id === frenmoId);

export const getFrenmosInCategory = (frenmoList = [], categoryId) =>
  !categoryId
    ? frenmoList
    : frenmoList.filter(frenmo => frenmo.categoryId === categoryId);
