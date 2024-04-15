import React, {useState, useCallback} from 'react';
import useListPhotoGallery from "../api-hook/useListPhotoGallery";
import {CircularProgress, Grid} from "@mui/material";
import {ErrorOutlineTwoTone} from "@mui/icons-material";
import Gallery from "react-photo-gallery";

import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


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

const randomNum = function (minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        default:
            return 0;
    }
}

const sizeMap = [
    {width: 3, height: 4},
    {width: 4, height: 3},
    {width: 1, height: 1},
]

const handleImageLinkAndSize = ({url: key, id}) => {
    const src = `https://homemuseumbucket112347-production.s3.amazonaws.com/public/${encodeURIComponent(key)}`;
    const {width, height} = sizeMap[randomNum(0, 2)];
    return {
        src,
        width,
        height,
        title: id
    }
}

export default function ImageGallery() {
    const {loading, error, data} = useListPhotoGallery();

    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState('');

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {

        setTitle('');

        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

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

        const photos = data.map(_ => handleImageLinkAndSize(_));


        return (<FixedGrid container>
            <div style={{width: '60vw', height: '70vh', overflow: 'scroll'}}>
                <Gallery photos={photos} direction={"column"} onClick={((event, {photo, index}) => {
                    handleClose();
                    setTitle(photo.title);
                    handleClick();
                })}/>
            </div>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message={title}
                action={
                    <React.Fragment>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                            <CloseIcon fontSize="small"/>
                        </IconButton>
                    </React.Fragment>
                }
            />
        </FixedGrid>)
    }
}