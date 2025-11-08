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

// const printTeacher: printTeacherFunction = (firstName, lastName) => {
//     return `${firstName.charAt(0)}. ${lastName}`;
// }

function printTeacher(firstName: string, lastName: string): string {
  const firstInitial = firstName.charAt(0);
  return `${firstInitial}. ${lastName}`;
}