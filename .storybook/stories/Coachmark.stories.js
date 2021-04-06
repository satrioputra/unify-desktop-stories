import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, object, radios } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Button from 'unify-react-desktop/build/Button';
import Coachmark from 'unify-react-desktop/build/Coachmark';
import Card from 'unify-react-desktop/build/Card';

import README from 'unify-react-desktop/build/Coachmark/README.md';

const coachmarkStories = storiesOf('Compositions/Coachmark', module);
coachmarkStories.addDecorator(withKnobs);

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

const SamplePage = () => {
  const otherSections = [];
  for (let i = 4; i <= 40; i++) {
    otherSections.push(
      <div key={`key-coachmark-${i}`}>
        <Card id={`coachmark${i}`}>This is Text Just pure Text With heavy Content</Card>
      </div>,
    );
  }
  return (
    <div style={{ padding: '16px' }}>
      <div key="key-coachmark-1">
        <Card id="coachmark1">
          <h3>Unify Desktop - Coachmark</h3>
        </Card>
      </div>
      <div key="key-coachmark-2">
        <Card id="coachmark2">
          <p>Sit fugiat esse anim in ullamco in pariatur cillum duis do adipisicing officia.</p>
          <p>
            Ex et duis aute ipsum sunt reprehenderit dolor ut qui. Dolore excepteur enim magna ea sunt magna excepteur
            amet consequat aute sint exercitation ea. Incididunt eiusmod esse duis incididunt tempor enim dolore
            reprehenderit non ex qui anim esse excepteur.
          </p>
          <div>
            <div id="button-wrapper" style={{ display: 'inline-block' }}>
              <Button main filled>
                Add To Cart
              </Button>
            </div>
          </div>
        </Card>
      </div>

      <div key="key-coachmark-3" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '55%' }}>
          <Card id="coachmark3-1">
            Aliqua laboris deserunt adipisicing nisi ut amet eiusmod sit sit nostrud veniam incididunt. Adipisicing non
            est dolore aliquip ex nulla nostrud quis ea. Qui sit qui Lorem magna culpa et nisi ut.
          </Card>
        </div>
        <div style={{ width: '400px', position: 'fixed', top: '20px', left: '610px' }}>
          <Card id="coachmark3-2">
            <p>This target element is fixed</p>
            <p>
              Officia aliqua eiusmod excepteur reprehenderit mollit tempor sint ex fugiat amet commodo. Eiusmod labore
              commodo tempor adipisicing aliquip est. Cillum Lorem fugiat aliqua laborum ut culpa laboris pariatur enim
              consequat exercitation.
            </p>
          </Card>
        </div>
      </div>

      {otherSections}
      <Button filled transaction id="farthest">
        click me
      </Button>
    </div>
  );
};

coachmarkStories.add(
  'Default',
  () => {
    const currentPage = number('currentPage', 0, { min: 0 });
    const display = boolean('display', true);
    const description = object('description', ['Descrition2', 'Description5', 'Descrition1']);
    const hasSkip = boolean('hasSkip', true);
    const highlightOptions = object('highlightOptions', { padding: 8 });
    const lang = radios('lang', ['en', 'id'], 'id');
    const numberOfPage = object('numberOfPage', ['#coachmark2', '#coachmark5', '#coachmark1']);
    const overlayOptions = object('overlayOptions', { clickToClose: true });
    const title = object('title', ['Insert title here', 'Title 2', 'Title3']);
    const onChange = action('onChange event');
    const onClose = action('onClose event');
    const onClickSkip = action('onClickSkip event');

    return (
      <div style={{ width: '600px' }}>
        <SamplePage />
        <div>
          <Coachmark
            currentPage={currentPage}
            description={description}
            disableScrolling={boolean('disableScrolling', true)}
            display={display}
            hasSkip={hasSkip}
            highlightOptions={highlightOptions}
            lang={lang}
            numberOfPage={numberOfPage}
            overlayOptions={overlayOptions}
            title={title}
            onChange={onChange}
            onClose={onClose}
            onClickSkip={onClickSkip}
          />
        </div>
      </div>
    );
  },
  storyOptions,
);

class CoachmarkStateful extends React.Component {
  state = {
    display: false,
    currentPage: 0,
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        display: true,
      });
    }, 350);
  };

  handleClick = () => {
    this.setState({
      display: !this.state.display,
    });
  };

  handleChange = index => {
    this.setState({
      currentPage: index,
    });
  };

  render = () => {
    const { display, currentPage } = this.state;

    const numberOfPage = ['#coachmark1', '#coachmark3-2', '#coachmark21', '#button-wrapper', '#farthest'];
    const titles = [
      'Insert Title Here',
      'Fixed Element',
      'Little Description',
      'Element With No Id',
      'The Farthest Element',
    ];
    const descriptions = [
      'Put some descriptions that can describes your new features. Make it simple :)',
      `Target element or it's parent can be fixed`,
      'Very little description',
      'If a component has no prop id, wrap it with an element and give it an id.',
      'This is the farthest element to highligt. Is it highlighted perfectly?',
    ];

    return (
      <div style={{ width: '600px' }}>
        <SamplePage />
        <div>
          <Coachmark
            display={display}
            disableScrolling={boolean('disableScrolling', true)}
            numberOfPage={numberOfPage}
            currentPage={currentPage}
            onChange={this.handleChange}
            title={titles}
            description={descriptions}
            hasSkip={true}
            lang="en"
            onClose={this.handleClick}
            onClickSkip={this.handleClick}
            overlayOptions={object('overlayOptions', {
              show: true,
            })}
          />
        </div>
      </div>
    );
  };
}

coachmarkStories.add(
  'Working Example',
  () => {
    return (
      <React.Fragment>
        <CoachmarkStateful />
      </React.Fragment>
    );
  },
  storyOptions,
);

const Item1 = () => (
  <span>
    Put some <b>descriptions</b> that can describes your new features. Make it simple :).{' '}
    <i>(sample react component)</i>
  </span>
);

class CoachmarkStateful2 extends React.Component {
  state = {
    display: false,
    currentPage: 0,
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        display: true,
      });
    }, 350);
  };

  handleClick = () => {
    this.setState({
      display: !this.state.display,
    });
  };

  handleChange = index => {
    this.setState({
      currentPage: index,
    });
  };

  render = () => {
    const { display, currentPage } = this.state;

    const coachmarkItems = [
      {
        selector: '#coachmark1',
        title: 'Insert Title Here',
        description: <Item1 />,
        prependObject: (
          <img
            style={{ borderRadius: '8px' }}
            src="https://media.giphy.com/media/Nqi5KJIEGStWg/giphy.gif"
            width="100"
            height="100"
          />
        ),
      },
      {
        selector: '#coachmark3-2',
        title: 'Fixed Element',
        description: 'Put some descriptions that can describes your new features. Make it simple :)',
      },
      {
        selector: '#coachmark21',
        title: 'Little Description',
        description: 'Put some descriptions that can describes your new features. Make it simple :)',
      },
      {
        selector: '#button-wrapper',
        title: 'Element With No Id',
        description: 'Put some descriptions that can describes your new features. Make it simple :)',
      },
      {
        selector: '#farthest',
        title: 'The Farthest Element',
        description: 'Put some descriptions that can describes your new features. Make it simple :)',
      },
    ];

    return (
      <div style={{ width: '600px' }}>
        <SamplePage />
        <div>
          <Coachmark
            display={display}
            onClose={this.handleClick}
            currentPage={currentPage}
            onChange={this.handleChange}
            hasSkip={true}
            onClickSkip={this.handleClick}
            lang="en"
            items={coachmarkItems}
            disableScrolling={boolean('disableScrolling', true)}
            overlayOptions={object('overlayOptions', { show: true })}
            dataTestId={{
              skipButton: 'test-skipButton',
              prevButton: 'test-prevButton',
              nextButton: 'test-nextButton',
              finishButton: 'test-finishButton',
            }}
          />
        </div>
      </div>
    );
  };
}

coachmarkStories.add(
  'Using Items Props',
  () => {
    return (
      <React.Fragment>
        <CoachmarkStateful2 />
      </React.Fragment>
    );
  },
  storyOptions,
);
