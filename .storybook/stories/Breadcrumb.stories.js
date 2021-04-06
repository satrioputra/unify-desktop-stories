import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object, number } from '@storybook/addon-knobs';
import Breadcrumb from 'unify-react-desktop/build/Breadcrumb';
import note from 'unify-react-desktop/build/Breadcrumb/README.md';

const breadcrumbStories = storiesOf('Components/Breadcrumb', module);
const storyOption = {
  notes: {
    markdown: note,
  },
};

breadcrumbStories.addDecorator(withKnobs);

breadcrumbStories.add(
  'Default',
  () => {
    const items = object('items', [
      {
        text: 'Home',
        onClick: e => {
          console.log(e.currentTarget.innerText);
        },
        url: 'www.tokopedia.com',
      },
      {
        text: 'Produk Digital',
        onClick: e => {
          console.log(e.currentTarget.innerText);
        },
        url: 'www.tokopedia.com/produkdigital',
      },
      {
        text: 'Tiket Pesawat',
        onClick: e => {
          console.log(e.currentTarget.innerText);
        },
      },
    ]);
    const heading = number('heading', 2);

    return <Breadcrumb items={items} heading={heading} />;
  },
  storyOption,
);
