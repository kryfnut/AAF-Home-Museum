import React, {useRef} from "react";
import {Grid, CircularProgress} from "@mui/material";
import {ErrorOutlineTwoTone} from "@mui/icons-material";
import MaterialTable from 'material-table';

import InformationEditDialog from "./InformationEditDialog";

import useListTable from "../api-hook/useListTable";
import {listImages} from "../graphql/queries";

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
    const {loading, error, data, setData} = useListTable();
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

        // let index = 0;
        //
        // data.forEach(async ({id, lastName}) => {
        //     let result = await API.graphql(graphqlOperation(listImages, {
        //         limit: 10000,
        //         filter: {
        //             basicId: {
        //                 contains: id
        //             }
        //         }
        //     }));
        //
        //     if (result.data.listImages.items.length === 0) {
        //         index++;
        //         console.log(lastName);
        //     }
        // })
        //
        // setTimeout(() => {
        //     console.log(index);
        // }, 10000)

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
                <InformationEditDialog
                    onSuccess={state => setData(data.map(item => item.id === state.id ? state : item))}
                    ref={informationDialog}/>
            </Grid>
        )
    }
}