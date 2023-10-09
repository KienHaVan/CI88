import axios from 'axios';
import React from 'react';

const App = () => {
  // const handleGetData = () => {
  //   // then ... catch
  //   axios
  //     .get('https://6516e61d09e3260018ca7474.mockapi.io/api/v1/productsdfdf')
  //     .then((res) => res.data)
  //     .then((products) => {
  //       console.log(products);
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // };
  const handleGetData = async () => {
    // async await
    try {
      const { data: products } = await axios.get(
        'https://6516e61d09e3260018ca7474.mockapi.io/api/v1/productssdfd'
      );
      console.log(products);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleAddData = async () => {
    await axios.post(
      'https://6516e61d09e3260018ca7474.mockapi.io/api/v1/products',
      {
        name: 'Gorgeous Fresh Pizza hahahah',
        image:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/817.jpg',
        price: '122.00',
        soldCount: 35892,
        id: '60',
      }
    );
  };
  const handleEditData = async () => {
    await axios.put(
      'https://6516e61d09e3260018ca7474.mockapi.io/api/v1/products/2',
      {
        name: 'Kevin',
      }
    );
  };
  const handleDeleteData = async () => {
    await axios.delete(
      'https://6516e61d09e3260018ca7474.mockapi.io/api/v1/products/2'
    );
  };
  return (
    <div className="max-w-[1280px] mx-auto h-[100vh] h-full w-full flex justify-center items-center gap-4">
      <button
        className="px-4 py-2 border rounded-lg text-white bg-green-400"
        onClick={handleGetData}
      >
        Get data
      </button>
      <button
        className="px-4 py-2 border rounded-lg text-white bg-blue-400"
        onClick={handleAddData}
      >
        Add one data
      </button>
      <button
        className="px-4 py-2 border rounded-lg text-white bg-yellow-400"
        onClick={handleEditData}
      >
        Add one data
      </button>

      <button
        className="px-4 py-2 border rounded-lg text-white bg-red-400"
        onClick={handleDeleteData}
      >
        Delete one data
      </button>
    </div>
  );
};

export default App;
