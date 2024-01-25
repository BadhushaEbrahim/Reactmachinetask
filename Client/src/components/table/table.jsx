import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from 'flowbite-react';

function TableComponent() {
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  const baseUrl = import.meta.env.VITE_Baseurl;

  const getTableData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/table`);
      if (response) {
        setTableData(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTableData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = useMemo(
    () => tableData.slice(indexOfFirstItem, indexOfLastItem),
    [tableData, indexOfFirstItem, indexOfLastItem]
  );

  const setPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const totalPages = useMemo(() => Math.ceil(tableData.length / itemsPerPage), [
    tableData.length,
    itemsPerPage,
  ]);

  return (
    <div className="overflow-x-auto ">
      <Table striped className='shadow-xl'>
        <TableHead>
          <TableHeadCell>Id</TableHeadCell>
          <TableHeadCell>Name</TableHeadCell>
          <TableHeadCell>Quantity</TableHeadCell>
          <TableHeadCell>Price</TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          {currentItems.map((item, index) => (
            <TableRow
              key={index}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {item.id}
              </TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex justify-center mt-4 space-x-2">
        <button
          onClick={() => setPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-2 py-2 border rounded transition duration-300 focus:outline-none focus:shadow-outline-blue hover:bg-blue-500 hover:text-white"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setPage(index + 1)}
            className={`px-2 py-2 border rounded transition duration-300 focus:outline-none focus:shadow-outline-blue ${
              currentPage === index + 1
                ? 'bg-blue-500 text-white'
                : 'hover:bg-blue-200'
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => setPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-2 py-2 border rounded transition duration-300 focus:outline-none focus:shadow-outline-blue hover:bg-blue-500 hover:text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default TableComponent;
