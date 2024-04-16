import React, {useState} from "react";
//import Amplify, { Storage } from 'aws-amplify';
//import awsconfig from './aws-exports';
import { uploadData } from "@aws-amplify/storage";

//Amplify.configure(awsconfig);

export default function Uploader({onSuccess, id, index}) {
    const [uploading, setUploadState] = useState(false);
    let list = [];

    const onChange = e => {
        const fileList = new Array(...e.target.files);

        if (!fileList.length) {
            return;
        }

        let uploadQueue = fileList.map(async file => {
            console.log(file);
            try {
                console.log(Date.now() + Math.random() * Math.random() + file.name)
                const result = await uploadData (`${id}-${Date.now() + Math.random() * Math.random() + file.name}`, file, {
                    contentType: 'image/jpeg'
                });
                list = [
                    ...list,
                    result
                ];
            } catch (e) {
                throw new Error(e.message);
            }
        })
        setUploadState(true);
        Promise
            .all([...uploadQueue])
            .then(() => onSuccess(list) && (list = []))
            .catch(err => console.log('upload error:', err.message))
            .finally(() => {
                setUploadState(false);
                let el = document.querySelector(".inputtt");
                el.value = "";
            })
    }


    return (
        <div>
            <input
                className={'inputtt'}
                multiple={true}
                type="file" accept='image/jpeg, image/jpg'
                onChange={(evt) => onChange(evt)}
            />
            {
                uploading
                    ? <span>uploading…… pls do not click save and close button</span>
                    : <span>waiting for upload</span>
            }
        </div>
    )
}