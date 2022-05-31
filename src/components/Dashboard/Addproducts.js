import React from "react";
import { useForm } from "react-hook-form";

const Addproducts = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <div className="ml-14">
        <form onSubmit={handleSubmit(onSubmit)}>
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
  );
};

export default Addproducts;
