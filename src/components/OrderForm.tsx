import { useId } from 'react';

export default function OrderForms() {
  const selectId = useId();

  const handleOrder = (formData: FormData) => {
    const delivery = formData.get('delivery') as string;
    console.log('Delivery:', delivery);
  };

  return (
    <form action={handleOrder}>
      <label htmlFor={selectId}>Preferred delivery time</label>
      <select name="deliveryTime" id={selectId} defaultValue="">
        <option value="">-- Choose delivery time --</option>
        <option value="morning">Morning (8:00–12:00)</option>
        <option value="afternoon">Afternoon (12:00–16:00)</option>
        <option value="evening">Evening (16:00–20:00)</option>
      </select>

      <button type="submit">Place order</button>
    </form>
  );
}
