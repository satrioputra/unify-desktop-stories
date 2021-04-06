import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import BackToTop from 'unify-react-desktop/build/BackToTop';
import note from 'unify-react-desktop/build/BackToTop/README.md';

const backToTopStories = storiesOf('Components/BackToTop', module);
const storyOption = {
  notes: {
    markdown: note,
  },
};
backToTopStories.addDecorator(withKnobs);

backToTopStories.add(
  'Default',
  () => {
    return (
      <div style={{ height: '5000px' }}>
        <BackToTop
          right={number('right', 4)}
          smooth={boolean('smooth', true)}
          aria-label="Back to Top"
          onClick={action('onClick')}
        />
      </div>
    );
  },
  storyOption,
);
