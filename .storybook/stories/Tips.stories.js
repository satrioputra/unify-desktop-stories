import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Tips from 'unify-react-desktop/build/Tips';
import README from 'unify-react-desktop/build/Tips/README.md';

const tipsStories = storiesOf('Principles/Tips', module);
tipsStories.addDecorator(withKnobs);

const storyOptions = {
  notes: {
    markdown: README,
  },
};

tipsStories.add(
  'Default',
  () => {
    const children = text(
      'children',
      'Tips with multiple lines. Applying ellipsis on overflowing text that are more than two lines',
    );
    return <Tips>{children}</Tips>;
  },
  storyOptions,
);
