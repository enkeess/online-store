export class ApiService {
	static _baseUrl = "http://localhost:3001";

	static getRequest = async (url) => {
		console.log("request to: " + url);
		return await fetch(ApiService._baseUrl + url)
			.then(res => res.json())
		
	}

	static getCards =  (params) => {
		return  ApiService.getRequest('/cards');
	}
}