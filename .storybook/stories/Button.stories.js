import React, { Component } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, radios } from '@storybook/addon-knobs';

/**
 * Component(s)
 */
import Button from 'unify-react-desktop/build/Button';
import Tips from 'unify-react-desktop/build/Tips';

/**
 * Notes
 */
import README from 'unify-react-desktop/build/Button/README.md';

class ButtonLoading extends Component {
  state = {
    loading: false,
  };

  componentWillUnmount() {
    if (this.changeState) {
      clearTimeout(this.changeState);
    }
  }

  handleClick = () => {
    this.setState({ loading: true });
    this.changeState = setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  };

  render() {
    return (
      <Button transaction loading={this.state.loading} onClick={this.handleClick}>
        OK
      </Button>
    );
  }
}

/**
 * story options
 */
const storyOptions = {
  knobs: {
    // escapeHTML: false,
  },
  notes: {
    markdown: README,
  },
};

/**
 * Storybook
 */
storiesOf('Components/Button', module)
  /**
   * Storybook Decorator
   */
  .addDecorator(withKnobs)

  .add(
    'Default',
    () => {
      const block = boolean('block', false);
      const children = text('children', 'CTA Here');
      const disabled = boolean('disabled', false);
      const image = text('image', '');
      const loading = boolean('loading', false);
      const varianOptions = {
        default: 'default',
        main: 'main',
        transaction: 'transaction',
      };
      const varian = radios('Varian Color', varianOptions, 'default');

      const typeOptions = {
        default: 'default',
        filled: 'filled',
        ghost: 'ghost',
        'ghost alternate': 'alternate',
        text: 'text',
      };
      const type = radios('Varian Type', typeOptions, 'default');

      const sizeOptions = {
        default: 'default',
        small: 'small',
        medium: 'medium',
        large: 'large',
      };
      const size = radios('Varian Size', sizeOptions, 'default');

      return (
        <React.Fragment>
          <Tips>
            Change to <b>Knobs</b> tab on addon panel to dynamically interact with the props.
          </Tips>
          <div style={{ padding: '16px' }}>
            <Button
              main={varian === 'main' || varian === 'main ghost'}
              transaction={varian === 'transaction' || varian === 'transaction ghost'}
              text={type === 'text'}
              filled={type === 'filled'}
              ghost={type === 'ghost' || type === 'alternate'}
              alternate={type === 'alternate'}
              small={size === 'small'}
              medium={size === 'medium'}
              large={size === 'large'}
              image={image}
              block={block}
              disabled={disabled}
              loading={loading}
              onClick={action('onClick')}
            >
              {children}
            </Button>
          </div>
        </React.Fragment>
      );
    },
    storyOptions,
  )

  .add(
    'deprecated',
    () => {
      const buttonStyle = {
        margin: '0 8px',
      };
      return (
        <div>
          <Tips>
            Avoid using these props. It will be deprecated on future release. See <b>Story</b> tab for detail code, and
            see <b>Note</b> for documentation.
          </Tips>
          <div style={{ padding: '16px' }}>
            <Button style={buttonStyle} transaction>
              OK
            </Button>
            <Button style={buttonStyle} primary>
              OK
            </Button>
            <Button style={buttonStyle} secondary>
              OK
            </Button>
            <Button style={buttonStyle} secondaryGreen>
              OK
            </Button>
            <Button style={buttonStyle} secondaryTransaction>
              OK
            </Button>
          </div>
        </div>
      );
    },
    storyOptions,
  );
