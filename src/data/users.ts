interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  role: "admin" | "user" | "guest" | "moderator";
  phone?: string;
}

export const users: User[] = [
  {
    id: 1,
    username: "john.doe",
    email: "john.doe@example.com",
    password: "pass123",
    role: "admin",
    phone: "1234567890",
  },
  {
    id: 2,
    username: "jane.doe",
    email: "jane.doe@example.com",
    password: "pass456",
    role: "user",
    phone: "0987654321",
  },
  {
    id: 3,
    username: "bob.smith",
    email: "bob.smith@example.com",
    password: "pass789",
    role: "moderator",
    phone: "1234567890",
  },
  {
    id: 4,
    username: "john.doe",
    email: "john.doe@example.com",
    password: "pass123",
    role: "guest",
    phone: "0987654321",
  },
  {
    id: 5,
    username: "jane.doe",
    email: "jane.doe@example.com",
    password: "pass456",
    role: "user",
    phone: "0987654321",
  },
  {
    id: 6,
    username: "bob.smith",
    email: "bob.smith@example.com",
    password: "pass789",
    role: "moderator",
    phone: "0987654321",
  },
  {
    id: 7,
    username: "john.doe",
    email: "john.doe@example.com",
    password: "pass123",
    role: "guest",
    phone: "0987654321",
  },
  {
    id: 8,
    username: "jane.doe",
    email: "jane.doe@example.com",
    password: "pass456",
    role: "user",
    phone: "0987654321",
  },
  {
    id: 9,
    username: "bob.smith",
    email: "bob.smith@example.com",
    password: "pass789",
    role: "moderator",
    phone: "0987654321",
  },
  {
    id: 10,
    username: "john.doe",
    email: "john.doe@example.com",
    password: "pass123",
    role: "guest",
    phone: "0987654321",
  },
  {
    id: 11,
    username: "jane.doe",
    email: "jane.doe@example.com",
    password: "pass456",
    role: "user",
    phone: "0987654321",
  },
  {
    id: 12,
    username: "bob.smith",
    email: "bob.smith@example.com",
    password: "pass789",
    role: "moderator",
    phone: "0987654321",
  },
];
