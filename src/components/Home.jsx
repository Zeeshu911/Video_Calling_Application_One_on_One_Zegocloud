import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroSection from "./HeroSection";

const Home = () => {
  const [value, setValue] = useState("");
  const navigateTo = useNavigate();
  const handleJoinRoom = () => {
    navigateTo(`/room/${value}`);
  };
  return (
    <>
      <section>
        <HeroSection />
        <div className="container">
          <h1>Join Meeting</h1>
          <div>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Create Room ID"
            />
            <button onClick={handleJoinRoom} disabled={!value}>
              Join Room
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
