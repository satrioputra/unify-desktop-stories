import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object, number } from '@storybook/addon-knobs';

import ContentSwitcher from 'unify-react-desktop/build/ContentSwitcher';
import Tips from 'unify-react-desktop/build/Tips';
import README from 'unify-react-desktop/build/ContentSwitcher/README.md';

const contentSwitcherStories = storiesOf('Components/ContentSwitcher', module);

contentSwitcherStories.addDecorator(withKnobs);

const storyOptions = {
  notes: {
    markdown: README,
  },
};

export interface ContentSwitcherProps {
  selections?: string[];
}

class ContentSwitcherStateful extends React.Component<ContentSwitcherProps> {
  state = {
    indexActive: 0,
  };

  handleClick = (e, index) => {
    this.setState({ indexActive: index });
  };

  render() {
    const { selections } = this.props;

    return (
      <ContentSwitcher selections={selections} indexActive={this.state.indexActive} onItemClick={this.handleClick} />
    );
  }
}

contentSwitcherStories.add(
  'Default',
  () => {
    const options = {
      min: 0,
      max: 1,
      step: 1,
    };
    const indexActive = number('indexActive', 0, options);
    const selections = object('selections', ['Ya', 'Tidak']);

    return (
      <>
        <Tips>
          Change to <b>Knobs</b> tab on addon panel to dynamically interact with the props.
        </Tips>
        <Tips>Event handlers can be checked in Actions tab</Tips>
        <div style={{ padding: '0 16px' }}>
          <ContentSwitcher indexActive={indexActive} selections={selections} onItemClick={action('onItemClick')} />
        </div>
      </>
    );
  },
  storyOptions,
);

contentSwitcherStories.add(
  'Stateful Component',
  () => {
    const selections = object('selections', ['Indonesia', 'English']);

    return <ContentSwitcherStateful selections={selections} />;
  },
  storyOptions,
);
