var duckType = function(){
  if("name" in this && "age" in this){
     if("study" in this){
        return "This is Student";
      }
     else{
        if("teach" in this){
          return "This is Professor";
        }
        else{
            if("live" in this){
                return "This is Man"
            }
            else{
                return "This is unknown object";
            }
        }
     }       
  }
  else{
      return "This is unknown object";
  }
};

var Man = {
  constructor: function(name, age){
    if(typeof name !== "string"){
      throw new Error("name type error");
    }
    else{
      this.name=name;
    }    
    if(typeof age !== "number"){
      throw new Error("age type error");
    }
    else{
      this.age = age;
    }

    return this;
  },
  live: function()
  {
    console.log("This is live() function of "+ this.name);
  },
};

var Student = Object.create(Man);
Student.study = function(){
  console.log("This is study() function of "+this.name);
};

var Professor = Object.create(Man);
Professor.teach = function(subject){
  if(typeof subject !== "string"){
    throw new Error("subject type error")
  }else{
    console.log("This is teach() function of "+this.name+" with argument "+subject);
  }
};
