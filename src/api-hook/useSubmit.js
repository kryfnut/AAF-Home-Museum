import {useState, useEffect} from 'react';
import useSubmitBasic from "./useSubmitBasic";
import useCreatePhotoKeys from "./useCreatePhotoKeys";

export default function useSubmit(id, {title, description}, urls) {
  const [loading, setLoadState] = useState(true);
  const [error, setError] = useState([]);
  const [data, setData] = useState([]);

  const {loading: basicLoading, error: basicError, data: basicData}
    = useSubmitBasic(id, {title, description});

  const {loading: photoKeysLoading, error: photoKeysError, data: photoKeysData}
    = useCreatePhotoKeys(id, urls);

  useEffect(() => {
    // multiple status handler
    if (basicError) {
      setError(...error, 'edit basic information error!')
    }
    if (photoKeysError) {
      setError(...error, 'upload images error!')
    }
    if (basicLoading || photoKeysLoading) {
      setLoadState(true);
    }

    if (basicData && photoKeysData.length > 0) {
      setLoadState(false);
      setData({
        basicData,
        photoKeysData
      })
    }
  })

  return {
    error,
    loading,
    data
  }
}