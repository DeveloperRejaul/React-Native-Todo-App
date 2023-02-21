const mongoose = require("mongoose");

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHoAegMBIgACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAAAAQQFBgMCB//EADIQAAICAQIBBwsFAAAAAAAAAAABAgMEBREhMTRBUZGxwRIiIzJCUmFxcnPhExUkYtH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/AP1oBgqAAAAAAAAAAAAAAAABSFAjAYAAAAAed10KK3ZZLaKA9AaLJ1a6xtUeij2sxHk3t7u+3f62MHUA5ynUcqpra1zXuz4m4ws6vLTSXkWLli/AYMsAAAAAKQoEYDAAAADm9Qy3lXtp+jjwgvE3epWOvBuaeza8nt4HNFhVIAEUsJShNTg9pJ7po+SgdNh5CyceNq4N8JLqZ7mn0Gzay2rfg0pI3BFAAAKQoEYDAAAAYOsrfAl8JLvOfOpyav18eyrplHZfPoOXacW01s1waLEQAACkKBsdDX8ub/o+9G8NZodHk0zua4zey+S/JsyKAAAUhQIwGAAAAGp1bAcpPIoju368V3m2Pmc41reclFdbewg5MG5zP2y2TlK2MZvprT49i2MCVWJvwy5bfaf+lRjGVg4U8qzkca0/Ol4I98evTItOzIlN9Ti0jb0WUSio0TraXIotcAr7hGMIRjFbRitkuo+gCAAABSFAjAYAHjk5NWNFStltvyJcrPLUM2OJXw2dsvVXizn7LJWzc7JOUn0sDOydWus3jT6KPw4y7TAnKU3vOTk+tvc+QVAAAUEAGXj6jkUck/Lj7s+Jt8PUacnaL8yx+y3y/JnOlA60Gp0vUHJqjIlu3whN9zNsRQpCgRnzZNVwlOXqxW7PpmFrE3HAml7TUX3+AGjyLpX3Stm+MnydR5FBUQFAEBQBAUAQFAA6LTch5OMpSe84+bI502ehT2vth0OKl2P8ijdFIUiozA1rmL+pGwMDW+Yv6kIOfKCGkUEBBQQAUEAFBABTYaHzqf233o1xstD51P7b70BvCgpFf//Z",
  },
  todos: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Todo",
    },
  ],
});

//Export the model
const User = mongoose.model("User", userSchema);
module.exports = User;
