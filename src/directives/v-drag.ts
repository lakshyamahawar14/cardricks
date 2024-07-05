

const drag = {
  mounted(el: HTMLElement) {
    let initialX: number, initialY: number, offsetX: number, offsetY: number;

    const onMouseMove = (event: MouseEvent) => {
      const moveX = event.clientX - initialX;
      const moveY = event.clientY - initialY;

      el.style.transform = `translate(${offsetX + moveX}px, ${offsetY + moveY}px)`;
    };

    const onMouseUp = (event: MouseEvent) => {
      offsetX += event.clientX - initialX;
      offsetY += event.clientY - initialY;

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    const onMouseDown = (event: MouseEvent) => {
      initialX = event.clientX;
      initialY = event.clientY;

      const style = window.getComputedStyle(el);
      const matrix = new DOMMatrixReadOnly(style.transform);
      offsetX = matrix.m41;
      offsetY = matrix.m42;

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    };

    el.addEventListener('mousedown', onMouseDown);
  },
};

export default drag;
