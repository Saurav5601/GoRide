Here is the README.md file for documenting the /users/register endpoint:

# Backend API Documentation

## Endpoints

### POST /users/register

This endpoint is used to register a new user.

#### Request

- **URL**: `/users/register`
- **Method**: `POST`
- **Headers**: `Content-Type: application/json`
- **Body**:
  ```json
  {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123"
  }

  Response
Success Response:

Code: 201 Created
Content:
{
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}

Error Response:

Code: 400 Bad Request
Content:
{
  "errors": [
    {
      "msg": "Error message here",
      "param": "parameter_name",
      "location": "body"
    }
  ]
}


Validation
email: Must be a valid email address.
fullname.firstname: Must be at least 3 characters long.
password: Must be at least 6 characters long.
Example
curl -X POST http://localhost:4000/users/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}'