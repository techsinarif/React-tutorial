import {useForm} from 'react-hook-form';
import "./register.css";

const Register = () => {
  const form = useForm();
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

        <label htmlFor="password">Password</label>
        <input type="password" id="password" {...register("password", {required: {
          value: true,
          message: "Your password is required"
        }})} placeholder="Enter your password" />
        <p className='error'>{errors.password?.message}</p>

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" {...register("confirmPassword", {required : {
          value: true,
          message: "Confirm password is required"
        }, validate: (fieldValue) => {
          if(fieldValue !== watch("password")){
            return "Password does not match!"
          }
        }})} placeholder="Confirm your password" />
        <p className='error'>{errors.confirmPassword?.message}</p>

        <button type="submit">Register now</button>
      </form>
    </div>
  );
};

export default Register;