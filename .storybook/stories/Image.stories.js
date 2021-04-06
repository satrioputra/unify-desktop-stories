import React from 'react';

import { storiesOf } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

/**
 * Component(s)
 */
import Image from 'unify-react-desktop/build/Image';

/**
 * Notes
 */
import README from 'unify-react-desktop/build/Image/README.md';

/**
 * Storybook Constructor
 */
const imageStories = storiesOf('Components/Image', module);

/**
 * Storybook Decorator
 */
imageStories.addDecorator(withKnobs);

/**
 * Other(s)
 */
const storyOptions = {
  notes: README,
};

/**
 * Stories
 */
imageStories.add(
  'Default',
  () => {
    const ratioOptions = {
      '1:1': '1:1',
      '2:1': '2:1',
      '3:1': '3:1',
      '4:1': '4:1',
    };
    const alt = text('alt', 'this is alt value');
    const className = text('className', 'unf-image unf-image__test');
    const loading = boolean('loading', false);
    const ratio = select('ratio', ratioOptions, '1:1');
    const src = text('src', 'https://via.placeholder.com/1600x1200');
    return (
      <div style={{ width: '500px', height: '500px' }}>
        <Image ratio={ratio} src={src} alt={alt} loading={loading} className={className} />
      </div>
    );
  },
  storyOptions,
);
