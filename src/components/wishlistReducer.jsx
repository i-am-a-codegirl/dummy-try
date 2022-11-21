export const WishlistReducer = (wishlist, action) => {
  switch (action.type) {
    case "add-to-wishlist":
      console.log(wishlist);
      return [...wishlist, action.payload];

    case "remove-from-wishlist":
      return wishlist.filter((check) => check.id !== action.payload.id);

    default:
      return wishlist;
  }
};
