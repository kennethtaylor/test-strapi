import styled from "styled-components";
import { useEffect, useState, useCallback } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const PostFilters = () => {
	const [categories, setCategories] = useState([]);
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	// Get a new searchParams string by merging the current
	// searchParams with a provided key/value pair
	const createQueryString = useCallback(
		(name, value) => {
			const params = new URLSearchParams(searchParams);
			params.set(name, value);

			return params.toString();
		},
		[searchParams]
	);

	const getCategories = async () => {
		const res = await fetch(`${process.env.APP_URL}/api/categories`);
		const categories = await res.json();

		setCategories(categories.data);
	};

	useEffect(() => {
		// Load all our reports
		getCategories();
	}, []);

	return (
		<FilterContainer>
			<FieldWrapper>
				<Filter
					defaultValue="default"
					onChange={(e) =>
						router.push(
							pathname +
								"?" +
								createQueryString("category", e.target.value)
						)
					}
					name="category"
				>
					<option value="default" disabled hidden>
						Category
					</option>
					<option value="">All Categories</option>
					{categories.map((cat) => {
						return (
							<option key={cat.id} value={cat.attributes.Name}>
								{cat.attributes.Name}
							</option>
						);
					})}
				</Filter>
			</FieldWrapper>
			<FieldWrapper>
				<Filter
					onChange={(e) =>
						router.push(
							pathname +
								"?" +
								createQueryString("sort", e.target.value)
						)
					}
					defaultValue="default"
					name="sort"
				>
					<option value="default" disabled hidden>
						Sort By
					</option>
					<option value="desc">Newest</option>
					<option value="asc">Oldest</option>
				</Filter>
			</FieldWrapper>
			<Filter>
				<option>Date</option>
			</Filter>
		</FilterContainer>
	);
};

export default PostFilters;

const FilterContainer = styled.div`
	display: flex;
	gap: 1rem;
	@media only screen and (max-width: 655px) {
		flex-direction: column;
		gap: 1.5rem;
	}
`;
const Filter = styled.select`
	flex: 1 1 auto;
	min-width: 155px;
	background: transparent;
	text-align: center;
	border: 0.5px solid var(--white);
	font-family: var(--sans-serif);
	letter-spacing: 0.1rem;
	font-size: var(--nav);
	font-weight: 400;
	text-transform: uppercase;
	border-radius: 1.5rem;
	padding: 0.5rem 1rem;
	color: var(--white);
	-webkit-appearance: none;

	option {
		color: var(--darkblue);
	}
`;

const FieldWrapper = styled.div`
	position: relative;

	&::after {
		content: "";
		position: absolute;
		right: 1rem;
		top: 50%;
		transform: translate(0, -50%);
		width: 0.3125rem;
		height: 0.3125rem;
		background-color: var(--offwhite);
		border-radius: 50%;
	}

	${Filter} {
		padding: 0.5rem 2rem 0.5rem 1rem;
	}
`;
