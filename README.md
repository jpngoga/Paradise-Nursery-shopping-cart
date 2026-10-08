<<<<<<< HEAD
# Paradise-Nursery-shopping-cart
shopping cart application for an online plant shop called Paradise Nursery
For your final project, you will create the front end of a "Paradise Nursery" shopping application. The application interface will allow you to browse a variety of houseplants and add them to a shopping cart. The shopping cart feature lets you see all your items and their total cost. Your shopping cart should also allow you to adjust the number of items in the cart before checkout.

Completing the practice project will help you with the final project. We designed it so that many of the components, code, and skills for that project can be transferred to this final project with some updates.

Your application should have three pages: a landing page, a product listing page, and a shopping cart page. See the lab for details on the specific functionality requirements on each page. The product walkthrough video also demonstrates how your completed project should look and behave.

Landing page
The landing page should have the following elements:

A background image

A paragraph about the company

The company name

A Get Started button linking to the product page

The product listing page should have at least six houseplants for sale, organized into three or more categories. Each plant should have the following details about it:

A thumbnail image

Plant name

Price

An Add to Cart button

Product listing page
The product listing and shopping cart pages should have a header. The header should have a shopping cart icon with a number that updates dynamically, displaying the total number of items in the cart. The header should also contain navigation to either of the other pages, depending on which page you are on.

Shopping cart page
The shopping cart page displays all the details about the items in it. It should prominently display the total number of plants in the cart, the total cost of all items in the cart, a continue shopping button, and a checkout button.

On this page, you should be able to see each type of plant in the shopping cart, including its thumbnail and name. You should also display its unit price and the total of all the items in the cart. You should provide an increase or decrease button to change the number of that plant type in the cart, which also updates the shopping cart icon in the header and the total number of items in the cart. Finally, you should also include a delete button for each type of plant in the cart.

You must store your project code in a public GitHub repository. Also, you will use GitHub Pages to deploy your app.

Evaluation Criteria – 50 Points
You can submit your project deliverables through AI-Graded Submission and Evaluation.  When you do the assessment, you will be redirected to an AI tool where you can upload your deliverables, which may include URLs, terminal outputs, code snippets, or screenshots. You will then receive an AI-generated grade that will automatically reflect on your Coursera progress page.

If you encounter any grading problems, please reach out to the Course Team through the Discussion Forums.

Please find the details of the Grading Criteria below:

Submit the public GitHub URL of the README.md file containing the project name details.(2 points)

Submit the public GitHub URL of AboutUs.jsx, which includes details about the company.(1 point)

Submit the GitHub URL of App.css, which includes the code implementing the background image for the Paradise Nursery landing page.(1 point)

Submit the public GitHub URL of App.jsx, which includes the Paradise Nursery landing page with the company name and a "Get Started" button.(3 points)

Submit the public GitHub URL of CartSlice.jsx, which includes the code implementing the Redux slice for the shopping cart.(4 points)

Submit the public GitHub URL of ProductList.jsx.(16 points)Your implementation must include the following functionalities:

Display at least six unique houseplants per category, each with a thumbnail, name, and price. (2)

Group the plants into at least three categories.(2)

Add the product to the shopping cart (2)

Disable the button after the product is added (2)

Update and display the shopping cart quantity (2)

Include a navbar that appears on both Product Listing and Cart pages (2)

Navbar provides navigation links to all three pages: Home, Plants, and Cart (2)

Display a cart icon showing the total number of items dynamically(2)

Submit the public GitHub URL of CartItem.jsx, displaying the Shopping Cart page.(23 points)Your implementation must include the following functionalities:

Show the total cart amount of the plants(2)

Show the total cost for each plant in the cart (2)

Each plant in the cart should display a thumbnail, name, and unit price (6)

Include button to increase the quantity, updating the cart correctly (4)

Include button to decrease the quantity, updating the cart correctly (4)

Include a delete button for each item to remove it from the cart (2)

Include a checkout button that shows "Coming Soon" or a similar message (1)

Include a continue shopping button that links back to the product listing page (2)

GitHub Link (6 points)
GitHub repository public URL: 2 points

Redux-related files and code: 4 points

Deployed app (44 points)
Landing Page (5 points)

Background image: 1 point

Paragraph about the company: 1 point

Company name: 1 point

Get Started button linking to the product listing page: 2 points

Product Listing Page (9 points)

Six unique houseplants for sale, each displaying thumbnail, name, and price: 2 points

Group the plants into at least three categories on the page: 1 point

After selecting it, the shopping cart icon increases by one.

After selecting it, the button becomes disabled.

After selecting it, the appropriate plant gets added to the shopping cart.

Header (7 points)

Displays on both the product listing page and shopping cart page: 2 points

A shopping cart icon with a value that displays the total number of items in the cart: 3 points

Navigation to either of the other pages: 2 points

Shopping Cart Page (23 points)

The total number of plants in the cart: 2 points

The total cost of all items in the cart: 2 points

Each plant type in the cart displays a thumbnail, name, and unit price: 6 points

Increments the number of items in the cart by one each time it`s clicked and updates all appropriate values.

Decrease button for each plant type in the cart: 4 points

Decrements the number of items in the cart by one each time it`s clicked and updates all appropriate values.

A delete button: 2 points

A checkout button (displays the message "Coming Soon" or similar):1 point

A continue shopping button that links to the product listing page: 2 points
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
>>>>>>> c5e1abf (Create Paradise Nursery React shopping cart)
