import {omit} from 'lodash'

function userToJSON(user) {
  return omit(user, ['exp', 'iat', 'hash', 'salt'])
}

function isPasswordAllowed(password) {
  return password.length > 6 && /\d/.test(password) && /\D/.test(password)
}

test('isPasswordAllowed only allows some passwords', () => {
  // here's where I'll demo things for you :)
  console.log(isPasswordAllowed)
})

test('userToJSON excludes secure properties', () => {
  // Here you'll need to create a test user object
  // pass that to the userToJSON function
  // and then assert that the test user object
  // doesn't have any of the properties it's not
  // supposed to.
  // Here's an example of a user object:
  const mockUser = {
    id: 'some-id',
    username: 'sarah',
  }
    // ↑ above are properties which should
    // be present in the returned object
  
  //   // ↓ below are properties which shouldn't
  //   // be present in the returned object
    const unSafeUser = {
    ...mockUser,
    exp: new Date(),
    iat: new Date(),
    hash: 'some really long string',
    salt: 'some shorter string',
  }
  expect(userToJSON(unSafeUser)).toEqual(mockUser)
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=auth%20util&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
