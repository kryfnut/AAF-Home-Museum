import React, {useState} from "react";
import {useQuery} from "react-apollo-hooks";
import {listDescriptions} from "../../graphql/queries";
import gql from 'graphql-tag';
import {Spin, Button} from "antd";
import {SmileOutlined} from '@ant-design/icons';
import DescriptionViewAndEditModal from "./DescriptionViewAndEditModal";

export default function DescriptionHook({basicId}) {

  // edit image modal state control
  const [visible, toggle] = useState(false);

  const {loading, error, data} = useQuery(gql`${ listDescriptions }`, {
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

  const {items} = data.listDescriptions;

  console.log(items);

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center"
    }}>
      <span style={{
        color: items.length === 0 ? '#e74e4e' : '#000000',
        fontSize: '20px'
      }}>{items[0] ? 'edited' : 'not edited'}</span>
      <Button onClick={() => toggle(!visible)}>📒</Button>
      <DescriptionViewAndEditModal
        basicId={basicId}
        description={items[0] && items[0].value || ''}
        toggle={() => toggle(!visible)}
        visible={visible}
      />
    </div>
  )
}