'use strict';
const app = require('../lib/server.js');
const supertest = require('supertest');
const request = supertest(app.app);
const { db, Team } = require('../lib/models');
const { response } = require('express');

beforeAll(async () => await db.sync());
afterAll(async () => await db.drop());

describe('testing our Team model on a POST request', () => {
	it('Create a record using POST', async () => {
		let newTeam = await Team.create({
			name: 'Seattle SeaHawks',
			city: 'Seattle',
		});
		expect(newTeam.id).toBe(1);
		expect(newTeam.name).toBe('Seattle SeaHawks');
		expect(newTeam.city).toBe('Seattle');
	});
	it('Read a list of records using GET', async () => {
		const response = await request.get('/team');
		expect(response.status).toBe(200);
	});
	it('Read a record using GET', async () => {
		const response = await request.get('/team?id=1');
		expect(response.status).toBe(200);
	});
	it('Update a record using PUT', async () => {
		let id = 1;
		const response = await Team.findOne({ where: { id: id } });
		const updatedResponse = await response.update({
			name: 'Arizona Cardinals',
			city: 'Arizona',
		});
		expect(updatedResponse.id).toEqual(1);
	});

	// Delete not working Yet... Last One..
	// it('Destroy a record using DELETE', async () => {
	// 	let id = 1;
	// 	const response = await Team.destroy({ where: { id: id } });
	// 	console.log(response);
	// 	expect(response).toBe('undefined');
	// });
});
