import { Form, Formik } from "formik";
import PreaddProduct from "./PreaddProduct";
import {
  greenProdComboAdd,
  greenProdComboUpdate,
} from "../../apis/products/combos";
import { toast } from "react-toastify";

const AddCombo = ({ initialValues, onClickClose, allGroupIds }) => {
  const handleSubmit = async ({ groupIds, ...data }) => {
    if (!groupIds?.length) return;
    const res = initialValues
      ? await greenProdComboUpdate({ groupIds, ...data })
      : await greenProdComboAdd({ groupIds, ...data });
    if (res?.error) {
      toast.error(res?.message);
      return;
    }
    toast.success(res);
    onClickClose();
  };
  return (
    <section className="add-prod-comp" onClick={onClickClose}>
      <div className="add-prod-main-bx" onClick={(e) => e.stopPropagation()}>
        <div className="top-add-prod-flex-bx">
          <div className="left-add-prod-title-bx">
            <h6>{initialValues ? "Update" : "Add"} Combo </h6>
          </div>

          <div className="right-lang-sel-bx-flex">
            <div onClick={onClickClose} className="add-prod-close-btn">
              <ion-icon name="close-outline"></ion-icon>
            </div>
          </div>
        </div>
        <Formik initialValues={initialValues || {}} onSubmit={handleSubmit}>
          {({ handleBlur, handleChange, values, errors, touched, ...rest }) => {
            return (
              <Form className="combo-products-comp">
                <div className="combo-products-flex-bx">
                  <h6>
                    Select Group <br /> Products
                  </h6>

                  <div className="right-combo-products-form-bx">
                    <PreaddProduct
                      initialIds={initialValues?.groupIds}
                      allGroupIds={allGroupIds}
                      value={values?.groupIds}
                      onChange={(products) => {
                        let ids = products?.map(({ id }) => id);
                        // ids = JSON.stringify(ids);
                        handleChange({
                          target: { name: "groupIds", value: ids },
                        });
                        handleBlur({
                          target: { name: "groupIds", value: ids },
                        });
                      }}
                    />

                    <div className="discount-select-flex-bx">
                      <div className="discount-bx">
                        <select
                          name="groupDiscount"
                          id="Combodiscount"
                          value={+values?.groupDiscount}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                        >
                          <option hidden value="">
                            Select Combo Discount
                          </option>

                          <option value="1">Combo Discount 1%</option>
                          <option value="2">Combo Discount 2%</option>
                          <option value="3">Combo Discount 3%</option>
                          <option value="4">Combo Discount 4%</option>
                          <option value="5">Combo Discount 5%</option>
                        </select>
                      </div>
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

export default AddCombo;