import React from "react";

export const dueDate = (task) => {
  const dueDate = task && task.due_date ?
    new Date(task.due_date.replace(/-/g, '\/').replace(/T.+/, '')).toString(): "";

  const today = new Date().toString();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  if (today.slice(4,15) === dueDate.slice(4,15)) {
    return "Today";
  } else if (tomorrow.toString().slice(4,15) === dueDate.slice(4,15)) {
    return "Tomorrow";
  } else if (yesterday.toString().slice(4,15) === dueDate.slice(4,15)) {
    return "Yesterday";
  } else if (today.toString().slice(11,15) !== dueDate.slice(11,15)) {
    let splitDate = dueDate.slice(4,15).split(" ");
    if (splitDate[1]) {
      if(splitDate[1].length === 2 && splitDate[1][0] === "0") {
        splitDate[1] = splitDate[1].slice(1,2) + ",";
      } else {
        splitDate[1] = splitDate[1] + ",";
      }
    }
    return splitDate.join(" ");
  } else if (today.toString().slice(11,15) === dueDate.slice(11,15)) {
    let splitDate = dueDate.slice(4,11).split(" ");
    if (splitDate[1]) {
      if(splitDate[1].length === 2 && splitDate[1][0] === "0") {
        splitDate[1] = splitDate[1].slice(1,2);
      }
    }
    return splitDate.join(" ");
  }
};

export const dueDateClass = (task) => {
  const dueDate = task && task.due_date ?
    new Date(task.due_date.replace(/-/g, '\/').replace(/T.+/, '')): "";

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  if (today.toString().slice(4,15) === dueDate.toString().slice(4,15) ||
    tomorrow.toString().slice(4,15) === dueDate.toString().slice(4,15)) {
    return "soon";
  } else if (dueDate) {
    if (dueDate.getTime() < today.getTime()) {
      return "past";
    }
  }
  return "future";
};
