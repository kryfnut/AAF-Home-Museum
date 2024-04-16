//'use client'

import {useEffect, useState} from 'react';
import {listBasics} from "../graphql/queries";

import {generateClient} from 'aws-amplify/api';

const client = generateClient();


export default function useListTable() {

  const [loading, setLoadState] = useState(true);
  const [error, setError] = useState(undefined);
  const [data, setData] = useState(undefined);

  const fetchResponse = async () => {
    try {
      return await client.graphql(listBasics, {limit: 300});
    } catch (err) {
      throw new Error(err.message);
    }
  }

  useEffect(() => {
    fetchResponse()
      .then(result => setData(result.data.listBasics.items))
      .catch(e => setError(e))
      .finally(() => setLoadState(false))
  }, [])

  return {
    loading,
    error,
    data,
    setData
  }

}