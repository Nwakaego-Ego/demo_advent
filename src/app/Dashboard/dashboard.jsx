"use client";
import { QuoteContext } from "../page";
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Fact from "../Fact/fact";
import fetchData from "../data";
import ReactModal from "../Modal/modal";

const Dashboard = () => {
  const fetchQuote = useContext(QuoteContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (id) => {
    const foundData = fetchData().find((item) => item.id === id);
    setSelectedData(foundData);
    setModalIsOpen(true);
    console.log(selectedData);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    console.log(selectedData);
  }, [selectedData]);

  console.log(fetchData);

  return (
    <div className=" ml-20 ">
      <div className="flex flex-row  ">
        <Image
          src="/xmas.png"
          alt="santa"
          width={270}
          height={150}
          layout="fit"
          objectFit="cover"
          className="hidden md:block"
        />
        <Fact
          openModal={openModal}
          dataSet={fetchData()}
          selectedIndex={selectedIndex}
        />
        <ReactModal
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
          dataSet={fetchData()}
          selectedData={selectedData}
        />
      </div>
    </div>
  );
};

export default Dashboard;
