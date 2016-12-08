require('babel-polyfill');
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { should, expect } from 'chai';

import Card from '../js/components/card';

describe('<Card />', () => {
	it('should render a card component', () => {
		const renderer = TestUtils.createRenderer();
        renderer.render(<Card />);
        const result = renderer.getRenderOutput();
        var card = result.props;
        expect(card.className).to.equal('card');
        expect(card.children).to.have.property('key');
        expect(card.children.type).to.equal('h3');
	});
});