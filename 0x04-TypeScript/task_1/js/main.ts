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

// Example usage: destructure firstName and lastName from a Teacher object
const exampleTeacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
};

const { firstName, lastName } = exampleTeacher;
// keep usage minimal to avoid side-effects in tests
void firstName;
void lastName;

