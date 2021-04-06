import React from 'react';

import { storiesOf } from '@storybook/react';

/**
 * Component(s)
 */
import Footer from 'unify-react-desktop/build/Footer';
import Tips from 'unify-react-desktop/build/Tips';

/**
 * images
 */
import icon_google_plus from '../assets/icon_google_plus.svg';
import icon_facebook from '../assets/icon_facebook.svg';
import icon_twitter from '../assets/icon_twitter.svg';
import icon_pinterest from '../assets/icon_pinterest.svg';
import icon_instagram from '../assets/icon_instagram.svg';

/**
 * Notes
 */
import README from 'unify-react-desktop/build/Footer/README.md';

/**
 * story options
 */
const storyOptions = {
  notes: {
    markdown: README,
  },
};

/**
 * Storybook constructor
 */
const footerStories = storiesOf('Compositions/Footer', module);

interface StoriesProps {
  marketplace?: boolean;
}

interface StoriesState {
  indexActive?: number;
  selections?: any;
}

/**
 * custom component
 */
class FooterStateful extends React.Component<StoriesProps, StoriesState> {
  state = {
    indexActive: 0,
    selections: ['Indonesia', 'English'],
  };

  handleClick = (e, index) => {
    this.setState({ indexActive: index });
  };

  render() {
    const { indexActive } = this.state;
    const url = [
      {
        title: 'Tokopedia',
        link: 'https://www.tokopedia.com',
        list: [
          { text: indexActive === 0 ? 'Tentang Kami' : 'About Us', link: 'https://www.tokopedia.com/about/' },
          { text: indexActive === 0 ? 'Karir' : 'Career', link: 'https://www.tokopedia.com/careers/' },
          { text: 'Blog', link: 'https://www.tokopedia.com/about/', target: '_blank' },
          { text: 'Media Kit', link: 'https://www.tokopedia.com/brand-asset/', target: '_blank' },
          { text: 'Official Store', link: 'https://www.tokopedia.com/official-store/', target: '_blank' },
          {
            text: indexActive === 0 ? 'Pesan Tiket Kereta' : 'Order Ticket Train',
            link: 'https://www.tokopedia.com/kereta-api/',
            target: '_blank',
          },
          {
            text: indexActive === 0 ? 'Kegiatan Kami' : 'Our Activity',
            link: 'https://events.tokopedia.com/',
            target: '_blank',
          },
          { text: 'Mitra Toppers', link: 'https://www.tokopedia.com/mitra-toppers/?nref=mtfoot', target: '_blank' },
        ],
      },
      {
        title: indexActive === 0 ? 'Beli' : 'Buy',
        list: [
          {
            text: indexActive === 0 ? 'Cara Belanja' : 'How to buy',
            link: 'https://www.tokopedia.com/bantuan/pembeli/belanja-di-tokopedia/#cara-berbelanja-di-tokopedia',
          },
          {
            text: indexActive === 0 ? 'Pembayaran' : 'Payment',
            link: 'https://www.tokopedia.com/bantuan/cara-membayar-pesanan-di-tokopedia/',
          },
          {
            text: indexActive === 0 ? 'Pengembalian Dana' : 'Refund',
            link: 'https://www.tokopedia.com/bantuan/cara-mengajukan-pengembalian-dana/',
          },
          { text: 'Hot List', link: 'https://www.tokopedia.com/hot/' },
          {
            text: indexActive === 0 ? 'Isi Ulang Pulsa' : 'Recharge',
            link: 'https://www.tokopedia.com/pulsa/',
            target: '_blank',
          },
        ],
      },
      {
        title: indexActive === 0 ? 'Jual' : 'Sell',
        list: [
          {
            text: indexActive === 0 ? 'Cara Berjualan Online' : 'How to sell online',
            link: 'https://seller.tokopedia.com/mulai-berjualan/',
          },
          { text: 'Gold Merchant', link: 'https://seller.tokopedia.com/gold-merchant/?ref_tkpd=Sell_footer' },
          {
            text: indexActive === 0 ? 'Beriklan TopAds' : 'Advertising TopAds',
            link: 'https://seller.tokopedia.com/topads/',
          },
          {
            text: indexActive === 0 ? 'Penarikan Dana' : 'Withdraw',
            link:
              'https://www.tokopedia.com/bantuan/penjual/pengguna-baru-penjual/saldo-tokopedia/#tarik-dana-dari-saldo-tokopedia-ke-rekening',
          },
          { text: 'Seller Center', link: 'https://seller.tokopedia.com/?nref=lsfoot', target: '_blank' },
          {
            text: indexActive === 0 ? 'Daftar Official Store' : 'Official Store List',
            link: 'https://seller.tokopedia.com/cara-daftar-official-store/',
            target: '_blank',
          },
        ],
      },
      {
        title: indexActive === 0 ? 'Bantuan' : 'Help',
        list: [
          {
            text: indexActive === 0 ? 'Syarat dan Ketentuan' : 'Terms and Condition',
            link: 'https://www.tokopedia.com/terms.pl',
            onClick: e => {
              e.preventDefault();
              alert('Click Callback');
            },
          },
          {
            text: indexActive === 0 ? 'Kebijakan Privasi' : 'Privacy',
            link: 'https://www.tokopedia.com/privacy.pl',
            onClick: e => {
              e.preventDefault();
              alert('Click Callback');
            },
          },
          {
            text: indexActive === 0 ? 'Pusat resolusi' : 'Resolution',
            link: 'https://www.tokopedia.com/resolution-center',
            onClick: e => {
              e.preventDefault();
              alert('Click Callback');
            },
          },
          {
            text: indexActive === 0 ? 'Hubungi kami' : 'Contact Us',
            link: 'https://www.tokopedia.com/contact-us#step1?nref=footerhome',
            onClick: e => {
              e.preventDefault();
              alert('Click Callback');
            },
          },
          {
            text: indexActive === 0 ? 'Panduan Keamanan' : 'Security Guideline',
            link: 'https://www.tokopedia.com/panduan-keamanan',
            onClick: e => {
              e.preventDefault();
              alert('Click Callback');
            },
          },
        ],
      },
      {
        title: indexActive === 0 ? 'Keamanan' : 'Security',
        link: 'https://seal.controlcase.com/index.php?page=showCert&cId=3968489199',
        onClick: e => {
          e.preventDefault();
          alert('Click Callback');
        },
      },
      {
        title: indexActive === 0 ? 'Ikuti Kami' : 'Follow Us',
        list: [
          {
            icon: icon_google_plus,
            link: 'https://plus.google.com/+tokopedia/posts',
            alt: 'icon-google',
            onClick: e => {
              e.preventDefault();
              alert('Click Callback');
            },
          },
          {
            icon: icon_facebook,
            link: 'https://www.facebook.com/tokopedia',
            alt: 'icon-facebook',
            onClick: e => {
              e.preventDefault();
              alert('Click Callback');
            },
          },
          {
            icon: icon_twitter,
            link: 'https://www.twitter.com/tokopedia',
            alt: 'icon-twitter',
            onClick: e => {
              e.preventDefault();
              alert('Click Callback');
            },
          },
          {
            icon: icon_pinterest,
            link: 'https://www.pinterest.com/tokopedia',
            alt: 'icon-pinterest',
            onClick: e => {
              e.preventDefault();
              alert('Click Callback');
            },
          },
          {
            icon: icon_instagram,
            link: 'https://www.instagram.com/tokopedia',
            alt: 'icon-instagram',
            onClick: e => {
              e.preventDefault();
              alert('Click Callback');
            },
          },
        ],
      },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100vh' }}>
        <div style={{ width: '100%', flexGrow: 1 }}>
          <Tips>
            Change to <b>Story</b> tab on addon panel to see the code.
          </Tips>
        </div>
        <Footer
          androidURL="https://play.google.com/store/apps/details?id=com.tokopedia.tkpd&hl=en"
          indexActive={this.state.indexActive}
          iosURL="https://apps.apple.com/us/app/tokopedia-semangat-ramadan/id1001394201"
          processTime="0.040 sec"
          selections={this.state.selections}
          url={url}
          onItemClick={this.handleClick}
          {...this.props}
        />
      </div>
    );
  }
}

/**
 * stories
 */
footerStories.add(
  'Default',
  () => {
    return <FooterStateful />;
  },
  storyOptions,
);

footerStories.add(
  'Marketplace',
  () => {
    return <FooterStateful marketplace />;
  },
  storyOptions,
);
