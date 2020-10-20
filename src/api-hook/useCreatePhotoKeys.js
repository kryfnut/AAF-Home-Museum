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

  const resolveWidthHeight = (url) => {
    return new Promise(resolve => {
      const img = new Image();
      img.src = url;
      img.onload = function () {
        resolve({width: img.width, height: img.height})
      }
    })
  }

  useEffect(() => {

    let submitQueue = urls.map(url => {

      return resolveWidthHeight(url)
          .then(({width, height})=> {
            submit({
              variables: {
                input:
                    {
                      basicId: id,
                      url,
                      width,
                      height,
                    },
              }
            });
          })

    });

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