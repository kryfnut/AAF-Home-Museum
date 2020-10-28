/* eslint-disable */
import React, { useState } from 'react';
import './index.scss';
import propTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import {useHistory} from 'react-router-dom';

export default function ContactListItem({ contact, onClick }) {
  const [state, toggle] = useState(true);
  const history = useHistory();
  const props = useSpring({opacity: 1, from: {opacity: 0}});
  return (
    <div className="contact-list-item" onClick={() => onClick() || history.push(`/grid/${contact.id}`)}>
      <animated.div
        style={{
            ...props,
        }}
      >
          {
              contact.character ? <span className="character">{contact.character}</span> : null
          }
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
