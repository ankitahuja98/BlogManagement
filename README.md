**Blog Management**

**Overview** 

This project is a fully responsive blog application built with React and styled using Tailwind CSS. The app allows users to create, view, and delete blog posts with a seamless and user-friendly interface. Several modern frontend techniques and tools have been employed to enhance the user experience, including Redux Toolkit for state management and Redux Persist for local storage. 

**Key Features**

**Fully Responsive Design**

The app is designed to be fully responsive, ensuring a smooth experience across various devices and screen sizes. Tailwind CSS has been used to implement the responsive styling efficiently. 

**Home Page **

The homepage displays a list of blog posts in a grid layout. Each blog post is shown as a card, with the title, description, and category displayed as shown below. 


**Create Blog Page**

The create blog page allows users to enter details for a new blog post. The form includes fields for the title, description, category, Image, Tags, Published Status and Published Date as shown below. 


**Form Validation**

The app implements form validation on blog creation: 

Title: Text input (required, minimum 5 characters). 

Description: Textarea (required, minimum 10 characters). 

Category: Dropdown (required, options: "Tech," "Lifestyle," "Health," etc.). 

Published Status: Radio buttons (Draft or Published, required). 

Published Date: Date picker (required if status is "Published"). 


**Toast Notifications**

Toast notifications appear upon creating or deleting a blog, informing users of successful actions. These notifications are visible for a short duration and automatically fade away. 


**Detailed Blog Page**

This page provides a detailed view of a single blog post. It includes the full title, description, and other details such as the category and publication date. 

 
**Confirmation Dialog on Blog Deletion**

When a user attempts to delete a blog, a confirmation dialog appears, asking the user to reconfirm their decision to ensure the deletion is intentional. 
 

**Reusable Components**

The app includes several reusable UI components that streamline the development process: 

BlogCard: Displays a summary of each blog post. 

FormInput: A generic input component used across various forms. 

FormSelect: A dropdown selection component for categories. 

FormRadio: A radio button group component for category selection. 


**State Management with Redux Toolkit**

The app uses Redux Toolkit for state management. It includes a store and a blogsSlice, which manages the blog data. Two primary actions are: 

AddBlog: Adds a new blog post. 

DeleteBlog: Deletes an existing blog post. 

In addition, Redux Persist is used to store the blog data in localStorage, so data persists even when the app is reloaded. 



**Technologies Used**

ReactJS: Frontend library for building user interfaces. 

Tailwind CSS: Utility-first CSS framework for fast styling. 

Redux Toolkit: For state management and handling actions like adding and deleting blogs. 

Redux Persist: To persist state in localStorage. 

React Toastify: For displaying toast notifications. 

React Router: For navigating between pages (Home, Create Blog, and Detailed Blog). 

 

 

**Installation** 

To set up the project locally, follow these steps: 

1. Clone the repository 

git clone <repository-url> 
cd <project-directory> 
 

2. Install dependencies 

npm install 
 

3. Run the app 

npm start 
 

This will start the app on http://localhost:3000. 
