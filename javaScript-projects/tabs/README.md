# Simple Tabs Project

## Description

This project is designed to introduce basic DOM manipulation and event handling in JavaScript.  
The goal is to create a simple tab component using **HTML**, **CSS**, and **JavaScript**.

The page includes four tabs:
- First Tab
- Second Tab
- Third Tab
- Fourth Tab

By default, the **first tab is active**. When the user clicks on another tab, the current tab content is hidden and the selected tab content is displayed.

---

## Features

- Four clickable tabs.
- First tab active by default.
- Only one content panel visible at a time.
- Smooth and simple tab switching using JavaScript.
- Responsive and clean layout.

---

## Requirements

To complete this exercise, you should:

1. Create a tab interface with four tabs.
2. Show the first tab content when the page loads.
3. Hide the other tab contents by default.
4. Switch the active tab and visible content when a tab is clicked.

---

## Technologies Used

- HTML
- CSS
- JavaScript

---

## How It Works

- Each tab button is linked to a specific content section.
- When a tab is clicked:
  - The active class is removed from all tabs.
  - The active class is removed from all content sections.
  - The clicked tab gets the active class.
  - The matching content section becomes visible.

---

## Expected Behavior

- The first tab is selected when the page opens.
- Clicking a different tab changes the visible content.
- Only one tab content section is visible at a time.

---

## File Structure

```bash
project-folder/
│
├── index.html
└── README.md
```

---

## Example Content

You can use simple placeholder text such as:

- First Tab content to be displayed here.
- Second Tab content to be displayed here.
- Third Tab content to be displayed here.
- Fourth Tab content to be displayed here.

---

## Learning Goals

This exercise helps you practice:

- Selecting elements from the DOM.
- Adding event listeners.
- Toggling classes with JavaScript.
- Showing and hiding content dynamically.

---

## Author

Created for basic JavaScript DOM practice.