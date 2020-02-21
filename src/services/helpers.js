export const findCategory = (frenmoCategories = [], categoryId) =>
  frenmoCategories.find(category => category.id === categoryId);

export const findFrenmo = (frenmos = [], frenmoId) =>
  frenmos.find(frenmo => frenmo.id === frenmoId);

export const getFrenmosInCategory = (favors = [], categoryId) =>
  !categoryId
    ? favors
    : favors.filter(favor => favor.props.categoryId === Number(categoryId));

export const getFrenmoById = (favors = [], frenmoId) =>
  favors.find(favor => favor.outstanding_id === Number(frenmoId));

export const countFavorsInCategory = (favors = [], categoryId) =>
  favors.filter(favor => favor.category === Number(categoryId)).length;

export const getRecdFrenmos = (favors = [], userId) =>
  favors.filter(favor => {
    return favor.props.receivedById === Number(userId);
  });

export const getIssuedFrenmos = (favors = [], userId) =>
  favors.filter(favor => {
    return favor.props.issuedById === Number(userId);
  });
