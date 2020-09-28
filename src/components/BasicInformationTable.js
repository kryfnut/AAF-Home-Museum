import React from 'react';
import {listBasics} from "../graphql/queries";
import {useQuery} from 'react-apollo-hooks';
import {gql} from "apollo-boost";

export default function BasicInformationTable() {
  const {loading, error, data} = useQuery(gql`${listBasics}`, {variables: {limit: 10}});

  if (loading) {
    return <div>'loading....'</div>
  }

  if (error) {
    return <div>'error....'</div>
  }


}