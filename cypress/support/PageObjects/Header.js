class Header {
	
	getSignInLink() {
		cy.visit('/login')
		return
	}

	getSearchLink() {
		cy.visit('/search')
		return
	}

	getTokoSayaLink() {
		cy.visit('/my-store')
		return
	}
	
}

export default Header