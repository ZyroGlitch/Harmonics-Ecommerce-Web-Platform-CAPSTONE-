import React from 'react'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'

function ViewOrder() {
    return (
        <div className="text-center">
            <h1>VIEW ORDER PAGE</h1>
        </div>
    )
}

ViewOrder.layout = page => <AuthenticatedLayout children={page} />
export default ViewOrder