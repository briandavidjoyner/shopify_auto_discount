# shopify_auto_discount
A script to pull a coupon code from a URL and auto apply it during Shopify checkout
## Explination Of Functionality
This script accomplishes a few things
  1. Grabs a coupon code from the referring URL
  2. Adds the coupon code to the site cookie
  3. Checks the cookie on the cart page for a coupon code
  4. Creates an input field within the cart form
  5. Adds the coupon into the newly created cart form field
  
## How To Use
  1. Make sure the variables fit your site / desires
    1. URL Parameter (line 4 & line 25 & line 26)
    2. Cookie Expiration (line 10). If you are unfamiliar with JS cookie functions, [I recommend this article](https://www.sitepoint.com/how-to-deal-with-cookies-in-javascript/)
    3. Cart Form Element ID (line 15)
    4. Coupon Field Styles (line 15)
  2. After changing any code you need, be sure to add this to your Shopify theme
