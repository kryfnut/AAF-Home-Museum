import React, { useRef } from 'react';
import propTypes from 'prop-types';
import Notifications, { notify } from 'react-notify-toast';
import copy from 'clipboard-copy';
import { useHistory } from 'react-router-dom';
import { useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import download from 'downloadjs';
import { createCollection } from '../../../graphql/mutations';
import CollectionCard from '../card';
import KonvaGenerator from '../../common/konva-generator';
import './index.scss';

export default function CollectionGallery({
  collection,
}) {
  const history = useHistory();
  const container = useRef(null);
  const konva = useRef(null);

  const [create, { loading }] = useMutation(gql`${createCollection}`, {
    variables: {
      input: {
        image: [
          ...collection.map((image) => ({
            basicId: image.basicId,
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

  const saveAsImage = () => {
    download(konva.current.getDataURLContent(), 'home-museum-collection.png');
  };

  return (
    <div className="collection-gallery-container">
      <div ref={container} className="collection-gallery">
        {
                    collection
                      .map(
                        ({
                          // url is an https url, and image is the key in the bucket
                          width, height, url, basicId, firstName, lastName,
                        }) => console.log(url) || (
                          <CollectionCard
                            id={basicId}
                            key={basicId + url}
                            width={width}
                            height={height}
                            url={url}
                            name={`${firstName} ${lastName}`}
                          />
                        ),
                      )
                }
      </div>
      <div className="collection-footer">
        <div className="title">MY COLLECTION</div>
        <div className="collection-tool">
          <div onClick={() => history.push('/entrance')} className="enter-key">ENtER YOUR PERSONAL KEY</div>
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
                                SAVE & GET YOUR
                                <br />
                                PERSONAL KEY
                              </div>
                            )
                        }

          </div>
          <div
            onClick={() => saveAsImage()}
            className="export-pdf"
          >
            EXPORT AS PNG
          </div>
          <div
            onClick={() => history.replace('/menu')}
            className="go-home"
          />
        </div>
      </div>
      <div className="hidden">
        <KonvaGenerator ref={konva} collection={collection} />
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
