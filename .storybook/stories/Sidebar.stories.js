import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Sidebar from 'unify-react-desktop/build/Sidebar';

const sidebarStories = storiesOf('Compositions/Sidebar', module);

sidebarStories.add('Default', () => {
  const items = [
    {
      title: 'Kotak Masuk',
      list: [
        {
          children: 'Chat',
          onClick: 'http://www.tokopedia.com',
        },
        {
          children: 'Diskusi Produk',
          onClick: 'http://www.tokopedia.com',
        },
        {
          children: 'Ulasan',
          onClick: 'http://www.tokopedia.com',
        },
        {
          children: 'Pesan Bantuan',
          onClick: 'http://www.tokopedia.com',
        },
        {
          children: 'Komplain Pesanan',
          onClick: 'http://www.tokopedia.com',
        },
        {
          children: 'Update',
          onClick: 'http://www.tokopedia.com',
        },
      ],
    },
    {
      title: 'Pembelian',
      list: [
        {
          children: 'Menunggu Pembayaran',
          onClick: 'http://www.tokopedia.com',
        },
        {
          children: 'Daftar Transaksi',
          onClick: 'http://www.tokopedia.com',
        },
      ],
    },
    {
      title: 'Toko Saya',
      list: [
        {
          children: 'Penjualan',
          onClick: 'http://www.tokopedia.com',
        },
        {
          children: 'Tambah Produk',
          onClick: 'http://www.tokopedia.com',
        },
        {
          children: 'Daftar Produk',
          onClick: 'http://www.tokopedia.com',
        },
        {
          children: 'Statistik',
          onClick: 'http://www.tokopedia.com',
        },
        {
          children: 'TopAds',
          onClick: 'http://www.tokopedia.com',
        },
        {
          children: 'Peluang',
          onClick: 'http://www.tokopedia.com',
        },
        {
          children: 'Pinjaman Modal',
          onClick: 'http://www.tokopedia.com',
        },
        {
          children: 'Pengaturan Toko',
          onClick: 'http://www.tokopedia.com',
        },
        {
          children: 'Pengaturan Admin',
          onClick: 'http://www.tokopedia.com',
        },
      ],
    },
    {
      title: 'Profil Saya',
      list: [
        {
          children: 'Wishlist',
          onClick: 'http://www.tokopedia.com',
        },
        {
          children: 'Toko Favorit',
          onClick: 'http://www.tokopedia.com',
        },
        {
          children: 'Pengaturan',
          onClick: 'http://www.tokopedia.com',
        },
      ],
    },
    {
      title: 'Wawasan',
      list: [
        {
          children: 'Wawasan Diskusi Produk',
          onClick: 'http://www.tokopedia.com',
        },
      ],
    },
  ];

  const user = {
    image: 'https://via.placeholder.com/300x300',
    name: 'Thomas Georgey',
    status: 'Verified account',
  };

  const saldo = {
    Ovo: {
      icon: 'https://via.placeholder.com/300x300',
      items: [
        {
          item: 'OVO Cash',
          value: 'Rp290.168',
        },
        {
          item: 'OVO Points',
          value: '1.168',
        },
      ],
    },
    Saldo: {
      icon: 'https://via.placeholder.com/300x300',
      items: [
        {
          item: 'Sisa Saldo',
          value: 'Rp168.168',
        },
      ],
    },
    TokoPoints: {
      icon: 'https://via.placeholder.com/300x300',
      items: [
        {
          item: 'TokoPoints',
          value: '10.168 Points',
        },
        {
          item: 'Kupon Saya',
          value: '168',
        },
      ],
    },
  };

  return <Sidebar items={items} user={user} saldo={saldo} />;
});
