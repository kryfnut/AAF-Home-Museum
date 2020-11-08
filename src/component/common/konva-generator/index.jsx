import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import propTypes from 'prop-types';
import {
  Stage, Layer, Image, Text, Rect,
} from 'react-konva';
import useImage from 'use-image';
import _ from '../../../asset/icons-group.svg';
import qr from '../../../asset/qr-code.png';

const KonvaImage = ({
  url, width, height, x, y,
}) => {
  const [image] = useImage(url, 'Anonymous');
  return <Image width={width} height={height} x={x} y={y} image={image} />;
};

const getRowColumn = (index) => [
  Math.floor(index / 4),
  (index + 1) % 4 === 0 ? 4 : (index + 1) % 4,
];

KonvaImage.propTypes = {
  url: propTypes.string.isRequired,
  width: propTypes.number.isRequired,
  height: propTypes.number.isRequired,
  x: propTypes.number.isRequired,
  y: propTypes.number.isRequired,
};

const dpr = 2;
const padding = 60;
const gridSize = 200;

function KonvaGenerator({ collection, handle }, ref) {
  const stage = useRef(null);
  const width = (padding * 5) * dpr + (4 * gridSize) * dpr;
  const height = (padding * 2) * dpr + Math.ceil(collection.length / 4) * gridSize * dpr + Math.ceil(collection.length / 4) * padding * dpr;

  const images = collection.map((image, index) => ({
    ...image,
    // eslint-disable-next-line no-nested-ternary
    width: image.width > image.height
      ? 180 * dpr
      : (image.width === image.height ? 160 * dpr : 135 * dpr),
    // eslint-disable-next-line no-nested-ternary
    height: image.width > image.height
      ? 135 * dpr
      : (image.width === image.height ? 160 * dpr : 180 * dpr),
    x: (getRowColumn(index)[1] * padding + (getRowColumn(index)[1] - 1) * gridSize) * dpr,
    y: (((getRowColumn(index)[0] + 1) * padding + (getRowColumn(index)[0]) * gridSize)) * dpr,
  }));

  useImperativeHandle(ref, () => ({
    getDataURLContent: () =>
    // console.log(stage.current.toDataURL());
      stage.current.toDataURL()
    ,
  }));

  return (
    <Stage ref={stage} width={width} height={height}>
      <Layer>
        <Rect x={0} y={0} width={width} height={height} fill="#000000" />
        {
                    images.map(({
                      x, y, height: h, width: w, url, firstName, lastName,
                    }) => (
                      <>
                        <KonvaImage x={x} y={y} height={h} width={w} url={url} />
                        {/* <KonvaImage */}
                        {/*  url={qr} */}
                        {/*  x={width - 100 * dpr - padding * dpr} */}
                        {/*  y={height - 100 * dpr * 1.2} */}
                        {/*  width={100 * dpr} */}
                        {/*  height={100 * dpr} */}
                        {/* /> */}
                        <Text
                          text={`${firstName} ${lastName}`}
                          width={width}
                          fill="#ffffff"
                          height={20}
                          fontSize={12}
                          fontFamily="B612"
                          x={x}
                          y={y + h + 5}
                        />
                      </>
                    ))
                }
      </Layer>
    </Stage>
  );
}

KonvaGenerator.propTypes = {
  // eslint-disable-next-line react/require-default-props
  collection: propTypes.array.isRequired[Symbol.hasInstance],
};

export default forwardRef(KonvaGenerator);
