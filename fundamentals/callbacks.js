setTimeout(() => {
  // console.log('Hello');
}, 2000);

// setTimeout( function() {
//     console.log( 'Hello' );
// }, 1000);

const getUserById = (id, callback) => {
  const user = {
    id: id,
    name: 'John',
  };
  setTimeout(() => {
    callback(user);
  }, 1500);
  //callback(user);
};

getUserById(10, (user) => {
  console.log(user.name.toUpperCase());
});
