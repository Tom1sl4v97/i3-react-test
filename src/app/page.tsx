"use client";

import { useState, useEffect, use, useMemo } from "react";
import { useFetchDataContentfulHP } from "@/hooks/fetchDataContentful";
import { useWindowWidth } from "@/hooks/getWindowWodth";

import styles from "./page.module.scss";
import { Loader } from "@/components/loader/loader";
import { NavigationHandler } from "@/components/navigation/navigationHandler";
import { ErrorMsg } from "@/components/errorMsg/errorMsg";
import { ImageGalleryDesktop } from "@/components/homePage/imageGalleryDesktop";
import { ImageGalleryMobile } from "@/components/homePage/imageGalleryMobile";

const numberOfItemsPerPageMobile = 1;
const numberOfItemsPerPageDesktop = 3;

export default function Page() {
  const windowWidth = useWindowWidth();
  const [mobileSize, setMobileSize] = useState(windowWidth < 992);
  const [numberOfItemsPerPage, setNumberOfItemsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  const numberOfSkipItems = useMemo(
    () => (currentPage - 1) * numberOfItemsPerPage,
    [currentPage, numberOfItemsPerPage]
  );

  useEffect(() => {
    if (windowWidth < 992) {
      if (numberOfItemsPerPage !== numberOfItemsPerPageMobile) {
        setNumberOfItemsPerPage(numberOfItemsPerPageMobile);
        setMobileSize(true);
      }
    } else if (numberOfItemsPerPage !== numberOfItemsPerPageDesktop) {
      setNumberOfItemsPerPage(numberOfItemsPerPageDesktop);
      setCurrentPage(1);
      setMobileSize(false);
    }
  }, [windowWidth]);

  const { loading, data, error, totalItems } = useFetchDataContentfulHP(
    numberOfSkipItems,
    numberOfItemsPerPage
  );

  const nextPageHandler = () => {
    if (currentPage * numberOfItemsPerPage < totalItems) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(1);
    }
  };

  const previousPageHandler = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(Math.ceil(totalItems / numberOfItemsPerPage));
    }
  };

  const goToPageHandler = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <NavigationHandler />

      {/* <ErrorMsg errorMsg={"Testiranje, OVO NIJE STVARNI ERROR"} /> */}

      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorMsg errorMsg={error} />
      ) : (
        <div className={styles.body}>
          {mobileSize ? (
            <ImageGalleryMobile
              imageGalleryArray={data}
              currentPage={currentPage}
              nextPageHandler={nextPageHandler}
              previousPageHandler={previousPageHandler}
              goToPageHandler={goToPageHandler}
              totalItems={totalItems}
            />
          ) : (
            <ImageGalleryDesktop imageGalleryArray={data} 
            currentPage={currentPage}
            nextPageHandler={nextPageHandler}
            previousPageHandler={previousPageHandler}
            goToPageHandler={goToPageHandler}
            totalItems={totalItems}
            />
          )}
        </div>
      )}
    </div>
  );
}
