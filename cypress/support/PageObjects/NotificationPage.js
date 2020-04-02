class NotificationPage {

	openEvermosNotification() {
		const notif = cy.get('[href="/notification"] > .appHead__button__icon > span')
		notif.click()
	}

	openBerikhtiarNotification() {
		const notif = cy.get('[href="/notification?app=2"]')
		notif.click()
	}

}

export default NotificationPage