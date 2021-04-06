import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';

/**
 * Component
 */
import MoreMenu from 'unify-react-desktop/build/MoreMenu';

/**
 * Notes
 */
import README from 'unify-react-desktop/build/MoreMenu/README.md';

/**
 * story options
 */
const storyOptions = {
  notes: {
    markdown: README,
  },
};

/**
 * Storybook constructor
 */
const moreMenusStories = storiesOf('Components/More Menu', module);

moreMenusStories.addDecorator(withKnobs);

/**
 * Stories
 */
moreMenusStories.add(
  'Default',
  () => {
    const items = object('items', [
      {
        title: 'Item 1 Item 1 Item 1 ',
        onClick: () => console.log('hello'),
        props: { 'data-cy': 'Click1' },
      },
      {
        title: 'Item 2 eagjiaegoeajg aeiogjioeaj ioeajiogio',
        onClick: () => console.log('hi'),
      },
      {
        active: true,
        title: 'Item 3',
        onClick: () => console.log('item3'),
      },
      {
        disabled: true,
        title: 'Item 4',
        onClick: () => console.log('item4'),
      },
    ]);

    return (
      <div style={{ position: 'absolute', right: 0 }}>
        <MoreMenu items={items} />
      </div>
    );
  },
  storyOptions,
);
