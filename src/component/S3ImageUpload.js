import React from "react";
import { uploadData } from "@aws-amplify/storage";

export default class S3ImageUpload extends React.Component {


    constructor(props) {
        super(props);
        this.index = this.props.index;
        this.list = [];
        this.state = {
            uploading: false,
        }
    }

    onChange(e) {

        this.setState({
            uploading: true
        })

        const id = this.props.id;
        const fileList = new Array(...e.target.files);

        let uploadQueue = fileList.map(async file => {
            try {
                const result = await uploadData(`${id}-${this.index++}`, file, {
                    contentType: 'image/jpeg'
                });
                this.list = [
                    ...this.list,
                    result
                ];
            } catch (e) {
                throw new Error(e.message);
            }
        })

        Promise
            .all([...uploadQueue])
            .then(() => this.props.onSuccess(this.list) && (this.list = []))
            .catch(e => console.log('upload error:', e.message))
            .finally(this.setState({uploading: false}))


    }

    render() {
        return (
            <div>
                <input
                    multiple={true}
                    type="file" accept='image/jpeg, image/jpg'
                    onChange={(evt) => this.onChange(evt)}
                />
                {
                    this.state.uploading
                        ? <span>'uploading…… pls do not click save and close button'</span>
                        : <span>waiting for upload</span>
                }
            </div>
        )
    }
}
