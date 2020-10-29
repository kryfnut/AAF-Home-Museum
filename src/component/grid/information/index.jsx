import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../../../context/context';

import './index.scss';

export default function GridInformationComponent({
  title, lastName, firstName, description, id, url, gallery,
}) {
  const history = useHistory();

  return (
    <div className="grid-information-component-container">
      <div className="grid-information-main">
        <article className="information-article">
          <h1 className="title">{`${lastName} ${firstName}`}</h1>
          <p className="subtitle">{title}</p>
          <p className="content">
            {description}
          </p>
        </article>
        <div
          className="go-image"
          style={{
            display: gallery ? 'none' : 'block',
          }}
          onClick={() => (!gallery
            ? history.replace(`/grid-view/image/${url}/${id}`)
            : history.goBack())}
        />
        <div onClick={() => history.goBack()} className="close-btn" />
      </div>
    </div>
  );
}
