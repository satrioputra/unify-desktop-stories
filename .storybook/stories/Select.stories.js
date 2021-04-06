import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { text, boolean, object, select, withKnobs, number, radios } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Select from 'unify-react-desktop/build/Select';
import Tips from 'unify-react-desktop/build/Tips';
import Shimmer from 'unify-react-desktop/build/Loader/Shimmer';
import Notification from 'unify-react-desktop/build/Notification';

import selectNotes from 'unify-react-desktop/build/Select/README.md';

const selectStates = {
  Default: '',
  Error: 'error',
  Success: 'success',
  Disabled: 'disabled',
};

const selectStories = storiesOf('Components/Select', module);

selectStories.addDecorator(withKnobs);

class SelectPlayground extends React.Component {
  render() {
    const autoCapitalizeOption = {
      off: 'off',
      on: 'on',
      words: 'words',
      character: 'caracter',
    };
    const autoCompleteOption = {
      off: 'off',
      on: 'on',
      name: 'name',
      email: 'email',
      username: 'username',
      'new-password': 'new-password',
      'current-password': 'current-password',
      organization: 'organization',
      'street-address': 'street-address',
      'address-line1': 'address-line1',
      'address-line2': 'address-line2',
      'address-line3': 'address-line3',
      'address-level1': 'address-level1',
      'address-level2': 'address-level2',
      'address-level3': 'address-level3',
      'address-level4': 'address-level4',
      country: 'country',
      'country-name': 'country-name',
      'postal-code': 'postal-code',
      'cc-name': 'cc-name',
      'cc-additional-name': 'cc-additional-name',
      'cc-family-name': 'cc-family-name',
      'cc-number': 'cc-number',
      'cc-exp': 'cc-exp',
      'cc-exp-month': 'cc-exp-month',
      'cc-exp-year': 'cc-exp-year',
      'cc-csc': 'cc-csc',
      'cc-type': 'cc-type',
      'transaction-currency': 'transaction-currency',
      'transaction-ammount': 'transaction-ammount',
      language: 'language',
      bday: 'bday',
      'bday-day': 'bday-day',
      'bday-month': 'bday-month',
      'bday-year': 'bday-year',
      sex: 'sex',
      tel: 'tel',
      'tel-extension': 'tel-extension',
      impp: 'impp',
      url: 'url',
      photo: 'photo',
    };
    const withSearchProps = {
      placeholder: 'Cari Gaya Buburmu',
      onChange: action('with search onChange'),
      value: '',
    };
    const selectItemsArray = [
      {
        value: 'Bubur Diaduk',
        props: { 'data-testid': 'selectItem1' },
        id: '1111',
        onClick: action('onClick item 1'),
      },
      {
        value: 'Bubur Tidak Diaduk',
        props: { 'data-testid': 'selectItem2' },
        id: '2222',
        onClick: action('onClick item 2'),
      },
      {
        value: 'Bubur Diblender',
        props: { 'data-testid': 'selectItem3' },
        id: '3333',
        onClick: action('onClick item 3'),
      },
      {
        value: 'Bubur Digoreng',
        props: { 'data-testid': 'selectItem4' },
        onClick: action('onClick item 4'),
      },
      {
        value: 'Bubur Dikukus',
        props: { 'data-testid': 'selectItem5' },
        onClick: action('onClick item 5'),
      },
      {
        value: 'Bubur Dibalik Tidak Tumpah',
        props: { 'data-testid': 'selectItem6' },
        onClick: action('onClick item 6'),
      },
    ];

    const state = radios('States', selectStates, '');
    const autoCapitalize = select('autoCapitalize', autoCapitalizeOption, 'off');
    const autoComplete = select('autoComplete', autoCompleteOption, 'off');
    const items = object('items', selectItemsArray);
    const placeholder = text('placeholder', 'Pilih Gaya Buburmu');
    const valueOption = {
      'Bubur Diaduk': 'Bubur Diaduk',
      'Bubur Tidak Diaduk': 'Bubur Tidak Diaduk',
      'Bubur Diblender': 'Bubur Diblender',
      'Bubur Digoreng': 'Bubur Digoreng',
      'Bubur Dikukus': 'Bubur Dikukus',
      'Bubur Dibalik Tidak Tumpah': 'Bubur Dibalik Tidak Tumpah',
    };
    const value = select('value', valueOption, '');
    const width = text('width', '300px');
    const withSearch = object('withSearch', withSearchProps);
    const visibleItems = number('visibleItems', 4, { min: 3 });
    const handleSelectChange = action('onChange');
    const handleOnKeyDown = action('onKeyDown');
    const handleOnKeyUp = action('onKeyUp');
    const handleOnKeyPress = action('onKeyPress');

    const selectProps = {
      autoCapitalize,
      autoComplete,
      disabled: state === 'disabled',
      error: state === 'error',
      success: state === 'success',
      items,
      placeholder,
      value,
      width,
      withSearch,
      visibleItems,
      onChange: handleSelectChange,
      onKeyDown: handleOnKeyDown,
      onKeyUp: handleOnKeyUp,
      onKeyPress: handleOnKeyPress,
    };
    return (
      <div className="container" style={{ overflow: 'visible' }}>
        <div className="section">
          <Tips margin="0 0 16px">
            Change to <b>Knobs</b> tab on addon panel to dynamically interact with the props.
          </Tips>
          <Select {...selectProps} />
        </div>
      </div>
    );
  }
}

class SelectStateful extends React.Component<any> {
  state = {
    query: '',
    value: '',
  };

  handleClick = (item, e) => {
    this.setState({
      value: item.value,
    });
  };

  handleSearchChange = e => {
    const { value } = e.target;

    this.setState({
      query: value,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="section">
          <h2 className="section__title">Default</h2>
          <Select
            {...this.props}
            value={this.state.value}
            placeholder="Insert Placeholder"
            width="300px"
            onChange={this.handleClick}
            items={[
              {
                value: 'Content 1',
                props: { 'data-cy': 'Content_1_Click' },
              },
              { value: 'Content 2' },
              { value: 'Content 3' },
              { value: 'Content 4' },
              { value: 'Content 5' },
              { value: 'Content 6' },
            ]}
          />
          <br />

          <h2 className="section__title">With Search</h2>
          <Select
            {...this.props}
            value={this.state.value}
            placeholder="Insert Placeholder"
            width="300px"
            onChange={this.handleClick}
            withSearch={{
              placeholder: 'hehe',
              onChange: this.handleSearchChange,
              value: this.state.query,
            }}
            items={[
              {
                value: 'Content 1',
                props: { 'data-cy': 'Content_1_Click' },
              },
              { value: 'Content 2' },
              { value: 'Content 3' },
              { value: 'Content 4' },
              { value: 'Content 5' },
              { value: 'Content 6' },
              { value: 'Content 7' },
            ]}
          />
        </div>
      </div>
    );
  }
}

const CustomShimmer = () => (
  <div style={{ padding: '12px' }}>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
      <Shimmer width="24px" height="24px" marginBottom="0" marginRight="8px" />
      <Shimmer width="120px" height="14px" marginBottom="0" marginRight="12px" />
    </div>
    <div>
      <div style={{ padding: '2px 0', marginBottom: '2px' }}>
        <Shimmer width="150px" height="10px" marginBottom="0" marginLeft="32px" />
      </div>
    </div>
  </div>
);

class SelectWithShimmer extends React.Component<any> {
  state = {
    query: '',
    value: '',
    items: [
      {
        value: 'Content 1',
        props: { 'data-cy': 'Content_1_Click' },
      },
      { value: 'Content 2' },
      { value: 'Content 3' },
      { value: 'Content 4' },
      { value: 'Content 5' },
      { value: 'Content 6' },
      { value: 'Content 7' },
      { value: 'Content 8' },
      { value: 'Content 9' },
      { value: 'Content 10' },
    ],
    listLoading: false,
    reachEndItems: [
      { value: 'Content 1' },
      { value: 'Content 2' },
      { value: 'Content 3' },
      { value: 'Content 4' },
      { value: 'Content 5' },
      { value: 'Content 6' },
    ],
    reachEndLoading: false,
  };

  handleClick = (item, e) => {
    this.setState({
      value: item.value,
    });
  };

  handleSearchChange = e => {
    const { value } = e.target;

    this.setState({
      query: value,
    });
  };

  handleListLoading = index => {
    const states = [
      {
        items: [],
        listLoading: 6,
      },
      {
        items: [
          {
            value: 'Content 1',
            props: { 'data-cy': 'Content_1_Click' },
          },
          { value: 'Content 2' },
          { value: 'Content 3' },
          { value: 'Content 4' },
          { value: 'Content 5' },
          { value: 'Content 6' },
          { value: 'Content 7' },
          { value: 'Content 8' },
          { value: 'Content 9' },
          { value: 'Content 10' },
        ],
        listLoading: true,
      },
      {
        items: [
          {
            value: 'Content 1',
            props: { 'data-cy': 'Content_1_Click' },
          },
          { value: 'Content 2' },
          { value: 'Content 3' },
          { value: 'Content 4' },
          { value: 'Content 5' },
          { value: 'Content 6' },
          { value: 'Content 7' },
          { value: 'Content 8' },
          { value: 'Content 9' },
          { value: 'Content 10' },
        ],
        listLoading: false,
      },
    ];
    this.setState(states[index]);
  };

  handleReachEnd = e => {
    // this is an example to simulate infinite scroll
    const { reachEndLoading, reachEndItems } = this.state;
    if (!reachEndLoading) {
      const height = e.target.getBoundingClientRect().height;
      if (height + e.target.scrollTop > e.target.scrollHeight) {
        this.setState({ reachEndLoading: true });

        // simulate response
        setTimeout(() => {
          const newArr = new Array(5).fill(0).map((x, i) => ({
            value: `Content ${i + 1 + reachEndItems.length}`,
          }));
          const newItems = [...reachEndItems, ...newArr];
          this.setState({ reachEndLoading: false, reachEndItems: newItems });
        }, 2000);
      }
    }
  };

  render() {
    return (
      <div className="container">
        <div className="section">
          <h2 className="section__title">Default</h2>
          <div style={{ marginBottom: '16px' }}>
            Pass <i>listLoading</i> prop to be true to show the loading. See knobs tab to change it value.
          </div>
          <Select
            {...this.props}
            value={this.state.value}
            placeholder="Insert Placeholder"
            width="300px"
            onChange={this.handleClick}
            items={this.state.items}
            listLoading={boolean('listLoading', true)}
            onScroll={action('onScroll')}
          />
          <div style={{ padding: '16px 0 0' }}>
            see action tab to see <i>onScroll</i> action.
          </div>
        </div>
        <div className="section">
          <h2 className="section__title">multiline shimmer</h2>
          <div style={{ marginBottom: '16px' }}>Pass a number to create multiline shimmer.</div>
          <Select
            {...this.props}
            value={this.state.value}
            placeholder="Insert Placeholder"
            width="300px"
            onChange={this.handleClick}
            listLoading={5}
          />
        </div>
        <div className="section">
          <h2 className="section__title">With Custom Shimmer</h2>
          <div style={{ marginBottom: '16px' }}>
            You can pass a Node to <i>listLoading </i>prop.
          </div>
          <Select
            {...this.props}
            value={this.state.value}
            placeholder="Insert Placeholder"
            width="300px"
            onChange={this.handleClick}
            listLoading={
              <>
                <CustomShimmer />
                <CustomShimmer />
                <CustomShimmer />
              </>
            }
          />
        </div>
        <div className="section">
          <h2 className="section__title">Handle infinite scroll using onScroll event</h2>
          <div style={{ marginBottom: '16px' }}>
            Search for <i>handleReachEnd</i> on Story tab to see the code.
          </div>
          <Select
            {...this.props}
            value={this.state.value}
            placeholder="Insert Placeholder"
            width="300px"
            onChange={this.handleClick}
            onScroll={this.handleReachEnd}
            items={this.state.reachEndItems}
            listLoading={this.state.reachEndLoading ? 1 : undefined}
          />
        </div>
      </div>
    );
  }
}

class SelectPrependAppendObject extends React.Component<any> {
  state = {
    query: '',
    value: '',
  };

  handleClick = (item, e) => {
    this.setState({
      value: item.value,
    });
  };

  handleSearchChange = e => {
    const { value } = e.target;

    this.setState({
      query: value,
    });
  };

  render() {
    const placeholder = text('placeholder', 'Insert Placeholder');
    const width = text('width', '235px');

    return (
      <div className="container">
        <div className="section">
          <Tips margin="0 0 16px">
            Change to <b>Knobs</b> tab on addon panel to dynamically interact with the props.
          </Tips>
          <h2 className="section__title">Prepand and Append</h2>
          <Select
            {...this.props}
            placeholder={placeholder}
            value={this.state.value}
            width={width}
            onChange={this.handleClick}
            items={[
              {
                value: 'Option 1',
                icon: 'http://placehold.it/24x24',
              },
              {
                value: 'Option 2',
                prependObject: (
                  <i
                    style={{
                      display: 'block',
                      backgroundColor: '#FA591D',
                      borderRadius: '50%',
                      height: '24px',
                      width: '24px',
                    }}
                  />
                ),
              },
              {
                value: 'Option 3 with long text max. 2 lines',
                prependObject: (
                  <i
                    style={{
                      display: 'block',
                      backgroundColor: '#FA591D',
                      borderRadius: '50%',
                      height: '24px',
                      width: '24px',
                    }}
                  />
                ),
              },
              {
                value: 'Option 4 with long text max. 2 lines',
                prependObject: (
                  <i
                    style={{
                      display: 'block',
                      backgroundColor: '#FA591D',
                      borderRadius: '50%',
                      height: '24px',
                      width: '24px',
                    }}
                  />
                ),
                props: {
                  disabled: true,
                },
              },
              {
                value: 'Option 5',
                appendObject: <Notification promo />,
              },
              {
                value: 'Option 6 with long text max. 2 lines',
                appendObject: <Notification promo />,
              },
              {
                value: 'Option 7 with long text max. 2 lines',
                appendObject: <Notification promo />,
                props: {
                  'data-testid': 'selectItem7',
                  disabled: true,
                },
              },
              {
                value: 'Option 8 with long text max. 2 lines',
                icon: 'http://placehold.it/24x24',
                appendObject: <Notification promo />,
              },
            ]}
          />
        </div>
      </div>
    );
  }
}

selectStories.add('Default', () => <SelectPlayground />, { notes: { markdown: selectNotes } });
selectStories.add('Interactive', () => <SelectStateful width="560px" />, { notes: { markdown: selectNotes } });
selectStories.add('With Loading', () => <SelectWithShimmer width="560px" />, {
  notes: { markdown: selectNotes },
});

selectStories.add('Prepend or Append Object', () => <SelectPrependAppendObject />, {
  notes: {
    markdown: selectNotes,
  },
});
