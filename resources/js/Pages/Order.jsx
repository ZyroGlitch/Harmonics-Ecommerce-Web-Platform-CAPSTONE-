import React from 'react'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'

function Order() {
    return (
        <h1>Order Page</h1>
    )
}

Order.layout = page => <AuthenticatedLayout children={page} />

export default Order
