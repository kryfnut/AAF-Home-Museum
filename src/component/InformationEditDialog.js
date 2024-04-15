import React, {useImperativeHandle} from 'react';
import {makeStyles} from '@mui/material/styles';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import FormGroup from "@mui/material/FormGroup";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Slide from '@mui/material/Slide';

import PhotoManager from "./PhotoManager";
import {generateClient} from 'aws-amplify/api';

import {updateBasic, createImage} from "../graphql/mutations";


const client = generateClient();

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%'
    },
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function InformationEditDialog(props, ref) {
    const classes = useStyles();
    // 控制modal开关
    const [open, setOpen] = React.useState(false);
    // 控制设置form state
    const [state, setState] = React.useState(undefined);
    const [photos, setPhotos] = React.useState([]);

    const handleOpen = (row) => {
        if (row) {
            setState(row);
        }
        setOpen(true);
    };

    const handleChange = (event) => setState({...state, [event.target.id]: event.target.value})

    const handlePhotoUploadSuccess = (p) => setPhotos([...photos, ...p])

    const handleSave = () => {
        try {
            const submit = client.graphql(updateBasic, {
                input: {
                    id: state.id,
                    title: state.title,
                    description: state.description
                },
            });

            const imagesToCreate = photos.map(async ({key}) => {

                const resolveWidthHeight = (url) => {
                    return new Promise(resolve => {
                        const img = new Image();
                        img.src = 'https://homemuseumbucket112347-production.s3.amazonaws.com/public/' + url;
                        img.onload = function () {
                            console.log(img);
                            resolve({width: img.width, height: img.height})
                        }
                        img.onerror = function (e) {
                            resolve({width: 0, height: 0})
                        }
                    })
                }

                let {width, height} = await resolveWidthHeight(key);

                await client.graphql(createImage, {
                    input: {
                        basicId: state.id,
                        url: key,
                        width,
                        height
                    },
                });
                }
            )

            Promise.all([
                submit,
                ...imagesToCreate
            ])
                .then(res => {
                    console.log(res);
                    props.onSuccess(state);
                })
                .catch(e => alert(e))
                .finally(() => handleClose())

        } catch (err) {
            throw new Error(err.message);
        }
    }

    const handleClose = async () => {
        setState(undefined);
        setPhotos([]);
        setOpen(false);
    };

    useImperativeHandle(ref, () => ({
        open: (row) => handleOpen(row),
    }))

    return (
        <div>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            {state ? `${state.lastName} · ${state.firstName}` : 'Loading...'}
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleSave}>
                            Save
                        </Button>
                    </Toolbar>
                </AppBar>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                    >
                        <Typography color="secondary">Click Here To Upload Images</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {
                            state
                                ? <PhotoManager onSuccess={handlePhotoUploadSuccess} id={state.id}/>
                                : <Grid/>
                        }
                    </AccordionDetails>
                </Accordion>
                <Grid style={{height: '5vh', width: '100%'}}/>
                <FormGroup>
                    <TextField
                        defaultValue={state ? state.title : ''}
                        onChange={handleChange}
                        margin="dense"
                        id="title"
                        label="Title"
                        type="input"
                        fullWidth
                    />
                    <TextField
                        defaultValue={state ? state.description : ''}
                        onChange={handleChange}
                        multiline
                        margin="dense"
                        id="description"
                        label="Description"
                        type="input"
                        fullWidth
                    />
                </FormGroup>
            </Dialog>
        </div>
    );
}

export default React.forwardRef(InformationEditDialog)