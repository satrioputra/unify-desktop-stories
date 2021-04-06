import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

/**
 * Component(s)
 */
import EmptyState from 'unify-react-desktop/build/EmptyState';

/**
 * Notes
 */
import README from 'unify-react-desktop/build/EmptyState/README.md';

/**
 * Storybook Constructor
 */
const emptyStateStories = storiesOf('Compositions/Empty State', module);

/**
 * Storybook Decorator
 */
emptyStateStories.addDecorator(withKnobs);

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

const TITLE = 'Insert Title Here';
const DESCRIPTION = 'Insert descriptive sentence describing why it happens. The sentence can me more than a line.';
const ACTION_TEXT = 'CTA Here';
const SEC_ACTION_TEXT = 'Secondary CTA Here';

emptyStateStories.add(
  'Default',
  () => {
    const actionSecondaryText = text('actionSecondaryText', SEC_ACTION_TEXT);
    const actionText = text('actionText', ACTION_TEXT);
    const children = text('children', DESCRIPTION);
    const flex = boolean('flex', false);
    const horizontal = boolean('horizontal', false);
    const image = text('image', 'https://ecs7.tokopedia.net/assets-unify/img/il-empty-state.jpg');
    const imageAlt = text('imageAlt', '');
    const loading = boolean('loading', false);
    const loadingSecondary = boolean('loadingSecondary', false);
    const title = text('title', TITLE);
    const onActionClick = action('onActionClick');
    const onActionSecondaryClick = action('onActionSecondaryClick');
    return (
      <EmptyState
        actionSecondaryText={actionSecondaryText}
        actionText={actionText}
        children={children}
        flex={flex}
        horizontal={horizontal}
        image={image}
        imageAlt={imageAlt}
        loading={loading}
        loadingSecondary={loadingSecondary}
        title={title}
        onActionClick={onActionClick}
        onActionSecondaryClick={onActionSecondaryClick}
      >
        {children}
      </EmptyState>
    );
  },
  storyOptions,
);
