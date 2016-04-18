'use strict'

const combinations = require('./')
const should = require('should')

describe('combinations', () => {
	it('should generate combinations according to spec', () => {
		let c = combinations({
			field_a: [1, 2, 3],
			field_b: ['a', 'b']
		})
		c.should.have.lengthOf(6)
		c[0].should.eql({
			field_a: 1,
			field_b: 'a'
		})
		c[4].should.eql({
			field_a: 3,
			field_b: 'a'
		})
		c[5].should.eql({
			field_a: 3,
			field_b: 'b'
		})
	})
})