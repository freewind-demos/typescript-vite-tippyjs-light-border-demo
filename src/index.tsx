import './index.css';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light-border.css';
import 'tippy.js/themes/light.css';

const button = document.querySelector("#main button");
tippy(button!, {
    content: 'Hello, tippy',
    theme: 'light-border'
})
