import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import "./Shipping.css"

const Shipping = () => {
     const { register, handleSubmit,formState: { errors } } = useForm();
     const {user}=useAuth();
  const onSubmit = data => {
      console.log(data);
    }
    return (
        <div>
           <div>
                <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
     
            <input placeholder="Name" className="shipping-form" defaultValue={user.displayName} {...register("name")} />
            <input placeholder="E-mail" className="shipping-form"  defaultValue={user.email} {...register("email", { required: true })} />
             <input placeholder="address" className="shipping-form" {...register("address", { required: true })} />
              <input placeholder="City" className="shipping-form" {...register("city", { required: true })} />
               <input placeholder="Phone" className="shipping-form" {...register("Phone", { required: true })} />
            {errors.email && <span className="error">This field is required</span>}
      
            <input className="shipping-form" type="submit" />
    </form>
           </div>
        </div>
    );
};

export default Shipping;
