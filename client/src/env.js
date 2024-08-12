const prod = {
    API_URL: "https://project-shopping-cart-7fuw.onrender.com",
  }
  
  const dev = {
    API_URL: "http://localhost:5001/api",
  }
  
  export const config = process.env.NODE_ENV === "development" ? dev : prod