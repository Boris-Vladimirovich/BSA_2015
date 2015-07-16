describe("Testing my script", function(){
	describe("Testing man", function(){
		var manName = "Kolia";
		var manAge = 23;
		var newMan;
		beforeEach(function() {
		    newMan = Object.create(Man).constructor(manName, manAge);
		});
		afterEach(function(){
			delete newMan;
		});
		it("Should have name", function(){
			expect(newMan.name).toEqual(manName);
		});
		it("Name should be string", function(){
			expect(typeof newMan.name).toEqual("string");
		});
		it("Should have age", function(){
			expect(newMan.age).toEqual(manAge);
		});
		it("Age should be a number", function(){
			expect(typeof newMan.age).toEqual("number");
		});
		it("Should live", function(){
			expect(typeof newMan.live).toEqual("function");
		});
		it("Testing duckType function on man", function(){
			expect(duckType.call(newMan)).toEqual("This is Man")
		});
		it("Should throw name error", function(){
			expect(function(){
				newMan2 = Object.create(Man).constructor(223, 44);
			}).toThrowError("name type error");
			delete newMan2;
		});
		it("Should throw age error", function(){
			expect(function(){
				newMan2 = Object.create(Man).constructor("Vasia", "twenty");
			}).toThrowError("age type error");
			delete newMan2;
		});
	});
	describe("Testing student", function(){
		var studentName = "Vasia";
		var studentAge = 23;
		var newStudent;
		beforeEach(function() {
		    newStudent = Object.create(Student).constructor(studentName, studentAge);
		});
		afterEach(function(){
			delete newStudent;
		});
		it("Should have name", function(){
			expect(newStudent.name).toEqual(studentName);
		});
		it("Name should be string", function(){
			expect(typeof newStudent.name).toEqual("string");
		});
		it("Should have age", function(){
			expect(newStudent.age).toEqual(studentAge);
		});
		it("Age should be a number", function(){
			expect(typeof newStudent.age).toEqual("number");
		});
		it("Should live", function(){
			expect(typeof newStudent.live).toEqual("function");
		});
		it("Should study", function(){
			expect(typeof newStudent.study).toEqual("function");
		});
		it("Testing duckType function on student", function(){
			expect(duckType.call(newStudent)).toEqual("This is Student")
		});
		it("Should throw name error", function(){
			expect(function(){
				newStudent2 = Object.create(Student).constructor(2234, 24);
			}).toThrowError("name type error");
			delete newStudent2;
		});
		it("Should throw age error", function(){
			expect(function(){
				newStudent2 = Object.create(Student).constructor("Sergey", "twenty-one");
			}).toThrowError("age type error");
			delete newStudent2;
		});
	});
	describe("Testing professor", function(){
		var professorName = "Sergey Petrovich";
		var professorAge = 60;
		var newProfessor;
		beforeEach(function() {
		    newProfessor = Object.create(Professor).constructor(professorName, professorAge);
		});
		afterEach(function(){
			delete newProfessor;
		});
		it("Should have name", function(){
			expect(newProfessor.name).toEqual(professorName);
		});
		it("Name should be string", function(){
			expect(typeof newProfessor.name).toEqual("string");
		});
		it("Should have age", function(){
			expect(newProfessor.age).toEqual(professorAge);
		});
		it("Age should be a number", function(){
			expect(typeof newProfessor.age).toEqual("number");
		});
		it("Should live", function(){
			expect(typeof newProfessor.live).toEqual("function");
		});
		it("Should teach", function(){
			expect(typeof newProfessor.teach).toEqual("function");
		});
		it("Testing duckType function on professor", function(){
			expect(duckType.call(newProfessor)).toEqual("This is Professor")
		});
		it("Should throw name error", function(){
			expect(function(){
				newProfessor2 = Object.create(Student).constructor(50, 77);
			}).toThrowError("name type error");
			delete newProfessor2;
		});
		it("Should throw age error", function(){
			expect(function(){
				newProfessor2 = Object.create(Student).constructor("Vasiliy Ivanych", "eighty");
			}).toThrowError("age type error");
			delete newProfessor2;
		});
		it("Should throw subject error", function(){
			expect(function(){
				newProfessor.teach(35);
			}).toThrowError("subject type error");
		});
	});
	describe("Testing duckType function", function(){
		it("Should recognize man", function(){
			var newMan = Object.create(Man).constructor("Alex", 30);
			expect(duckType.call(newMan)).toEqual("This is Man");
			delete newMan;
		});
		it("Should recognize student", function(){
			var newStudent = Object.create(Student).constructor("Oleg", 25);
			expect(duckType.call(newStudent)).toEqual("This is Student");
			delete newStudent;
		});
		it("Should recognize professor", function(){
			var newProfessor = Object.create(Professor).constructor("Ivan Petrovich", 75);
			expect(duckType.call(newProfessor)).toEqual("This is Professor");
			delete newProfessor;
		});
		it("Should recognize unkown object", function(){
			var obj = {
				name: "Andrey"
			}
			expect(duckType.call(obj)).toEqual("This is unknown object");
			delete obj; 
		});
	});
})