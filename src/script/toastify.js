export class Toast {
    static create(text, color) {
        Toastify({
            text: `${text}`,
            duration: 3000,
            close: true,
            gravity: "bottom",
            position: "right",
            stopOnFocus: true,
            style: { background: `${color}`, },
          }).showToast();
    }
}