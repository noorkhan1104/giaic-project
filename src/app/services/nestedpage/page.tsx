import Link from 'next/link';

import React from 'react';

const ContentBoxes = () => {
  return (
    <>
    <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">Courses</h1>
    <div
     className="flex flex-wrap justify-center gap-6 p-6">
      {/* Box 1 */}
      
      <div className="max-w-sm bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Coding</h2>
        <p className="text-gray-700 mb-4">
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, animi.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          More
        </button>
      </div>

      {/* Box 2 */}
      <div className="max-w-sm bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Programming</h2>
        <p className="text-gray-700 mb-4">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, iure?
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          More
        </button>
      </div>

      {/* Box 3 */}
      <div className="max-w-sm bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Web Development</h2>
        <p className="text-gray-700 mb-4">
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, harum!
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          More
        </button>
      </div>
      <div className="max-w-sm bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Javascript</h2>
        <p className="text-gray-700 mb-4">
          This is some content inside the second box. Add your text or components here.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          More
        </button>
      </div>
      <div className="max-w-sm bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Python</h2>
        <p className="text-gray-700 mb-4">
          This is some content inside the second box. Add your text or components here.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          More
        </button>
      </div>
      <div className="max-w-sm bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Content creator</h2>
        <p className="text-gray-700 mb-4">
          This is some content inside the second box. Add your text or components here.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          MOre
        </button>
      </div>
    </div>
    </>
  );
};

export default ContentBoxes;


