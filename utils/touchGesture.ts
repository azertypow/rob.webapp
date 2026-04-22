export class TouchGesture {

  constructor(
    private toLeft: () => void,
    private toRight: () => void,
    private clicked: () => void,
    private deltaThreshold: number = 50,
  ) {
  }

  private touchStartX = 0

  public onTouchStart(e: TouchEvent) {
    this.touchStartX = e.changedTouches[0].clientX
  }

  public onTouchEnd(e: TouchEvent) {
    const delta = e.changedTouches[0].clientX - this.touchStartX

    if (Math.abs(delta) < this.deltaThreshold) {
      this.clicked()
      return
    }
    if (delta < 0) this.toRight()
    else this.toLeft()
  }

}
