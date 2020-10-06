/*
* s3 in Javascript: https://docs.amplify.aws/lib/storage/getting-started/q/platform/js#using-amazon-s3
* */

import React, {useEffect, useState} from "react";
import {useMutation, useQuery} from "react-apollo-hooks";
import {updateBasic} from "../../graphql/mutations";
import {listDescriptions} from "../../graphql/queries";
import gql from 'graphql-tag';
import {Spin, Modal, Tabs} from "antd";
import {AmplifyS3ImagePicker, AmplifyS3Image} from '@aws-amplify/ui-react';

import {Input} from 'antd';

const {TextArea} = Input;


export default function BasicViewAndEditModal({visible, toggle, basicId, item}) {

  const [text, setText] = useState(item.title);

  const [setResultInDB] = useMutation(gql`${updateBasic}`, {
    update: () => {
      toggle();
    },
    variables: {
      input: {
        title: text,
        id: basicId
      },
      condition: {
        id: {
          eq: basicId
        }
      }
    }
  })

  return (
    <Modal
      visible={visible}
      onOk={() => setResultInDB()}
      onCancel={toggle}
    >
      <Input value={text} onChange={e => setText(e.target.value)}/>
    </Modal>
  )
}