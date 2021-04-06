import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';

import Collapsible from 'unify-react-desktop/build/Collapsible';
import Tips from 'unify-react-desktop/build/Tips';
import README from 'unify-react-desktop/build/Collapsible/README.md';

const collapsibleStories = storiesOf('Components/Collapsible', module);
const storyOption = {
  notes: {
    markdown: README,
  },
};

collapsibleStories.addDecorator(withKnobs);

collapsibleStories.add(
  'Default',
  () => {
    const items = object('items', [
      {
        title: 'Program Tokopedia',
        list: [
          {
            text: 'Affiliate Marketing',
            link: 'https://www.tokopedia.com',
          },
          {
            text: 'Tokopedia By Me',
            link: 'https://www.tokopedia.com',
          },
        ],
      },
      {
        title: 'Akun Saya',
        list: [
          {
            text: 'Tidak Dapat Masuk',
            link: 'https://www.tokopedia.com',
          },
          {
            text: 'Daftar akun tokopedia',
            link: 'https://www.tokopedia.com',
          },
          {
            text: 'Pengaturan Akun',
            link: 'https://www.tokopedia.com',
          },
        ],
      },
      {
        title: 'Pembayaran',
        list: [
          {
            text: 'Informasi Umum',
            link: 'https://www.tokopedia.com',
          },
          {
            text: 'Verifikasi Pembayaran',
            link: 'https://www.tokopedia.com',
          },
          {
            text: 'Cicilan',
            link: 'https://www.tokopedia.com',
          },
        ],
      },
    ]);

    return (
      <>
        <Tips>
          Change to <b>Knobs</b> tab on addon panel to dynamically interact with the props.
        </Tips>
        <div style={{ padding: '16px' }}>
          <Collapsible items={items} />
        </div>
      </>
    );
  },
  storyOption,
);
