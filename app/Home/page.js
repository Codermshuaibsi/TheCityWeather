"use client";
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
    Sun,
    Cloud,
    CloudSun,
    CloudRain,
    CloudLightning,
    CloudFog,
    Wind,
    Moon,
    Snowflake,
    CloudAlert
} from "lucide-react";

import Box from '../Components/Box';
import axios from 'axios';

const Home = () => {
    const router = useRouter();
    const { data: session, status } = useSession();
    const [Temp, setTemp] = useState("");
    const [Cloud, setCloud] = useState("");
    const [Input, setInput] = useState("");
    const [weatherData, setWeatherData] = useState(null);

    const API_KEY = "a1bc7117db268b9355b064cc7d975c29";
    useEffect(() => {
        if (!Input) return;
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${Input}&appid=${API_KEY}`).then((res) => {
            let temp = res.data.main.temp;
            let tempInCelsius = (temp - 273.15).toFixed(1);
            setTemp(tempInCelsius + "°");

            const weatherDescription = res.data.weather?.[0]?.description || "Not available";
            setCloud(weatherDescription);
            setWeatherData(res.data); // Store full weather data

        }).catch((err) => {
            setTemp("N/A");
        })
    }, [Input]);

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/');
        }
    }, [status, router]);

    if (status === 'loading' || status === 'unauthenticated') {
        return null;
    }

    // Define conditions for different weather descriptions
    const isClearSky = Cloud.toLowerCase().includes("clear sky");
    const isFewClouds = Cloud.toLowerCase().includes("few clouds");
    const isScatteredClouds = Cloud.toLowerCase().includes("scattered clouds");
    const isBrokenClouds = Cloud.toLowerCase().includes("brokenclouds");
    const isShowerRain = Cloud.toLowerCase().includes("shower rain");
    const isRainy = Cloud.toLowerCase().includes("rain");
    const isThunderstorm = Cloud.toLowerCase().includes("thunderstorm");
    const isSnow = Cloud.toLowerCase().includes("snow");
    const isFog = Cloud.toLowerCase().includes("fog");
    const isWindy = Cloud.toLowerCase().includes("wind");

    return (
        <>
            <div className="header flex justify-between items-center m-6">
                <div>
                    <h1>
                        <span className="font-bold text-white border-2 p-2 rounded-4xl border-purple-400">TCW</span>{" "}
                        <span className="text-amber-100 underline underline-offset-2">TheCityWeather</span>
                    </h1>
                </div>
                <div>
                    <input
                        className="px-12 py-3 text-lg rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-white"
                        type="search"
                        placeholder="Search city..."
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>
                <div>
                    <button
                        className="bg-amber-50 rounded-2xl font-bold border-2 border-amber-500 hover:border-4 transition-all hover:bg-amber-100 cursor-pointer p-3"
                        onClick={() => signOut({ callbackUrl: '/' })}
                    >
                        Sign Out
                    </button>
                </div>
            </div>
            <div className='text-center text-6xl text-white'>
                <p>{Temp}</p>
                <p>{Cloud}</p>
            </div>
            
            {/* Conditionally render weather icons */}
            <div className='flex justify-center mt-20'>
                {isClearSky && <Sun size={100} className="text-yellow-400" />}
                {isFewClouds && <CloudSun size={100} className="text-gray-400" />}
                {isScatteredClouds && <CloudSun size={100} className="text-gray-500" />}
                {isBrokenClouds && <Cloud size={100} className="text-gray-600" />}
                {isShowerRain && <CloudRain size={100} className="text-blue-400" />}
                {isRainy && <CloudRain size={100} className="text-blue-400" />}
                {isThunderstorm && <CloudLightning size={100} className="text-purple-500" />}
                {isSnow && <Snowflake size={100} className="text-white" />}
                {isFog && <CloudFog size={100} className="text-gray-300" />}
                {isWindy && <Wind size={100} className="text-cyan-300" />}
                {!isClearSky && !isFewClouds && !isScatteredClouds && !isBrokenClouds && !isShowerRain && !isRainy && !isThunderstorm && !isSnow && !isFog && !isWindy && <CloudAlert size={100} className="text-blue-200" />}
            </div>
        </>
    );
};

export default Home;
