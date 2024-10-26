import React from "react";

function article_1() {
	return {
		date: "7 May 2024",
		title: "The Benefits of Cloud Computing",
		description:
			"Cloud computing has transformed business operations by offering key advantages such as cost efficiency, scalability, and enhanced collaboration. It eliminates the need for significant upfront hardware investments with a pay-as-you-go model, allowing businesses to manage budgets effectively. Companies can easily scale resources based on demand, supporting growth and fluctuating workloads. Additionally, cloud computing enables remote access to data and applications, boosting productivity among team members. With robust security measures, including encryption and regular backups, cloud providers often surpass in-house capabilities. Automatic updates ensure access to the latest features without manual intervention, while optimized resource usage promotes environmental sustainability. Overall, cloud computing is essential for businesses looking to streamline operations and foster growth.",
		keywords: [
			"The Benefits of Cloud Computing",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "7 June 2024",
		title: "Artificial Intelligence in Healthcare",
		description:
			"Artificial Intelligence (AI) is revolutionizing healthcare by improving patient outcomes, streamlining operations, and enhancing decision-making processes. From diagnostic tools to predictive analytics, AI technologies are increasingly integrated into various facets of healthcare, leading to innovative solutions that benefit patients and providers alike.Enhancing Diagnostics:One of the most significant applications of AI in healthcare is in diagnostics. Machine learning algorithms analyze vast amounts of medical data, enabling quicker and more accurate disease detection. For example, AI systems can interpret medical imaging, such as X-rays and MRIs, with precision comparable to that of expert radiologists. Studies have shown that AI can identify conditions like pneumonia, breast cancer, and diabetic retinopathy more effectively than traditional methods, leading to earlier interventions and improved patient outcomes.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
