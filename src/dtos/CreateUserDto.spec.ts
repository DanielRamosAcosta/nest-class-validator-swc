import { validate } from "class-validator"
import { CreateUserDto } from "./CreateUserDto"

describe("CreateUserDto", () => {
  it("accepts a valid user", async () => {
    const user = new CreateUserDto()

    user.email = "example@example.com"
    user.password = "mypassword"

    const result = await validate(user)

    expect(result).toHaveLength(0)
  })

  it("rejects a user with wrong email", async () => {
    const user = new CreateUserDto()

    user.email = "example.com"
    user.password = "mypassword"

    const result = await validate(user)

    expect(result).toEqual([
      {
        target: user,
        value: 'example.com',
        property: 'email',
        children: [],
        constraints: { isEmail: 'email must be an email' }
      }
    ])
  })

  it("rejects a user without password", async () => {
    const user = new CreateUserDto()

    user.email = "example@example.com"
    user.password = ""

    const result = await validate(user)

    expect(result).toEqual([
      {
        target: user,
        value: '',
        property: 'password',
        children: [],
        constraints: { isNotEmpty: 'password should not be empty' }
      }
    ])
  })

  it("rejects a user without password and email", async () => {
    const user = new CreateUserDto()

    user.email = ""
    user.password = ""

    const result = await validate(user)

    expect(result).toEqual([
      {
        target: user,
        value: '',
        property: 'email',
        children: [],
        constraints: { isEmail: 'email must be an email' }
      },
      {
        target: user,
        value: '',
        property: 'password',
        children: [],
        constraints: { isNotEmpty: 'password should not be empty' }
      }
    ])
  })
})