export default function Orden({ orden }) {
	const { id, nombre, total, pedido } = orden;
	return (
		<div className="border p-10 space-y-5">
			<h3 className="text-2xl font-black">Panel de Administración</h3>
			<p className="text-2xl my-10">Administra las ordenes</p>
		</div>
	);
}
