export class Student {
    constructor (
        public id: number,
        public first_name: string,
        public last_name: string, 
        public email: string,
        public avatar: string,
    ) {}

    get fullName() {
        return this.first_name + ' ' + this.last_name
      }
}