import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, number, boolean, text, radios } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { N0 } from "unify-token/build/v2/colors";

import Card from 'unify-react-desktop/build/Card';
import PageControl from 'unify-react-desktop/build/PageControl';
import Button from 'unify-react-desktop/build/Button';
import Tips from 'unify-react-desktop/build/Tips';

import README from 'unify-react-desktop/build/PageControl/README.md';

const pageControlStories = storiesOf('Components/Page Control', module);
pageControlStories.addDecorator(withKnobs);

pageControlStories.addDecorator(withKnobs);

const storyOptions = {
  notes: {
    markdown: README,
  },
};

class PageControlStateful extends React.Component {
  state = {
    currentPage: 0,
    items: 10,
  };

  decrement = () => {
    let newIndex;

    if (this.state.currentPage === 0) {
      newIndex = this.state.items - 1;
    } else {
      newIndex = this.state.currentPage - 1;
    }

    this.setState({
      currentPage: newIndex,
    });
  };

  increment = () => {
    let newIndex;

    if (this.state.currentPage === this.state.items - 1) {
      newIndex = 0;
    } else {
      newIndex = this.state.currentPage + 1;
    }

    this.setState({
      currentPage: newIndex,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="section">
            <h2 className="section__title">Page Control: Normal</h2>
          </div>
        </div>
        <div style={{ padding: '0 16px' }}>
          <div style={{ display: 'flex', marginBottom: '16px' }}>
            <div style={{ flexGrow: 1 }}>
              <h3>Default</h3>
              <div style={{ padding: '8px' }}>
                <PageControl style={{ marginBottom: 16 }} currentPage={this.state.currentPage} {...this.props} />
              </div>
            </div>
            <div style={{ flexGrow: 1 }}>
              <h3>Inverted</h3>
              <div
                style={{
                  height: '22px',
                  width: '70px',
                  backgroundColor: '#E6E7E9',
                  padding: '8px',
                }}
              >
                <PageControl
                  style={{ marginBottom: 16 }}
                  currentPage={this.state.currentPage}
                  inverted
                  {...this.props}
                />
              </div>
            </div>
          </div>
          <Button onClick={this.decrement} ghost main>
            Back
          </Button>{' '}
          <Button onClick={this.increment} filled main>
            Next
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

const StatefulTimed = () => {
  const [active, setActive] = useState(0);
  const numberOfPage = 5;

  const decrement = () => {
    let newIndex;

    if (active === 0) {
      newIndex = numberOfPage - 1;
    } else {
      newIndex = active - 1;
    }

    setActive(newIndex);
  };

  const increment = () => {
    let newIndex;

    if (active === numberOfPage - 1) {
      newIndex = 0;
    } else {
      newIndex = active + 1;
    }

    setActive(newIndex);
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="section">
          <h2 className="section__title">Page Control: timed</h2>
        </div>
      </div>
      <PageControl style={{ marginBottom: 16 }} currentPage={active} timed numberOfPage={numberOfPage} />
      <Button onClick={decrement} ghost main>
        Back
      </Button>{' '}
      <Button onClick={increment} filled main>
        Next
      </Button>
    </React.Fragment>
  );
};

pageControlStories.add(
  'Default',
  () => {
    const currentPage = number('currentPage', 1);
    const numberOfPage = number('numberOfPage(number)', 4);
    const timed = boolean('timed', false);
    const baseColor = text('baseColor', null);
    const activeColor = text('activeColor', null);
    const dataTest = text('dataTest', '');
    const variant = radios('variant', {
      black: 'black',
      white: 'white',
      green: 'green'
    }, 'green');
    const onIndicatorClick = action('onIndicatorClick event');

    const props = { currentPage, numberOfPage, timed, baseColor, activeColor, dataTest, variant, onIndicatorClick };

    return (
      <div>
        <Tips>Switch to `Knobs` tab on addon panel to dynamically interact with props.</Tips>
        <div className="container">
          <div className="section">
            <h2 className="section__title">
              Page Control
            </h2>
            <div>
              <PageControl {...props} />
            </div>
          </div>
        </div>
      </div>
    );
  },
  storyOptions,
);

pageControlStories.add(
  'timed',
  () => {
    return (
      <Card>
        <StatefulTimed />
      </Card>
    );
  },
  storyOptions,
);

pageControlStories.add(
  'normal',
  () => {
    const timed = boolean('timed', false);

    return (
      <Card>
        <PageControlStateful numberOfPage={10} />
      </Card>
    );
  },
  storyOptions,
);
