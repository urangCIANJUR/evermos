import HomePage from '../support/pageObjects/HomePage'
const home = new HomePage()
const signIn = home.signIn()
const notification = home.notification()
const search = home.search()
const toko = home.toko()

import Chance from 'chance'
const chance = new Chance()

const phoneValid = '12233344445555'
const passwordValid = 'password'
const phoneInvalid = chance.phone({ formatted: false })
const passwordInvalid = chance.string()
const keyword = 'peci'
const tokoName = 'QA Testing 1'

describe('Authentication Test', () => {

	beforeEach(() => {
		home.goToSignIn()
	})

	it('sign in with correct credentials', () => {
		signIn
			.fillPhoneNumber(phoneValid)
			.fillPassword(passwordValid)
			.submitCredentials()
		signIn
			.verifyLoggedIn('Akun')
	})

	it('sign in with incorrect credentials: invalid phone number', () => {
		signIn
			.fillPhoneNumber(phoneInvalid)
			.fillPassword(passwordValid)
			.submitCredentials()
		signIn
			.verifyLoginFailed('Nomor ini belum terdaftar sebagai reseller')
	})

	it('sign in with incorrect credentials: invalid password', () => {
		signIn
			.fillPhoneNumber(phoneValid)
			.fillPassword(passwordInvalid)
			.submitCredentials()
		signIn
			.verifyLoginFailed('Nomor Telepon atau Kata Sandi anda salah!')
	})

	it('sign in with incorrect credentials: invalid phone number & password', () => {
		signIn
			.fillPhoneNumber(phoneInvalid)
			.fillPassword(passwordInvalid)
			.submitCredentials()
		signIn
			.verifyLoginFailed('Nomor ini belum terdaftar sebagai reseller')
	})

})

describe('Home Page Test', () => {

	beforeEach(() => {
		home.goToSignIn()
		signIn
			.fillPhoneNumber(phoneValid)
			.fillPassword(passwordValid)
			.submitCredentials()
	})

	it('open evermos & berikhtiar notification', () => {
		notification
			.openEvermosNotification()
		notification
			.openBerikhtiarNotification()
	})

	it('search item & sort item', () => {
		signIn
			.verifyLoggedIn('Akun')
		home.goToSearch()
		search
			.searchItem(keyword)
			.chooseFirstResult()
		search
			.sortByLowestPrice()
	})

})

describe('Toko Saya Page Test', () => {

	beforeEach(() => {
		home.goToSignIn()
		signIn
			.fillPhoneNumber(phoneValid)
			.fillPassword(passwordValid)
			.submitCredentials()
	})

	it('verify toko saya page', () => {
		signIn
			.verifyLoggedIn('Akun')
		home.goToTokoSaya()
		toko
			.verifyTokoSaya(tokoName)
	})
	
})