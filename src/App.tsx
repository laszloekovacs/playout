function App() {
	return (
		<main className='p-2'>
			<div className='flex flex-wrap justify-between items-center mb-3'>
				<h1 className='text-3xl text-lime-600 font-semibold'>App</h1>
				<h2 className='text-1xl'>something</h2>
			</div>

			<div className='flex gap-2 sm:flex-nowrap flex-wrap mb-3'>
				<div className='sm:w-4/12 bg-lime-600 text-orange-100 w-full'>
					<p className='text-center p-1'>hello world</p>
				</div>
				<div className='sm:w-8/12 bg-lime-600 text-orange-100 w-full'>
					<p className='text-center p-1'>hello again</p>
				</div>
			</div>

			<div className='flex gap-2 sm:flex-nowrap flex-wrap'>
				<div className='bg-lime-600 text-orange-100 w-full sm:w-4/12'>
					<p className='p-1 text-center'>harsh</p>
				</div>

				<div className='w-full sm:w-8/12'>
					<div className='flex gap-2 sm:flex-nowrap flex-wrap'>
						<div className='sm:w-4/12 w-full bg-slate-200'>
							<p className='p-1 text-center'>another sub</p>
						</div>
						<div className='sm:x-4/12 w-full bg-slate-200'>
							<p className='p-1 text-center'>sub thing</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default App
