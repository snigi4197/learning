import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

	constructor(private http: Http) { }

	registerUser(user) {
		let headers = new Headers();
		headers.append('content-type', 'application/json');
		return this.http.post('api/register', user, { headers: headers })
			.map(res => res.json());
	}
	authenticateUser(user) {
		let headers = new Headers();
		headers.append('content-type', 'application/json');
		return this.http.post('api/authenticate', user, { headers: headers })
			.map(res => res.json());
	}
}




