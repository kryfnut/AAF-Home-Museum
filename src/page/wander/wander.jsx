import React, { useContext, useEffect, useRef } from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import Gallery from 'react-photo-gallery';
import { useHistory } from 'react-router-dom';
import { listImages } from '../../graphql/queries';
import { Context } from '../../context/context';
import WanderLoading from '../../component/wander/loading';
import './index.scss';

const IMAGE_URL_PREFIX = 'https://homemuseumbucket112347-production.s3.amazonaws.com/public/';

export default function Wander() {
  const {
    loading, data, error,
  } = useQuery(gql`${listImages}`,
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
    // todo error handler
    return (
      <div>error...</div>
    );
  }

  if (context) {
    const { wanderPageScrollTop } = context;
    if (typeof wanderPageScrollTop !== 'number') {
      // context.wanderPageScrollTop = 0;
      setContext({ ...context, wanderPageScrollTop: 0 });
    }
  }

  const { listImages: { items: images } } = data;

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
        />
        <div onClick={() => history.goBack()} className="back-btn" />
      </div>
    </div>
  );
}
