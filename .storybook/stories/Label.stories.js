import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'react-emotion';
import { withKnobs, text, boolean, object, radios } from '@storybook/addon-knobs';
import { N0, N50, N150, N200, G100, G400, R100, R400, B100, B400, Y100, Y400 } from 'unify-token/build/v2/colors';

/**
 * Component(s)
 */
import Button from 'unify-react-desktop/build/Button';
import Label, { LabelProps } from 'unify-react-desktop/build/Label';
import Typography from 'unify-react-desktop/build/Typography';
import Tips from 'unify-react-desktop/build/Tips';

/**
 * Notes
 */
import README from 'unify-react-desktop/build/Label/README.md';

/**
 * Storybook Constructor
 */
const labelStories = storiesOf('Components/Label', module);

/**
 * Storybook Decorator
 */
labelStories.addDecorator(withKnobs);

/**
 * Other(s)
 */
const storyOptions = {
  notes: {
    markdown: README,
  },
};
const Wrapper = styled.div`
  padding: 16px;
`;

/**
 * Stories
 */
labelStories.add(
  'Default',
  () => {
    const knobs = {
      backgroundColor: text('backgroundColor', ''),
      cashback: boolean('cashback', false),
      counter: boolean('counter', false),
      children: text('children', 'label'),
      icon: text('icon', ''),
      margin: text('margin', '0'),
      textColor: text('textColor', ''),
      benefit: boolean('benefit', false),
      countdown: object('countdown', null),
      disabled: boolean('disabled', false),
      notification: boolean('notification', false),
      official: boolean('official', false),
      priority: radios('priority', { high: 'high', mid: 'mid', low: 'low' }),
      progress: text('progress', ''),
      promo: boolean('promo', false),
      seller: boolean('seller', false),
      status: boolean('status', false),
      time: boolean('time', false),
    };

    return (
      <>
        <Tips>
          Change to <b>Knobs</b> tab on addon panel to dynamically interact with the props.
        </Tips>
        <Wrapper>
          <Label {...knobs} />
        </Wrapper>
      </>
    );
  },
  storyOptions,
);

labelStories.add(
  'With custom icon',
  () => {
    return (
      <Wrapper>
        <Label icon="https://via.placeholder.com/150x150" backgroundColor="#42b549" textColor="#FFFFFF">
          Label with custom icon
        </Label>
      </Wrapper>
    );
  },
  storyOptions,
);

labelStories.add(
  'With time icon',
  () => {
    return (
      <Wrapper>
        <Label time priority="low" backgroundColor="#FF5722" textColor="#FFFFFF">
          Label with time icon
        </Label>
      </Wrapper>
    );
  },
  storyOptions,
);

labelStories.add(
  'Dark mode label',
  () => {
    return (
      <Wrapper style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
        <Typography tag={2} main>
          Dark mode Label
        </Typography>
        <Label backgroundColor={N150} textColor={N0}>
          Default label
        </Label>

        <Label backgroundColor={R400} textColor={N0}>
          Default label
        </Label>

        <Label backgroundColor={G400} textColor={N0}>
          Default label
        </Label>

        <Label backgroundColor={Y400} textColor={N0}>
          Default label
        </Label>

        <Label backgroundColor={B400} textColor={N0}>
          Default label
        </Label>
      </Wrapper>
    );
  },
  storyOptions,
);

labelStories.add(
  'Light mode label',
  () => {
    return (
      <Wrapper style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
        <Typography tag={2} main>
          Light mode Label
        </Typography>
        <Label backgroundColor={N50} textColor={N200}>
          Default label
        </Label>

        <Label backgroundColor={R100} textColor={R400}>
          Default label
        </Label>

        <Label backgroundColor={G100} textColor={G400}>
          Default label
        </Label>

        <Label backgroundColor={Y100} textColor={Y400}>
          Default label
        </Label>

        <Label backgroundColor={B100} textColor={B400}>
          Default label
        </Label>
      </Wrapper>
    );
  },
  storyOptions,
);

labelStories.add(
  'Time label',
  () => {
    return (
      <Wrapper>
        <Label time priority="low">
          1 hari
        </Label>
        <Label time priority="mid">
          1 hari
        </Label>
        <Label time priority="high">
          1 hari
        </Label>
      </Wrapper>
    );
  },
  storyOptions,
);

class LabelStateful extends React.Component<LabelProps> {
  state = {
    progress: '10',
  };

  handleAddProgress = () => {
    this.setState({ progress: parseInt(this.state.progress, 10) + 10 });
  };

  handleResetProgress = () => {
    this.setState({ progress: '0' });
  };

  render() {
    const { progress } = this.state;

    return (
      <Fragment>
        <Wrapper>
          <Label progress={progress}>Terjual 60%</Label>
          <Label
            countdown={{
              end: new Date('14 Nov, 2021 15:37'),
            }}
            progress={progress}
          />
        </Wrapper>
        <Wrapper>
          <Button primary onClick={this.handleAddProgress}>
            Add Progress
          </Button>
          <Button style={{ marginLeft: 16 }} primary onClick={this.handleResetProgress}>
            Reset Progress
          </Button>
        </Wrapper>
      </Fragment>
    );
  }
}

labelStories.add('With Progress and countdown', () => {
  return <LabelStateful />;
});
