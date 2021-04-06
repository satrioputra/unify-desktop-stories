import React from 'react';

import { storiesOf } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import { withKnobs, text, radios, select } from '@storybook/addon-knobs';

/**
 * Component(s)
 */
import GlobalError from 'unify-react-desktop/build/GlobalError';

/**
 * Notes
 */
import README from 'unify-react-desktop/build/GlobalError/README.md';

/**
 * Storybook Constructor
 */
const globalErrorStories = storiesOf('Compositions/GlobalError', module);

/**
 * Storybook Decorator
 */
globalErrorStories.addDecorator(withKnobs);

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

globalErrorStories.add(
  'Default',
  () => {
    const varian = select(
      'Varian',
      {
        default: 'default',
        full: 'full',
        maintenance: 'maintenance',
        noConnection: 'noConnection',
        server: 'server',
      },
      'default',
    );
    const props = {
      full: varian === 'full',
      maintenance: varian === 'maintenance',
      noConnection: varian === 'noConnection',
      server: varian === 'server',
      lang: radios('lang', { id: 'id', en: 'en' }),
      actionText: text('actionText', 'Ke Homepage'),
      onActionClick: action('onActionClick'),
    };
    return <GlobalError {...props} />;
  },
  storyOptions,
);
