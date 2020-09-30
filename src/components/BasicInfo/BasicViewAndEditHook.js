import React, {useState} from "react";
import {useQuery} from "react-apollo-hooks";
import {getBasic} from "../../graphql/queries";
import gql from 'graphql-tag';
import {Spin, Button} from "antd";
import {SmileOutlined} from '@ant-design/icons';
import BasicViewAndEditModal from "./BasicViewAndEditModal";

export default function DescriptionHook({basicId}) {

  // edit image modal state control
  const [visible, toggle] = useState(false);

  const {loading, error, data} = useQuery(gql`${ getBasic }`, {
    variables: {
        id: basicId
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

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center"
    }}>
      <Button onClick={() => toggle(!visible)}>Edit</Button>
      <BasicViewAndEditModal
        basicId={basicId}
        item={data.getBasic}
        toggle={() => toggle(!visible)}
        visible={visible}
      />
    </div>
  )
}