import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';

import Modal from 'unify-react-desktop/build/Modal';
import Button from 'unify-react-desktop/build/Button';
import Tips from 'unify-react-desktop/build/Tips';

const modalStories = storiesOf('Components/Modal', module);
modalStories.addDecorator(withKnobs);

import README from 'unify-react-desktop/build/Modal/README.md';

const storyOptions = {
  notes: {
    markdown: README,
  },
};

class ModalStateful extends React.Component {
  state = {
    display: false,
  };

  handleClick = () => {
    this.setState({ display: !this.state.display });
  };

  render() {
    const { title, children } = this.props;

    return (
      <React.Fragment>
        <Modal display={this.state.display} onClose={this.handleClick} title={title} {...this.props}>
          {children}
        </Modal>
        <Button primary onClick={this.handleClick}>
          open
        </Button>
      </React.Fragment>
    );
  }
}

modalStories.add(
  'Default',
  () => {
    const title = text('title', 'Modal Title');
    const children = text(
      'children',
      'Content di dalam dialog. Hanya boleh 2 baris saja. Kalau Lebih nanti di truncate loh',
    );
    const zIndex = number('zIndex', 10);
    const minWidth = text('minWidth', '400px');

    return (
      <>
        <Tips>
          Change to <b>Knobs</b> tab on addon panel to dynamically interact with the props.
        </Tips>
        <ModalStateful title={title} children={children} zIndex={zIndex} minWidth={minWidth} />
      </>
    );
  },
  storyOptions,
);
