import { useCallback, useState } from "react";

export default function useImageUpload() {
  const [uploading, setUploading] = useState(false);
  const uploadImage = useCallback(
    (file) =>
      new Promise((resolve, reject) => {
        setUploading(true);
        const formData = new FormData();
        formData.append("image", file);
        fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`, {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((result) => {
            resolve(result.data.url);
            setUploading(false);
          })
          .catch(() => {
            reject(new Error("Upload failed"));
            setUploading(false);
          });
      }),
    [],
  );
  return [uploadImage, uploading];
}
