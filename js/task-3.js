const profile = {
  profileUser: [{ username: 'Jacob', playTime: 300 }],
  getInfo() {
    // for (const porf of this.profileUser) {
    return `${this.profileUser[0].username} has ${this.profileUser[0].playTime} active hours!`;
    // }
  },
  changeUsername(newName) {
    this.profileUser[0].username = newName;
  },
  updatePlayTime(hours) {
    this.profileUser[0].playTime += hours;
  },
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername('Marco');
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
