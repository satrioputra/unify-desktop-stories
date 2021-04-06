import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

/**
 * Component(s)
 */
import TextField from 'unify-react-desktop/build/TextField';
import Tips from 'unify-react-desktop/build/Tips';

/**
 * Notes
 */
import README from 'unify-react-desktop/build/TextField/README.md';

/**
 * Storybook Constructor
 */
const stories = storiesOf('Components/TextField', module);

/**
 * Storybook Decorator
 */
stories.addDecorator(withKnobs);

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
const exampleImage = <img src="https://place-hold.it/38x24&text=Visa" />;

/**
 * Stories
 */
stories.add(
  'Default',
  () => {
    return (
      <div className="container">
        <Tips>
          Change to <b>Knobs</b> tab on addon panel to dynamically interact with the props.
        </Tips>
        <div className="section">
          <h2 className="section__title">TextField</h2>
          <TextField
            appendText={text('appendText', '')}
            autoCapitalize={text('autoCapitalize', 'off')}
            autoComplete={text('autoComplete', 'off')}
            className={text('className', '')}
            counter={number('counter', 0)}
            disabled={boolean('disabled', false)}
            error={boolean('error', false)}
            focus={boolean('focus', false)}
            hasClear={boolean('hasClear', false)}
            hasInfo={boolean('hasInfo', false)}
            helper={text('helper', '')}
            id={text('id', '')}
            label={text('label', 'If you want explosions. Accept no substitutes!')}
            name={text('name', '')}
            placeholder={text('placeholder', 'Science!')}
            prependText={text('prependText', '')}
            readOnly={boolean('readOnly', false)}
            success={boolean('success', false)}
            type={text('type', 'text')}
            value={text('value', '')}
            width={text('width', '')}
          />
        </div>
      </div>
    );
  },
  storyOptions,
);

stories.add(
  'Prepend or Append Object',
  () => {
    return (
      <div className="container">
        <Tips>
          You can prepend/append object to the TextField, look the <b>Story</b> tab on addon panel.
        </Tips>
        <div className="section">
          <h2 className="section__title">Prepend</h2>
          <TextField
            label={text('label', 'If you want explosions. Accept no substitutes!')}
            placeholder={text('placeholder', 'Science!')}
            prependObject={exampleImage}
          />
        </div>
        <div className="section">
          <h2 className="section__title">Append</h2>
          <TextField
            label={text('label', 'If you want explosions. Accept no substitutes!')}
            placeholder={text('placeholder', 'Science!')}
            appendObject={exampleImage}
          />
        </div>
        <div className="section">
          <h2 className="section__title">Prepend &amp; Append</h2>
          <TextField
            label={text('label', 'If you want explosions. Accept no substitutes!')}
            placeholder={text('placeholder', 'Science!')}
            prependObject={exampleImage}
            appendObject={exampleImage}
          />
        </div>
      </div>
    );
  },
  storyOptions,
);

stories.add(
  'Action',
  () => {
    return (
      <div className="container">
        <Tips>
          Change to <b>Actions</b> tab on addon panel to see the action callback.
        </Tips>
        <div className="section">
          <h2 className="section__title">onBlur</h2>
          <TextField onBlur={action('onBlur event')} />
        </div>
        <div className="section">
          <h2 className="section__title">onChange</h2>
          <TextField onChange={action('onChange event')} />
        </div>
        <div className="section">
          <h2 className="section__title">onClick</h2>
          <TextField onClick={action('onClick event')} />
        </div>
        <div className="section">
          <h2 className="section__title">onFocus</h2>
          <TextField onFocus={action('onFocus event')} />
        </div>
        <div className="section">
          <h2 className="section__title">onInput</h2>
          <TextField onInput={action('onInput event')} />
        </div>
        <div className="section">
          <h2 className="section__title">onKeyDown</h2>
          <TextField onKeyDown={action('onKeyDown event')} />
        </div>
        <div className="section">
          <h2 className="section__title">onKeyPress</h2>
          <TextField onKeyPress={action('onKeyPress event')} />
        </div>
        <div className="section">
          <h2 className="section__title">onKeyUp</h2>
          <TextField onKeyUp={action('onKeyUp event')} />
        </div>
      </div>
    );
  },
  storyOptions,
);

stories.add(
  'Action (Others)',
  () => {
    return (
      <div className="container">
        <Tips>
          Change to <b>Actions</b> tab on addon panel to see the action callback.
        </Tips>
        <div className="section">
          <h2 className="section__title">onClickClear</h2>
          <TextField hasClear={boolean('hasClear', true)} onClickClear={action('onClickClear event')} />
        </div>
        <div className="section">
          <h2 className="section__title">onClickInfo</h2>
          <TextField hasInfo={boolean('hasInfo', true)} onClickInfo={action('onClickInfo event')} />
        </div>
        <div className="section">
          <h2 className="section__title">onMouseEnterInfo</h2>
          <TextField hasInfo={boolean('hasInfo', true)} onMouseEnterInfo={action('onMouseEnterInfo event')} />
        </div>
        <div className="section">
          <h2 className="section__title">onMouseLeaveInfo</h2>
          <TextField hasInfo={boolean('hasInfo', true)} onMouseLeaveInfo={action('onMouseLeaveInfo event')} />
        </div>
      </div>
    );
  },
  storyOptions,
);
