import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, object } from '@storybook/addon-knobs';

import Ticker from 'unify-react-desktop/build/Ticker';
import Share from 'unify-react-desktop/build/Share';
import README from 'unify-react-desktop/build/Share/README.md';

const shareStories = storiesOf('Components/Share', module);

shareStories.addDecorator(withKnobs);

const storyOptions = {
  notes: {
    markdown: README,
  },
};

shareStories.add(
  'Default (Ordered)',
  () => {
    const unordered = boolean('unordered', false),
      align = boolean('align', false),
      items = object('items', [
        { icon: 'facebook', onClick: () => console.log('Facebook'), props: { 'data-cy': 'Click1' } },
        { icon: 'google', onClick: () => console.log('google'), props: { 'data-cy': 'Click1' } },
        { icon: 'line', onClick: () => console.log('Line'), props: { 'data-cy': 'Click1' } },
        { icon: 'twitter', onClick: () => console.log('Twitter'), props: { 'data-cy': 'Click1' } },
        { icon: 'link', onClick: () => console.log('link'), props: { 'data-cy': 'Click1' } },
      ]);
    return (
      <React.Fragment>
        <div style={{ padding: '16px' }}>
          <Ticker
            items={[
              { title: 'Important Info', text: 'Default (Ordered) will be deprecated, use the Unordered version.' },
            ]}
          />
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: 0 }}>
            <Share align={align} items={items} unordered={unordered} />
          </div>

          <div style={{ position: 'absolute', right: 0 }}>
            <Share align={align} items={items} unordered={unordered} />
          </div>

          <div style={{ position: 'absolute', left: '50px', top: '150px' }}>
            <Share align={align} items={items} unordered={unordered} />
          </div>

          <div style={{ position: 'absolute', right: '50px', top: '150px' }}>
            <Share align={align} items={items} unordered={unordered} />
          </div>
        </div>
      </React.Fragment>
    );
  },
  storyOptions,
);

shareStories.add(
  'Unordered',
  () => {
    return (
      <React.Fragment>
        <div style={{ position: 'absolute', left: 0 }}>
          <Share
            unordered
            items={[
              {
                icon: 'facebook',
                onClick: () => console.log('Facebook'),
                props: { 'data-cy': 'Click1' },
              },
              {
                icon: 'line',
                onClick: () => console.log('Line'),
                props: { 'data-cy': 'Click1' },
              },
              {
                icon: 'twitter',
                onClick: () => console.log('Twitter'),
                props: { 'data-cy': 'Click1' },
              },
              {
                icon: 'link',
                onClick: () => console.log('link'),
                props: { 'data-cy': 'Click1' },
              },
            ]}
          />
        </div>
      </React.Fragment>
    );
  },
  storyOptions,
);
