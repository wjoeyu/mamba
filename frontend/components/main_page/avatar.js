export const memberInitials = (name) => {
    return name.split(" ").map(el=>el[0]).join("");
  };
