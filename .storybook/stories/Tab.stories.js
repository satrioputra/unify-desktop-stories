import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, object, boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Tab from 'unify-react-desktop/build/Tab';
import Tips from 'unify-react-desktop/build/Tips';
import README from 'unify-react-desktop/build/Tab/README.md';

const tabStories = storiesOf('Components/Tab', module);
tabStories.addDecorator(withKnobs);

const storyOptions = {
  notes: {
    markdown: README,
  },
};

const TabStateful = props => {
  const { items } = props;
  const [active, setActive] = useState(0);

  const handleTabClick = (_, tabItem) => {
    setActive(tabItem.index);
    action('onItemClick');
  };

  return (
    <>
      <Tips margin={'16px 0'}>
        Change to <b>Knobs</b> tab on addon panel to dynamically interact with the props.
      </Tips>
      <Tab {...props} items={items} indexActive={active} onItemClick={handleTabClick} />
    </>
  );
};

tabStories.add(
  'Default',
  () => {
    const withTabContent = boolean('with TabContent', false);
    const withNav = boolean('withNav', false);
    const scrollSpeed = number('scrollSpeed', 400);
    const dataTestId = object('dataTestId', {
      nextButton: 'next button',
      prevButton: 'previous button',
    });
    const items = object('items', [
      {
        key: 'Inbox',
        text: 'Inbox',
        count: 9,
        props: { 'data-cy': 'tab-click' },
        notification: false,
      },
      { key: 'Sent', text: 'Sent', notification: true },
      { key: 'Trash', text: 'Trash' },
      { key: 'Others', text: 'Others', promo: true },
      { key: 'Others2', text: 'Others', newNotif: true },
      { key: 'Others3', text: 'Others', promo: true, notification: true },
      { key: 'Others3', text: 'Others', newNotif: true, notification: true },
      { key: 'Others3', text: 'Others', newNotif: true, notification: true },
      { key: 'Others3', text: 'Others', newNotif: true, notification: true },
      { key: 'Others3', text: 'Others', newNotif: true, notification: true },
      { key: 'Others', text: 'Others', promo: true },
      { key: 'Others2', text: 'Others', newNotif: true },
      { key: 'Others3', text: 'Others', promo: true, notification: true },
      { key: 'Others3', text: 'Others', newNotif: true, notification: true },
    ]);

    return (
      <div style={{ width: '960px', margin: '0 auto' }}>
        {withTabContent ? (
          <TabStateful items={items}>
            <Tab.Content>
              <h1>Inbox Content</h1>
            </Tab.Content>
            <Tab.Content>
              <h1>Sent Content</h1>
            </Tab.Content>
            <Tab.Content>
              <h1>Trash Content</h1>
            </Tab.Content>
            <Tab.Content>
              <h1>Trash Content + notification</h1>
            </Tab.Content>
            <Tab.Content>
              <h1>Trash Content + notification</h1>
            </Tab.Content>
            <Tab.Content>
              <h1>Trash Content + notification</h1>
            </Tab.Content>
            <Tab.Content>
              <h1>Trash Content + notification</h1>
            </Tab.Content>
          </TabStateful>
        ) : (
          <TabStateful dataTestId={dataTestId} items={items} withNav={withNav} scrollSpeed={scrollSpeed} />
        )}
      </div>
    );
  },
  storyOptions,
);
