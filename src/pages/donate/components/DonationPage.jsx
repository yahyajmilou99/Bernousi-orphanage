import React from 'react';
import { FaCopy } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";

const DonationPage = () => {
    let bankInfos = [
        ["Bank Name", "Example Bank"],
        ["Account Name", "1234567890"],
        ["Account Number", "Orphanage Care Foundation"],
        ["SWIFT/BIC", "EXAMPLEBIC"],
        ["IBAN", "MA00 1234 5678 9012 3456 7890 123"]
    ];

    // const handleCopy = (text) => {
    //     navigator.clipboard.writeText(text)
    //         .then(() => {
    //             alert(`Copied: "${text}"`);
    //         })
    //         .catch((error) => {
    //             console.error('Failed to copy text: ', error);
    //         });
    // };
    const handleCopy = (text) => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text)
                .then(() => alert(`Copied: "${text}"`))
                .catch((error) => console.error('Failed to copy text: ', error));
        } else {
            // Fallback for unsupported browsers
            const tempInput = document.createElement('input');
            tempInput.value = text;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
            // alert(`Copied: "${text}"`);
        }
    };


    return (
        <>
            <section className='flex flex-col items-center py-[4rem] px-[1rem] gap-16 '>
                <div className="flex flex-col items-center text-center lg:gap-0 gap-5 ">
                    <h1 className='text-[40px] font-bold '>Support Our Orphanage</h1>
                    <p className='text-[15px] font-semibold text-[#333333] '>Your generosity can make a real difference in a child's life</p>
                </div>
                <div className=" flex flex-col gap-5 items-center justify-center lg:px-[8rem] px-[1rem] py-[4rem] bg-[#F9FAFB] rounded-[20px] ">
                    <h6 className='text-[25px] font-bold  flex items-center gap-2'><BsBank2 /> Bank Informations</h6>
                    <div className="flex flex-col gap-3">
                        {
                            bankInfos.map(([property, value], index) => (
                                <div key={index} className="flex items-center gap-3 text-[#433bff] "><FaCopy onClick={() => handleCopy(value)} className='text-[20px] ' /><p className='lg:text-[18px] font-semibold '>{property} : <span className='font-normal text-black'>{value}</span></p></div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default DonationPage;