import React, {useState} from "react";
import {useQuery} from "react-apollo-hooks";
import {listImages} from "../../graphql/queries";
import gql from 'graphql-tag';
import {Spin, Button} from "antd";
import {SmileOutlined} from '@ant-design/icons';
import ImageViewAndUploadModal from "./ImageViewAndUploadModal";

export default function ImageNumberHook({basicId}) {

  // edit image modal state control
  const [visible, toggle] = useState(false);

  const {loading, error, data} = useQuery(gql`${ listImages }`, {
    variables: {
      limit: 20,
      filter: {
        basicId: {
          contains: basicId
        }
      }
    }
  })

  if (loading) {
    return (<div style={{
      position: 'absolute',
      top: 5,
      left: 5,
      right: 5,
      bottom: 5,
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Spin size="small"/>
    </div>)
  }

  if (error) {
    return (<div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <SmileOutlined
        rotate={180}
      />
    </div>)
  }

  const {items} = data.listImages;

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center"
    }}>
      <span style={{
        color: items.length === 0 ? '#e74e4e' : '#000000',
        fontSize: '20px'
      }}>{items.length}</span>
      <Button onClick={() => toggle(!visible)}>View & Upload</Button>
      <ImageViewAndUploadModal visible={visible}/>
    </div>
  )
}