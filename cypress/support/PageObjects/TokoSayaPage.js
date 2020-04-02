class TokoSayaPage {

	verifyTokoSaya(value) {
		const tokoSaya = cy.get('.storeFront__head__anchor')
		tokoSaya.contains(value)
		return this
	}

}

export default TokoSayaPage