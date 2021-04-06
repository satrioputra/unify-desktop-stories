import React from 'react';
import { css } from 'react-emotion';

import { storiesOf } from '@storybook/react';
import { withKnobs, number, boolean, radios, text } from '@storybook/addon-knobs';
import Carousel from 'unify-react-desktop/build/Carousel';

const carouselStories = storiesOf('Compositions/Carousel', module);
carouselStories.addDecorator(withKnobs);
/**
 * Notes
 */
import README from 'unify-react-desktop/build/Carousel/README.md';

/**
 * Other(s)
 */
const storyOptions = {
  notes: {
    markdown: README,
  },
};

carouselStories.add(
  'Default',
  () => {
    const optionLimitNumberKnobs = {
      min: 0,
      max: 999,
      step: 1,
    };
    const optionInactiveScale = {
      'Transform Scale Normal': '1',
      'Transform Scale 0.9': '0.9',
    };
    const optionTheme = {
      Default: 'default',
      PDP: 'pdp',
      OS: 'os',
      None: 'none',
    };
    const autoPlay = number('autoPlay', 2000);
    const gutter = number('gutter', 5, optionLimitNumberKnobs);
    const inactiveScale = radios('inactiveScale', optionInactiveScale, '0.9');
    const infinite = boolean('infinite', true);
    const peekLeft = text('peekLeft', '100px');
    const peekRight = text('peekRight', '100px');
    const showNav = boolean('showNav', true);
    const showPaging = boolean('showPaging', true);
    const slidesToShow = number('slidesToShow', 1);
    const slidesToScroll = number('slidesToScroll', 1);
    const theme = radios('Theme', optionTheme, 'default');

    const pagingWrap = css`
      margin: 0;
      left: ${((parseInt(peekLeft) + parseInt(peekRight)) / 2).toString() + 'px'};
      height: 36px;

      & > li {
        display: flex;
      }
    `;
    return (
      <div style={{ padding: '30px', width: '750px', margin: 'auto' }}>
        <Carousel
          autoPlay={autoPlay}
          gutter={gutter}
          inactiveScale={inactiveScale}
          theme={theme}
          infinite={infinite}
          peekLeft={peekLeft}
          peekRight={peekRight}
          pagingWrapClass={pagingWrap}
          showNav={showNav}
          showPaging={showPaging}
          slidesToShow={slidesToShow}
          slidesToScroll={slidesToScroll}
          items={[
            <img
              style={{ maxWidth: '100%', borderRadius: '12px' }}
              src="https://ecs7.tokopedia.net/img/cache/1242/banner/2019/8/29/20723472/20723472_9c1209b0-9d3d-40c9-b9d9-ee16093e2f49.jpg"
              alt="image1"
            />,
            <img
              style={{ maxWidth: '100%', borderRadius: '12px' }}
              src="https://ecs7.tokopedia.net/img/cache/1242/banner/2019/8/27/20723472/20723472_8311ac42-91ca-4b0c-ad21-31e7ffb84b49.jpg"
              alt="image2"
            />,
            <img
              style={{ maxWidth: '100%', borderRadius: '12px' }}
              src="https://ecs7.tokopedia.net/img/cache/1242/banner/2019/8/29/20723472/20723472_53038fc6-6249-44f6-b88b-9f63a446c8d3.jpg"
              alt="image3"
            />,
            <img
              style={{ maxWidth: '100%', borderRadius: '12px' }}
              src="https://ecs7.tokopedia.net/img/cache/1242/banner/2019/8/29/20723472/20723472_eca2dd17-c99e-4e2b-b805-930d772e0f68.jpg"
              alt="image4"
            />,
            <img
              style={{ maxWidth: '100%', borderRadius: '12px' }}
              src="https://ecs7.tokopedia.net/img/cache/1242/banner/2019/9/2/20723472/20723472_f22b97d9-f43e-4756-85fc-7722bbfe1a18.jpg"
              alt="image5"
            />,
            <img
              style={{ maxWidth: '100%', borderRadius: '12px' }}
              src="https://ecs7.tokopedia.net/img/banner/2020/3/18/85531617/85531617_8f5e29ea-a177-4692-9dee-c19731d43174.jpg"
              alt="image6"
            />,
            <img
              style={{ maxWidth: '100%', borderRadius: '12px' }}
              src="https://ecs7.tokopedia.net/img/banner/2020/3/17/85531617/85531617_0e97c79b-5e59-4a05-88df-ec2aec187f1e.jpg"
              alt="image7"
            />,
          ]}
        />
      </div>
    );
  },
  storyOptions,
);
