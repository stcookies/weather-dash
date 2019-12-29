import React from 'react';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className="flex h-screen bg-center bg-cover" style={{ backgroundImage:`url("https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80")` }}>
      <section className="flex flex-col justify-between w-2/3 h-full px-24 pt-16 pb-24">
        <span className="text-2xl font-semibold tracking-wider text-white">weather.app</span>
        <div className="flex font-semibold leading-none text-white">
          <span className="text-6xl">62&deg;</span>
          <div className="px-16">
            <span className="text-5xl">Cincinnati</span>
            <span className="block pl-1 text-xl">6:00PM - Wed Jan 1, 2020</span>
          </div>
          <span className="self-center text-3xl">Partly Cloudy</span>
        </div>
      </section>
      <section className="w-1/3 h-full">
        <Sidebar />
      </section>
    </div>
  );
}

export default App;
