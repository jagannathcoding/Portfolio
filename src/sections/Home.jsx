const Home = () => {
  return (
    <section className="home-container min-h-screen flex items-center justify-center bg-base-100 px-4 sm:px-6 lg:px-8 pt-8 pb-8">
      <div className="content text-center max-w-3xl mx-auto space-y-2">
        <span className="block text-lg text-gray-700 dark:text-gray-300">
          Hello, my name is
        </span>
        <span className="block text-4xl font-extrabold text-primary dark:text-primary-focus">
          Jagannath Deb Gunin.
        </span>
        <h2 className="title text-3xl font-semibold text-gray-900 dark:text-gray-100">
          Web Development
        </h2>
      </div>
    </section>
  );
};

export default Home;