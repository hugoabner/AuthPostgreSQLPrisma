export default class User {
	
	constructor(
		private readonly id: string,
		private readonly name: string,
		private readonly email: string,
		private readonly password: string
	) {}

	static create(props: {
		id: string, 
		name: string, 
		email: string, 
		password: string 
	}) {
		return new User(props.id, props.name, props.email, props.password);
	}

	getId() {
		return this.id;
	}

	getName() {
		return this.name;
	}

	getEmail() {
		return this.email;
	}
}