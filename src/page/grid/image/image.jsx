import React from 'react';
import { useParams } from 'react-router-dom';
import useImage from '../../../hooks/useImage';
import GridLoading from '../../../component/grid/loading';
import GridImageComponent from '../../../component/grid/image';

const IMAGE_URL_PREFIX = 'https://homemuseumbucket112347-production.s3.amazonaws.com/public/';

/* route for grid image view */
export default function GridImage() {
  const { url, id } = useParams();

  const {
    loading, error, width, height,
  } = useImage(`${IMAGE_URL_PREFIX}${encodeURIComponent(url)}`);

  if (loading || !width || !height) {
    return <GridLoading />;
  }

  // set body background
  document.body.style.backgroundColor = '#CED8B3';

  // TODO error handler
  if (error) {
    return <div>error</div>;
  }

  return (
    <GridImageComponent image={url} url={`${IMAGE_URL_PREFIX}${encodeURIComponent(url)}`} id={id} width={width} height={height} />
  );
}
