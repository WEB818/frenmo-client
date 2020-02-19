export const findCategory = (frenmoCategories = [], categoryId) =>
  frenmoCategories.find(category => category.id === categoryId);

export const findFrenmo = (frenmos = [], frenmoId) =>
  frenmos.find(frenmo => frenmo.id === frenmoId);

export const getFrenmosInCategory = (favors = [], categoryId) =>
  !categoryId
    ? favors
    : favors.filter(favor => favor.category === Number(categoryId));

export const getFrenmoById = (favors = [], frenmoId) =>
  favors.find(favor => favor.outstanding_id === Number(frenmoId));

export const countFavorsInCategory = (favors = [], categoryId) =>
  favors.filter(favor => favor.category === Number(categoryId)).length;
