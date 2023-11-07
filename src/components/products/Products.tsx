import {useEffect} from 'react';
import style from "./products.module.css";
import { useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "../../redux/api/productSlice";
import { useCheckoutMutation } from "../../redux/api/stripeSlice";

const Products = () => {
  const navigate = useNavigate();
  const { data } = useGetProductsQuery({});
  // console.log(data.products);
  const [checkout] = useCheckoutMutation();

  const handleCheckout = async(id: any) => {
    // console.log(id);
    
    try {
      const body = {productId: id}
      const res:any = await checkout(body);
      console.log(res);
      if('data' in res){
        // window.open(res.data.sessionUrl);
        window.location.href= res.data.sessionUrl;
      }
    } catch (error:any) {
      console.log(error);
    }
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get('status');
    const message = urlParams.get('message');

    if (status === 'success') {
      // Payment was successful, handle success message and close Stripe Checkout
      alert(message); // Show a success message or update your UI
    } else if (status === 'cancel') {
      // Payment was canceled, handle cancellation message
      alert(message); // Show a cancellation message or update your UI
    } else {
      // Handle other cases
    }
  }, []);

  return (
    <>
      <h1>Products</h1>
      <div className={style.transactions}>
        <button onClick={() => navigate("/transactions")}>
          Check your Transactions
        </button>
      </div>
      <div className={style.parent}>
        <h2>Subscription Plans</h2>
        {data?.products?.map((cur: any) => {
          return (
            <div className={style.child} key={cur._id}>
              <div className={style.headerDiv}>
                <div>
                  <h3>{cur.name}</h3>
                  <h3>{cur.price}/year</h3>
                </div>
                <div className={style.btnDiv} onClick={() => handleCheckout(cur._id)}>
                <button>Purchase</button>
                </div>
              </div>
              <h4>{cur.recurring ? "One time" : "Recurring"}</h4>
              <p>Non-refundable, annual billing</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
