class SearchPage {

	searchItem(value) {
		const field = cy.get('.appHeading__search__input')
		field.type(value)
		return this
	}

	chooseFirstResult() {
		const firstResult = cy.get(':nth-child(2) > .result')
		firstResult.click()
	}

	sortByLowestPrice() {
		const sort = cy.get('.appToolbar__actions > :nth-child(1)')
		sort.click()
		const lowestPrice = cy.get('.productSort__lists > :nth-child(5)')
		lowestPrice.click()
		const save = cy.get('.productSort__panel > .appLayoutHeading > .appLayoutHeading__panel > .appLayoutHeading__actions--right')	
		save.click()
	}
	
}

export default SearchPage