export class TouchGesture {

  constructor(
    private toLeft: () => void,
    private toRight: () => void,
    private toTop: () => void,
    private toBottom: () => void,
    private clicked: () => void,
    private deltaThreshold: number = 50,
  ) {
  }

  private touchStartX = 0
  private touchStartY = 0

  public onTouchStart(e: TouchEvent) {
    this.touchStartX = e.changedTouches[0].clientX
    this.touchStartY = e.changedTouches[0].clientY
  }

  public onTouchEnd(e: TouchEvent) {
    const deltaX = e.changedTouches[0].clientX - this.touchStartX
    const deltaY = e.changedTouches[0].clientY - this.touchStartY

    const isVertical = Math.abs(deltaY) > Math.abs(deltaX)

    console.log('isVerticale: ', isVertical)
    console.log('deltaX: ', deltaX)
    console.log('deltaY: ', deltaY)

    if (isVertical) {
      if (Math.abs(deltaY) < this.deltaThreshold) {
        this.clicked()
        return
      }
      if (deltaY < 0) this.toBottom()
      else this.toTop()

      return

    } else {

      if (Math.abs(deltaX) < this.deltaThreshold) {
        this.clicked()
        return
      }
      if (deltaX < 0) this.toRight()
      else this.toLeft()

      return

    }


  }

}
