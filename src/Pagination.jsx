import React from "react";
// import {IoIosArrowRoundBack,IoIosArrowRoundForward } from 'react-icons/io';

function Pagination({updatePage, currentPage, totalPages}){

    const handlePrev = () => {
        if(currentPage > 1){
            updatePage(prev=> prev -1)
        }
    }

    const handleNext = () => {
        if(totalPages != currentPage){
            updatePage(prev => prev + 1)
        }
    }

return (
    <div style={{display : 'flex'}}>
        <button onClick={handlePrev} disabled={currentPage==1}>
            Previous    
        </button>
        <p>{currentPage}</p>
        <button onClick={handleNext} disabled={totalPages==currentPage}>
            Next
        </button>
    </div>
)
}

export default Pagination;