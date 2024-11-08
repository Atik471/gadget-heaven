# Project Name: **Gadget Hub Ecommerce Website**

A responsive, feature-rich single page e-commerce application (SPA) built with React, Vite, and Tailwind CSS. The project includes features for adding products to cart and wishlist, sorting by price, product categorization, and contact form submission.

- **Live Website**: [Visit the Site on Surge](#)
- **Requirement Document**: [Requirement Document Link](https://github.com/ProgrammingHero1/B10-A8-gadget-heaven/blob/main/Batch-10_Assignment-08.pdf)

---

## 📑 Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Fundamental React Concepts](#fundamental-react-concepts)
5. [Data Management](#data-management)
6. [Installation and Setup](#installation-and-setup)

---

## Overview

This project is a responsive single-page application (SPA) for an e-commerce web application to browse, filter, and manage products. Each product has details like price, category, and ratings, and users can add products to a wishlist or cart. The app also includes a statistics page with product data visualization with a line chart, and a contact page to collect user messages.

## Features

- **Responsive Design**: Works seamlessly on mobile and desktop devices.
- **Cart & Wishlist Management**: Add or remove products to/from the cart and wishlist.
- **Product Sorting**: Sort products in the cart by price.
- **Detailed Product Views**: View individual product details and ratings.
- **Statistics Page**: Visual representation of product prices using line charts (Recharts).
- **Contact Form**: Users can submit and view previous messages, stored in local storage.
- **Error Handling**: Includes a 404 Error Page for non-existent routes.

## Technologies Used

- **React** (Components, State, and Lifecycle Management)
- **Tailwind CSS** for responsive and modern design
- **Vite** for optimized project management
- **Git** and **npm** for version control and dependency management
- **Surge** for deployment

## Fundamental React Concepts

This project makes use of a range of React fundamental concepts like:

- **React Router**: `NavLink`, `useLocation`, `useNavigate`, and `useParams` for dynamic routes in a SPA(single page application) without reloading the page.
- **Context API**: Global state management for cart and wishlist.
- **PropTypes**: Used for prop validation.
- **Hooks**: 
  - `useState` and `useEffect` for managing local state and side effects.
  - `useRef` for managing component references.
  - `useLocation` and `useParams` for navigation and parameterized routes.
- **Conditional Rendering** and **Reusable Components** for UI flexibility and code reuse.
- **React Libraries**: 
  - **React Icons** for adding intuitive, scalable icons.
  - **Axios** for making API calls.
  - **Recharts** for dynamic data visualization on the statistics page.
  - **React Toastify** for notifying users on actions like adding/removing items.

## Data Management

- **Context API**: Used for managing cart and wishlist items, enabling access to cart list and wish list across the application without prop drilling.
- **Local Storage**: Persisted user messages on the Contact Us page, allowing users to view previously submitted messages.
