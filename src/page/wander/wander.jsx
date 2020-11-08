import React, { useContext, useEffect, useRef } from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import Gallery from 'react-photo-gallery';
import { useHistory } from 'react-router-dom';
import Notifications, { notify } from 'react-notify-toast';
import { getStoryInfo, listImages } from '../../graphql/queries';
import { Context } from '../../context/context';
import WanderLoading from '../../component/wander/loading';
import './index.scss';

const IMAGE_URL_PREFIX = 'https://dvlta9st78f8e.cloudfront.net/public/';

export default function Wander({ hide }) {
  const {
    loading, data, error,
  } = useQuery(gql`${getStoryInfo}`,
    {
      variables: {
        limit: 2000,
      },
    });

  const wanderContainer = useRef(null);

  const history = useHistory();
  const [context, setContext] = useContext(Context);

  document.body.style.backgroundColor = '#B4CBD8';

  useEffect(() => {
    if (context && context.wanderPageScrollTop && wanderContainer.current) {
      setTimeout(() => {
        wanderContainer.current.scrollTop = context.wanderPageScrollTop;
      }, 1000);
    }
  }, [context]);

  if (loading) {
    return (
      <WanderLoading />
    );
  }

  if (error) {
    history.push('/404');
    return <WanderLoading />;
  }

  if (context) {
    const { wanderPageScrollTop } = context;
    if (typeof wanderPageScrollTop !== 'number') {
      // context.wanderPageScrollTop = 0;
      setContext({ ...context, wanderPageScrollTop: 0 });
    }
  }

  const { listBasics: { items: stories }, listImages: { items: images } } = data;

  const photos = images.map(({
    url, width, height, basicId,
  }) => ({
    src: IMAGE_URL_PREFIX + url,
    url,
    width,
    height,
    id: basicId,
  }));

  return (
    <div ref={wanderContainer} className="wander-gallery-container">
      <div className="wander-animation-container">
        <Gallery
          photos={photos}
          direction="column"
          onClick={((event, { photo }) => setContext({
            ...context,
            wanderPageScrollTop: wanderContainer.current.scrollTop,
          }) || history.push(`/grid-view/image/${photo.url}/${photo.id}`))}
          renderImage={({
            index, left, top, key, photo, margin,
          }) => (
            <img
              crossOrigin="Anonymous"
              {...photo}
              style={{
                left, top, margin, position: 'absolute',
              }}
              loading="lazy"
              key={key}
              onClick={
                () => {
                  const { lastName, firstName } = stories.find((i) => i.id === photo.id);
                  notify.hide();
                  notify.show(
                    <div style={{ fontSize: '30px', fontFamily: 'B612' }}>
                      {firstName}
                      {' '}
                      {lastName}
                    </div>,
                    null,
                    10000,
                  );
                }
                // () => setContext({
                //   ...context,
                //   wanderPageScrollTop: wanderContainer.current.scrollTop,
                // }) || history.push(`/grid-view/image/${photo.url}/${photo.id}`)
              }
            />
          )}
        />
        <div style={{ display: hide ? 'none' : 'initial' }} onClick={() => history.goBack()} className="back-btn" />
        <div
          style={{
            display: hide ? 'initial' : 'none',
            position: 'fixed',
            bottom: '2vh',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80vw',
            height: '4vh',
            fontSize: '2vh',
            textAlign: 'center',
            background: '#ffffff',
            fontFamily: 'B612',
          }}
          className="gallery-mobile"
        >
          Welcome To Home Museum
          {' '}
          <br />
          {' '}
          Please Use PC To Explore More
        </div>
      </div>
      <Notifications />
    </div>
  );
}
