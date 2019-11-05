'use strict';

beforeAll(async () => await provider.setup());
afterEach(async () => await provider.verify());
afterAll(async () => await provider.finalize());
