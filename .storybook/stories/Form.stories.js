import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import Checkbox, { CheckboxProps } from 'unify-react-desktop/build/Checkbox';
import Radio, { RadioProps } from 'unify-react-desktop/build/Radio';
import Toggle, { ToggleProps } from 'unify-react-desktop/build/Toggle';
import Tips from 'unify-react-desktop/build/Tips';

import notesCheckbox from 'unify-react-desktop/build/Checkbox/README.md';
import notesRadio from 'unify-react-desktop/build/Radio/README.md';
import notesToggle from 'unify-react-desktop/build/Toggle/README.md';

const checkboxStories = storiesOf('Components/Checkbox', module);
const radioStories = storiesOf('Components/Radio', module);
const toggleStories = storiesOf('Components/Toggle', module);

checkboxStories.addDecorator(withKnobs);
radioStories.addDecorator(withKnobs);
toggleStories.addDecorator(withKnobs);

const storyOptionCheckbox = {
  notes: {
    markdown: notesCheckbox,
  },
};

const storyOptionRadio = {
  notes: {
    markdown: notesRadio,
  },
};

const storyOptionToggle = {
  notes: {
    markdown: notesToggle,
  },
};

export interface CustomProps {
  radio?: boolean;
  toggle?: boolean;
  checkbox?: boolean;
}

class FormStateful extends React.Component<CustomProps & ToggleProps & RadioProps & CheckboxProps> {
  state = {
    radio: 'opt1',
    toggle: false,
    check: false,
  };

  handleChange = e => {
    this.setState({ radio: e.value });
    action('onChange');
  };

  toggleChange = () => {
    this.setState({ toggle: !this.state.toggle });
    console.log(this.state.toggle);
    action('onChange');
  };

  checkChange = () => {
    this.setState({ check: !this.state.check });
    action('onChange');
  };

  render() {
    const { disabled, radio, checkbox, toggle } = this.props;
    return (
      <React.Fragment>
        {radio && (
          <React.Fragment>
            <Radio
              value="opt1"
              disabled={disabled}
              checked={this.state.radio === 'opt1'}
              onChange={this.handleChange}
            />
            <Radio
              value="opt2"
              disabled={disabled}
              checked={this.state.radio === 'opt2'}
              onChange={this.handleChange}
            />
          </React.Fragment>
        )}
        {checkbox && <Checkbox checked={this.state.check} name="check" onChange={this.checkChange} {...this.props} />}
        {toggle && <Toggle checked={this.state.toggle} name="toggle" onChange={this.toggleChange} {...this.props} />}
      </React.Fragment>
    );
  }
}

checkboxStories.add(
  'Default',
  () => {
    const disabled = boolean('disabled', false);

    return (
      <>
        <Tips>
          Change to <b>Knobs</b> tab on addon panel to dynamically interact with the props.
        </Tips>
        <div style={{ margin: '16px' }}>
          <FormStateful checkbox disabled={disabled} />
        </div>
      </>
    );
  },
  storyOptionCheckbox,
);

radioStories.add(
  'Default',
  () => {
    const disabled = boolean('disabled', false);

    return (
      <>
        <Tips>
          Change to <b>Knobs</b> tab on addon panel to dynamically interact with the props.
        </Tips>
        <div style={{ margin: '16px' }}>
          <FormStateful radio disabled={disabled} />
        </div>
      </>
    );
  },
  storyOptionRadio,
);

toggleStories.add(
  'Default',
  () => {
    const disabled = boolean('disabled', false);
    const appendText = text('appendText', '');
    const prependText = text('prependText', '');

    return (
      <>
        <Tips>
          Change to <b>Knobs</b> tab on addon panel to dynamically interact with the props.
        </Tips>
        <FormStateful toggle disabled={disabled} appendText={appendText} prependText={prependText} />
      </>
    );
  },
  storyOptionToggle,
);
