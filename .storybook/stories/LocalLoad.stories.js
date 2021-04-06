import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import LocalLoad from 'unify-react-desktop/build/LocalLoad';

const localloadStories = storiesOf('Compositions/LocalLoad', module);
localloadStories.addDecorator(withKnobs);

class LocalLoadStateful extends React.Component {
  state = {
    loading: false,
  };

  handleClick = () => {
    this.setState({
      loading: true,
    });
  };

  render() {
    const { title, children } = this.props;
    return (
      <LocalLoad title={title} onClick={this.handleClick} loading={this.state.loading}>
        {children}
      </LocalLoad>
    );
  }
}

localloadStories.add('Default', () => {
  const title = text('title', 'Deskripsi produk gagal ditampilkan');
  const children = text('children', 'Ketuk icon untuk memulai ulang');

  return <LocalLoadStateful title={title} children={children} />;
});
