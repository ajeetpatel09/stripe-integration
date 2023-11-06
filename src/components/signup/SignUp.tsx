import style from "./signup.module.css";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSignUpMutation } from "../../redux/api/authSlice";

interface inputType {
  name: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<inputType>();

  const [signup, loading] = useSignUpMutation();

  const onSubmit = async(data: inputType) => {
      try{
          const res = await signup(data);
          console.log(res);
      }catch(err:any){
          console.log(err);
      }
  };


  return (
    <div className={style.parent}>
        <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.child}>
          <label htmlFor="name">Name</label>
          <input 
          {...register('name', {required: true})}
          type="text" name="name" id="name"
          className={errors?.name && 'LoginWarning'}
          placeholder="Enter name" />
          {errors?.name?.type === 'required' && (
              <small className="LoginWarning">Name is required</small>
          )}
        </div>

        <div className={style.child}>
          <label htmlFor="email">Email</label>
          <input
            {...register("email", { required: true })}
            type="text"
            name="email"
            id="email"
            className={errors?.email && "LoginWarning"}
            placeholder="Enter Email"
          />
          {errors?.email?.type === "required" && (
            <small className="LoginWarning">Email is required</small>
          )}
        </div>
        <div className={style.child}>
          <label htmlFor="password">Password</label>
          <input
          {...register('password', {required: true})}
            type="text"
            name="password"
            id="password"
            placeholder="Enter password"
            className={errors?.password && "LoginWarning"}
          />
          {errors?.password?.type === "required" && (
            <small className="LoginWarning">Password is required</small>
          )}
        </div>

        <button type="submit">SignUp</button>
        <h3>
          Already have an account?{" "}
          <NavLink to="/login">
            <span>Login</span>
          </NavLink>
        </h3>
      </form>
    </div>
  );
};

export default SignUp;
