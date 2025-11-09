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




/**
 * Type predicate function to determine if an employee is a Director.
 * This function asserts to TypeScript that if it returns true, the type of the employee 
 * within that scope is specifically 'DirectorInterface'.
 * 
 * @param employee The employee object to check (can be a Director or Teacher).
 * @returns True if the employee can perform director tasks, otherwise False.
 */
function isDirector(employee: DirectorInterface | TeacherInterface): employee is DirectorInterface {
  // We can check if the 'workDirectorTasks' method exists on the employee object.
  return (employee as DirectorInterface).workDirectorTasks !== undefined;

  // Alternatively, if you are using the concrete classes:
  // return employee instanceof Director; 
}


/**
 * Executes the appropriate work task based on the employee's role,
 * leveraging the type predicate for type safety.
 * 
 * @param employee The employee (Director or Teacher).
 * @returns The string output of the relevant task function.
 */
function executeWork(employee: DirectorInterface | TeacherInterface): string {
  if (isDirector(employee)) {
    // TypeScript knows inside this block that 'employee' has the Director methods
    return employee.workDirectorTasks();
  } else {
    // TypeScript knows in this 'else' block that 'employee' must have the Teacher methods
    return employee.workTeacherTasks();
  }
}
