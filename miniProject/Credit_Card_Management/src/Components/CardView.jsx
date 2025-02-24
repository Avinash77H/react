import React from 'react'

const CardView = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="bg-gradient-to-r from-[#578E7E] to-[#A3D1C6] w-72 sm:w-80 h-48 rounded-lg shadow-lg p-6 text-white">
                <div className="flex justify-between items-center mb-4">
                    <div className="text-lg font-bold">Bank Logo</div>
                    <div className="text-sm uppercase">Visa</div>
                </div>
                <div className="text-2xl tracking-widest mb-4">1234 5678 9012 3456</div>
                <div className="flex justify-between items-center">
                    <div className="text-sm">John Doe</div>
                    <div className="text-sm">12/25</div>
                </div>
            </div>
        </div>
    )
}

export default CardView