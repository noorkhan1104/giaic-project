import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <>
      <div className="relative">
        <Image 
          src="/computer.jpg" 
          width={1400} 
          height={400} 
          alt="Picture of the author" 
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold">Welcome to My Creative Studio</h1>
        </div>
      </div>
      {/* ======== */}
      <div>
        <header className="bg-blue-400 bg-opacity-90 p-6 rounded-lg">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-black text-2xl font-bold">
              <h1>My Computer</h1>
            </div>
          </div>
          <div className="mt-4 text-lg text-center text-white border border-white p-4">
            <p>At My Creative Studio, we bring your visions to life with our expert video editing and graphic designing services. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quos voluptas blanditiis placeat soluta natus quo quia fugiat nihil provident accusantium voluptatem, nobis assumenda eos iusto laborum mollitia impedit nulla? Corporis iste, voluptatibus numquam sit provident, dolorem nulla odio ratione nam consectetur assumenda doloribus sequi. Sint aspernatur ad necessitatibus reiciendis a! Vel maxime nostrum veniam repellendus quia, voluptatem accusamus ab soluta asperiores. Nobis, porro? Quisquam perspiciatis, in sed doloremque, laborum quam sequi quasi sint quia quos adipisci optio vero ab eum veniam quis praesentium, odio enim corrupti itaque earum! Temporibus nobis, odit esse eaque sequi ipsa reprehenderit commodi ab quasi.</p>
          </div>
          <div className="container mx-auto flex justify-between items-center mt-8">
            <div className="text-black text-2xl font-bold">
              <h1>Graphic Designing</h1>
            </div>
          </div>
          <div className="mt-4 text-lg text-center text-white border border-white p-4">
            <p>We believe that great design is the cornerstone of effective communication. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, numquam deserunt quo laudantium soluta autem culpa, dicta ex ipsum provident nemo exercitationem laboriosam fugit expedita necessitatibus cumque quisquam non repellendus perferendis rerum blanditiis quia eos? Perspiciatis corporis provident qui dolorum, libero dignissimos veniam aut eaque ipsam commodi debitis cum architecto impedit officiis tempore dolore nam illum atque enim! Autem odit, distinctio ad recusandae pariatur perferendis odio! Aliquam molestiae harum similique laboriosam beatae mollitia quas minima amet maxime nihil soluta, sequi qui inventore, officia ut placeat laborum suscipit in. Dignissimos quaerat eligendi iste qui aut obcaecati nam doloremque incidunt velit aspernatur.</p>
          </div>
          <div className="container mx-auto flex justify-between items-center mt-8">
            <div className="text-black text-2xl font-bold">
              <h1>Video Editing</h1>
            </div>
          </div>
          <div className="mt-4 text-lg text-center text-white border border-white p-4">
            <p>Our video editing team is here to transform your raw footage into captivating stories. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa velit magni consectetur qui quasi dolorem debitis, eius fugiat. Asperiores velit inventore, maxime, placeat ullam consequatur a, adipisci vel incidunt nostrum esse eos. Debitis odio nisi quae, ab expedita, dolorum quasi est explicabo optio minus quaerat voluptatem deserunt asperiores aspernatur suscipit vel quia pariatur libero eius sint repudiandae corrupti laborum. Provident id recusandae optio hic. Dignissimos sunt recusandae beatae laborum fuga deserunt architecto ipsam delectus, obcaecati accusantium perspiciatis omnis. Accusamus et earum reprehenderit dolor alias dignissimos minima explicabo officia cupiditate amet, nemo distinctio expedita? Aperiam explicabo quasi ducimus culpa iure cum?</p>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
