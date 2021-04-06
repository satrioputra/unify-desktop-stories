import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, object, text } from '@storybook/addon-knobs';

import Button from 'unify-react-desktop/build/Button';
import Tips from 'unify-react-desktop/build/Tips';
import Toaster from 'unify-react-desktop/build/Toaster';
import README from 'unify-react-desktop/build/Toaster/README.md';

const toasterStories = storiesOf('Components/Toaster', module);
toasterStories.addDecorator(withKnobs);

const storyOptions = {
  notes: {
    markdown: README,
  },
};

interface ToasterStatefulProps {
  actionText?: string;
  display?: boolean;
  error?: boolean;
  onActionClick?: React.MouseEventHandler<HTMLParagraphElement>;
}

class ToasterStateful extends React.Component<ToasterStatefulProps> {
  state = {
    display: false,
  };

  handleClick = () => {
    this.setState(({ display }: Partial<ToasterStatefulProps>) => ({ display: !display }));
  };

  handleAutoClose = () => {
    this.setState(
      {
        display: true,
      },
      () =>
        setTimeout(() => {
          this.setState({
            display: false,
          });
        }, 3000),
    );
  };

  render() {
    return (
      <div style={{ padding: '16px' }}>
        <Toaster display={this.state.display} {...this.props}>
          This is toaster text
        </Toaster>
        <Button filled main block onClick={this.handleClick}>
          Show Toaster
        </Button>
        <Button ghost alternate block onClick={this.handleAutoClose}>
          AutoClose after 3 Seconds
        </Button>
      </div>
    );
  }
}

toasterStories.add(
  'Default',
  () => {
    const actionText = text('actionText', 'CTA');
    const children = text('children', 'This is toaster text');
    const dataTest = object('dataTest', { text: 'This is toaster text', actionText: 'CTA' });
    const display = boolean('display', false);
    const error = boolean('error', false);
    const onActionClick = action('onActionClick event');
    const props = { actionText, children, dataTest, display, error, onActionClick };

    return (
      <>
        <Tips>Change to <b>Knobs</b> tab on addon panel to dynamically interact with the props and event handlers can be checked in Actions tab</Tips>
        <Toaster {...props} />
      </>
    );
  },
  storyOptions,
);

toasterStories.add(
  'With autoClose',
  () => {
    const actionText = text('actionText', 'CTA');

    return <ToasterStateful error actionText={actionText} onActionClick={() => alert('Clicked!')} />;
  },
  storyOptions,
);

toasterStories.add(
  'With error',
  () => {
    const actionText = text('actionText', 'CTA');

    return <ToasterStateful error actionText={actionText} onActionClick={() => alert('Clicked!')} />;
  },
  storyOptions,
);

toasterStories.add(
  'With CTA',
  () => {
    const actionText = text('actionText', 'CTA');

    return <ToasterStateful actionText={actionText} onActionClick={() => alert('Clicked!')} />;
  },
  storyOptions,
);
