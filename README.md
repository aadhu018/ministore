# MiniStore

A full-stack e-commerce application built with **Next.js** and **Stripe**.

MiniStore is a small e-commerce application that demonstrates a basic product listing and checkout flow.

The goal of this project was to practice building a modern full-stack React application using Next.js, and to understand how real-world payment flows are handled securely with Stripe.

The app uses the Next.js App Router to separate client and server concerns. Client components handle UI and user interactions, while server-side API routes are used to create Stripe checkout sessions and keep sensitive logic off the client.

## Features

* Product listing and checkout flow
* Secure payments handled with Stripe
* Server-side API routes for creating checkout sessions
* Client–server data flow using `fetch`
* Modern Next.js App Router structure

## Tech Stack

* **Next.js** (App Router)
* **Stripe** (Payments)
* **JavaScript**

## What I Learned

* How client components communicate with server-side API routes
* Using `GET` and `POST` requests with `fetch` to exchange data
* Keeping sensitive logic (Stripe keys, checkout creation) on the server
* Structuring a project using the Next.js App Router

## Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Notes

This project was built as part of a guided learning process to better understand Next.js full-stack patterns and Stripe integration. The focus was on learning and reasoning about the code rather than building the architecture entirely from scratch.
