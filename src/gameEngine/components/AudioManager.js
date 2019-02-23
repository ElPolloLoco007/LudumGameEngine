
class AudioManager {
  constructor(srcArr) {
    this.srcArr = srcArr.slice();
  }

  play(index) {
    if (index < this.srcArr.length) {
      new Audio(this.srcArr[index]).play();
    } else {
      console.log('Invalid index!')
    }
  }
}

export default AudioManager