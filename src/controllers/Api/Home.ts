


class Home {
	public static index(req, res, next): any {
		return res.json({
			message: 'Something cool:D'
		});
	}
}

export default Home;
