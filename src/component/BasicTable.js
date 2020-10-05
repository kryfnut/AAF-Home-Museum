import React, {useRef} from "react";
import {Grid, CircularProgress} from "@material-ui/core";
import {ErrorOutlineTwoTone} from "@material-ui/icons";
import MaterialTable from 'material-table';

import InformationEditDialog from "./InformationEditDialog";

import useListTable from "../api-hook/useListTable";

const FixedGrid = function (props) {
  return (
    <Grid
      style={{minHeight: '70vh'}}
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      {props.children}
    </Grid>
  )
}

export default function BasicTable() {
  const {loading, error, data} = useListTable();
  const informationDialog = useRef();

  if (loading) {
    return (
      <FixedGrid>
        <CircularProgress color="primary"/>
      </FixedGrid>
    )
  }

  if (error) {
    return (
      <FixedGrid>
        <ErrorOutlineTwoTone/>
        <p>Ops... Error happened!</p>
        <p>{error.message}</p>
      </FixedGrid>
    )
  }

  if (data) {

    return (
      <Grid container>
        <MaterialTable
          title="Personal Collection Editor"
          columns={[
            {
              title: 'Last Name',
              field: 'lastName',
              defaultSort: 'asc'
            },
            {title: 'First Name', field: 'firstName'},
            {
              title: 'Country',
              field: 'countryResidence',
              render(rowData) {
                return rowData.countryResidence.join(', ')
              }
            },
            {title: 'City', field: 'cityResidence'},
            {title: 'Title', field: 'title'},
            {
              title: 'Description',
              field: 'description',
              render(rowData) {
                return rowData.description.split('').slice(0, 20).join('')
              }
            },
          ]}
          style={{
            width: '100%',
            height: '100%'
          }}
          data={data}
          actions={[
            {
              icon: 'edit',
              tooltip: 'Edit Current And Upload Images',
              onClick: (event, rowData) => informationDialog.current.open(rowData)
            },
          ]}
          options={{
            actionsColumnIndex: -1,
            pageSize: 50,
            pageSizeOptions: [50, 100, 200, 220],
            maxBodyHeight: '70vh',
            minBodyHeight: '70vh',
          }}
        />
        <InformationEditDialog ref={informationDialog}/>
      </Grid>
    )
  }
}