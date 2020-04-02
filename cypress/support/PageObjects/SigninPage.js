class SignInPage {

	fillPhoneNumber(value) {
		const field = cy.get('[style="margin-bottom:30px;"] > .inputText__inner > .inputText__input')
		field.clear()
		field.type(value)
		return this
	}

	fillPassword(value) {
		const field = cy.get('[style="margin-bottom:15px;"] > .inputText__inner > .inputText__input')
		field.clear()
		field.type(value)
		return this
	}

	submitCredentials() {
		const button = cy.get('.btn')
		button.click()
	}

	verifyLoggedIn(value) {
		const field = cy.get('[href="/user"] > .appNav__item__label')
		field.contains(value)
		return this
	}

	verifyLoginFailed(value) {
		const field = cy.get('form > p')
		field.contains(value)
		return this
	}

}

export default SignInPage