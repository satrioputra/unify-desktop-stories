import * as React from 'react';
import styled from 'react-emotion';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

/**
 * Component(s)
 */
import Link from 'unify-react-desktop/build/Link';

/**
 * Notes
 */
import README from 'unify-react-desktop/build/Link/README.md';

/**
 * Storybook Constructor
 */
const linkStories = storiesOf('Principles/Link', module);

/**
 * Storybook Decorator
 */
linkStories.addDecorator(withKnobs);

/**
 * Other(s)
 */
const storyOptions = {
  notes: {
    markdown: README,
  },
};
const Wrapper = styled.div`
  padding: 16px;
`;

/**
 * Stories
 */
linkStories.add(
  'Default',
  () => {
    const className = text('className', '');
    const fontSize = number('fontSize', 10);
    const large = boolean('large', false);
    const small = boolean('small', false);
    const children = text('children', 'Link');
    const onClick = action('onClick');
    return (
      <Wrapper>
        <Link className={className} fontSize={fontSize} large={large} small={small} onClick={onClick}>
          {children}
        </Link>
      </Wrapper>
    );
  },
  storyOptions,
);

linkStories.add(
  'with various size',
  () => {
    return (
      <Wrapper>
        <Link onClick="www.tokopedia.com">Click to Tokopedia.com</Link>
        <br />
        <br />
        <Link small onClick="www.tokopedia.com">
          Link with small size
        </Link>
        <br />
        <br />
        <Link large onClick="www.tokopedia.com">
          Link with large size
        </Link>
        <br />
        <br />
        <Link large onClick={() => alert('asd')}>
          Link with callback function
        </Link>
      </Wrapper>
    );
  },
  storyOptions,
);
