# 🚀 DevStack

> Build Your Ideal Development Stack

DevStack is a modern web application that helps developers explore and compare different technologies and build their ideal development stack for their next project.

You can browse technologies from different categories such as Frontend, Backend, Database, and Tools, check their details, and add your preferred technologies to your personal stack.

---

## ✨ Features

### 1. 🔍 Explore Technologies

Browse different development technologies and explore useful information such as:

- Technology name
- Category
- Description
- Difficulty level
- Rating
- Technology badge

### 2. 🧩 Build Your Own Stack

Add your favorite technologies to your personal development stack and easily see which technologies you have selected for your project.

### 3. 📱 Responsive Design

DevStack is fully responsive and works smoothly across different screen sizes, including:

- 📱 Mobile
- 💻 Tablet
- 🖥️ Desktop

---

## 🛠️ Technologies Used

This project was built using the following technologies:

- **React.js** – Frontend library
- **TypeScript** – Type-safe JavaScript
- **Tailwind CSS** – Styling and responsive design
- **DaisyUI** – UI components
- **Vite** – Development and build tool

---

## 📸 Project Overview

DevStack provides a clean and modern interface where developers can explore technologies and create a personalized development stack.

### Main Sections

- 🏠 Hero / Banner Section
- 💻 Technology Cards
- 🧩 Selected Stack
- 📱 Responsive Navigation
- 🔗 Footer

---

## 🎯 Project Goal

The main goal of DevStack is to make it easier for developers to discover technologies and organize the tools they want to use in their next project.





---

# 📚 React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript or TypeScript.

It makes React code easier to read and helps us create UI components in a simple way.

---

## 2. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component. Props are read-only.

**State** is used to store and manage data that can change inside a component.

In simple words:

- **Props →** Data comes from the parent.
- **State →** Data is managed inside the component.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook is used to create and manage changing data inside a React component.

In this project, I used `useState` to manage the selected technologies in the user's development stack.

For example:

```tsx
const [selectedStack, setSelectedStack] = useState<Icard[]>([]);
