import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('My Login application', () => {
    it('should not login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('standard', 'secret_sauce')
        await expect(SecurePage.stayOnPage).toBeExisting()
     
    })

})

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(SecurePage.inventoryList).toBeExisting()
        await expect(SecurePage.inventoryList).toHaveTextContaining(
            'Sauce Labs Backpack')
    })

})

