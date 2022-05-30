import React from "react";
import { useForm } from "react-hook-form";

const Footer = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="px-20 py-10" style={{ background: "#FBD062" }}>
      <div className="mx-10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <h1 className="text-2xl mb-10">
              Let us handle your project, professionally.
            </h1>
            <p>
              With well written codes, we build amazing apps for all platforms,
              mobile and web apps in general.
            </p>
          </div>
          <div className="ml-14">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                placeholder="email"
                className="input input-bordered mt-6 rounded-lg w-full"
                {...register("email")}
              />
              <br />
              <input
                placeholder="name"
                className="input input-bordered mt-6 rounded-lg w-full"
                {...register("name")}
              />
              <br />
              <input
                placeholder="message"
                className="input input-bordered mt-6 rounded-lg w-full h-44"
                {...register("message")}
              />
              <br />
              <input
                className="input input-bordered mt-6 btn btn-primary rounded-lg px-10"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
      <small className="text-center">copyright&copy;2022</small>
    </div>
  );
};

export default Footer;
