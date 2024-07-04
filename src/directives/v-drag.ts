export default {
  mounted(el: HTMLElement) {
    el.style.cursor = 'move';

    const onMouseMove = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      el.style.left = `${event.clientX - rect.width / 2}px`;
      el.style.top = `${event.clientY - rect.height / 2}px`;
      el.style.position = 'absolute';
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    el.addEventListener('mousedown', () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });
  },
};
