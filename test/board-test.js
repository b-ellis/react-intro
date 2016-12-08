require('babel-polyfill');
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { should, expect } from 'chai';

import Board from '../js/components/board';

describe('<Board />', () => {
	it('should render out the board', () => {
		const renderer = TestUtils.createRenderer();
        renderer.render(<Board />);
        const result = renderer.getRenderOutput();
        const board = result.props;
        expect(board.className).to.equal('board');
        expect(board.children).to.be.an('array');
        expect(board.children[0].type).to.equal('h1');
        expect(board.children[1].type).to.be.an('function');
	});
});