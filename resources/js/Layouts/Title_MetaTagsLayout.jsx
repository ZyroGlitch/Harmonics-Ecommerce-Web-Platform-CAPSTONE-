import React from 'react'
import logo from '../../../public/assets/logo.png'
import { Head } from '@inertiajs/react'

export default function Title_MetaTagsLayout({ children }) {
    return (
        <>
            <Head>
                <title>Harmonics</title>
                <meta head-key="description" name="description" content="This is the default description" />
                <link rel="icon" type="image/svg+xml" href={logo} />
            </Head>

            {children}
        </>
    )
}
