export class Course {
  id: string;
  name: string;
  description: string;
  topic: {
    id: string,
    name: string,
    description: string
  };
}
