import React, { useState } from "react";

function App() {
    const [bgColor, setBgColor] = useState<string>("Olive");

    return (
        <>
            <div
                className="w-full h-screen duration-200"
                style={{ backgroundColor: bgColor, height: "100vh" }}
            >
                <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
                    <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl">
                      <button className="outline-none rounded-3xl bg-green-400 px-4" onClick={() => setBgColor("green")}>Dark</button>
                      <button className="outline-none rounded-3xl bg-light px-4" onClick={() => setBgColor("#f0f0f0")}>Light</button>
                      <button className="outline-none rounded-3xl bg-red-400 px-4" onClick={() => setBgColor("red")}>Red</button>
                      <button className="outline-none rounded-3xl bg-black px-4" onClick={() => setBgColor("#000000")}>Black</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
