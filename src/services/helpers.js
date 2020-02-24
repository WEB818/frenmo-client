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

export const getRecdFrenmos = (favors = [], userId) =>
  favors.filter(favor => {
    return favor.receiver_id === Number(userId);
  });

export const getIssuedFrenmos = (favors = [], userId) =>
  favors.filter(favor => {
    return favor.issuer_id === Number(userId);
  });

// need to map over and find issued for each
export const getRedeemedByAsReceiver = (favors = [], userId) => {
  favors.filter(
    favor =>
      favor.receiver_id === Number(userId) && favor.receiver_redeemed === true
  );
};
