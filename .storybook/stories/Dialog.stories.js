import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import Dialog from 'unify-react-desktop/build/Dialog';
import Button from 'unify-react-desktop/build/Button';

import README from 'unify-react-desktop/build/Dialog/README.md';

const dialogStories = storiesOf('Compositions/Dialog', module);
class DialogStateful extends React.Component {
  state = {
    display: false,
  };

  handleClick = () => {
    this.setState({ display: !this.state.display });
  };

  render() {
    return (
      <React.Fragment>
        <Dialog
          display={this.state.display}
          onClose={this.handleClick}
          title={'Dialog Title'}
          actionPrimaryText="Primary Text"
          actionSecondaryText="Secondary Text"
          onActionPrimaryClick={() => console.log('Primary clicked')}
          onActionSecondaryClick={() => console.log('Secondary clicked')}
          {...this.props}
        >
          Put message here. Keep it brief and put a simple question perhaps? Or ask our beloved copywriter to write it
          for you ;)
        </Dialog>
        <Button primary onClick={this.handleClick}>
          open
        </Button>
      </React.Fragment>
    );
  }
}

const storyOption = {
  notes: README,
};

dialogStories.addDecorator(withKnobs);

dialogStories.add(
  'Default',
  () => {
    const dialogKnobs = {
      actionPrimaryProps: { 'data-testid': 'primaryButton' },
      actionPrimaryText: text('actionPrimaryText', 'Primary Text'),
      actionSecondaryProps: { 'data-testid': 'secondaryButton', 'data-testid2': 'hello' },
      actionSecondaryText: text('actionSecondaryText', 'Secondary Text'),
      children: text('children', 'Change to Knobs tab on addon panel to dynamically interact with the props.'),
      display: boolean('display', true),
      icon: text('icon', ''),
      illustration: text('illustration', ''),
      loadingPrimary: boolean('loadingPrimary', false),
      loadingSecondary: boolean('loadingSecondary', false),
      longAction: boolean('longAction', false),
      title: text('title', 'Title'),
      zIndex: number('zIndex', null),
    };
    const dialogAction = {
      onActionPrimaryClick: action('onActionPrimaryClick'),
      onActionSecondaryClick: action('onActionSecondaryClick'),
      onClose: action('onClose'),
    };
    return (
      <React.Fragment>
        <Dialog {...dialogKnobs} {...dialogAction} />
      </React.Fragment>
    );
  },
  storyOption,
);

dialogStories.add(
  'With Illustration and longAction',
  () => {
    return (
      <React.Fragment>
        <DialogStateful longAction illustration="https://via.placeholder.com/500" />
      </React.Fragment>
    );
  },
  storyOption,
);
