import {useForm} from 'react-hook-form';
import "./register.css";

const Register = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      address: {
        street1: "",
        street2: ""
      }
    }
  });
  const {register, handleSubmit, formState, watch} = form;
  const {errors} = formState;

  const onSubmit = (data) => {
    console.log('form data', data);
  }

  return (
    <div className="form-container">
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <h1>Registration</h1>

        <label htmlFor="name">Name</label>
        <input type="text" id="name" {...register("name", {required: {
          value: true,
          message: "Your name is required"
        }})} placeholder="Enter your name" />
        <p className='error'>{errors.name?.message}</p>

        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email", {required: {
          value: true,
          message: "Your email is required"
        }, pattern: {
          value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          message: "Invalid email format"
        }})} placeholder="Enter your email" />
        <p className='error'>{errors.email?.message}</p>

        <label htmlFor="street1">Street1</label>
        <input type="text" id="street1" {...register("address.street1")} placeholder="Enter your Street" />

        <label htmlFor="street2">Street2(optional)</label>
        <input type="text" id="street2" {...register("address.street2")} placeholder="Enter your Street" />
        

        <button type="submit">Register now</button>
      </form>
    </div>
  );
};

export default Register;