import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, radios, text } from '@storybook/addon-knobs';

import Notification from 'unify-react-desktop/build/Notification';
import Tips from 'unify-react-desktop/build/Tips';
import README from 'unify-react-desktop/build/Notification/README.md';

const notificationStories = storiesOf('Components/Notification', module);
notificationStories.addDecorator(withKnobs);

const storyOptions = {
  notes: {
    markdown: README,
  },
};

notificationStories.add(
  'Default',
  () => {
    const typeOption = {
      default: 'default',
      secondary: 'secondary',
      promo: 'promo',
      new: 'new',
    };

    const langOption = {
      id: 'id',
      en: 'en',
    };

    const types = radios('Type', typeOption, 'default');
    const lang = radios('Lang', langOption, 'id');
    const counter = text('Number of counters', '999');

    return (
      <>
        <Tips>
          Change to <b>Knobs</b> tab on addon panel to dynamically interact with the props.
        </Tips>
        <div style={{ margin: '16px' }}>
          <Notification secondary={types === 'secondary'} promo={types === 'promo'} new={types === 'new'} lang={lang}>
            {counter}
          </Notification>
        </div>
      </>
    );
  },
  storyOptions,
);
