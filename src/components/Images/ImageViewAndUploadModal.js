import React, {useState} from "react";
import {useQuery} from "react-apollo-hooks";
import {listImages} from "../../graphql/queries";
import gql from 'graphql-tag';
import {Spin, Modal} from "antd";
import {SmileOutlined} from '@ant-design/icons';

export default function ImageViewAndUploadModal({visible}) {
  return (
    <Modal visible={visible}>
      123123
    </Modal>
  )
}