/*
* s3 in Javascript: https://docs.amplify.aws/lib/storage/getting-started/q/platform/js#using-amazon-s3
* */

import React, {useEffect, useState} from "react";
import {useMutation, useQuery} from "react-apollo-hooks";
import {createImage} from "../../graphql/mutations";
import gql from 'graphql-tag';
import {Spin, Modal, Tabs} from "antd";
import {AmplifyS3ImagePicker, AmplifyS3Image} from '@aws-amplify/ui-react';
import S3ImageUpload from "./S3ImageUpload";

const {TabPane} = Tabs;

export default function ImageViewAndUploadModal({visible, toggle, images, basicId}) {

  const [imageCount, setImageCount] = useState(images.length || 0);

  const [imageList, setImageList] = useState(images);

  const [setResultInDB, {loading}] = useMutation(gql`${createImage}`, {
    update: () => {
      // setTimeout(() => {
        setImageList([
          ...imageList,
          `${basicId}-${imageCount}`
        ])
      // }, 10000)
    },
    variables: {
      input: {
        basicId,
        url: `${basicId}-${imageCount}`,
      }
    }
  })

  const increase = () => setImageCount(imageCount + 1);

  return (
    <Modal
      visible={visible}
      onOk={toggle}
      onCancel={toggle}
    >
      {/*<Tabs defaultActiveKey="1">*/}
        {/*<TabPane tab="Preview" key="1">*/}

        {/*</TabPane>*/}
        {/*<TabPane tab="Upload" key="2">*/}
          <div>
            <div>
              {
                imageList.map(key => <AmplifyS3Image key={key} imgKey={key}/>)
              }
            </div>
            <S3ImageUpload
              onSuccess={(result) => {
                setResultInDB();
                increase();
              }}
              fileName={`${basicId}-${imageCount}`}
            />
            {/*<AmplifyS3ImagePicker*/}
            {/*  fileToKey={() => {*/}
            {/*    increase();*/}
            {/*    setResultInDB();*/}
            {/*    return `${basicId}-${imageCount}`;*/}
            {/*  }}*/}
            {/*/>*/}
          </div>
          <span>{loading ? 'creating in DB...' : 'find your image and click upload'}</span>
        {/*</TabPane>*/}
      {/*</Tabs>*/}
    </Modal>
  )
}