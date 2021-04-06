import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';

import QuantityEditor from 'unify-react-desktop/build/QuantityEditor';
import Tips from 'unify-react-desktop/build/Tips';
import README from 'unify-react-desktop/build/QuantityEditor/README.md';

const quantityEditorStories = storiesOf('Components/QuantityEditor', module);

quantityEditorStories.addDecorator(withKnobs);

const storyOptions = {
  notes: {
    markdown: README,
  },
};

export interface QuantityEditorProps {
  disabled?: boolean;
  max?: number;
  min?: number;
  spinner?: number;
}

class QuantityEditorStateful extends React.Component<QuantityEditorProps> {
  state = {
    value: 1,
  };

  handleChange = reValue => {
    this.setState({ value: reValue });
  };

  render() {
    const { disabled, min, max, spinner } = this.props;

    return (
      <>
        <QuantityEditor
          min={min}
          max={max}
          spinner={spinner}
          value={this.state.value}
          onChange={this.handleChange}
          disabled={disabled}
        />
      </>
    );
  }
}

quantityEditorStories.add(
  'Default',
  () => {
    const disabled = boolean('disabled', false);
    const min = number('min', 1);
    const max = number('max', 10);
    const spinner = number('spinner', 1);

    return (
      <>
        <QuantityEditorStateful disabled={disabled} min={min} max={max} spinner={spinner} />
      </>
    );
  },
  storyOptions,
);

quantityEditorStories.add(
  'Raw component',
  () => {
    const disabled = boolean('disabled', false);
    const min = number('min', 1);
    const max = number('max', 10);
    const value = number('value', 1);
    const spinner = number('spinner', 1);

    return (
      <>
        <Tips>Event handlers can be checked in Actions tab</Tips>
        <QuantityEditor
          disabled={disabled}
          min={min}
          max={max}
          value={value}
          spinner={spinner}
          onChange={action('onChange')}
        />
      </>
    );
  },
  storyOptions,
);
