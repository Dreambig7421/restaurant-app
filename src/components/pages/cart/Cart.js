import { Button, Input } from 'antd';

import TitleBar from './TitleBar';
import Product from './Product';

import './Cart.css';

const PRODUCTS = [
  {
    id: 1,
    title: 'Pepperoni Pizza',
    toppings: 'pepperoni, mozzarella, tomato sauce',
    price: 12.99,
    quantity: 2,
    totalPrice: 25.98,
    imageUrl:
      'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8UGVwcGVyb25pJTIwUGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 2,
    title: 'Hamburger',
    toppings: 'beef patty, lettuce, tomato, cheese, ketchup, mustard',
    price: 8.99,
    quantity: 1,
    totalPrice: 8.99,
    imageUrl:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8SGFtYnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 3,
    title: 'Margherita Pizza',
    toppings: 'mozzarella, tomato sauce, basil',
    price: 10.99,
    quantity: 1,
    totalPrice: 10.99,
    imageUrl:
      'https://images.unsplash.com/photo-1564936281291-294551497d81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8TWFyZ2hlcml0YSUyMFBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 4,
    title: 'Cheeseburger',
    toppings: 'beef patty, lettuce, tomato, cheese, ketchup, mustard',
    price: 9.99,
    quantity: 2,
    totalPrice: 19.98,
    imageUrl:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2hlZXNlYnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 5,
    title: 'Spaghetti Bolognese',
    toppings: 'spaghetti, beef bolognese sauce, parmesan cheese',
    price: 14.99,
    quantity: 1,
    totalPrice: 14.99,
    imageUrl:
      'https://images.unsplash.com/photo-1622973536968-3ead9e780960?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8U3BhZ2hldHRpJTIwQm9sb2duZXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
];

const Cart = () => {
  return (
    <div className='cart'>
      <div className='cart__header'>
        <h2>Your Shopping Cart</h2>
      </div>

      <section className='cart__main'>
        <TitleBar />

        <div className='products'>
          {PRODUCTS.map(product => (
            <Product {...product} key={product.id} />
          ))}
        </div>

        <div className='actions'>
          <div className='left'>
            <Button type='primary' className='primary-btn'>
              Continue Shopping
            </Button>

            <p>Order special instruction</p>

            <Input.TextArea rows={4} />
          </div>

          <div className='right'>
            <h4>
              Subtotal <span>$930.00</span>
            </h4>

            <p>Taxes and shipping calculated at cart</p>

            <Button type='primary' className='primary-btn'>
              Check Out
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
