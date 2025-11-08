interface Teacher {
    readonly firstName: string;
   readonly lastName: string;
   fullTimeEmployee: boolean;
   yearsOfExperience?: number;
   location: string;
   [key: string]: any;
}

interface Director extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}


function printTeacher(firstName: string, lastName: string): string {
  const firstInitial = firstName.charAt(0);
  return `${firstInitial}. ${lastName}`;
}


/**
 * 1. Interface describing the shape of the StudentClass instance.
 *    This defines the methods and properties instances will have.
 */
interface StudentInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}


interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}


class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

