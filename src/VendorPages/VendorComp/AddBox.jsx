import { Form, Formik } from "formik";
import PreaddProduct from "./PreaddProduct";
import {
  greenProdComboAdd,
  greenProdComboUpdate,
} from "../../apis/products/combos";
import { toast } from "react-toastify";
import { useState } from "react";
import Select from "react-select";
import { useQuery } from "@tanstack/react-query";
import { greenProductsFetch } from "../../apis/products/product";
import { greenProdBoxAdd, greenProdBoxUpdate } from "../../apis/products/boxes";

const AddBox = ({ initialValues, onClickClose, allGroupIds }) => {
  const [selectedProd, setSelectedProd] = useState(
    initialValues
      ? {
          label: initialValues?.Product?.name,
          value: initialValues?.Product?.id,
        }
      : null
  );
  const [selectedVariants, setSelectedVariants] = useState(
    initialValues
      ? initialValues?.variantIds?.map((eid) => {
          const variants = initialValues?.Product?.ProdVariations?.find(
            ({ id }) => id == eid
          );
          let label = JSON.parse(variants?.variation || "{}");
          const keys = Object.keys(label);
          label = keys?.map((key) => `${key} : ${label?.[key]}`).join(", ");
          return { label, value: variants?.id };
        })
      : []
  );
  const [menuIsOpen, setMenuIsOpen] = useState({});
  const handleSubmit = async (data) => {
    if (!selectedVariants?.length) return;
    const payload = {
      ...data,
      productId: selectedProd?.value,
      variantIds: selectedVariants?.map(({ value }) => value),
    };
    const res = initialValues
      ? await greenProdBoxUpdate(payload)
      : await greenProdBoxAdd(payload);
    if (res?.error) {
      toast.error(res?.message);
      return;
    }
    toast.success(res);
    onClickClose();
  };
  const { data: allProducts, refetch } = useQuery({
    queryKey: ["greenProductsFetchertyeteye257371771"],
    queryFn: () => greenProductsFetch({}),
  });
  return (
    <section className="add-prod-comp" onClick={onClickClose}>
      <div className="add-prod-main-bx" onClick={(e) => e.stopPropagation()}>
        <div className="top-add-prod-flex-bx">
          <div className="left-add-prod-title-bx">
            <h6>{initialValues ? "Update" : "Add"} Box </h6>
          </div>

          <div className="right-lang-sel-bx-flex">
            <div onClick={onClickClose} className="add-prod-close-btn">
              <ion-icon name="close-outline"></ion-icon>
            </div>
          </div>
        </div>
        <Formik initialValues={initialValues || {}} onSubmit={handleSubmit}>
          {({ handleBlur, handleChange, values, errors, touched, ...rest }) => {
            const product = (!allProducts?.error ? allProducts : [])?.find(
              ({ id }) => selectedProd?.value == id
            );
            const varo = product?.ProdVariations?.map(({ id, variation }) => {
              let label = JSON.parse(variation || "{}");
              const keys = Object.keys(label);
              label = keys?.map((key) => `${key} : ${label?.[key]}`).join(", ");
              return {
                value: id,
                label: label,
              };
            });
            return (
              <Form className="combo-products-comp">
                <div className="right-combo-products-form-bx">
                  <div className="discount-select-flex-bx">
                    <p>Box Size</p>
                    <div className="discount-bx">
                      <select
                        name="size"
                        id="size"
                        value={+values?.size}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      >
                        <option hidden value="">
                          Select Box Size
                        </option>

                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>
                    </div>
                  </div>
                  <div className="discount-select-flex-bx">
                    <p>Select Product</p>
                    <div className="variants-attribute-bx">
                      <Select
                        options={(!allProducts?.error ? allProducts : [])?.map(
                          ({ name, id }) => ({
                            value: id,
                            label: name,
                          })
                        )}
                        value={selectedProd}
                        components={{ NoOptionsMessage: () => {} }}
                        name="productId"
                        id="sizes"
                        onChange={(p) => {
                          setSelectedProd(p);
                          setSelectedVariants([]);
                        }}
                        placeholder={`Please enter product id`}
                        styles={{
                          indicatorSeparator: () => ({
                            display: "none",
                          }),
                          dropdownIndicator: () => ({
                            display: "none",
                          }),
                        }}
                      />
                    </div>
                  </div>
                  <div className="discount-select-flex-bx">
                    <p></p>
                    <div className="variants-attribute-bx">
                      <Select
                        options={varo}
                        components={{ NoOptionsMessage: () => {} }}
                        name={"variantIds"}
                        id="variantIds"
                        isMulti
                        onChange={(v) => {
                          setSelectedVariants(v);
                        }}
                        value={selectedVariants}
                        placeholder={`Please enter Variants`}
                        menuIsOpen={menuIsOpen?.["variantIds"]}
                        onBlur={() => setMenuIsOpen({ ["variantIds"]: false })}
                        onMenuOpen={() =>
                          setMenuIsOpen({ ["variantIds"]: true })
                        }
                        styles={{
                          indicatorSeparator: () => ({
                            display: "none",
                          }),
                          dropdownIndicator: () => ({
                            display: "none",
                          }),
                        }}
                      />
                    </div>
                  </div>
                  <div className="discount-select-flex-bx">
                    <p>Box Price</p>
                    <div className="user-edit-inpt">
                      <input
                        type="number"
                        name="price"
                        id="price"
                        value={values?.price}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onWheel={(e) => e.currentTarget.blur()}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="prod-add-can-flex-btn prod-add-can-flex-btn31 ">
                  <button
                    type="submit"
                    className="prod-add-del-btn pb-btn upld-can-prod"
                  >
                    Publish
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </section>
  );
};

export default AddBox;
