import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Demon Slayer Characters
  {
    email: "giyu@email.com",
    fullName: "Giyu Tomioka",
    password: "123456",
    profilePic: "https://i.ibb.co/zTtQc6S7/Giyu-Tomioka.jpg",
  },
  {
    email: "himejima@email.com",
    fullName: "Gyomei Himejima",
    password: "123456",
    profilePic: "https://i.ibb.co/pjBLMKtx/Gyomei-Himejima.jpg",
  },
  {
    email: "inosuke@email.com",
    fullName: "Inosuke Hashibira",
    password: "123456",
    profilePic: "https://i.ibb.co/3yyC3swS/Inosuke-Hashibira.jpg",
  },
  {
    email: "ubuyashiki@email.com",
    fullName: "Kagaya Ubuyashiki",
    password: "123456",
    profilePic: "https://i.ibb.co/DPRsRygc/Kagaya-Ubuyashiki.jpg",
  },
  {
    email: "rengoku@email.com",
    fullName: "Kyojuro Rengoku",
    password: "123456",
    profilePic: "https://i.ibb.co/ccqfqsqR/Kyojuro-Rengoku.jpg",
  },
  {
    email: "mitsuri@email.com",
    fullName: "Mitsuri Kanroji",
    password: "123456",
    profilePic: "https://i.ibb.co/sdfcYpTs/Mitsuri-Kanroji.jpg",
  },
  {
    email: "tokito@email.com",
    fullName: "Muichiro Tokito",
    password: "123456",
    profilePic: "https://i.ibb.co/Qj6cCgLB/Muichiro-Tokito.jpg",
  },
  {
    email: "muzan@email.com",
    fullName: "Muzan Kibutsuji",
    password: "123456",
    profilePic: "https://i.ibb.co/qMgkCjw8/Muzan-Kibutsuji.jpg",
  },
  {
    email: "nezuko.com",
    fullName: "Nezuko Kamado",
    password: "123456",
    profilePic: "https://i.ibb.co/XmPVPHy/Nezuko-Kamado.jpg",
  },
  {
    email: "iguro.com",
    fullName: "Obanai Iguro",
    password: "123456",
    profilePic: "https://i.ibb.co/84tj1y0t/Obanai-Iguro.jpg",
  },
  {
    email: "shinazugawa@email.com",
    fullName: "Sanemi Shinazugawa",
    password: "123456",
    profilePic: "https://i.ibb.co/gZx7h6jG/Sanemi-Shinazugawa.jpg",
  },
  {
    email: "tamayo@email.com",
    fullName: "Tamayo",
    password: "123456",
    profilePic: "https://i.ibb.co/9k77HX6C/Tamayo.jpg",
  },
  {
    email: "tanjiro@email.com",
    fullName: "Tanjiro Kamado",
    password: "123456",
    profilePic: "https://i.ibb.co/gZ3nMFHx/Tanjiro-Kamado.jpg",
  },
  {
    email: "yoriichi.com",
    fullName: "Yoriichi",
    password: "123456",
    profilePic: "https://i.ibb.co/8n5Z6yMj/Yoriichi.jpg",
  },
  {
    email: "zenitsu@email.com",
    fullName: "Zenitsu Agatsuma",
    password: "123456",
    profilePic: "https://i.ibb.co/0RXQJgJz/Zenitsu-Agatsuma.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();
