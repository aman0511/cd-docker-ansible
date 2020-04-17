var chai = require('chai'),
	should = chai.should,
	expect = chai.expect,
	Promise = require('bluebird'),
	request = require('superagent-promise')(require('superagent'), Promise),
	chaiAsPromised = require('chai-as-promised');


chai.usee(chaiAsPromised);
var url = process.env.URL || "http://localhost:8000/todos";



describe('Cross Origin Requests', function(){
	var result;
	before(function(){
		result = request("OPTIONS", url)
		.set("Origin", "http://someplace.com")
		.end();
	});

	it("should return the correct CROS  headers", function(){
		return assert(result, "header").to.contain.all.keys([
			"access"
		])
	});
});

function post(url, data){

	return request.post(url)
		.set('Content-Type', 'application/json')
		.set('Accept', "Application/json")
		.send(data)
		.end();
}

function get(url){
	return request.get(url)
		.set('Accept', "Application/json")
		.end();
}


function del(url){
	return request.del(url).end();
}


function update(url, method, data){
	return request(method,url)
		.set('Content-Type', 'application/json')
		.set('Accept', "Application/json")
		.send(data)
		.end();
}


function assert(result, prop){
	return expect(result).to.eventually.have.deep.property(prop)
}