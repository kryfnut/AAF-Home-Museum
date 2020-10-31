import React from 'react';
import propTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import { createCollection } from '../../../graphql/mutations';
import CollectionCard from '../card';
import './index.scss';

export default function CollectionGallery({
  collection,
}) {
  const history = useHistory();

  const [create, { loading, error, data }] = useMutation(gql`${createCollection}`, {
    variables: {
      input: {
        image: [
          ...collection.map((image) => ({
            id: image.id,
            url: image.url,
            width: image.width,
            height: image.height,
          })),
        ],
      },
    },
  });

  const createAndNotifyCollectionKey = () => {
    create()
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="collection-gallery-container">
      <div className="collection-gallery">
        {
                    collection
                      .map(
                        ({
                          // url is an https url, and image is the key in the bucket
                          width, height, url, id, firstName, lastName,
                        }) => (
                          <CollectionCard
                            id={id}
                            key={url}
                            width={width}
                            height={height}
                            url={url}
                            name={`${lastName} ${firstName}`}
                          />
                        ),
                      )
                }
      </div>
      <div className="collection-footer">
        <div className="title">MY COLLECTION</div>
        <div className="collection-tool">
          <div onClick={() => history.push('/entrance')} className="enter-key">Enter your personal Key</div>
          <div
            onClick={() => createAndNotifyCollectionKey()}
            className="save-and-get-key"
          >
            Save & get your
            <br />
            personal Key
          </div>
          <div className="export-pdf">Export as PDF</div>
          <div
            onClick={() => history.replace('/menu')}
            className="go-home"
          />
        </div>
      </div>
    </div>
  );
}

CollectionGallery.propTypes = {
  collection: propTypes.array.isRequired[Symbol.hasInstance],
};

CollectionGallery.defaultProps = {
  collection: [],
};
