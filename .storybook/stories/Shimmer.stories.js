import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, radios, text } from '@storybook/addon-knobs';

import Shimmer from 'unify-react-desktop/build/Loader/Shimmer';
import Tips from 'unify-react-desktop/build/Tips';
import README from 'unify-react-desktop/build/Loader/Shimmer.README.md';

const shimmerStories = storiesOf('Components/Shimmer', module);
shimmerStories.addDecorator(withKnobs);

const storyOptions = {
  notes: {
    markdown: README,
  },
};

shimmerStories.add(
  'Default',
  () => {
    const typeOption = {
      Line: 'line',
      Circle: 'circle',
    };

    const type = radios('type', typeOption, 'line');
    const width = text('width', '100px');
    const height = text('height', '100px');
    const mask = text('mask', '');
    const marginTop = text('marginTop', '0');
    const marginBottom = text('marginBottom', '0');
    const marginLeft = text('marginLeft', '0');
    const marginRight = text('marginRight', '0');

    return (
      <>
        <Tips>
          Change to <b>Knobs</b> tab on addon panel to dynamically interact with the props.
        </Tips>
        <div style={{ margin: '16px' }}>
          <Shimmer
            circle={type === 'circle'}
            height={height}
            line={type === 'line'}
            mask={mask}
            marginBottom={marginBottom}
            marginLeft={marginLeft}
            marginRight={marginRight}
            marginTop={marginTop}
            width={width}
          />
        </div>
      </>
    );
  },
  storyOptions,
);
