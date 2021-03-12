import React from 'react';

const Lodingicon = () => {
    return (
    //     <div className="overlay">
    //     <i className="fa fa-refresh fa-spin" />
    //     <i className="fa fa-spinner-third"></i>
    //     <i className="fa fa-spinner"></i>
    //     <i className="fa fa-circle-notch fa-spin"></i>
    //     <i className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"></i>
    // </div>
        <div className="text-center py-2 animate-pulse p-1 flex m-auto justify-center overlay pt-10">
            {/* border-4 border-gray-100  */}
            <div className="shadow-sm rounded-3xl p-1 w-3/6 bg-white">
            <i className="animate-bounce fas fa-download fa-8x text-gray-300"></i>

            <h1 className="text-base md:text-xl lg:text-3xl mt-1 text-gray-300">
                กำลังโหลดข้อมูล..
            </h1>
            </div>
        </div>
    );
};

export default Lodingicon;
