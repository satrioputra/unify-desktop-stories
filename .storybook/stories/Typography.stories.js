import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import Tips from 'unify-react-desktop/build/Tips';
import Typography from 'unify-react-desktop/build/Typography';

const typographyStories = storiesOf('Principles/Typography', module);
import README from 'unify-react-desktop/build/Typography/README.md';

typographyStories.addDecorator(withKnobs);

const storyOptions = {
  notes: {
    markdown: README,
  },
};

typographyStories.add(
  'Default',
  () => {
    const optionBody = {
      min: 0,
      max: 4,
      step: 1,
    };

    const optionTag = {
      min: 0,
      max: 6,
      step: 1,
    };

    const alternate = boolean('alternate', false);
    const body = number('body', 0, optionBody);
    const bold = boolean('bold', false);
    const caption = boolean('caption', false);
    const children = text('children (text)', 'Insert Text');
    const disabled = boolean('disabled', false);
    const heading = number('heading', 0);
    const link = text('link', '');
    const main = boolean('main', false);
    const margin = text('margin', '');
    const tag = number('tag', 0, optionTag);

    const props = {
      alternate,
      body,
      bold,
      caption,
      children,
      disabled,
      heading,
      link,
      main,
      margin,
      tag,
    };

    return (
      <React.Fragment>
        <Tips>
          Switch to <b>Knobs</b> tab on addon panel to dynamically interact with props.
        </Tips>
        <div className="container">
          <div className="section">
            <h2 className="section__title">Typography</h2>
          </div>
          <Typography {...props} />
          <div />
        </div>
      </React.Fragment>
    );
  },
  storyOptions,
);

typographyStories.add(
  'Style Variations ',
  () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
        <Typography tag={1} main>
          Main - N700 - #31353B - 96%
        </Typography>
        <Typography tag={2} alternate>
          Alternate - N700 - #31353B - 68%
        </Typography>
        <Typography tag={3} alternate>
          Placeholder On Grey - N700 - #31353B - 44%
        </Typography>
        <Typography tag={5} disabled>
          Disabled - N700 - #31353B - 32%
        </Typography>
        <Typography link="https://www.tokopedia.com">Link</Typography>
        <Typography link={() => alert('test')}>Link</Typography>
      </div>
    );
  },
  storyOptions,
);

typographyStories.add(
  'Size Variations',
  () => {
    const heading1 = 'Heading 1';
    const heading2 = 'Heading 2';
    const heading3 = 'Heading 3';
    const heading4 = 'Heading 4';
    const heading5 = 'Heading 5';
    const heading6 = 'Heading 6';
    const normal = 'body 2';
    const large = 'body 1';
    const caption = 'caption';
    const micro = 'micro';

    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
        <Typography tag={1}>{heading1}</Typography>
        <Typography tag={2}>{heading2}</Typography>
        <Typography tag={3}>{heading3}</Typography>
        <Typography tag={4}>{heading4}</Typography>
        <Typography tag={5}>{heading5}</Typography>
        <Typography tag={6}>{heading6}</Typography>
        <Typography body={1}>{large}</Typography>
        <Typography body={2}>{normal}</Typography>
        <Typography body={3}>{caption}</Typography>
        <Typography body={4}>{micro}</Typography>
      </div>
    );
  },
  storyOptions,
);
