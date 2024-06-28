describe('Saucedemo login test', () => {
    it('Successful login', async () => {
        await browser.url('https://www.saucedemo.com/')

        const usernameTextbox = await browser.$("#user-name")
        const passwordTextbox = await browser.$("#password")
        const loginButton = await browser.$("#login-button")
        
        const cartIcon = await browser.$("#shopping_cart_container")
        const productList = await browser.$("#inventory_container")
        const sortIcon = await browser.$('.product_sort_container')

        const addToCartIcon = await browser.$("#add-to-cart-sauce-labs-backpack")
        const qtyLabel = await browser.$('.cart_quantity_label')
        const descriptionLabel = await browser.$('.cart_desc_label')
        const cartItemLabel = await browser.$('.cart_item_label')
        const checkoutButton = await browser.$("#checkout")

        //login page
        await usernameTextbox.setValue("standard_user")
        await passwordTextbox.setValue("secret_sauce")
        console.log(await loginButton.getValue())
        await loginButton.click()

        await browser .pause(5000)

        //dashboard page
        await expect(cartIcon). toBeDisplayed()
        await expect(productList). toBeDisplayed()
        await expect(sortIcon). toBeDisplayed()

        await browser .pause(5000)

        //add to cart
        await addToCartIcon.click()

        await browser .pause(5000)

        await cartIcon.click()

        await browser .pause(5000)

        //cart page
        await expect(qtyLabel). toBeDisplayed()
        await expect(descriptionLabel). toBeDisplayed()
        await expect(cartItemLabel). toBeDisplayed()
        await expect(checkoutButton). toBeDisplayed()




    });
    
});