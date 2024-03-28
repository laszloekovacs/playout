function App() {
	return (
		<main className='container mx-auto p-2'>
			<h1 className='text-3xl text-lime-600 font-semibold mb-4'>App</h1>

			<div className='flex gap-2 sm:flex-nowrap flex-wrap mb-3'>
				<div className='sm:w-4/12 bg-lime-600 text-orange-100 w-full'>
					<p className='text-center p-1'>hello world</p>
				</div>
				<div className='sm:w-8/12 bg-lime-600 text-orange-100 w-full'>
					<p className='text-center p-1'>hello again</p>
				</div>
			</div>

			<div className='flex gap-2 sm:flex-nowrap flex-wrap'>
				<div className='bg-lime-600 text-orange-100 w-full'>
					<p className='p-1 text-center'>harsh</p>
				</div>
			</div>
		</main>
	)
}

export default App
