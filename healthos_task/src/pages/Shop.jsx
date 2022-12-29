import React, { useState } from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../styles/shop.css";

import products from "../assets/data/products";
import ProductsList from "../components/UI/ProductsList";

const Shop = () => {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "baby") {
      const filteredProducts = products.filter(
        (item) => item.category === "Baby Care"
      );

      setProductsData(filteredProducts);
    }
    if (filterValue === "men") {
      const filteredProducts = products.filter(
        (item) => item.category === "Men's Products"
      );

      setProductsData(filteredProducts);
    }
    if (filterValue === "prescription") {
      const filteredProducts = products.filter(
        (item) => item.category === "Prescription Medicines"
      );

      setProductsData(filteredProducts);
    }
    if (filterValue === "skin") {
      const filteredProducts = products.filter(
        (item) => item.category === "SKIN CARE"
      );

      setProductsData(filteredProducts);
    }
    if (filterValue === "treatments") {
      const filteredProducts = products.filter(
        (item) => item.category === "Treatments"
      );

      setProductsData(filteredProducts);
    }
    if (filterValue === "women") {
      const filteredProducts = products.filter(
        (item) => item.category === "Womens Care"
      );

      setProductsData(filteredProducts);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProductsData(searchedProducts);
  };

  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Filter by Category</option>
                  <option value="baby">Baby Care</option>
                  <option value="men">Men's Products</option>
                  <option value="prescription">Prescription Medicines</option>
                  <option value="skin">SKIN CARE</option>
                  <option value="treatments">Treatments</option>
                  <option value="women">Womens Care</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6" className="text-end">
              <div className="filter__widget">
                <select>
                  <option>Sort by</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={handleSearch}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="text-center fs-4">No products are found!</h1>
            ) : (
              <ProductsList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
