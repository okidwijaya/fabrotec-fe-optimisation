# 🛍 Product Catalog Application (Next.js + TypeScript)

This project is a product catalog application built using **Next.js (App
Router)** and **TypeScript**.\
The application displays products retrieved from a RESTful API and
provides filtering, sorting, and detailed product pages.

------------------------------------------------------------------------

## 🚀 Features

### Product List Page

-   Fetch products from REST API
-   Display product image, title, description, and price
-   Filter products by category
-   Sort products by price (Ascending / Descending)

### Product Detail Page

-   Image carousel
-   Title and description
-   Price display
-   Availability badge (In Stock / Out of Stock)

------------------------------------------------------------------------

## 🌐 API Source

Data is retrieved from: https://dummyjson.com/products

API Documentation: https://dummyjson.com/docs/products

------------------------------------------------------------------------

## 🧱 Tech Stack

-   Next.js (App Router)
-   TypeScript
-   React Server Components
-   Next.js Image Optimization

------------------------------------------------------------------------

## 📁 Project Structure

src/ ├── app/ │ ├── page.tsx \# Product list page │ └──
product/\[id\]/page.tsx \# Product detail page │ ├── components/ │ ├──
ProductCard.tsx │ └── ProductCarousel.tsx │ ├── services/ │ └──
product.service.ts \# API logic layer │ ├── types/ │ └── product.ts

------------------------------------------------------------------------

## ⚙️ Architecture Decisions

### ✅ Service Layer

API logic is separated into a service layer for better maintainability
and scalability.

## 🧪 Running the Project

Install dependencies:

npm install

Start development server:

npm run dev

Open:

http://localhost:3000

## 👨‍💻 Author

Built as a technical assessment project using modern Next.js best
practices.
