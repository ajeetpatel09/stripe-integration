import style from "./login.module.css";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/api/authSlice";

interface inputType {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<inputType>();

  const [login, loading] = useLoginMutation();
  const onSubmit = async(data: inputType) => {
    try {
        const res = await login(data);
        console.log(res);
        
    } catch (error:any) {
        console.log(error);
        
    }
  };

  return (
    <div className={style.parent}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            {...register("password", { required: true })}
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

        <button type="submit">Login</button>
        <h3>
          Don't have an account?{" "}
          <NavLink to="/signup">
            <span>Sign Up</span>
          </NavLink>
        </h3>
      </form>
    </div>
  );
};

export default Login;
