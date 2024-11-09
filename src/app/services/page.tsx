// import Link from 'next/link';




const ServicePage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-750">Services</h1>

      <section className="bg-blue-30 p-8 mb-8 rounded-lg shadow-lg">
        <p className="text-2xl font-bold text-center mb-4 text-black-600">Graphic Design</p>
        <p className="text-center mb-8 text-black-700">
          We offer professional graphic design services to bring your ideas to life. From logos to marketing materials, we create stunning visuals that represent your brand.
        </p>
        <a href="/services/nestedpage" className="text-black-500 hover:text-black-700 hover:underline block text-center transition duration-300 ease-in-out border border-black-500 rounded-lg p-2">
          <h2>THIS IS A GRAPHIC PAGE</h2>
        </a>
      </section>

      <section className="bg-blue-40 p-8 rounded-lg shadow-lg">
        <p className="text-2xl font-bold text-center mb-4 text-black-600">Video Editing</p>
        <p className="text-center mb-8 text-black-600">
          Our video editing services help you create engaging and professional videos. Whether it's for social media, marketing, or personal projects, we ensure high-quality results.
        </p>
        <a href="/services/nestedpage" className="text-black-500 hover:text-black-700 hover:underline block text-center transition duration-300 ease-in-out border border-black-500 rounded-lg p-2">
          THIS IS A VIDEO EDITING PAGE
        </a>
      </section>
    </div>
  );
};
export default ServicePage;