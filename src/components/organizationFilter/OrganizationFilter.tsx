import React, { useEffect, useRef } from "react";
import { Formik } from "formik";
import "./organizationFilter.scss";
interface FilterProps {
  isOpen: boolean;
  toggle: () => void;
}

const OrganizationFilter = ({ isOpen, toggle }: FilterProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef(null);

  // const onClickOutside = (e: {
  //   target: any;
  //   preventDefault: () => void;
  //   stopPropagation: () => void;
  // }) => {
  //   const element = e.target;
  //   console.log("are you here", element);
  //   if (modalRef.current && !modalRef.current.contains(element)) {
  //     e.preventDefault();
  //     e.stopPropagation();
  //     console.log("i am here");
  //     toggle();

  //     console.log("is toogle working");
  //   }
  // };

  // useEffect(() => {
  //   document.body.addEventListener("click", onClickOutside);
  //   return () => {
  //     document.removeEventListener("click", onClickOutside);
  //   };
  // }, []);

  return (
    <>
      {isOpen ? (
        <div className="filter-container">
          <Formik
            initialValues={{
              email: "",
              organization: "",
              status: "",
              date: "",
              username: "",
              phone: "",
            }}
            // validate={(values) => {
            //   const errors = {};
            //   if (!values.email) {
            //     errors.email = "Required";
            //   } else if (
            //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            //   ) {
            //     errors.email = "Invalid email address";
            //   }
            //   return errors;
            // }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <div ref={modalRef}>
                <form onSubmit={handleSubmit}>
                  <div className="organization">
                    <label>Organization</label>
                    <input
                      type="text"
                      ref={inputRef}
                      name="organization"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.organization}
                    />
                    {errors.organization &&
                      touched.organization &&
                      errors.organization}
                  </div>
                  <div className="username">
                    <label>Username</label>
                    <input
                      type="text"
                      placeholder="User"
                      name="username"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.username}
                    />
                    {errors.username && touched.username && errors.username}
                  </div>

                  <div className="email">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {errors.email && touched.email && errors.email}
                  </div>
                  <div className="date">
                    <label>Date</label>
                    <input
                      type="date"
                      placeholder="Date"
                      name="date"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.date}
                    />
                    {errors.date && touched.date && errors.date}
                  </div>
                  <div className="phone">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                    />
                    {errors.phone && touched.phone && errors.phone}
                  </div>
                  <div className="status">
                    <label>Status</label>
                    <select>
                      <option>One</option>
                      <option>Two</option>
                      <option>Three</option>
                      <option>Four</option>
                    </select>
                    {errors.status && touched.status && errors.status}
                  </div>
                  <div className="btn">
                    <button
                      className="btn-white"
                      onClick={toggle}
                      disabled={isSubmitting}
                    >
                      Reset
                    </button>
                    <button
                      className="btn-green"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Filter
                    </button>
                  </div>
                </form>
              </div>
            )}
          </Formik>
        </div>
      ) : null}
    </>
  );
};

export default OrganizationFilter;
