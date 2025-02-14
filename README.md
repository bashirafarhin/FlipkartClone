# Flipkart Clone

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [License](#license)

## Overview
This is a clone of the original [Flipkart app](https://www.flipkart.com/).
![Image](https://github.com/user-attachments/assets/d33aa56b-667c-4fd6-b25e-471be153c074)

## Features
- Authentication using local login
- Authorization using cookies
- Forgot password functionality
- Search products
- Filter products
- Payment integration using Razorpay
- Email functionality
- Leave reviews on products
- Add to cart and wishlist

## Tech Stack Used
### Frontend
- React
- React Router DOM
- Redux
- Axios
- React MUI

### Backend
- Node.js
- Express
- MongoDB
- Cloudinary
- Nodemailer
- Razorpay

## Installation

#### Start Frontend
1. Clone the Repository
```bash
git clone https://github.com/bashirafarhin/FlipkartClone.git
```

2. Navigate to the Project Directory
```bash
cd FlipkartClone/client
```
3. Install Frontend Dependencies
```bash
npm install
```

4. Configure Frontend Environment Variables
- Create a `.env` file in the client directory.
- Copy the contents from `SampleEnvFile.txt` present in the client folder and fill it with your credentials.

5. Start Frontend Development Server
```bash
npm run dev
```
The frontend will run on `http://localhost:5173`.

#### Start Backend

1. On a new terminal, navigate to the server directory.
```bash
cd keeper/server
```

2. Install Backend Dependencies
```bash
npm install
```

3. Configure Backend Environment Variables
- Create a `.env` file in the server directory.
- Copy the contents from `SampleEnvFile.txt` present in the server folder and fill it with your credentials.

4. Start Backend Server
```bash
nodemon server.js
```
The backend server will run on `http://localhost:3000`.

## Environment Variables

#### Client
```env
VITE_BACKEND_URL=
VITE_RAZORPAY_KEY_ID=
```

#### Server
```env
PORT=300
NODE_ENV=
MONGO_URI=
CLOUDINARY_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
SENDGRID_API_KEY=
JWT_SECRET=
JWT_EXPIRE=
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
ADMIN_EMAIL=
FRONTEND_URL=http://localhost:5173
```