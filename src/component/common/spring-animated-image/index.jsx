/* eslint-disable */
import React, {useState} from 'react';
import {useTransition, animated} from 'react-spring';

export default function SpringAnimatedImage(
    {
        url, // image source
        width, // image width
        height, // image height
        // TODO or not: alt image preset
        startX = 0, // image start position x
        startY = 0, // image start position y
        endX = 0, // image end position x
        endY = 0, // image end position y
        duration, // image display duration
    },
) {

    const from = {
        left: 0,
        top: 0,
        opacity: 0,
        transform: `translate(${ startX }px, ${startY}px)`
    };
    const enter = {
        left: 0,
        top: 0,
        opacity: 1,
        transform: `translate(${ endX }px, ${endY}px)`
    };
    const leave = {
        left: 0,
        top: 0,
        opacity: 0,
        transform: `translate(${ endX }px, ${endY}px)`
    };

    const config = {duration};

    const transitions = useTransition(url, null, {from, enter, leave, config});

    return transitions.map(
        ({item, props, key}) =>
        <animated.div
            key={key}
            style={{...props, width: `${width}px`, height: `${height}px`, position: 'absolute'}}
        >
            <img
                crossOrigin="Anonymous"
                className="launcher-image"
                src={url}
                width={width}
                height={height}
                alt=""/>
        </animated.div>
    )
}
