const NavBar = () => {
	return (
		<>
			<nav className="flex flex-wrap lg:gap-10 xxs:gap-3 xxs:w-full lg:w-auto text-center">
				<li className="xxs:w-full lg:w-auto self-center text-lg list-none uppercase">
					<a className="pt-2.5 pb-2.5 lg:hover:border-b-4" href="#">home</a>
				</li>
				<li className="xxs:w-full lg:w-auto self-center text-lg list-none uppercase">
					<a className="pt-2.5 pb-2.5 lg:hover:border-b-4" href="#">about</a>
				</li>
				<li className="xxs:w-full lg:w-auto self-center text-lg list-none uppercase">
					<a className="pt-2.5 pb-2.5 lg:hover:border-b-4" href="#">causes</a>
				</li>
				<li className="xxs:w-full lg:w-auto self-center text-lg list-none uppercase">
					<a className="pt-2.5 pb-2.5 lg:hover:border-b-4" href="#">gallery</a>
				</li>
				<li className="xxs:w-full lg:w-auto self-center text-lg list-none uppercase">
					<a className="pt-2.5 pb-2.5 lg:hover:border-b-4" href="#">contact</a>
				</li>
			</nav>
		</>
	)
};

export default NavBar;