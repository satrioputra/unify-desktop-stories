import React from 'react';
import styled from 'react-emotion';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Tooltip from 'unify-react-desktop/build/Tooltip';
import README from 'unify-react-desktop/build/Tooltip/README.md';

const storyOptions = {
  notes: {
    markdown: README,
  },
};

const H3 = styled.h3`
  text-decoration: underline;
  margin: 12px;
`;
const Description = styled.div`
  margin: 12px 12px 16px;
  line-height: 24px;
`;
const Code = styled.span`
  font-weight: 600;
  background-color: #f0f0f0;
  padding: 4px 8px;
`;

const tooltipStories = storiesOf('Components/Tooltip', module);

tooltipStories.addDecorator(withKnobs);

tooltipStories.add(
  'Default',
  () => {
    return (
      <React.Fragment>
        <H3>Default</H3>
        <Description>
          This is Tooltip with a minimal settings. Try to hover these text below and see the message. And check the
          Story tab for detail implementation.
        </Description>
        <div style={{ position: 'absolute', top: '100px', left: '200px' }}>
          <Tooltip text="Tooltip will show on the bottom of the target by default">
            <label>hover on me</label>
          </Tooltip>
        </div>

        <div style={{ position: 'absolute', top: '100px', right: '200px' }}>
          <Tooltip placement="left" text="This Tooltip never overflow the viewport">
            <div style={{ maxWidth: '80px' }}>Hover on me</div>
          </Tooltip>
        </div>

        <div style={{ position: 'absolute', bottom: '100px', right: '200px' }}>
          <Tooltip placement="right" text="Make Tooltip as brief as possible.">
            <label>Hover on me</label>
          </Tooltip>
        </div>

        <div style={{ position: 'absolute', bottom: '100px', left: '200px' }}>
          <Tooltip placement="top" text="You can add actions on this component by set interaction props to be true">
            <div style={{ maxWidth: '120px' }}>Hover on me</div>
          </Tooltip>
        </div>
      </React.Fragment>
    );
  },
  storyOptions,
);

tooltipStories.add(
  'Interactive Mode',
  () => {
    return (
      <>
        <H3>Interactive Mode</H3>
        <Description>
          Use Interactive mode when you need a Tooltip with some Actions. To use this mode, Set prop{' '}
          <Code>interactive = true</Code> then specify the <Code>actions</Code> prop. <br />
          <br />
        </Description>
        <div style={{ position: 'relative', width: '100%', height: '300px' }}>
          <div style={{ position: 'absolute', top: '0', left: '200px' }}>
            <Tooltip
              interactive
              placement="right"
              actions={[
                { text: 'Learn More', action: 'www.tokopedia.com' },
                { text: 'CTA HERE', action: () => alert('CTA HERE') },
              ]}
              text="This is some tooltip text.
        This box shows the average amount of text that can appear inside.
        If more room is needed, please use a modal instead of tooltip."
            >
              <label>Hover on me</label>
            </Tooltip>
          </div>
          <div style={{ position: 'absolute', top: '0', right: '200px' }}>
            <Tooltip
              interactive
              actions={[
                { text: 'Learn More', action: 'www.tokopedia.com' },
                { text: 'CTA HERE', action: () => alert('CTA HERE') },
              ]}
              text="This is some tooltip text.
        This box shows the average amount of text that can appear inside.
        If more room is needed, please use a modal instead of tooltip."
            >
              <label>Hover on me</label>
            </Tooltip>
          </div>
          <div style={{ position: 'absolute', bottom: '100px', right: '200px' }}>
            <Tooltip
              interactive
              placement="left"
              actions={[
                { text: 'Learn More', action: 'www.tokopedia.com' },
                { text: 'CTA HERE', action: () => alert('CTA HERE') },
              ]}
              text="This is some tooltip text.
        This box shows the average amount of text that can appear inside.
        If more room is needed, please use a modal instead of tooltip."
            >
              <label>Hover on me</label>
            </Tooltip>
          </div>
          <div style={{ position: 'absolute', bottom: '100px', left: '200px' }}>
            <Tooltip
              interactive
              placement="top"
              actions={[
                { text: 'Learn More', action: 'www.tokopedia.com' },
                { text: 'CTA HERE', action: () => alert('CTA HERE') },
              ]}
              text="This is some tooltip text.
        This box shows the average amount of text that can appear inside.
        If more room is needed, please use a modal instead of tooltip."
            >
              <label>Hover on me</label>
            </Tooltip>
          </div>
        </div>
      </>
    );
  },
  storyOptions,
);
