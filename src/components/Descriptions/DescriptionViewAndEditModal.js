/*
* s3 in Javascript: https://docs.amplify.aws/lib/storage/getting-started/q/platform/js#using-amazon-s3
* */

import React, {useEffect, useState} from "react";
import {useMutation, useQuery} from "react-apollo-hooks";
import {createDescription} from "../../graphql/mutations";
import {listDescriptions} from "../../graphql/queries";
import gql from 'graphql-tag';
import {Spin, Modal, Tabs} from "antd";
import {AmplifyS3ImagePicker, AmplifyS3Image} from '@aws-amplify/ui-react';

import {Input} from 'antd';

const {TextArea} = Input;


export default function DescriptionViewAndEditModal({visible, toggle, basicId, description}) {

  const [text, setText] = useState(description);

  const [setResultInDB] = useMutation(gql`${createDescription}`, {
    update: () => {
      toggle();
    },
    variables: {
      input: {
        basicId,
        value: text
      }
    }
  })

  return (
    <Modal
      visible={visible}
      onOk={() => setResultInDB()}
      onCancel={toggle}
    >
      <TextArea className={'text'} value={text} onChange={e => setText(e.target.value)}/>
    </Modal>
  )
}