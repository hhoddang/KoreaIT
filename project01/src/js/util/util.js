const AUTHOR = "YAMADA, Yoshihiro"; //

export default class Member {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getName() {
    return this.lastName + this.firstName;
  }
}

export class Area {
  constructor() {}
  getTriangle(base, height) {
    return (base * height) / 2;
  }
  getDiamond(width, height) {
    return (width * height) / 2;
  }
}
