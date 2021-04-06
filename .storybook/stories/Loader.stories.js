import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

/**
 * Component(s)
 */
import Loader from 'unify-react-desktop/build/Loader';

/**
 * Notes
 */
import CircleREADME from 'unify-react-desktop/build/Loader/Circle.README.md';
import CircularREADME from 'unify-react-desktop/build/Loader/Circular.README.md';
import JumperREADME from 'unify-react-desktop/build/Loader/Jumper.README.md';
import LineREADME from 'unify-react-desktop/build/Loader/Line.README.md';
import LinearREADME from 'unify-react-desktop/build/Loader/Linear.README.md';
import SquareREADME from 'unify-react-desktop/build/Loader/Square.README.md';

/**
 * Storybook Constructor
 */
const loaderStories = storiesOf('Components/Loader', module);

/**
 * Storybook Decorator
 */
loaderStories.addDecorator(withKnobs);

loaderStories.add(
  'Linear',
  () => {
    return (
      <div style={{ padding: '16px' }}>
        <Loader.Linear
          indeterminate={boolean('indeterminate', false)}
          loading={boolean('loading', false)}
          progress={number('progress', 70)}
        />
      </div>
    );
  },
  { notes: LinearREADME },
);

loaderStories.add(
  'Circular',
  () => {
    return (
      <div style={{ padding: '16px' }}>
        <Loader.Circular
          width={number('width', 100)}
          indeterminate={boolean('indeterminate', false)}
          loading={boolean('loading', false)}
          progress={number('progress', 50)}
        />
      </div>
    );
  },
  { notes: CircularREADME },
);

loaderStories.add(
  'Jumper',
  () => {
    return <Loader.Jumper />;
  },
  { notes: JumperREADME },
);

loaderStories.add(
  'Circle',
  () => {
    return (
      <div style={{ padding: '16px' }}>
        <Loader.Circle
          width={text('width', '48px')}
          height={text('height', '48px')}
          marginBottom={text('marginBottom', '16px')}
        />
        <div style={{ margin: '0', textAlign: 'center', color: '#a1a1a1' }}>content below</div>
      </div>
    );
  },
  { notes: CircleREADME },
);

loaderStories.add(
  'Square',
  () => {
    return (
      <div style={{ padding: '16px' }}>
        <Loader.Square
          width={text('width', '100%')}
          paddingBottom={text('paddingBottom', '100%')}
          marginBottom={text('marginBottom', '16px')}
        />
        <div style={{ margin: '0', textAlign: 'center', color: '#a1a1a1' }}>content below</div>
      </div>
    );
  },
  { notes: SquareREADME },
);

loaderStories.add(
  'Line',
  () => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '16px',
        }}
      >
        <Loader.Line
          width={text('width', '500px')}
          height={text('height', '8px')}
          marginBottom={text('marginBottom', '16px')}
        />
        <div style={{ margin: '0', textAlign: 'center', color: '#a1a1a1' }}>content below</div>
      </div>
    );
  },
  { notes: LineREADME },
);
