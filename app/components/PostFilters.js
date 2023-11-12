import styled from 'styled-components';
import { useEffect, useState, useCallback } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

const PostFilters = () => {
	const [categories, setCategories] = useState([]);
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	// Get a new searchParams string by merging the current
	// searchParams with a provided key/value pair
	const createQueryString = useCallback(
		(name, value, paramToReset) => {
			const params = new URLSearchParams(searchParams);
			params.set(name, value);

			if (paramToReset) {
				params.set(paramToReset, '');
			}

			return params.toString();
		},
		[searchParams]
	);

	const getCategories = async () => {
		const res = await fetch(`${process.env.APP_URL}/api/categories`);
		const categories = await res.json();

		setCategories(categories.data);
	};

	const handleDateChange = (e, dateName) => {
		if (dateName === 'dateFrom') {
			if (searchParams.get('dateTo')) {
				router.push(
					pathname +
						'?' +
						createQueryString('dateFrom', e.target.value, 'dateTo')
				);
			} else {
				router.push(
					pathname +
						'?' +
						createQueryString('dateFrom', e.target.value)
				);
			}
		} else {
			router.push(
				pathname + '?' + createQueryString(dateName, e.target.value)
			);
		}
	};

	useEffect(() => {
		// Load all our reports
		getCategories();
	}, []);

	return (
		<FilterContainer>
			{pathname !== '/reports' && (
				<FieldWrapper>
					<Filter
						defaultValue="default"
						onChange={(e) =>
							router.push(
								pathname +
									'?' +
									createQueryString(
										'category',
										e.target.value
									)
							)
						}
						name="category"
						value={searchParams.get('category')}
					>
						<option value="default" disabled hidden>
							Category
						</option>
						<option value="">All Categories</option>
						{categories.map((cat) => {
							return (
								<option
									key={cat.id}
									value={cat.attributes.Name}
								>
									{cat.attributes.Name}
								</option>
							);
						})}
					</Filter>
				</FieldWrapper>
			)}
			{pathname !== '/events' && (
				<FieldWrapper>
					<Filter
						onChange={(e) =>
							router.push(
								pathname +
									'?' +
									createQueryString('sort', e.target.value)
							)
						}
						defaultValue="default"
						value={searchParams.get('sort')}
						name="sort"
					>
						<option value="default" disabled hidden>
							Sort By
						</option>
						<option value="desc">Newest</option>
						<option value="asc">Oldest</option>
					</Filter>
				</FieldWrapper>
			)}
			<DateRangeSelector>
				<input
					type="date"
					value={searchParams.get('dateFrom')}
					onChange={(e) => handleDateChange(e, 'dateFrom')}
					aria-label="Report date range start date"
				/>
				<div className="divider">|</div>
				<input
					type="date"
					value={searchParams.get('dateTo')}
					onChange={(e) => handleDateChange(e, 'dateTo')}
					min={searchParams.get('dateFrom')}
					aria-label="Reports date range end date"
				/>
			</DateRangeSelector>
		</FilterContainer>
	);
};

export default PostFilters;

const DateRangeSelector = styled.div`
	border: 0.5px solid var(--white);
	border-radius: 1.5rem;
	padding: 0.5rem 1rem;
	color: var(--white);
	display: flex;
	align-items: center;
	text-transform: uppercase;
	letter-spacing: 0.1rem;
	font-size: var(--nav);
	font-weight: 400;

	.date-left {
		display: flex;
		align-items: center;
		margin-right: 0.5rem;
	}

	.date-icon {
		margin-right: 0.5rem;
	}

	.divider {
		margin-left: 0.5rem;
		margin-right: 0.5rem;
	}

	input {
		color-scheme: dark;
		background-color: transparent;
		border: none;
		box-shadow: none;
		letter-spacing: 0.1rem;
		font-size: var(--nav);
		margin: 0;
		color: var(--offwhite);
		outline: 0;
		padding: 0;
		position: relative;
		text-transform: uppercase;
		width: 100%;
	}

	input[type='date']::-webkit-calendar-picker-indicator {
		color: white;
		cursor: pointer;
		margin-left: -15px;
	}
`;

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
	width: 100%;
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
	flex-shrink: 0;

	&::after {
		content: '';
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
