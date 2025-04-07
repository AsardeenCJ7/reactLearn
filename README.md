# 🚀 My React Learning Journey

Welcome to my React practice repository! This is where I explore, experiment, and enhance my skills with React — one of the most powerful libraries for building user interfaces.

---

## 📚 Completed Projects

✅ Beginner Component Projects  
✅ Conditional Rendering Examples  
✅ Props and State Practice  
✅ Button Click Handlers  
✅ Dynamic Course Cards  
✅ JSON Data Integration  
✅ Image Rendering from `public/` and `src/assets`

---

## 🔁 Current Focus: Practice & Reminders

I'm currently diving deeper into:

- 🔄 **useState**, **useEffect** — mastering React Hooks
- 📦 Working with **JSON data** from a local server
- 📸 Loading and managing **images dynamically**
- 🧠 Building **reminder-based apps** (To-Dos, Course Status, Purchases)
- ♻️ Handling conditional rendering and state changes effectively
- 🚫 Understanding `props.hide` and conditional layouts

---

## 📌 Goals

- ✅ Build 10+ small projects
- ⏱ Create a working Reminder App
- 🧪 Practice all major hooks
- 🎯 Deploy one complete React project
- 🧩 Understand component reusability deeply

---

## 📂 Folder Structure

```bash
reactio/
├── reactLearn/
│   ├── src/
│   │   ├── assets/
│   │   │   ├── img1.jpg
│   │   │   ├── img2.jpg
│   │   ├── components/
│   │   │   ├── Course.jsx
│   │   │   ├── Reminder.jsx
│   │   ├── App.jsx
│   ├── public/
│   │   ├── dummyData.json
```



# 🧠 Understanding Custom Hooks and Destructuring in React

## 🎯 Overview

This guide explains how to correctly use a custom React hook (`useFetch`) and how **destructuring** works when the hook returns multiple values.

---

## 🧪 What is `useFetch`?

`useFetch` is a **custom hook** that performs the following tasks:

- Fetches course data from a local server (`json-server`)
- Manages the loading state (`dummy`)
- Handles errors if the fetch fails
- Returns the fetched data (`courses` and `posts`)

---

## ⚠️ Problem: Incorrect Destructuring

In the current code:

```js
const [dummy, courses, error, posts] = useFetch(); ❌

custom hooks return -> 
return [courses, dummy, posts, error]; ✅

This mismatch causes:

dummy to incorrectly contain courses

courses to become error

error to become posts

and so on...

🧨 Result:
Data is not displayed correctly.

Logic like if (!courses) doesn't behave as expected.

✅ Solution 1: Match the Destructuring Order (Array)
Make sure the variables match the order of the returned values:

// In useFetch.js
return [courses, dummy, posts, error];

// In CourseList.js
const [courses, dummy, posts, error] = useFetch(); ✅


✅✅ Solution 2: Use Object Destructuring (Best Practice)
Instead of returning an array, return an object from useFetch:

// In useFetch.js
return { courses, dummy, posts, error };

📝 Summary Table
Return Type	Example	How to Destructure
Array	[a, b, c]	const [a, b, c] = func();
Object	{a, b, c}	const {a, b, c} = func(); ✅ Recommended

Always be cautious with array destructuring – order must match!
Use object destructuring for better code clarity.
Helpful when returning multiple values from custom hooks.