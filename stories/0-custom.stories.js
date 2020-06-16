// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import ReactWindowList from './src/custom/react-window/list';
import ReactVirtualizedList from './src/custom/react-virtualized/list';
import { getQuotes } from './src/data';
import ReactWindowBoard from './src/custom/react-window/board';
import ReactVirtualizedBoard from './src/custom/react-virtualized/board';
import ReactVirtualizedWindowList from './src/custom/react-virtualized/window-list';

storiesOf('Custom: react-window', module)
  .add('list', () => <ReactWindowList initial={getQuotes(1000)} />)
  .add('board', () => <ReactWindowBoard />);

storiesOf('Custom: react-virtualized', module)
  .add('list', () => <ReactVirtualizedList initial={getQuotes(1000)} />)
  .add('board', () => <ReactVirtualizedBoard />)
  .add('window list', () => (
    <ReactVirtualizedWindowList initial={getQuotes(1000)} />
  ));
