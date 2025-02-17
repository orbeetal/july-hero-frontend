"use client";
import React, { useEffect } from "react";
import { useGetMartyrsBySlugQuery } from "@/redux/features/julyApi";
import Loading from "@/components/common/Loader";
import Image from "next/image";

const MartyrsDetailsPage = ({ slug, lang }) => {
    
    const { data: martyr, error, isLoading } = useGetMartyrsBySlugQuery(
        { slug, lang },
        { skip: !slug }
    );

    if (isLoading) return <Loading />;
    if (error) return <p className="text-red-500 text-center">Error in data fetching...</p>;

    return (
        <>
            
            <div className="max-w-4xl mx-auto p-6 space-y-6 bg-white shadow-lg rounded-lg">
            {/* Hero Image */}
            <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-lg">

                <Image
                    alt={martyr?.name || "Unknown"}
                    src={martyr?.image || "/placeholder.jpg"}
                    layout="fill"
                    objectFit="contain"
                />

            </div>

            {/* Martyr Details */}
            <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900">{martyr?.name || "Unknown"}</h1>
                <p className="text-gray-600 text-lg">{martyr?.age || "N/A"}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t pt-4">
                <div>
                    <p className="font-semibold text-gray-700">Occupation:</p>
                    <p className="text-gray-800">{martyr?.occupation || "N/A"}</p>
                </div>
                <div>
                    <p className="font-semibold text-gray-700">Institution:</p>
                    <p className="text-gray-800">{martyr?.institution || "N/A"}</p>
                </div>
                <div>
                    <p className="font-semibold text-gray-700">Department:</p>
                    <p className="text-gray-800">{martyr?.department || "N/A"}</p>
                </div>
                <div>
                    <p className="font-semibold text-gray-700">Address:</p>
                    <p className="text-gray-800">{martyr?.address || "N/A"}</p>
                </div>
                <div>
                    <p className="font-semibold text-gray-700">Incident Date:</p>
                    <p className="text-gray-800">{martyr?.incident_date || "N/A"}</p>
                </div>
            </div>

            {/* Biography Section */}
            {martyr?.biography && (
                <div className="mt-6 border-t pt-4">
                    <h2 className="text-xl font-semibold text-gray-900">Biography</h2>
                    <p className="text-gray-700 mt-2">{martyr?.biography}</p>
                </div>
            )}

            {/* Incident Section */}
            {martyr?.incident && (
                <div className="mt-6 border-t pt-4">
                    <h2 className="text-xl font-semibold text-gray-900">Incident Details</h2>
                    <p className="text-gray-700 mt-2">{martyr?.incident}</p>
                </div>
            )}
        </div>
        </>
    );
};

export default MartyrsDetailsPage;
