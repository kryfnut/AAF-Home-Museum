//'use client'

import React, {useEffect, useState} from 'react';
import useListPhotoKeys from "../api-hook/useListPhotoKeys";
import {CircularProgress} from "@mui/material";
import {ErrorOutlineTwoTone} from "@mui/icons-material";
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Divider from "@mui/material/Divider";
import Avatar from '@mui/material/Avatar';

import Uploader from "./Uploader";

import "../assets/s3-image.css";
import {Image} from '@aws-amplify/ui-react';

const FixedGrid = function (props) {
    return (
        <Grid
            style={{minHeight: '10vh'}}
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            {props.children}
        </Grid>
    )
}

export default function PhotoManager({id, onSuccess}, ref) {
    const {loading, error, data} = useListPhotoKeys(id);
    const [currentPhotos, setCurrentPhotos] = useState([]);

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

    return (
        <div>
            <div>
                <Chip color="primary" avatar={<Avatar>📷</Avatar>}
                      label={`TOTAL IMAGES: ${data.length + currentPhotos.length}`}/>
            </div>
            <div style={{width: '80vw', minHeight: '100px', paddingTop: '10px'}}>
                {
                    data.map(({url}) => (<Image key={url} imgKey={url}/>))
                }
            </div>
            <div style={{width: '80vw', minHeight: '100px'}}>
                {
                    currentPhotos.map(({key}) => (<Image key={key} imgKey={key}/>))
                }
            </div>
            <div>
                <Uploader
                    id={id}
                    index={data.length}
                    onSuccess={(result) => setCurrentPhotos([...currentPhotos, ...result]) || onSuccess(result)}
                />
            </div>
        </div>
    )
}