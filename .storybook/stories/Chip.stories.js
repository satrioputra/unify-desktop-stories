import React, { Component, useState, useRef } from 'react';
import styled from 'react-emotion';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, radios } from '@storybook/addon-knobs';

/**
 * Component(s)
 */
import Chip from 'unify-react-desktop/build/Chip';
import Dropdown from 'unify-react-desktop/build/Dropdown';
import Notification from 'unify-react-desktop/build/Notification';
import Tips from 'unify-react-desktop/build/Tips';
import { N500, G500, Y500 } from 'unify-token/build/v2/colors';

/**
 * Notes
 */
import README from 'unify-react-desktop/build/Chip/README.md';

/**
 * Storybook Constructor
 */
const chipStories = storiesOf('Components/Chips', module);

/**
 * Other(s)
 */
const storyOptions = {
  knobs: {
    // escapeHTML: false,
  },
  notes: {
    markdown: README,
  },
};

/**
 * Storybook Decorator
 */
chipStories.addDecorator(withKnobs);

class ChipStateful extends Component {
  state = {
    active: false,
  };

  handleToggleState = () => {
    this.setState(({ active }) => ({ active: !active }));
    action('onClick');
  };

  render() {
    const children = 'Chip text';

    return (
      <Chip onClick={this.handleToggleState} active={this.state.active} {...this.props}>
        <span>{this.props.children || children}</span>
      </Chip>
    );
  }
}

chipStories.add(
  'Default',
  () => {
    const active = boolean('active', false);
    const alternate = boolean('alternate', false);
    const children = text('children', 'Manggo');
    const className = text('className', '');
    const disabled = boolean('disabled', false);
    const withIcon = boolean('Use icon?', false);
    const icon = text('icon', 'https://via.placeholder.com/32');
    const iconSizeOptions = {
      '16': '16',
      '24': '24',
      '32': '32',
    };
    const iconSize = radios('iconSize', iconSizeOptions, 16);
    const loading = boolean('loading', false);
    const primary = boolean('primary', false);
    const dropdown = boolean('dropdown', false);
    const dropdownOpen = boolean('dropdownOpen', false);
    const withPrepend = boolean('Use prependObject?', false);

    const SamplePrepend = styled('div')`
      width: 24px;
      height: 24px;
      font-weight: 600;
      line-height: 16px;
      background-image: url('http://placehold.it/300x300');
      background-position: right center;
      background-size: 24pxpx;
      border-radius: 4px;
      background-repeat: no-repeat;
    `;

    return (
      <>
        <Tips>
          Change to <b>Knobs</b> tab on addon panel to dynamically interact with the props.
        </Tips>
        {dropdown && (
          <Tips>
            <b>dropdown</b> props only show the <b>dropdown icon</b> on the right. Integrate with Dropdown component to
            create a complete dropdown menu. See <b>with dropdown</b> sub page for implementation.
          </Tips>
        )}
        <div style={{ padding: '16px' }}>
          <Chip
            active={active}
            alternate={alternate}
            children={children}
            className={className}
            disabled={disabled}
            icon={withIcon && icon}
            iconSize={withIcon && iconSize}
            loading={loading}
            primary={primary}
            dropdown={dropdown}
            dropdownOpen={dropdownOpen}
            prependObject={withPrepend && <SamplePrepend />}
          />
        </div>
      </>
    );
  },
  storyOptions,
);

chipStories.add('With close btn', () => {
  return (
    <div style={{ padding: '16px' }}>
      <ChipStateful onClose={e => e.target.parentNode.remove()} />
    </div>
  );
});

chipStories.add('Disabled', () => {
  return (
    <div style={{ padding: '16px' }}>
      <ChipStateful disabled>Disabled chip</ChipStateful>
    </div>
  );
});

chipStories.add('With loading state', () => {
  return (
    <div style={{ padding: '16px' }}>
      <ChipStateful loading />
    </div>
  );
});

chipStories.add('With icon', () => {
  return (
    <div style={{ padding: '16px' }}>
      <ChipStateful icon="http://placehold.it/300x300" onClose={() => {}} />
    </div>
  );
});

chipStories.add('With custom prependObject', () => {
  type iconColorProps = {
    color: string;
  };
  const IconColor = styled('div')`
    width: 24px;
    height: 24px;
    background-color: ${(props: iconColorProps) => props.color};
    border-radius: 50%;
  `;

  const Icon = styled('div')`
    width: 24px;
    height: 24px;
    font-weight: 600;
    line-height: 16px;
    background-image: url('http://placehold.it/300x300');
    background-position: right center;
    background-size: 24pxpx;
    border-radius: 4px;
    background-repeat: no-repeat;
  `;

  return (
    <div style={{ padding: '16px' }}>
      <ChipStateful />
      <ChipStateful prependObject={<Icon />}>with icon</ChipStateful>
      <ChipStateful prependObject={<IconColor color={G500} />}>with icon color</ChipStateful>
      <ChipStateful prependObject={<IconColor color={Y500} />}>with icon color</ChipStateful>
      <ChipStateful prependObject={<Notification new />}>with new notification</ChipStateful>
      <ChipStateful prependObject={<Icon />} onClose={() => console.log('close')}>
        with close
      </ChipStateful>
    </div>
  );
});

chipStories.add('With dropdown', () => {
  const Icon = styled('div')`
    width: 24px;
    height: 24px;
    font-weight: 600;
    line-height: 16px;
    background-image: url('http://placehold.it/300x300');
    background-position: right center;
    background-size: 24pxpx;
    border-radius: 4px;
    background-repeat: no-repeat;
  `;

  const DropdownItem = styled('div')`
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    padding: 8px;
    font-weight: bold;
    font-size: 14px;
    color: ${N500};
    position: relative;
    &:hover {
      background-color: #f8f8f8;
    }
    &:after {
      content: '';
      width: 2px;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      ${props => (props.selected ? `background-color: ${G500}` : '')};
    }
  `;

  const DropdownContent = ({ selected, cb }) => {
    const options = ['option 1', 'option 2', 'option 3'];
    return (
      <div style={{ minWidth: '250px' }}>
        {options.map(x => (
          <DropdownItem onClick={() => cb(x)} key={`key ${x}`} selected={selected === x}>
            {x}
          </DropdownItem>
        ))}
      </div>
    );
  };

  const ChipDropdown = () => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <h4>Chip with dropdown props</h4>
        <Chip onClick={() => setOpen(!open)} dropdown dropdownOpen={open}>
          state: {open ? 'open' : 'close'}
        </Chip>
        <Chip dropdown onClose={() => console.log('close')}>
          with close
        </Chip>
        <Chip dropdown prependObject={<Icon />}>
          with icon
        </Chip>
        <Chip disabled dropdown>
          disabled
        </Chip>
        <Chip active dropdown>
          active
        </Chip>
      </div>
    );
  };

  const ChipWithDropdownComponent = () => {
    const chipRef = useRef();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selected, setSelected] = useState(null);

    const selectedCallback = value => {
      setSelected(value);
      setDropdownOpen(false);
    };

    return (
      <div>
        <h4>Integrate with Dropdown component</h4>
        <Chip
          dropdown
          innerRef={chipRef}
          dropdownOpen={dropdownOpen}
          active={!!selected}
          onClick={() => setDropdownOpen(true)}
        >
          Options
        </Chip>
        <Dropdown targetRef={chipRef} open={dropdownOpen} onClickOutside={() => setDropdownOpen(false)}>
          <DropdownContent selected={selected} cb={selectedCallback} />
        </Dropdown>
      </div>
    );
  };

  return (
    <>
      <Tips>
        Change to <b>Story</b> tab on addon panel to see implementation.
      </Tips>
      <div style={{ padding: '16px' }}>
        <ChipDropdown />
        <ChipWithDropdownComponent />
      </div>
    </>
  );
});
