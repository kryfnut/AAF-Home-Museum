import {useEffect, useState} from 'react';
import {useMutation} from "react-apollo-hooks";
import gql from "graphql-tag";
import {updateBasic} from "../graphql/mutations";

export default function useSubmitBasic(id, {title, description}) {

  const [loading, setLoadState] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [data, setData] = useState(undefined);

  const [submit] = useMutation(gql`${updateBasic}`, {
    variables: {
      input: {
        id,
        title,
        description
      },
    }
  })

  useEffect(() => {

    submit()
      .then(result => {
        setData(result);
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