import React from 'react';
import {listBasics} from "../graphql/queries";
import {useQuery} from 'react-apollo-hooks';
import {gql} from "apollo-boost";

import {Table, Tag, Space} from 'antd';

export default function BasicInformationTable() {
  const {loading, error, data} = useQuery(gql`${listBasics}`, {variables: {limit: 300}});

  if (loading) {
    return <div>'loading....'</div>
  }

  if (error) {
    return <div>'error....'</div>
  }

  const {items, nextToken} = data.listBasics;

  const dataSource = items.map(item => ({...item, key: item.id}))

  const columns = [
    {
      title: 'FIRST NAME',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'LAST NAME',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'COUNTRY',
      key: 'countryResidence',
      dataIndex: 'countryResidence',
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
      <Table columns={columns} dataSource={dataSource} pagination={{pageSize: 50}}/>
    </div>
  )
}