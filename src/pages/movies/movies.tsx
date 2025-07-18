import { useState, useEffect } from 'react';
import './movies.css';

import CardScroll from "../../components/cards/card-scroll/CardScroll";

export default function Movies() {
    const [ media, setMedia ] = useState([]);

    useEffect(() => {
        const loadMovies = async () => {
            const response = await fetch("http://localhost:3000/page/medium/Movie");
            const result = await response.json();
            setMedia(result.media);
            console.log('Retrieved:', media);
        }
        loadMovies();
    }, []);

    return (
        <main>
            <div>
                <h2 className='section-title'>
                    Movies
                </h2>
                <CardScroll ids={media} card_type='media' />
            </div>
        </main>

    );
}