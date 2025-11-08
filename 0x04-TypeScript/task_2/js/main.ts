/**
 * Director Interface
 */
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

/**
 * Teacher Interface
 */
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

/**
 * Director Class implementation
 */
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    // Note: The prompt had a typo "getToWork" for the Director class description,
    // assuming it aligns with the getCoffeeBreak method name in the interface.
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

/**
 * Teacher Class implementation
 */
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

/**
 * Function to create an employee based on salary criteria.
 *
 * @param salary The employee's salary (number or string).
 * @returns A new instance of Director or Teacher.
 */
function createEmployee(salary: number | string): Director | Teacher {
  // If salary is a number AND less than 500, return a Teacher
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  // Otherwise (salary >= 500 or is a string), return a Director
  return new Director();
}
