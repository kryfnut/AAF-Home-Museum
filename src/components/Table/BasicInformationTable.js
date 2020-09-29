import React, {useState} from 'react';
import {listBasics} from "../../graphql/queries";
import {useQuery} from 'react-apollo-hooks';
import {gql} from "apollo-boost";

import {Table, Tag, Space, Spin} from 'antd';
import {SmileOutlined} from '@ant-design/icons';

import ImageNumberHook from "../Images/ImageCountAndModalControlHook";

export default function BasicInformationTable() {
  const {loading, error, data} = useQuery(gql`${listBasics}`, {variables: {limit: 300}});

  if (loading) {
    return (
      <div style={{
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
        <Spin size="large"/>
      </div>
    )
  }

  if (error) {
    return (
      <div style={{
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
          style={{fontSize: '80px', color: '#08c'}}
        />
      </div>
    )
  }

  const {items} = data.listBasics;

  const dataSource = items.map(item => ({...item, key: item.id}))

  const columns = [
    {
      title: 'FIRST NAME',
      dataIndex: 'firstName',
      key: 'firstName',
      width: '8%'
    },
    {
      title: 'LAST NAME',
      dataIndex: 'lastName',
      key: 'lastName',
      width: '8%'
    },
    {
      title: 'COUNTRY',
      key: 'countryResidence',
      dataIndex: 'countryResidence',
      width: '8%',
      render: tags => (
        <span>
        {tags.map(tag => {
          return (
            <Tag color={'geekblue'} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
      ),
    },
    {
      title: 'CITY',
      dataIndex: 'cityResidence',
      key: 'cityResidence',
      width: '8%'
    },
    {
      title: 'TOTAL IMAGES',
      dataIndex: 'id',
      key: 'id',
      width: '12%',
      render: id => (
        <ImageNumberHook basicId={id}/>
      )
    },
    {
      title: 'TITLE',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>EDIT</a>
        </Space>
      ),
    },
  ];


  return (
    <div>
      <h1 style={{fontSize: '80px', fontWeight: 100, cursor: "default", userSelect: 'none'}}>HOME MUSEUM PROFILE EDIT SYSTEM 🐸</h1>
      <Table columns={columns} dataSource={dataSource}/>
    </div>
  )
}