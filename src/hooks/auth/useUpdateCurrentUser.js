/* eslint-disable no-underscore-dangle */
import { useUserContext } from "../../context/userContext";
import useUpdateUser from "./useUpdateUser";

export default function useUpdateCurrentUser() {
  const { updateUser, updatingUser, updatingUserError } = useUpdateUser();
  const { email, seller, wishlist } = useUserContext();
  const isWishList = Array.isArray(wishlist);

  const switchToSeller = () => updateUser({ patch: { seller: true, admin: false }, email });

  const switchToBuyer = () => updateUser({ patch: { seller: false, admin: false }, email });

  const switchToAdmin = () => updateUser({ patch: { seller: false, admin: true }, email });

  const toggleSeller = () => updateUser({ patch: { seller: !seller }, email });

  const removeFromWishList = (id) => {
    const removedList = wishlist.filter((p) => p?._id !== id);
    updateUser({ patch: { wishlist: removedList }, email });
  };

  const addToWishList = (product) => {
    const { _id: id } = product;
    if (isWishList) {
      const matchedList = wishlist.filter((p) => p?._id === id);
      const exist = matchedList.length > 0;
      if (exist) {
        removeFromWishList(id);
      } else {
        updateUser({ patch: { wishlist: [...wishlist, product] }, email });
      }
    } else {
      updateUser({ patch: { wishlist: [product] }, email });
    }
  };

  return {
    switchToAdmin,
    switchToBuyer,
    switchToSeller,
    toggleSeller,
    updatingUser,
    updatingUserError,
    addToWishList,
    removeFromWishList,
  };
}
