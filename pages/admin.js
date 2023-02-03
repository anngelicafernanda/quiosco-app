import AdminLayout from 'layout/AdminLayout';

export default function admin() {
	return (
		<AdminLayout pagina={'Admin'}>
			<h1 className="text-4xl font-black">panel de Administracion</h1>
			<p className="text-2xl my-10">Administra las Ordenes</p>
		</AdminLayout>
	);
}