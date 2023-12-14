import Authenticated from "@/Pages/Layouts/Authenticated/Index";
import Flickity from "react-flickity-component";
import { Head } from  "@inertiajs/react";
import React, { useEffect } from 'react';
import MovieCard from "@/Components/Prototype/MovieCard";
import FeaturedMovie from "@/Components/Prototype/FeaturedMovie";

export default function Dashboard({ auth, featuredMovies, movies  }) {

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
        <Authenticated auth={auth}>
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
                        {featuredMovies.map((item, index) => (
                            <FeaturedMovie
                                key={item.id}
                                slug={item.slug}
                                name={item.name}
                                category={item.category}
                                thumbnail={item.thumbnail}
                                rating={item.rating}                           
                            />                        
                        ))}
                    </Flickity>
                </div>
                <div className="mt-[50px]">
                    <div className="font-semibold text-[22px] text-black mb-4">
                        Browse
                    </div>
                    <Flickity className="gap-[30px]" options={flickityOptions}>
                        {/* <!-- Movies  --> */}
                        {movies.map((item, index) => (
                           <MovieCard
                                key={item.id}
                                slug={item.slug}
                                name={item.name}
                                category={item.category}
                                thumbnail={item.thumbnail}
                           />
                        ))}
                       
                    </Flickity>
                </div>
        </Authenticated>
    );
}