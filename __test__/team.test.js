'use strict';
const app = require('../lib/server.js');
const supertest = require('supertest');
const request = supertest(app.app);
const { db } = require('../lib/models');

beforeAll(async () => await db.sync());
afterAll(async () => await db.drop());

describe('testing our Team model on a POST request', () => {
	it('Create a record using POST', async () => {
		let response = await request.post('/team').send({
			name: 'Seattle SeaHawks',
			city: 'Seattle',
		});
		expect(response.body.name).toEqual('Seattle SeaHawks');
		expect(response.body.city).toEqual('Seattle');
	});
	it('Read a list of records using GET', async () => {
		const response = await request.get('/team');
		expect(response.status).toBe(200);
	});
	it('Read a record using GET', async () => {
		const response = await request.get('/team/1');
		expect(response.status).toBe(200);
	});
	it('Update a record using PUT', async () => {
		const updatedResponse = await request.put('/team/1').send({
			name: 'Arizona Cardinals',
			city: 'Arizona',
		});
		expect(updatedResponse.body.name).toEqual('Arizona Cardinals');
		expect(updatedResponse.body.city).toEqual('Arizona');
	});

	it('Destroy a record using DELETE', async () => {
		const response = await request.delete('/team/1');
		expect(response.status).toBe(200);
		expect(response.text).toBe('Deleted');
	});
});

//------------------------------------------------------------------- Testing /coach

describe('testing our Team model on a POST request', () => {
	it('Create a record using POST', async () => {
		let response = await request.post('/coach').send({
			name: 'Pete Carroll',
			position: 'Head Coach',
		});
		expect(response.body.name).toEqual('Pete Carroll');
		expect(response.body.position).toEqual('Head Coach');
	});
	it('Read a list of records using GET', async () => {
		const response = await request.get('/coach');
		expect(response.status).toBe(200);
	});
	it('Read a record using GET', async () => {
		const response = await request.get('/coach/1');
		expect(response.status).toBe(200);
	});
	it('Update a record using PUT', async () => {
		const updatedResponse = await request.put('/coach/1').send({
			name: 'Ted Lasso',
			position: 'Head Coach',
		});
		expect(updatedResponse.body.name).toEqual('Ted Lasso');
		expect(updatedResponse.body.position).toEqual('Head Coach');
	});

	it('Destroy a record using DELETE', async () => {
		const response = await request.delete('/coach/1');
		expect(response.status).toBe(200);
		expect(response.text).toBe('Deleted');
	});
});
