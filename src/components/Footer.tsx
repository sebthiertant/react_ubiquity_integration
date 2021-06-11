import React from "react";

const Footer = () => {
	const footerItems = [
		"Lorem, ipsum dolor.",
		"Quo, at quia!",
		"Ducimus, iste fugiat!",
		"In, commodi repellat",
		"Molestiae, consequuntur voluptatum.",
	];

	const tagItems = [
		"Insider",
		"Check",
		"Demo",
		"Office",
		"Work",
		"Post",
		"Management",
	];

	return (
		<footer className="main-footer">
			<div className="container main-footer__top">
				<div className="main-footer__widget">
					<p className="main-footer__title">Recent posts</p>
					<ul className="main-footer__list">
						{footerItems.map((item) => {
							return (
								<li className="main-footer__item">
									<a href={item.toLowerCase()} className="main-footer__link">
										{item}
									</a>
								</li>
							);
						})}
					</ul>
				</div>

				<div className="main-footer__widget">
					<p className="main-footer__title">Recent Comments</p>
					<ul className="main-footer__list">
						{footerItems.map((item) => {
							return (
								<li className="main-footer__item">
									<a href={item.toLowerCase()} className="main-footer__link">
										{item}
									</a>
								</li>
							);
						})}
					</ul>
				</div>
				<div className="main-footer__widget">
					<p className="main-footer__title">Tags</p>
					<ul className="main-footer__list">
						{tagItems.map((item) => {
							return (
								<li className="main-footer__item--tags">
									<a
										href={item.toLowerCase()}
										className="main-footer__link--tags"
									>
										{item}
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			</div>

			<div className="container main-footer__bottom"></div>
			{/* manque le séparateur  */}
			<div className="main-footer__copyright">
				© 2019 Ubiquity . All Rights Reserved.
			</div>
		</footer>
	);
};

export default Footer;
