interface User {
  id: number;
  username: string;
  email: string;
  role: "admin" | "user" | "guest";
  phon: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
}
