"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  return (
    <div className="inset-0 bg-black flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center space-y-6">
        {/* Icon and ByteChat Title */}
        <div className="flex flex-row items-center justify-center space-x-2">
          <img
            src="./images/icon.webp"
            alt="ByteChat Icon"
            className="h-8 w-8"
          />
          <h1 className="text-2xl font-bold flex flex-row text-white">ByteChat</h1>
        </div>

        {/* Loading Indicator */}
        <div className="relative flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-blue-600 animate-pulse flex items-center justify-center">
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
                    style={{
                      animationDelay: `${i * 0.2}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Centered Description */}
        <p className="text-blue-400 text-sm text-center">
          Low Latency Chat Service is spinning up
        </p>
        <div className="flex items-center justify-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#D9D9D9"><path d="M280-420q25 0 42.5-17.5T340-480q0-25-17.5-42.5T280-540q-25 0-42.5 17.5T220-480q0 25 17.5 42.5T280-420Zm200 0q25 0 42.5-17.5T540-480q0-25-17.5-42.5T480-540q-25 0-42.5 17.5T420-480q0 25 17.5 42.5T480-420Zm200 0q25 0 42.5-17.5T740-480q0-25-17.5-42.5T680-540q-25 0-42.5 17.5T620-480q0 25 17.5 42.5T680-420ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg> Laoding...
      
        </div>
      </div>
    </div>
  );
}
