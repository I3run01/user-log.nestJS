import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { UsersController } from '../src/users/users.controller'
import { UsersService } from '../src/users/users.service'
import { getModelToken } from '@nestjs/mongoose';
import { User } from '../src/users/entities/user.entity';

describe('UsersController (e2e)', () => {
  let app: INestApplication;

  const mockUserModel = {
    create: jest.fn(),
    findById: jest.fn(),
    findOne: jest.fn(),
    deleteOne: jest.fn(),
    findByIdAndUpdate: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        { provide: getModelToken(User.name), useValue: mockUserModel },],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('/users (GET)', () => { // changed the route assuming your users route is '/users'
    return request(app.getHttpServer())
      .get('/users')
      .expect(200);
      // .expect(...) you can add the expected response if you have one
  });
});
