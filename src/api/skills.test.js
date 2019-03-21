import * as api from './skills';
import sinon from 'sinon';
import axios from 'axios';

const API_URL = 'http://localhost:3000/skills';

let axiosStub;
beforeEach(() => {
  axiosStub = sinon.stub(axios, 'request');
});

afterEach(() => {
  axiosStub.restore();
});

it('should call fetch', () => {
  const expectedParams = {
    url: `${API_URL}`,
    method: 'GET'
  };
  api.fetch();
  expect(axiosStub.calledWith(expectedParams)).to.be.true;
});

it('should call add', () => {
  const data = { name: 1};
  const expectedParams = {
    url: `${API_URL}`,
    method: 'POST',
    data
  };
  api.add(data);
  expect(axiosStub.calledWith(expectedParams)).to.be.true;
});

it('should call remove', () => {
  const skillId = 1;
  const expectedParams = {
    url: `${API_URL}/${skillId}`,
    method: 'DELETE'
  }
  api.remove(skillId);
  expect(axiosStub.calledWith(expectedParams)).to.be.true;
});

