# Kewi Store - Cypress Automation Testing

Automated end-to-end tests for [Kewi Store](https://kewi.ps) using Cypress. This project covers UI testing, API mocking, and data-driven testing for the main user flows of the application.

---

## Prerequisites

- Node.js v20+
- npm

---

## Installation

```bash
npm install
```

---

## Running the Tests

### Open Cypress UI (interactive mode)
```bash
npx cypress open
```

### Run all tests in headless mode
```bash
npx cypress run
```

### Run a specific test file
```bash
npx cypress run --spec "cypress/e2e/home.cy.js"
```

---

## Test Flows Covered

### 1. `home.cy.js` - Home Page
Tests the main homepage to ensure everything loads and works correctly.
- **verify homepage sections**: Checks that all images, navigation links, and key sections are visible and loaded properly.
- **Test on language**: Clicks the language toggle button and verifies the page switches to Arabic successfully.
- **Test on dark mode**: Clicks the dark mode button and verifies the `dark` class is applied to the HTML element.

---

### 2. `product.cy.js` - Product Categories
Tests that the user can browse products by category and open individual product pages.
- **verify bags category**: Navigates to the bags category, finds COACH TOTEBAG, clicks it, and verifies the product detail page loads.
- **verify wallets category**: Same flow for the wallets category using LV Passport wallet.
- **verify Belts category**: Same flow for belts using FENDI BELT.
- **verify Perfume category**: Same flow for perfume using MEMWA MINI 113.
- **verify combs category**: Same flow for combs using a specific comb product.

---

### 3. `cart.cy.js` - Add to Cart
Tests adding different types of products to the shopping cart.
- **AddToCart**: Navigates to the bags category, opens COACH TOTEBAG product page, and clicks "Add to Cart".
- **AddToCart1**: Navigates to wallets category, opens Fendi wallet, clicks "Add to Cart", and verifies the success message "Added to cart" appears.
- **AddToCart2**: Finds a hair clip product from the products page, adds it to cart, and verifies the success message appears.

---

### 4. `deletefromcart.cy.js` - Delete from Cart
Tests removing products from the shopping cart.
- **delete from cart**: Adds a single product (Fendi clutch) to the cart, navigates to the cart page, and clicks the delete button to remove it.
- **delete from cart multiple products**: Adds two products (Chanel classic flab 25 and Lady Dior) to the cart, then deletes them one by one and verifies each product disappears from the cart after deletion.

---

### 5. `checkout.cy.js` - Checkout Process
Tests completing an order through the full checkout flow.
- **Checkout Process cash on delivery**: Adds a product to the cart, opens the cart, clicks Checkout, fills in the delivery form (name, phone, city, region, delivery type), selects "Cash on Delivery" as the payment method, and places the order.
- **Checkout Process pay with visa**: Same flow as above but selects "Visa" as the payment method instead.

---

### 6. `apitesting.cy.js` - API Mocking
Tests how the UI behaves when the API returns different responses. Uses `cy.intercept()` to intercept API calls and return custom fixture data instead of hitting the real server. This technique is called **mocking** and is useful for testing edge cases without depending on real data.
- **first mock**: Intercepts both the products and categories API calls and returns mocked fixture data, verifying the page loads with the mocked content.
- **second mock - item soldout**: Intercepts the products API and returns a fixture where `isSoldOut: true`. Verifies that the UI correctly displays the "sold out" badge on the product card.
- **third mock - empty products list**: Intercepts the products API and returns an empty array `[]`. Verifies that no product cards are rendered on the page, testing how the UI handles an empty state.

---

### 7. `data-driven.cy.js` - Data Driven Testing
Instead of writing a separate test for each scenario, data-driven testing runs the same test logic multiple times with different input data using a `forEach` loop over a test data array. This keeps the code clean and avoids repetition.

- **Sign Up - phone validation**: Runs the sign up flow twice with different phone numbers:
  - `0555` (less than 10 digits) → expects the error message "shorter than the minimum allowed length" to appear.
  - `0599353520` (10 digits) → expects no error message to appear.

- **Login - credentials validation**: Runs the login flow twice with different credentials:
  - Valid phone and password → expects no error message.
  - Invalid phone and wrong password → expects the error message "Invalid phone or password" to appear.

---

## Project Structure

```
cypress/
├── e2e/
│   ├── apitesting.cy.js
│   ├── cart.cy.js
│   ├── checkout.cy.js
│   ├── deletefromcart.cy.js
│   ├── home.cy.js
│   ├── product.cy.js
│   └── data-driven.cy.js
├── fixtures/
│   ├── products.json
│   ├── soldout-product.json
│   ├── empty-products.json
│   └── categories.json
├── pages/
│   └── HomePage.js
└── support/
    ├── commands.js
    └── e2e.js
```

---

## Custom Commands

| Command | Description |
|---------|-------------|
| `cy.LoginToApp()` | Logs in with valid credentials using `cy.session()` to cache the login state and avoid re-logging in before every test |
| `cy.addToCart(productName)` | Finds a product card by its name and clicks the add to cart button |
| `cy.AddToCart()` | Clicks the shopping cart icon in the navigation bar |
| `cy.checkout()` | Completes the full checkout process by filling in delivery details and placing the order |

---

## Configuration

Base URL: `https://kewi.ps`  

## tutorial video

https://drive.google.com/file/d/1kB3a3a1AGIh3fbYNL4f62zOl6m1sil0O/view?usp=sharing