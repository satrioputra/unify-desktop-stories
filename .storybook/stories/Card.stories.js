import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

/**
 * Component(s)
 */
import Card from 'unify-react-desktop/build/Card';
import Tips from 'unify-react-desktop/build/Tips';

/**
 * Notes
 */
import README from 'unify-react-desktop/build/Card/README.md';

/**
 * Storybook Constructor
 */
const cardStories = storiesOf('Components/Card', module);

/**
 * Storybook Decorator
 */
cardStories.addDecorator(withKnobs);

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

class CardStateActive extends React.Component {
  state = {
    isActive: false,
  };

  handleClick = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }));
  };

  render() {
    const { children } = this.props;

    return (
      <Card {...this.props} onClick={this.handleClick} active={this.state.isActive}>
        {children}
      </Card>
    );
  }
}

/**
 * Stories
 */

cardStories.add(
  'Default',
  () => {
    const margin = text('margin', '16px');
    const padding = text('padding', '16px');
    const children = text('children', 'Default card');
    const hasBorder = boolean('hasBorder', false);
    const disabled = boolean('disabled', false);

    return (
      <React.Fragment>
        <Tips>
          Change to <b>Knobs</b> tab on addon panel to dynamically interact with the props.
        </Tips>
        <Card margin={margin} padding={padding} hasBorder={hasBorder} disabled={disabled}>
          {children}
        </Card>
      </React.Fragment>
    );
  },
  storyOptions,
);

cardStories.add(
  'With Active state',
  () => {
    const margin = text('margin', '16px');
    const padding = text('padding', '16px');
    const children = text('children', 'Default card');
    const hasBorder = boolean('hasBorder', false);
    const disabled = boolean('disabled', false);
    const icon = boolean('hasActiveIcon', false);

    return (
      <React.Fragment>
        <Tips>
          Change to <b>Knobs</b> tab on addon panel to dynamically interact with the props.
        </Tips>
        <CardStateActive
          margin={margin}
          padding={padding}
          hasBorder={hasBorder}
          disabled={disabled}
          hasActiveIcon={icon}
        >
          {children}
        </CardStateActive>
      </React.Fragment>
    );
  },
  storyOptions,
);