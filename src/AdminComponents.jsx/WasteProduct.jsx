import React, { useState, useEffect } from "react";
import WasteProdData from "./WasteProdData";
import WasteProdEdit from "./WasteProdEdit";
import {
  adminkabadProductDelete,
  adminkabadProductFetch,
} from "../apis/admins/kabadProducts";
import { useQuery } from "@tanstack/react-query";
import { filteredData, search } from "../lib/array";
import { IoDuplicate } from "react-icons/io5";
import { adminAriaFetch } from "../apis/admins/arias";

const WasteProduct = () => {
  const [wasteProd, setWasteProd] = useState(WasteProdData);
  const [prodEdit, setProdEdit] = useState(false);
  const [isEdit, setisEdit] = useState(false);
  const [editFormValues, setEditFormValues] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState([]);
  const [states, setStates] = useState([]);
  const [cites, setCites] = useState([]);
  const [city, setCity] = useState("");
  const { data: products, refetch } = useQuery({
    queryKey: ["adminkabadProductFetch"],
    queryFn: () => adminkabadProductFetch(),
  });
  const { data: adminArias } = useQuery({
    queryKey: ["adminariafetch--1"],
    queryFn: () => adminAriaFetch(),
  });

  const handleFilterByAria = (e) => {
    const { name, value } = e.target;
    let newFilters;
    if (!value) {
      newFilters = filters?.filter((f) => f?.id != name);
    } else {
      const exist = filters?.find(({ id }) => id == name);
      const fn = (e) => {
        return e?.[name] == value;
      };
      if (exist) {
        newFilters = filters.map((f) => {
          if (f?.id == name) {
            return {
              ...f,
              fn,
            };
          } else {
            return f;
          }
        });
      } else {
        newFilters = [
          ...filters,
          {
            id: name,
            fn,
          },
        ];
      }
    }
    if (name == "state") {
      newFilters = newFilters?.filter(({ id }) => id != "city");
      const cities = getCities(value, adminArias);
      setCites(cities);
    } else {
      setCity(value);
    }

    setFilters(newFilters);
  };
  const getStates = (res) =>
    [...new Set(res?.map((e, i) => e?.state))].map((name, i) => ({
      id: i,
      name,
    }));
  const getCities = (state, res) => {
    return [
      ...new Set(res?.filter((e) => e?.state == state)?.map((e, i) => e?.city)),
    ].map((name, i) => ({ id: i, name }));
  };

  useEffect(() => {
    if (adminArias?.error || !adminArias || !adminArias?.length) {
      return;
    }
    const state = getStates(adminArias);
    setStates(state);
  }, [adminArias]);

  return (
    <>
      <section className="all-user-data-comp">
        <div className="all-user-data-main-box">
          <div className="user-det-top-flex-box user-det-top-flex-box4">
            <h6>Waste Products</h6>

            <div className="right-user-filter-data-flex-box waste-prod-filt-flex">
              <div className="left-waste-prod-filt-bx">
                <div className="user-data-search-box">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search..."
                    autoComplete="off"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value.trimStart())}
                  />
                </div>

                <div className="user-type-sel-box user-data-search-box">
                  <select
                    onChange={handleFilterByAria}
                    name="state"
                    id="user-type-data"
                  >
                    <option value="">All States</option>
                    {states?.map(({ id, name }) => (
                      <option key={id} value={name}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="user-type-sel-box user-data-search-box">
                  <select
                    value={city}
                    onChange={handleFilterByAria}
                    name="city"
                    id="user-type-data"
                  >
                    <option value="">All Cities</option>
                    {cites?.map(({ id, name }) => (
                      <option key={id} value={name}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>
                {/* 
                <div className="user-type-sel-box  user-data-search-box user-type-sel-box3">
                  <select name="user-type-data" id="user-type-data">
                    <option value="1">Today</option>
                    <option value="1">Last Week</option>
                    <option value="1">Last Monthly </option>
                  </select>
                </div>

                <div className="user-data-search-btn">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </div> */}
              </div>
            </div>

            <div
              onClick={() => {
                setProdEdit(true);
                setisEdit(false);
              }}
              className="add-product-btn"
            >
              Add Product
            </div>
          </div>

          <div className="all-user-table waste-prod-table">
            <table>
              <thead>
                <tr>
                  <th>SNO.</th>
                  <th>Product Name</th>
                  <th>Product Image</th>
                  <th>Area</th>
                  <th>Retail Price</th>
                  <th>Bulk Price</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {!products?.error
                  ? search(filteredData(products, filters), searchQuery)?.map(
                      (
                        {
                          bulkEndWeight,
                          bulkStartWeight,
                          retailEndWeight,
                          retailStartWeight,
                          bulkPrice,
                          retailPrice,
                          productImage,
                          productName,
                          id,
                          state,
                          city,
                          ...rest
                        },
                        i
                      ) => {
                        return (
                          <>
                            <tr key={i}>
                              <td>
                                {" "}
                                <span> {i + 1}</span>{" "}
                              </td>
                              <td>
                                {" "}
                                <span> {productName}</span>{" "}
                              </td>
                              <td>
                                {" "}
                                <img src={productImage} alt="" />{" "}
                              </td>
                              <td>
                                <p>
                                  {city} <span>{state}</span>
                                </p>
                              </td>
                              <td>
                                {" "}
                                <span> {retailPrice}</span>{" "}
                              </td>
                              <td>
                                {" "}
                                <span> {bulkPrice}</span>{" "}
                              </td>

                              <td>
                                <div className="edit-remove-flex">
                                  <button
                                    onClick={() => {
                                      setProdEdit(true);
                                      setisEdit(true);
                                      setEditFormValues({
                                        bulkEndWeight,
                                        bulkStartWeight,
                                        retailEndWeight,
                                        retailStartWeight,
                                        bulkPrice,
                                        retailPrice,
                                        productImage,
                                        productName,
                                        id,
                                        state,
                                        city,
                                        ...rest,
                                      });
                                    }}
                                  >
                                    <i class="fa-solid fa-pen-to-square"></i>
                                  </button>

                                  <button
                                    onClick={async () => {
                                      await adminkabadProductDelete(id);
                                      refetch();
                                    }}
                                  >
                                    <i class="fa-solid fa-trash"></i>
                                  </button>
                                  <button
                                    onClick={() => {
                                      setisEdit(false);
                                      setProdEdit(true);
                                      setEditFormValues({
                                        bulkEndWeight,
                                        bulkStartWeight,
                                        retailEndWeight,
                                        retailStartWeight,
                                        bulkPrice,
                                        retailPrice,
                                        productImage,
                                        productName,
                                        id,
                                        state,
                                        city,
                                      });
                                    }}
                                  >
                                    <IoDuplicate />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          </>
                        );
                      }
                    )
                  : null}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {prodEdit ? (
        <WasteProdEdit
          isEdit={isEdit}
          editFormValues={editFormValues}
          refetch={refetch}
          onclickEditClose={() => {
            setProdEdit(false);
            setEditFormValues(null);
          }}
        />
      ) : null}
    </>
  );
};

export default WasteProduct;
