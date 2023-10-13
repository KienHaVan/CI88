import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import ClipLoader from 'react-spinners/ClipLoader';

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
  const [loading, setLoading] = useState(false);
  const override = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'red',
  };
  const handleGetData = async () => {
    setLoading(true);
    // async await
    try {
      const { data: products } = await axios.get(
        'https://6516e61d09e3260018ca7474.mockapi.io/api/v1/products'
      );
      toast('Get successfully', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      console.log(products);
      setLoading(false);
    } catch (error) {
      setLoading(false);
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
    <div className="max-w-[1280px] mx-auto h-[100vh] w-full flex justify-center items-center gap-4 ">
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
      {loading && (
        <ClipLoader
          color={'#fff'}
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
    </div>
  );
};

export default App;
