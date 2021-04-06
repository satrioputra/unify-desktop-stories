import React, { useState, useRef } from 'react';
import styled from 'react-emotion';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select, object } from '@storybook/addon-knobs';
import { N50, N500, G500 } from 'unify-token/build/v2/colors';

/**
 * Component(s)
 */
import Dropdown from 'unify-react-desktop/build/Dropdown';
import Button from 'unify-react-desktop/build/Button';
import Tips from 'unify-react-desktop/build/Tips';

/**
 * Notes
 */
import README from 'unify-react-desktop/build/Dropdown/README.md';

/**
 * storybook constructor
 */
const dropdownStories = storiesOf('Components/Dropdown', module);

/**
 * others
 */
const DropdownItem = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 8px;
  font-weight: bold;
  font-size: 14px;
  color: ${N500};
  position: relative;
  &:hover {
    background-color: ${N50};
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

const DropdownContent = ({ selected, cb, style = {} }) => {
  const options = ['option 1', 'option 2', 'option 3', 'option 4', 'option 5', 'option 6', 'option 7', 'option 8'];
  return (
    <div style={{ minWidth: '250px', ...style }}>
      {options.map(x => (
        <DropdownItem onClick={() => cb(x)} key={`key ${x}`} selected={selected === x}>
          {x}
        </DropdownItem>
      ))}
    </div>
  );
};

dropdownStories.addDecorator(withKnobs);

/**
 * stories
 */
dropdownStories.add(
  'Default',
  () => {
    const options = {
      down: 'down',
      up: 'up',
      left: 'left',
      right: 'right',
    };

    const dropOptions = select('drop', options, 'down');
    const alignRight = boolean('alignRight', false);
    const offsets = object('offsets', { x: 0, y: 0 });

    const ButtonWithDropdown = ({ drop }) => {
      const [open, setOpen] = useState(false);
      const [open2, setOpen2] = useState(false);
      const [open3, setOpen3] = useState(false);
      const [open4, setOpen4] = useState(false);
      const [open5, setOpen5] = useState(false);
      const [selected, setSelected] = useState(null);
      const [selected2, setSelected2] = useState(null);
      const [selected3, setSelected3] = useState(null);
      const [selected4, setSelected4] = useState(null);
      const [selected5, setSelected5] = useState(null);

      const buttonRef = useRef(null);
      const button2Ref = useRef(null);
      const button3Ref = useRef(null);
      const button4Ref = useRef(null);
      const button5Ref = useRef(null);

      const handleClick = () => {
        setOpen(!open);
      };
      const handleClick2 = () => {
        setOpen2(!open2);
      };
      const handleClick3 = () => {
        setOpen3(!open3);
      };
      const handleClick4 = () => {
        setOpen4(!open4);
      };
      const handleClick5 = () => {
        setOpen5(!open5);
      };
      const selectedCallback = value => {
        setSelected(value);
        setOpen(false);
      };
      const selected2Callback = value => {
        setSelected2(value);
        setOpen2(false);
      };
      const selected3Callback = value => {
        setSelected3(value);
        setOpen3(false);
      };
      const selected4Callback = value => {
        setSelected4(value);
        setOpen4(false);
      };
      const selected5Callback = value => {
        setSelected5(value);
        setOpen5(false);
      };

      return (
        <div style={{ padding: '16px', height: '150vh' }}>
          <div
            style={{
              position: 'absolute',
              top: '50vh',
              transform: 'translate(0,-50%)',
              width: 'calc(100vw - 32px)',
              textAlign: 'center',
            }}
          >
            <Tips>
              <b>Dropdown</b> use <b>viewport</b> as boundaries, it will show inside <b>viewport</b> when the{' '}
              <b>toggle</b> is clicked. Change to <b>Knobs</b> tab on addon panel to dynamically interact with the
              props.
            </Tips>
            <Button
              main
              ghost={!selected5}
              filled={!!selected5}
              onClick={handleClick5}
              innerRef={button5Ref}
              dropdown={true}
              dropdownOpen={open5}
            >
              Dropdown 5
            </Button>
            <Tips>
              Change to <b>Knobs</b> tab on addon panel to dynamically interact with the props.
            </Tips>
          </div>
          <div style={{ position: 'absolute', transform: 'translate(0,-50%)', width: 'calc(100vw - 32px)' }}>
            <Button
              main
              ghost={!selected}
              filled={!!selected}
              onClick={handleClick}
              innerRef={buttonRef}
              dropdown={true}
              dropdownOpen={open}
              style={{ position: 'absolute' }}
            >
              Dropdown 1
            </Button>
          </div>
          <div style={{ position: 'absolute', right: 16 }}>
            <Button
              main
              ghost={!selected2}
              filled={!!selected2}
              onClick={handleClick2}
              innerRef={button2Ref}
              dropdown={true}
              dropdownOpen={open2}
            >
              Dropdown 2
            </Button>
          </div>
          <div style={{ position: 'absolute', bottom: '0vh' }}>
            <Button
              main
              ghost={!selected3}
              filled={!!selected3}
              onClick={handleClick3}
              innerRef={button3Ref}
              dropdown={true}
              dropdownOpen={open3}
            >
              Dropdown 3
            </Button>
          </div>
          <div style={{ position: 'absolute', bottom: '0vh', right: 16 }}>
            <Button
              main
              ghost={!selected4}
              filled={!!selected4}
              className="chip4"
              onClick={handleClick4}
              innerRef={button4Ref}
              dropdown={true}
              dropdownOpen={open4}
            >
              Dropdown 4
            </Button>
          </div>

          <Dropdown
            targetRef={buttonRef}
            open={open}
            onClickOutside={() => setOpen(false)}
            drop={drop}
            alignRight={alignRight}
            offsets={offsets}
          >
            <DropdownContent selected={selected} cb={selectedCallback} />
          </Dropdown>
          <Dropdown
            targetRef={button2Ref}
            open={open2}
            onClickOutside={() => setOpen2(false)}
            drop={drop}
            alignRight={alignRight}
            offsets={offsets}
          >
            <DropdownContent selected={selected2} cb={selected2Callback} />
          </Dropdown>
          <Dropdown
            targetRef={button3Ref}
            open={open3}
            onClickOutside={() => setOpen3(false)}
            drop={drop}
            alignRight={alignRight}
            offsets={offsets}
          >
            <DropdownContent selected={selected3} cb={selected3Callback} />
          </Dropdown>
          <Dropdown
            targetRef={button4Ref}
            open={open4}
            onClickOutside={() => setOpen4(false)}
            drop={drop}
            alignRight={alignRight}
            offsets={offsets}
          >
            <DropdownContent selected={selected4} cb={selected4Callback} />
          </Dropdown>
          <Dropdown
            targetRef={button5Ref}
            open={open5}
            onClickOutside={() => setOpen5(false)}
            drop={drop}
            alignRight={alignRight}
            offsets={offsets}
          >
            <DropdownContent selected={selected5} cb={selected5Callback} />
          </Dropdown>
        </div>
      );
    };
    return (
      <>
        <ButtonWithDropdown drop={dropOptions} />
      </>
    );
  },
  { notes: README },
);
