import  { useState } from 'react';
import Modal from './Modal';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(!modalOpen); // Toggle modalOpen state
  };

  return (
    <div className='bg-[url(https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg)] w-full h-[100vh] bg-no-repeat '>
      <button onClick={handleModalOpen}>
        Course Modal
      </button>
      {modalOpen && <Modal handleModalOpen={handleModalOpen} />}
    </div>
  );
};

export default App;
