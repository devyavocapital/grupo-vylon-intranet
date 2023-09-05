import React, { useEffect, useState } from "react";
import useToken from "../hooks/useToken";
import { getBirthdays } from "../utils/fetched";

const HappyBirthday = () => {
	const { token } = useToken();
	const [usersBirthdays, setUsersBirthdays] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const users = await getBirthdays(token);
			setUsersBirthdays(users);
			console.log(users.map((user) => user.birthday));
		};
		getData();
	}, []);

	return (
		<div className="principal relative">
			<h1 className="absolute top-0 flex text-center place-self-center text-[#ff5c01] text-9xl z-20 justify-center w-full italic hbd-title ">
				¡Felicidades!
			</h1>
			<div style={{ height: "calc(100vh)" }} className="w-full flex">
				<div className="text-xl w-full text-center place-self-center">
					{usersBirthdays.map(({ fullname, birthday }) => (
						<p
							className="w-full text-3xl uppercase text-center text-[#ff5c01] italic mb-5"
							key={fullname}
						>
							<span className="font-bold text-6xl uppercase text-[#002856] not-italic">
								{birthday.substring(5, 7)}
							</span>
							<br />
							{fullname}
						</p>
					))}
				</div>
				<img
					alt="landing birthdays"
					className="w-8/12 object-cover rounded-s-full"
					src="landing-hbd.jpg"
				/>
			</div>
		</div>
	);
};

export default HappyBirthday;
