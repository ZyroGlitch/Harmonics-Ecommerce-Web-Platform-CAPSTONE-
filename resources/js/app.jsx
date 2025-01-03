import './bootstrap';
import '../css/style.css';

import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Bootstrap JS (optional for dynamic components like modals)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
        return pages[`./Pages/${name}.jsx`]
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />)
    },
})