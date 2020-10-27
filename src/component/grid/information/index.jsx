import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../../../context/context';

import './index.scss';

export default function GridInformationComponent({
  title, lastName, firstName, description, id,
}) {
  const history = useHistory();

  return (
    <div className="grid-information-component-container">
      <div className="grid-information-main">
        <article className="information-article">
          <h1 className="title">{title}</h1>
          <p className="subtitle">{`${lastName} ${firstName}`}</p>
          <p className="content">
            {description}
          </p>
        </article>
        <div
          className="go-image"
          onClick={() => history.goBack()}
        />
        <div onClick={() => history.go(-2)} className="close-btn" />
      </div>
    </div>
  );
}
