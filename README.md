# Kanban task management web app

Streamline your tasks with our task manager. Stay organized, prioritize
your to-do list, and track progress all in one place. Boost productivity
and achieve your goals effortlessly.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Used technologies](#used-technologies)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, read, update, and delete boards and tasks
- Receive form validations when trying to create/edit boards and tasks
- Mark subtasks as complete and move tasks between columns
- Hide/show the board sidebar

Expected Behaviour:

- Boards
  - Clicking different boards in the sidebar will change to the selected board.
  - Clicking "Create New Board" in the sidebar opens the "Add New Board" modal.
  - Clicking in the dropdown menu "Edit Board" opens up the "Edit Board" modal where details can be changed.
  - Columns are added and removed for the Add/Edit Board modals.
  - Deleting a board deletes all columns and tasks and requires confirmation.
- Columns
  - A board needs at least one column before tasks can be added. If no columns exist, the "Add New Task" button in the header is disabled.
  - Clicking "Add New Column" opens the "Edit Board" modal where columns are added.
- Tasks
  - Adding a new task adds it to the bottom of the relevant column.
  - Updating a task's status will move the task to the relevant column.

Bonus:

- The tasks can be dragged and dropped to a new column.

### Screenshot

![Screenshot](./screenshots/Screenshot_1)
![Screenshot](./screenshots/Screenshot_2)
![Screenshot](./screenshots/Screenshot_3)

### Links

- Live Site URL: [link](https://kanban-task-management-app.netlify.app/)
- Design URL: [link](https://www.frontendmentor.io/challenges/kanban-task-management-web-app-wgQLt-HlbB)

### Used technologies

- NextJS
- Tailwind UI
- Redux toolkit
