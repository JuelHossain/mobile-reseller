import { useEffect } from "react";

export default function useSetPageTitle(title) {
  useEffect(() => {
    window.document.title = `Pro-Dentist | ${title}`;
  }, [title]);
}
