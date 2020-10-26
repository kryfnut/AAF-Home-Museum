import React from 'react';
import { useParams } from 'react-router-dom';
import useImage from '../../../hooks/useImage';
import GridLoading from '../../../component/grid/loading';

const IMAGE_URL_PREFIX = 'https://homemuseumbucket112347-production.s3.amazonaws.com/public/';

/* route for grid image view */
export default function GridImage() {
  const { url, id } = useParams();

  const {
    loading, error, width, height,
  } = useImage(`${IMAGE_URL_PREFIX}${encodeURIComponent(url)}`);

  if (loading) {
    return <GridLoading />;
  }

  // TODO error handler
  if (error) {
    return <div>error</div>;
  }

  return (
    <div className="grid-image-container">
      {JSON.stringify({ width, height })}
    </div>
  );
}
