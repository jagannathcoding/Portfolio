const Home = () => {
    return (
      
  <section>
      <span>Hello, my name is </span><span className="text-black-300">Jagannath Deb Gunin.</span>
        
        <h2 className="text-2xl mt-2">Web Development</h2>
  
        <button className="mt-6 px-6 py-2 border border-teal-300 rounded-md text-teal-300 hover:bg-teal-300 hover:text-black transition">
          Get In Touch
        </button>
  
        <div className="flex gap-4 mt-6 text-2xl">
          <a href="#" className="hover:text-teal-300">🔵</a>
          <a href="#" className="hover:text-teal-300">📸</a>
          <a href="#" className="hover:text-teal-300">💼</a>
          <a href="#" className="hover:text-teal-300">🐱</a>
        </div>
      </section>
    );
  };
  
  export default Home;
  