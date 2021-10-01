export default {
    // bind(el, bind, ) => {

    // }
    bind (el) {
        console.log(el);
        const outInput = el.querySelector('.select-input');
        const input = outInput.querySelector('input');
        console.log(input);
        const menu = el.querySelector('.menu');
        input.addEventListener('focus', () => {
            menu.style.display = 'block';
        }, false);
        input.addEventListener('blur', () => {
            menu.style.display = 'none';
        }, false);
    }
};
