import React from 'react';
import PropTypes from 'prop-types';

const ConfirmRide = ({ 
    setConfirmRidePanel, 
    pickup, 
    destination, 
    fare, 
    vehicleType, 
    setVehicleFound, 
    createRide 
}) => {
    return (
        <div>
            <h5 
                className='p-1 text-center w-[93%] absolute top-0 cursor-pointer' 
                onClick={() => setConfirmRidePanel(false)}
            >
                <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
            </h5>

            <h3 className='text-2xl font-semibold mb-5'>Confirm your Ride</h3>

            <div className='flex gap-2 justify-between flex-col items-center'>
                <img 
                    className='h-20' 
                    src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" 
                    alt="Vehicle Type" 
                />

                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>{pickup || 'Pickup Location'}</h3>
                            <p className='text-sm -mt-1 text-gray-600'>{pickup}</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>{destination || 'Destination'}</h3>
                            <p className='text-sm -mt-1 text-gray-600'>{destination}</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-5 p-3'>
                        <i className="ri-currency-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹{fare?.[vehicleType] ?? 'N/A'}</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Cash Payment</p>
                        </div>
                    </div>
                </div>

                <button 
                    onClick={() => {
                        setVehicleFound(true);
                        setConfirmRidePanel(false);
                        createRide();
                    }} 
                    className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'
                >
                    Confirm
                </button>
            </div>
        </div>
    );
};

ConfirmRide.propTypes = {
    setConfirmRidePanel: PropTypes.func.isRequired,
    pickup: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    fare: PropTypes.object.isRequired,
    vehicleType: PropTypes.string.isRequired,
    setVehicleFound: PropTypes.func.isRequired,
    createRide: PropTypes.func.isRequired
};

export default ConfirmRide;
