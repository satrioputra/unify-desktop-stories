import React from 'react';

import { storiesOf } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, number, object } from '@storybook/addon-knobs';

/**
 * Component(s)
 */
import Ticker from 'unify-react-desktop/build/Ticker';
import Tips from 'unify-react-desktop/build/Tips';

/**
 * Notes
 */
import README from 'unify-react-desktop/build/Ticker/README.md';

/**
 * Storybook Constructor
 */
const tickerStories = storiesOf('Components/Ticker', module);

/**
 * Storybook Decorator
 */
tickerStories.addDecorator(withKnobs);

/**
 * Other(s)
 */
const storyOptions = {
  knobs: {
    // escapeHTML: false,
  },
  notes: {
    markdown: README,
  },
};
const exampleImage = <img src="https://place-hold.it/38x24&text=Visa" />;

/**
 * Stories
 */
tickerStories.add(
  'Default',
  () => {
    const colorVarian = {
      default: 'default',
      info: 'info',
      warning: 'warning',
      error: 'error',
    };

    const dataItem = [
      {
        title: 'Some good information for you',
        text: 'Lorem ipsum dolor, sit amet adipisicing elit.',
        additionals: ['first additional', 'second additional'],
        onClick: action('onClick item1'),
      },
      {
        title: 'Neutrally inform you',
        text: 'In necessitatibus perferendis porro quam',
        additionals: ['first additional', 'second additional'],
        info: true,
        onClick: action('onClick item2'),
      },
      {
        title: 'Warn you about things',
        text: 'Lorem ipsum dolor sit amet',
        additionals: ['first additional', 'second additional'],
        warning: true,
        onClick: action('onClick item3'),
      },
      {
        title: 'An error happened. Ugh!',
        text: 'Dolor excepturi quam possimus harum quasi ratione fuga',
        additionals: ['first additional', 'second additional'],
        error: true,
        onClick: action('onClick item4'),
      },
    ];

    const activeIndex = number('activeIndex', 0, { min: 0 });
    const autoplay = boolean('autoplay', false);
    const items = object('items', dataItem);
    const slideDuration = number('slideDuration', 5000);
    return (
      <React.Fragment>
        <Tips>
          See <b>Notes</b> for documentation.
        </Tips>
        <Tips>
          Change to <b>Knobs</b> tab on addon panel to dynamically interact with the props.
        </Tips>
        <div style={{ padding: '16px' }}>
          <Ticker
            autoPlay={autoplay}
            activeIndex={activeIndex}
            items={items}
            slideDuration={slideDuration}
            onClose={action('onClose event')}
          />
        </div>
      </React.Fragment>
    );
  },
  storyOptions,
);
