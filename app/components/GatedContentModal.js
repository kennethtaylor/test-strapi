import styled from "styled-components";
import Title from "./Title";
import Link from "next/link";

const GatedContentModalContainerBlur = styled.div``;
const GatedContentModalInnerContainer = styled.div``;
const FormContainer = styled.div``;
const StyledForm = styled.form``;
const FormGroup = styled.div``;
const StyledLabel = styled.label``;
const StyledInput = styled.input``;
const StyledButton = styled.button``;
const SubContent = styled.div``;

export default function GatedContentModal(props) {
	const [userData, setUserData] = useState({
		username: "",
		email: "",
		password: "",
	});
	function handleChange() {}
	return (
		<GatedContentModalContainerBlur>
			<GatedContentModalInnerContainer>
				<Title>
					Sign Up or Login to Access Members Only Events & More
				</Title>
				<FormContainer>
					<Title>Sign Up</Title>
					<StyledForm>
						<FormGroup>
							<StyledLabel htmlFor="username">
								First Name
							</StyledLabel>
							<StyledInput
								type="text"
								id="firstname"
								name="firstname"
								value={userData.username}
								onChange={handleChange}
							/>
						</FormGroup>
						<FormGroup>
							<StyledLabel htmlFor="username">
								Last Name
							</StyledLabel>
							<StyledInput
								type="text"
								id="lastname"
								name="lastname"
								value={userData.username}
								onChange={handleChange}
							/>
						</FormGroup>
						<FormGroup>
							<StyledLabel htmlFor="username">
								Company
							</StyledLabel>
							<StyledInput
								type="text"
								id="company"
								name="company"
								value={userData.username}
								onChange={handleChange}
							/>
						</FormGroup>
						<FormGroup>
							<StyledButton type="submit">Register</StyledButton>
						</FormGroup>
					</StyledForm>
					<SubContent>
						<p>Already have an account?</p>
						<Link href="/">Sign In</Link>
						<Link href="/">Forgot Password?</Link>
					</SubContent>
				</FormContainer>
			</GatedContentModalInnerContainer>
		</GatedContentModalContainerBlur>
	);
}
