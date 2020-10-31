import React from 'react';
import propTypes from 'prop-types';
import Notifications, { notify } from 'react-notify-toast';
import copy from 'clipboard-copy';
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

  const [create, { loading }] = useMutation(gql`${createCollection}`, {
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
      .then(({ data: { createCollection: result } }) => {
        if (result) {
          copy(result.id);
          notify.show((<div>
            <p>Your Personal Key Generate Successful</p>
            <p>And Already Copied Into Your ClipBoard</p>
            <br />
            <p>
              ID:
              {result.id}
            </p>
          </div>));
        } else {
          notify.show('Ops...An Unexcepted Error Happened', 'error');
        }
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
            {
              loading ? (
                <div className="collection-save-loading">
                  <div className="lds-ellipsis">
                    <div />
                    <div />
                    <div />
                    <div />
                  </div>
                </div>
              ) : (
                <div>
                  Save & get your
                  <br />
                  personal Key
                </div>
              )
            }

          </div>
          <div className="export-pdf">Export as PDF</div>
          <div
            onClick={() => history.replace('/menu')}
            className="go-home"
          />
        </div>
      </div>
      <Notifications />
    </div>
  );
}

CollectionGallery.propTypes = {
  collection: propTypes.array.isRequired[Symbol.hasInstance],
};

CollectionGallery.defaultProps = {
  collection: [],
};
