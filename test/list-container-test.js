require('babel-polyfill');
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { should, expect } from 'chai';

import ListContainer from '../js/components/ListContainer';

describe('<ListContainer />', () => {
	it('should render the list', () => {
		const renderer = TestUtils.createRenderer();
        renderer.render(<ListContainer />);
        const result = renderer.getRenderOutput();
        expect(result.props.listTitle).to.equal('List 1');
        expect(result.props.cards).to.be.an('array');
        expect(result.props.cards.length).to.equal(3);
        expect(result.props.cards[1]).to.equal('Card 2');
        expect(result.props.text).to.be.a('String');
        expect(result.props.text).to.equal('');
        // console.log(result.props.listTitle);
	});
});