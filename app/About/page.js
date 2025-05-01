'use client';
import React from 'react';
import { Sun, CloudRain, Locate, User, Info, Github } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen text-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-8 flex justify-center items-center gap-2 text-blue-700">
           <h1>
                        <span className="font-bold text-white border-2 p-2 rounded-4xl border-purple-400">TCW</span>{" "}
                        <span className="text-amber-100 underline underline-offset-2">TheCityWeather</span>
                    </h1>
        </h1>

        <p className="text-lg mb-8 text-center">
          This weather app helps you check the current weather, forecasts, and location-based updates in real-time.
        </p>

        <div className="space-y-6">
          {[
            {
              icon: <Sun className="text-yellow-500" size={28} />,
              title: 'Live Weather Updates',
              description:
                'Get real-time temperature, wind speed, humidity, and weather condition updates.',
            },
            {
              icon: <CloudRain className="text-blue-500" size={28} />,
              title: '7-Day Forecast',
              description: 'Plan your week with reliable and accurate daily forecasts.',
            },
            {
              icon: <Locate className="text-green-500" size={28} />,
              title: 'Location Detection',
              description: 'The app can detect your current location and fetch weather data accordingly.',
            },
            {
              icon: <User className="text-pink-500" size={28} />,
              title: 'Developed By',
              description:
                'Mohd Shuaib – passionate about building helpful and user-friendly web apps.',
            },
            {
              icon: <Github className="text-gray-900" size={28} />,
              title: 'Source Code',
              description: (
                <a
                  href="https://github.com/Codermshuaibsi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  github.com/Codermshuaibsi
                </a>
              ),
            },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              {item.icon}
              <div>
                <h2 className="font-semibold text-lg">{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center text-sm text-gray-500">
          Weather data provided by{' '}
          <a
            href="https://openweathermap.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            OpenWeatherMap API
          </a>
          .
          <br />
          Version: 1.0.0
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
