import { useUserContext } from "../../context/userContext";
import useUpdateUser from "./useUpdateUser";

export default function useUpdateCurrentUser() {
  const { updateUser, updatingUser, updatingUserError } = useUpdateUser();
  const { email, seller, wishlist } = useUserContext();
  const isWishList = Array.isArray(wishlist);
  console.log(wishlist);

  const switchToSeller = () => updateUser({ patch: { seller: true, admin: false }, email });

  const switchToBuyer = () => updateUser({ patch: { seller: false, admin: false }, email });

  const switchToAdmin = () => updateUser({ patch: { seller: false, admin: true }, email });

  const toggleSeller = () => updateUser({ patch: { seller: !seller }, email });
  const removeFromWishList = (id) => {
    const removedList = wishlist.filter((listedId) => listedId !== id);
    updateUser({ patch: { wishlist: removedList }, email });
  };

  const addToWishList = (id) => {
    if (isWishList) {
      const matchedList = wishlist.filter((listedId) => listedId === id);
      const exist = matchedList.length > 0;
      if (exist) {
        removeFromWishList(id);
      } else {
        updateUser({ patch: { wishlist: [...wishlist, id] }, email });
      }
    } else {
      updateUser({ patch: { wishlist: [id] }, email });
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
