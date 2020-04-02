import Header from './Header'
import SignInPage from './SignInPage'
import NotificationPage from './NotificationPage'
import SearchPage from './SearchPage'
import TokoSayaPage from './TokoSayaPage'

class HomePage {

	constructor() {
		this.header = new Header()
	}

	goToSignIn() {
		this.header.getSignInLink()
	}

	goToSearch() {
		this.header.getSearchLink()
	}

	goToTokoSaya() {
		this.header.getTokoSayaLink()
	}

	signIn() {
		const signIn = new SignInPage()
		return signIn
	}

	notification() {
		const notification = new NotificationPage()
		return notification
	}

	search() {
		const search = new SearchPage()
		return search
	}

	toko() {
		const toko = new TokoSayaPage()
		return toko
	}
	
}

export default HomePage