import {useState, useEffect} from 'react';
import {useMutation, useQuery} from "react-apollo-hooks";
import gql from "graphql-tag";
import {createImage} from "../graphql/mutations";

export default function useCreatePhotoKeys(id, urls) {
  const [loading, setLoadState] = useState(true);
  const [error, setError] = useState(undefined);
  const [data, setData] = useState([]);

  const addResultToData = (result) => setData(...data, result);

  const [submit] = useMutation(gql`${createImage}`)

  useEffect(() => {

    let submitQueue = urls.map(url => submit({
      variables: {
        input:
          {
            basicId: id,
            url
          },
      }
    }));

    Promise.all([...submitQueue])
      .then(result => {
        addResultToData(result);
      })
      .catch(e => {
        setError(e)
      })
      .finally(() => {
        setLoadState(false);
      })

  })

  return {
    loading,
    error,
    data
  }
}