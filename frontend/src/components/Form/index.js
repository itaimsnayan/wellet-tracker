import React, { useState } from "react";
import CheckboxFeild from "./checkboxFeild";
import DateFeild from "./dateFeild";
import FileFeild from "./FileFeild";
import RadioFeild from "./radioFeild";
import SelectDropdownFeild from "./selectDropdownFeilds";
import SelectFeild from "./selectFeild";
import TextAreaFeild from "./textAreaFeild";
import TextFeild from "./textFeild";

function FormContainer({
  layout,
  onCancel,
  onSubmit,
  showCancelBtn = true,
  submitBtnTitle = "Add",
  cancelBtnTitle = "Cancel",
  defaultData = {},
}) {
  const [formdata, setFormdata] = useState(defaultData);
  return (
    <div className="bg-white">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(formdata);
        }}
      >
        <div className="row mx-auto">
          {layout?.map((d, i) => {
            const {
              type,
              containerClass = "col-sm-12 col-md-6 col-lg-3",
              inputClass,
            } = d;
            return (
              <React.Fragment key={i}>
                {(type === "text" ||
                  type === "email" ||
                  type === "number" ||
                  type === "password") && (
                  <div className={`mt-3 ${containerClass}`}>
                    <TextFeild
                      inputClass={inputClass}
                      formdata={formdata}
                      setFormdata={setFormdata}
                      data={d}
                    />
                  </div>
                )}

                {type === "select" && (
                  <div className={`mt-3 ${containerClass}`}>
                    <SelectFeild
                      inputClass={inputClass}
                      formdata={formdata}
                      setFormdata={setFormdata}
                      data={d}
                    />
                  </div>
                )}

                {type === "radio" && (
                  <div className={`mt-3 ${containerClass}`}>
                    <RadioFeild
                      formdata={formdata}
                      setFormdata={setFormdata}
                      data={d}
                    />
                  </div>
                )}

                {type === "checkbox" && (
                  <div className={`mt-3 ${containerClass}`}>
                    <CheckboxFeild
                      formdata={formdata}
                      setFormdata={setFormdata}
                      data={d}
                    />
                  </div>
                )}

                {type === "file" && (
                  <div className={`mt-3 ${containerClass}`}>
                    <FileFeild
                      inputClass={inputClass}
                      formdata={formdata}
                      setFormdata={setFormdata}
                      data={d}
                    />
                  </div>
                )}

                {type === "date" && (
                  <div className={`mt-3 ${containerClass}`}>
                    <DateFeild
                      inputClass={inputClass}
                      formdata={formdata}
                      setFormdata={setFormdata}
                      data={d}
                    />
                  </div>
                )}

                {type === "textarea" && (
                  <div className={`mt-3 ${containerClass}`}>
                    <TextAreaFeild
                      inputClass={inputClass}
                      formdata={formdata}
                      setFormdata={setFormdata}
                      data={d}
                    />
                  </div>
                )}

                {type === "selectdropdown" && (
                  <div className={`mt-3 ${containerClass}`}>
                    <SelectDropdownFeild
                      inputClass={inputClass}
                      formdata={formdata}
                      setFormdata={setFormdata}
                      data={d}
                    />
                  </div>
                )}
              </React.Fragment>
            );
          })}

          <div className="col-12 mt-3 text-right">
            {showCancelBtn && (
              <button
                className="btn btn-danger px-4 me-3"
                type="button"
                onClick={() => onCancel()}
              >
                {cancelBtnTitle}
              </button>
            )}
            <button className="btn btn-primary px-4" type="submit">
              {submitBtnTitle}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormContainer;
