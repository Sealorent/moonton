import Authenticated from "@/Pages/Prototype/Layouts/Authenticated/Index";
import Flickity from "react-flickity-component";
import { Head } from  "@inertiajs/react";
import React, { useEffect } from 'react';
import MovieCard from "@/Components/Prototype/MovieCard";
import FeaturedMovie from "@/Components/Prototype/FeaturedMovie";

export default function Dashboard() {

    const flickityOptions = {
        initialIndex: 0,
        cellAlign: 'left',
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: true,
        freeScroll: true,
    };

    
    return (
        <Authenticated>
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                    />
                    <title>Dashboard</title>
                </Head>
                <div>
                    <div className="font-semibold text-[22px] text-black mb-4">
                        Featured Movies
                    </div>
                    <Flickity className="gap-[30px]" options={flickityOptions}>
                        {Array(10).fill().map((item, index) => (
                            <FeaturedMovie
                                key={index}
                                slug="the-batman-in-love"
                                name={`The Batman in Love ${index}`}
                                category="Action • Horror"
                                thumbnail={`https://picsum.photos/seed/${index}/300/300`}
                                rating={index + 1}                           
                            />                        ))}
                       
                    </Flickity>
                </div>
                <div className="mt-[50px]">
                    <div className="font-semibold text-[22px] text-black mb-4">
                        Browse
                    </div>
                    <Flickity className="gap-[30px]" options={flickityOptions}>
                        {/* <!-- Movies  --> */}
                        {Array(10).fill().map((item, index) => (
                           <MovieCard
                                key={index}
                                slug="/the-batman-in-love"
                                name={`The Batman in Love ${index}`}
                                category="Action • Horror"
                                thumbnail={`https://picsum.photos/seed/${index}/300/300`}
                           />
                        ))}
                       
                    </Flickity>
                </div>
        </Authenticated>
    );
}