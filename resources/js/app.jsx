import './bootstrap';
import '../css/style.css';

import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Bootstrap JS (optional for dynamic components like modals)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CustomerLayout from './Layouts/CustomerLayout';

createInertiaApp({
    title: title => "Harmonics",
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })

        // Retrieve the page component
        let page = pages[`./Pages/${name}.jsx`];

        // Check if the page explicitly declares `noLayout` property
        if (!page.default.noLayout) {
            page.default.layout = page.default.layout || ((page) => <CustomerLayout children={page} />);
        }

        return page;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />)
    },
})