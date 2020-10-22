/* eslint-disable */
import React, { useState } from 'react';
import './index.scss';
import propTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';

export default function ContactListItem({ contact }) {
  const [state, toggle] = useState(true);
  const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: 1000 } });
  return (
    <div className="contact-list-item" onClick={() => toggle(!state)}>
      {
                contact.character ? <span className="character">{contact.character}</span> : null
            }
      <animated.div
        style={{
          opacity: x.interpolate({ range: [0, 1], output: [0.7, 1] }),
          color: state ? '#000000' : '#3d4fad',
          transform: x
            .interpolate({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
            })
            .interpolate((x) => `scale(${x})`),
        }}
      >
        {
                    contact.firstName
                      .split('&').length > 1
                      ? [
                        contact.firstName.split('&')[0],
                        <br />,
                        '&',
                        <br />,
                      ]
                      : contact.firstName
                }
        {` ${contact.lastName}`}
      </animated.div>
    </div>
  );
}

ContactListItem.propTypes = {
  contact: propTypes.object.isRequired,
};
