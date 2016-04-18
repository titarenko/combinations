'use strict'

module.exports = getCombinations

function getCombinations (spec) {
	let fields = Object.getOwnPropertyNames(spec).map(p => ({ name: p, values: spec[p] }))
	return iterate(0)
	function iterate (index) {
		let field = fields[index]
		if (!field) return []
		let thisLevel = field.values.map(v => ({ [field.name]: v }))
		let deeperLevels = iterate(index + 1)
		return !deeperLevels.length
			? thisLevel
			: flatten(thisLevel.map(t => deeperLevels.map(d => Object.assign({}, t, d))))
	}
}

function flatten (it) {
	return Array.prototype.concat.apply([], it)
}
