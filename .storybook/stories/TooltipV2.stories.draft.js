import React, { useState, useRef, useCallback, forwardRef } from 'react';
import styled, { css } from 'react-emotion';

import { storiesOf } from '@storybook/react';
import { withKnobs, radios, number, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import TooltipV2, { TooltipInteractive } from 'unify-react-desktop/build/TooltipV2';
import { PopupTrigger } from '@utils/Popup';
import TextField from 'unify-react-desktop/buildForm/TextField';
import READMEV2 from 'unify-react-desktop/build/TooltipV2/README.md';

const storyOptionsV2 = {
  notes: {
    markdown: READMEV2,
  },
};

const _center = css`
  position: fixed;
  top: 50%;
  left: 50%;
`;

const _left = css`
  position: fixed;
  left: 0;
  top: 50%;
`;

const _right = css`
  position: fixed;
  right: 0;
  top: 50%;
`;

const _top = css`
  position: fixed;
  top: 0;
  left: 50%;
`;

const _bottom = css`
  position: fixed;
  bottom: 0;
  left: 50%;
`;

const _link = css`
  cursor: pointer;
  outline: none;
  padding: 8px;
  margin: 8px;
  border: solid 1px #e0e0e0;
  border-radius: 8px;
  background: #fafafa;
`;

const H3 = styled.h3`
  text-decoration: underline;
  margin: 12px;
`;
const Description = styled.div`
  margin: 12px 12px 16px;
  line-height: 24px;
`;
const Code = styled.span`
  font-weight: 600;
  background-color: #f0f0f0;
  padding: 4px 8px;
`;

const tooltipStories = storiesOf('Components/TooltipV2', module);

tooltipStories.addDecorator(withKnobs);

tooltipStories.add(
  'default',
  () => {
    const placementOptions = {
      bottom: 'bottom',
      left: 'left',
      top: 'top',
      right: 'right',
    };
    const placement = radios('placement', placementOptions, 'right', 'Knobs');
    const trigger = radios('trigger', { hover: 'hover', click: 'click' }, 'hover', 'Knobs');
    const delay = object('delay', { show: 0, hide: 0 }, 'Knobs');
    const targetRef = useRef();
    const targetRef1 = useRef();
    const targetRef2 = useRef();
    const targetRef3 = useRef();
    const targetRef4 = useRef();

    const props = {
      placement,
      trigger,
      delay,
      onMouseEnter: action('onMouseEnter'),
      onMouseLeave: action('onMouseLeave'),
      onClick: action('onClick'),
    };
    return (
      <div>
        <H3>Default</H3>
        <Description>
          <p>
            This is Tooltip with a minimal settings. Try to hover these buttons to see the tooltip. And check the Story
            tab for detail implementation.
          </p>
          <p>
            <b>Placement: </b>There are 4 different placements to choose, you can change it on Knobs tab.{' '}
          </p>
          <p>
            <b>Overflow Prevention & flipping:</b> Tooltip always show inside viewport, where there is not enough space
            on preffered side, it will flip opposite side.
          </p>
        </Description>
        <div className={_center}>
          <button className={_link} ref={targetRef}>
            Hover Me
          </button>
          <TooltipV2 targetRef={targetRef} {...props}>
            Make Tooltip as brief as possible. no 2 lines
          </TooltipV2>
        </div>
        <div className={_left}>
          <button className={_link} ref={targetRef1}>
            Hover Me
          </button>
          <TooltipV2 targetRef={targetRef1} {...props}>
            Make Tooltip as brief as possible. no 2 lines
          </TooltipV2>
        </div>
        <div className={_right}>
          <button className={_link} ref={targetRef2}>
            Hover Me
          </button>
          <TooltipV2 targetRef={targetRef2} {...props}>
            Make Tooltip as brief as possible. no 2 lines
          </TooltipV2>
        </div>
        <div className={_top}>
          <button className={_link} ref={targetRef3}>
            Hover Me
          </button>
          <TooltipV2 targetRef={targetRef3} {...props}>
            Make Tooltip as brief as possible. no 2 lines
          </TooltipV2>
        </div>
        <div className={_bottom}>
          <button className={_link} ref={targetRef4}>
            Hover Me
          </button>
          <TooltipV2 targetRef={targetRef4} {...props}>
            Make Tooltip as brief as possible. no 2 lines
          </TooltipV2>
        </div>
      </div>
    );
  },
  storyOptionsV2,
);

tooltipStories.add(
  'Targeting to Textfield info',
  () => {
    const placementOptions = {
      bottom: 'bottom',
      left: 'left',
      top: 'top',
      right: 'right',
    };
    const placement = radios('placement', placementOptions, 'right', 'Knobs');
    const TooltipContent = (
      <div>
        this is tooltip content, this is tooltip content, this is tooltip content, this is tooltip content, this is
        tooltip content, this is tooltip content, this is tooltip content, this is tooltip content
      </div>
    );
    const _style = css`
      padding: 250px;
    `;

    const TooltipV2Component = () => {
      const [targetRef, setTargetRef] = useState();

      const handleEvent = target => {
        setTargetRef({ current: target });
      };

      return (
        <>
          <H3>TooltipV2 targeting to TextField Info</H3>
          <Description>
            Tooltip is binded into textfield component below, try to hover the info icon. Change Tab into the Story tab
            on the right to see detail implementation
          </Description>
          <div css={_style}>
            <TextField hasInfo onMouseEnterInfo={e => handleEvent(e.target)} />
            {targetRef && (
              <TooltipV2 placement={placement} targetRef={targetRef} trigger="hover">
                {TooltipContent}
              </TooltipV2>
            )}
          </div>
        </>
      );
    };
    return <TooltipV2Component />;
  },
  storyOptionsV2,
);

tooltipStories.add(
  'Tooltip Interactive',
  () => {
    const placementOptions = {
      bottom: 'bottom',
      left: 'left',
      top: 'top',
      right: 'right',
    };
    const placement = radios('Placement', placementOptions, 'right', 'Knobs');
    const trigger = radios('trigger', { hover: 'hover', click: 'click' }, 'hover', 'Knobs');
    const delay = object('delay', { show: 0, hide: 0 }, 'Knobs');
    const actions = object(
      'actions',
      [
        { text: 'Learn More', action: 'www.tokopedia.com' },
        { text: 'CTA HERE', action: () => alert('CTA HERE') },
      ],
      'Knobs',
    );
    const targetRef = useRef();

    const props = {
      targetRef,
      placement,
      trigger,
      delay,
      actions,
      onMouseEnter: action('onMouseEnter'),
      onMouseLeave: action('onMouseLeave'),
      onClick: action('onClick'),
    };

    return (
      <>
        <H3>Interactive</H3>
        <div css={_center}>
          <button className={_link} ref={targetRef}>
            Click Me
          </button>
          <TooltipInteractive {...props}>Make Tooltip as brief as possible. no 2 lines</TooltipInteractive>
        </div>
      </>
    );
  },
  storyOptionsV2,
);

// FOR DEVELOPER ONLY
// tooltipStories.add(
//   'PopupTrigger',
//   () => {
//     const placementOptions = {
//       bottom: 'bottom',
//       left: 'left',
//       top: 'top',
//       right: 'right',
//     };
//     const placement = radios('placement', placementOptions, 'right', 'Knobs');
//     const trigger = radios('trigger', { hover: 'hover', click: 'click' }, 'hover', 'Knobs');
//     const spacing = number('spacing', 12, { min: 0, max: 99 }, 'Knobs');
//     const targetRef = useRef();

//     return (
//       <>
//         <H3>Simple Popup</H3>
//         <div css={_center}>
//           <button className={_link} ref={targetRef}>
//             trigger Me
//           </button>
//           <PopupTrigger targetRef={targetRef} placement={placement} trigger={trigger}>
//             {props => <div style={{ padding: '8px', backgroundColor: 'rgba(42, 142, 213, 1)' }}>test</div>}
//           </PopupTrigger>
//         </div>
//       </>
//     );
//   },
//   storyOptionsV2,
// );
