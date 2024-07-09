import React from 'react';

function Checkout() {
  return (
    <div>
      <h2>Checkout</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <br />
        <label htmlFor="address">Address:</label>
        <textarea id="address" name="address" rows="4" />
        <br />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;

