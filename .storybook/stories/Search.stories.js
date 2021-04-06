import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, radios } from '@storybook/addon-knobs';

/**
 * Component(s)
 */
import Search from 'unify-react-desktop/build/Search';
import Tips from 'unify-react-desktop/build/Tips';

/**
 * Note(s)
 */
import README from 'unify-react-desktop/build/Search/README.md';

/**
 * Storybook Constructor
 */
const stories = storiesOf('Components/Search', module);

/**
 * Storybook Decorator
 */
stories.addDecorator(withKnobs);

/**
 * Other(s)
 */
const storyOptions = {
  notes: {
    markdown: README,
  },
};

/**
 * Stories
 */
stories.add(
  'Default',
  () => {
    const langOption = {
      id: 'id',
      en: 'en',
    };

    const alternate = boolean('alternate', false);
    const className = text('className', '');
    const focus = boolean('focus', false);
    const height = text('height', 'auto');
    const id = text('id', '');
    const name = text('name', '');
    const lang = radios('lang', langOption, 'id');
    const placeholder = text('placeholder', 'Snazzy!');
    const small = boolean('small', false);
    const value = text('value', '');
    const width = text('width', '');

    return (
      <>
        <Tips>
          Change to <b>Knobs</b> tab on addon panel to dynamically interact with the props.
        </Tips>
        <div className="section" style={{ padding: '0 16px' }}>
          <h2 className="section__title">Search</h2>
          <Search
            alternate={alternate}
            className={className}
            focus={focus}
            height={height}
            id={id}
            name={name}
            lang={lang}
            placeholder={placeholder}
            small={small}
            value={value}
            width={width}
          />
        </div>
      </>
    );
  },
  storyOptions,
);

stories.add(
  'Action',
  () => {
    return (
      <>
        <Tips>
          Change to <b>Actions</b> tab on addon panel to see the action callback.
        </Tips>
        <div className="section" style={{ padding: '0 16px' }}>
          <h2 className="section__title">onBlur</h2>
          <Search onBlur={action('onBlur event')} />
        </div>
        <div className="section" style={{ padding: '0 16px' }}>
          <h2 className="section__title">onChange</h2>
          <Search onChange={action('onChange event')} />
        </div>
        <div className="section" style={{ padding: '0 16px' }}>
          <h2 className="section__title">onClick</h2>
          <Search onClick={action('onClick event')} />
        </div>
        <div className="section" style={{ padding: '0 16px' }}>
          <h2 className="section__title">onFocus</h2>
          <Search onFocus={action('onFocus event')} />
        </div>
        <div className="section" style={{ padding: '0 16px' }}>
          <h2 className="section__title">onInput</h2>
          <Search onInput={action('onInput event')} />
        </div>
        <div className="section" style={{ padding: '0 16px' }}>
          <h2 className="section__title">onKeyDown</h2>
          <Search onKeyDown={action('onKeyDown event')} />
        </div>
        <div className="section" style={{ padding: '0 16px' }}>
          <h2 className="section__title">onKeyPress</h2>
          <Search onKeyPress={action('onKeyPress event')} />
        </div>
        <div className="section" style={{ padding: '0 16px' }}>
          <h2 className="section__title">onKeyUp</h2>
          <Search onKeyUp={action('onKeyUp event')} />
        </div>
      </>
    );
  },
  storyOptions,
);

stories.add(
  'Action (Others)',
  () => {
    const handleForm = (e: React.SyntheticEvent) => {
      e.preventDefault();

      return false;
    };

    return (
      <>
        <Tips>
          Change to <b>Actions</b> tab on addon panel to see the action callback.
        </Tips>
        <div className="section" style={{ padding: '0 16px' }}>
          <h2 className="section__title">onActionClick - Default</h2>
          <p className="section__description">
            On default, search icon button type will be set to <code>type="submit"</code>, while Search is inside{' '}
            <code>form</code> element, pressing search icon button and press enter while focusing the form will trigger{' '}
            <code>onActionClick</code>.
          </p>
          <form onSubmit={handleForm}>
            <Search onActionClick={action('onActionClick event')} />
          </form>
        </div>
        <div className="section" style={{ padding: '0 16px' }}>
          <h2 className="section__title">onActionClick - Alternate</h2>
          <p className="section__description">
            On Alternate, search icon button type will be set to <code>type="button"</code>. Only by clicking the search
            icon button will trigger <code>onActionClick</code>.
          </p>
          <Search alternate onActionClick={action('onActionClick event')} />
        </div>
      </>
    );
  },
  storyOptions,
);
