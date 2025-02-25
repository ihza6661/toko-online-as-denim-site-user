import { useEffect, useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { toast } from 'react-toastify';

const OrderDetail = () => {
  const { authFetch } = useContext(AppContext);
  const { id: orderId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await authFetch(`/api/user/user_orders/${orderId}`);
        const data = await response.json();
        if (response.ok) {
          setOrder(data);
        } else {
          console.error('Failed to fetch order:', data.message);
        }
      } catch (error) {
        console.error('Error fetching order:', error);
      }
    };

    fetchOrder();
  }, [authFetch, orderId]);

  if (!order) {
    return <p className="text-center mt-10">Memuat detail pesanan...</p>;
  }

  const copyTrackingNumber = () => {
    if (order.shipment?.tracking_number) {
      navigator.clipboard.writeText(order.shipment.tracking_number);
      toast.success("Nomor resi berhasil disalin");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Order Header */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Detail Pesanan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="text-lg">
              <span className="font-semibold">No. Order:</span> {order.order_number}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Tanggal:</span>{' '}
              {format(new Date(order.created_at), 'dd MMM yyyy HH:mm', { locale: id })}
            </p>
          </div>
          <div>
            <p className="text-lg">
              <span className="font-semibold">Status:</span> {order.status}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Total:</span> Rp {Number(order.total_amount).toLocaleString('id-ID')}
            </p>
          </div>
        </div>
      </div>

      {/* Shipment Details */}
      {order.shipment && (
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-4">Detail Pengiriman</h3>
          <div className="space-y-2">
            <p className="text-lg">
              <span className="font-semibold">Kurir:</span> {order.shipment.courier}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Layanan:</span> {order.shipment.service}
            </p>
            <p className="text-lg flex items-center">
              <span className="font-semibold">Nomor Resi:</span>
              {order.shipment.tracking_number ? (
                <span className="ml-2 flex items-center">
                  {order.shipment.tracking_number}
                  <button
                    onClick={copyTrackingNumber}
                    className="ml-2 px-2 py-1 bg-blue-500 text-white rounded text-xs"
                  >
                    Copy
                  </button>
                </span>
              ) : (
                <span className="ml-2">Belum tersedia</span>
              )}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Biaya Pengiriman:</span> Rp {Number(order.shipment.shipping_cost).toLocaleString('id-ID')}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Status Pengiriman:</span> {order.shipment.status}
            </p>
          </div>
        </div>
      )}

      {/* Order Items */}
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-2xl font-semibold mb-4">Produk Pesanan</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 text-left">Produk</th>
                <th className="border p-3 text-left">Harga</th>
                <th className="border p-3 text-left">Qty</th>
                <th className="border p-3 text-left">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {order.order_items.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="border p-3">{item.product.product_name}</td>
                  <td className="border p-3">Rp {Number(item.price).toLocaleString('id-ID')}</td>
                  <td className="border p-3">{item.qty}</td>
                  <td className="border p-3">Rp {Number(item.price * item.qty).toLocaleString('id-ID')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
