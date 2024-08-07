function OrderStatus({ items }) {
  return (
    <div>
      {items.map((elem) => {
        return (
          <p>
            Заказ: № {elem.orderId}: {elem.status}
          </p>
        );
      })}
    </div>
  );
}

export default OrderStatus;
