import {useEffect, useState} from 'react';
import {listImages} from "../graphql/queries";

import {generateClient} from 'aws-amplify/api';

const client = generateClient();

export default function useListPhotoKeys(id) {

  const [loading, setLoadState] = useState(true);
  const [error, setError] = useState(undefined);
  const [data, setData] = useState(undefined);

  const fetchResponse = async () => {
    try {
      return await client.graphql(listImages, {
        limit: 10000,
        filter: {
          basicId: {
            contains: id
          }
        }
      });
    } catch (err) {
      throw new Error(err.message);
    }
  }

  useEffect(() => {
    fetchResponse()
      .then(result => setData(result.data.listImages.items))
      .catch(e => setError(e))
      .finally(() => setLoadState(false))
  }, [])

  return {
    loading,
    error,
    data,
  }
}