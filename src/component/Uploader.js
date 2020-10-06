import React, {useState} from "react";
import {Storage} from 'aws-amplify';

export default function Uploader({onSuccess, id, index}) {
    const [uploading, setUploadState] = useState(false);
    let list = [];

    const onChange = e => {
        const fileList = new Array(...e.target.files);

        if (!fileList.length) {
            return;
        }

        let uploadQueue = fileList.map(async file => {
            try {
                const result = await Storage.put(`${id}-${Date.now()}`, file, {
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