import React, { useState } from 'react'
import ProuductBage from './ProuductBage'
import { products } from '../Data/prouduct'

const ProuductTable = () => {
    const [items, setItems] = useState(products)
    const [search, setSearch] = useState('')

    const filtered = items.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    )

    const handleDelete = (id) => {
        setItems(items.filter((item) => item.id !== id))
    }


    return (
        <div className="p-8 bg-white rounded shadow-md flex-1 ">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Products</h2>
                <input
                    type="text"
                    placeholder="Enter product name..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border rounded-lg px-3 py-2 text-sm"
                />
            </div>

            <table className="w-full text-left">
                <thead>
                    <tr className="text-gray-500 text-xl font-bold">
                        <th className="py-3">Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {filtered.map((product) => (
                        <tr key={product.id} className="hover:bg-gray-50 duration-200 text-sm">
                            <td className="py-3">{product.name} </td>
                            <td>{product.category}</td>
                            <td>${product.price}</td>
                            <td>{product.stock}</td>
                            <td><ProuductBage status={product.status} /></td>
                            <td >
                                <button
                                    onClick={() => handleDelete(product.id)}
                                      className="border border-gray-300 rounded-lg px-4 py-1.5 text-red-600 hover:bg-red-50 hover:border-red-300 duration-200"
                                >
                                    Delete
                                </button></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {filtered.length === 0 && (
                <p className="text-gray-500 text-sm mt-4">Hech narsa topilmadi</p>
            )}
        </div>
    )
}

export default ProuductTable