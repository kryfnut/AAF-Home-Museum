import React from "react";
import {Storage} from 'aws-amplify';
import './s3-image.css';

export default class S3ImageUpload extends React.Component {

  constructor(props) {
    super(props);
  }

  onChange(e) {
    const file = e.target.files[0];
    Storage.put(this.props.fileName, file, {
      contentType: 'image/jpeg'
    })
      .then (result => this.props.onSuccess(result))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <input
        type="file" accept='image/jpeg, image/jpg'
        onChange={(evt) => this.onChange(evt)}
      />
    )
  }
}
