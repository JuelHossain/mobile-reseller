import { getDownloadURL, ref } from "firebase/storage";
import { useState } from "react";
import { useUploadFile } from "react-firebase-hooks/storage";
import { storage } from "../../firebase";

export default function usePhotoURL() {
  const [uploadFile, uploading, snapshot, uploadError] = useUploadFile();
  const [downloading, setLoading] = useState(false);
  const loading = uploading || downloading;
  const upload = async (file, uid) => {
    setLoading(true);
    const { name, type } = file ?? {};
    const fileRef = ref(storage, `${uid}/${name}`);
    if (file && uid) {
      const { ref: uploadedFileRef } = await uploadFile(fileRef, file, { contentType: type });
      const url = await getDownloadURL(uploadedFileRef);
      setLoading(false);
      return url;
    }
    setLoading(false);
    return "please give me a valid file to upload";
  };

  return { upload, uploading: loading, snapshot, uploadError };
}
