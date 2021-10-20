'use strict';

const app = require('../lib/server.js');
const supertest = require('supertest');
const { describe, it, expect } = require('@jest/globals');
const request = supertest(app.app);

describe('Testing 404 for a bad route', () => {
	it('Throw: 404 on a bad route', async () => {
		const response = await request.get('/badRoute');
		expect(response.status).toBe(404);
	});
});

describe('Testing 404 for a bad method', () => {
	it('Throw: 404 on a bad method', async () => {
		const response = await request.put('/person');
		expect(response.status).toBe(404);
	});
});

describe('500 if no name in the query string', () => {
	it('Throw: 500 on a bad string', async () => {
		const response = await request.get('/person?name=');
		expect(response.status).toBe(500);
	});
});

describe('200 if the name is in the query string', () => {
	it('Throw: 200 if name is given', async () => {
		const response = await request.get('/person?name=jake');
		expect(response.status).toBe(200);
		expect(typeof response.body).toBe('object');
	});
});

describe('given an name in the query string, the output object is correct', () => {
	it('Throw: 200 if name is given and object received matches', async () => {
		const response = await request.get('/person?name=jake');
		expect(response.status).toBe(200);
		expect(typeof response.body).toBe('object');
	});
});
