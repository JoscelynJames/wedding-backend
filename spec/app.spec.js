var Request = require('request');

describe('server', () => {
	var server;
	beforeAll(() => {
		server = require('../server');
	});
	afterAll(() => {
		server.close;
	});
	describe('GET /songs', () => {
		var data = {};
		beforeAll((done) => {
			Request.get('http://localhost:3210/songs', (error, response, body) => {
				data.status = response.statusCode;
				body.data = body;
				done();
			});
		});
		it('Status 200', () => {
			expect(data.status).toBe(200);
		});
	});
});