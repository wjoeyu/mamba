# Mamba

## Description

Mamba is a single-page team and task management app, inspired by [Asana](https://www.asana.com/). It utilizes purposeful aesthestics and motion to galvanize team milestone achievement.

<img align="left" width="24" height="auto" src="https://github.com/wjoeyu/mamba/blob/master/app/assets/images/mamba-logo.png">

[Mamba Live Demo](https://aa-mamba.herokuapp.com/#/)

![mamba_demo](https://github.com/wjoeyu/mamba/blob/master/wireframes/mamba_demo.gif)

### Main Features:

Users can:
* Create and leave teams/workspace.
* Create and assign tasks and for themselves or their team members.
* View a task list and task due dates for entire team and team members.
* Complete and delete tasks.

## Technologies

In this fullstack project, I employed the following technologies:
* React.js
* Redux
* Javascript
* AJAX
* HTML
* CSS3
* Ruby
* Ruby on Rails
* SQL
* JBuilder

## Key Features

### Automatic Update of Task Information

Any information entered in a task form (assignee, description, task name, and due date), will be automatically updated in the front and back end.

#### Debouncing

With the use of a technique called debouncing, the redux state is updated on every key press, so that the entered information is rendered on the screen to give the user visual feedback, specifically the Task Name. However, the information is only stored into the database on set intervals. As result of this, calls to the database to persist information are limited, ensuring a more responsive and lighter-weight experience.

![debouncing_demo](https://github.com/wjoeyu/mamba/blob/master/wireframes/debounce.gif)

```javascript
// task_form.jsx

update(field) {
    return (e) => {
      this.props.updateReduxTask({id: [this.props.match.params.taskId], [field]: e.currentTarget.value});
      const toBePersisted = e.currentTarget.value;
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
        this.timeout = setTimeout(()=> {
          this.props.updateTask({id: [this.props.match.params.taskId], [field]: toBePersisted});
        }, 200);
      };
  }

```

## Future Implementations
I will:
* Implement a search feature for tasks and team members.
* Introduce commenting on tasks.
* Create user profiles with avatars.
