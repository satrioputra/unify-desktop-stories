import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object, boolean, text } from '@storybook/addon-knobs';

import Accordion from 'unify-react-desktop/build/Accordion';
import accordionNotes from 'unify-react-desktop/build/Accordion/README.md';

const accordionStories = storiesOf('Components/Accordion', module);

accordionStories.addDecorator(withKnobs);

const storyOption = { notes: { markdown: accordionNotes } };

const accordionItems = [
  { children: 'Chat', onClick: action('onClick') },
  { children: 'Diskusi Produk', onClick: action('onClick') },
  { children: 'Ulasan', disabled: true, onClick: action('onClick') },
  { children: 'Pesan Bantuan', active: true, onClick: action('onClick') },
  { children: 'Komplain Pesanan', onClick: action('onClick') },
  { children: 'Update', onClick: action('onClick') },
  { children: <a href="https://m.tokopedia.com">Yuhuuu</a>, onClick: action('onClick') },
];

const AccordionPlayground = () => {
  const collapsed = boolean('collapsed', false);
  const disabled = boolean('disabled', false);
  const items = object('items', accordionItems);
  const title = text('title', 'A Title Here');

  const accordionProps = {
    collapsed,
    disabled,
    items,
    title,
  };

  return (
    <div className="container">
      <div className="section">
        <h2 className="section__title">Controlled Accordion</h2>
        <Accordion {...accordionProps} />
        <Accordion title="Non-list Content" collapsed>
          <div style={{ padding: '8px 16px' }}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae consectetur eius nobis, quas quia
              dignissimos quaerat ducimus perferendis reprehenderit similique sapiente tempore molestiae a vitae
              corrupti vero sit recusandae ad!
            </p>
          </div>
        </Accordion>
      </div>
    </div>
  );
};

accordionStories.add('Default', () => <AccordionPlayground />, storyOption);

accordionStories.add('Only One Opened', () => {
  const [openItem, setOpenItem] = React.useState(0);

  return <div style={{ maxWidth: 400, padding: 16 }}>
    <Accordion collapsed={openItem !== 0} title="Some Title Here" onClick={() => setOpenItem(0)}>
      <div style={{ padding: "0 16px 16px" }}>
        <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus repudiandae, consectetur obcaecati eveniet distinctio cumque inventore fuga voluptatum sequi ea architecto vero accusantium, doloribus neque adipisci veritatis. At, nisi distinctio.</p>
      </div>
    </Accordion>
    <Accordion collapsed={openItem !== 1} title="Some Another Title Here" onClick={() => setOpenItem(1)}>
    <div style={{ padding: "0 16px 16px" }}>
        <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, a est vero magni cum eius nisi repellat provident ratione numquam, recusandae magnam necessitatibus! Veniam dolor mollitia voluptatem nisi delectus deleniti.</p>
      </div>
    </Accordion>
  </div>
}, storyOption)
