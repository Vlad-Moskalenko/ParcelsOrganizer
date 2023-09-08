An application that allows users to create a request for the transportation of your parcel or
deliver another user's package.

1. Main pages:

- / - welcome page
- /create - select request type (order or deliver)
- /create/order - create order request
- /create/deliver - create delivery request
- /requests - list of all requests

2. The list of requests reflect all user-created requests and the provided information. Users can be
   able to sort all requests by the date of sending, by default sort by the date of creation of
   requests.

3. The user is able to edit the request using the dialog window and delete the request.

4. Request might be one of two types: order and deliver. If a user wants to send a parcel, they
   should create an order type request. In other cases, users can deliver a parcel, and they should
   create a delivery request

5. The request creation form have the following input fields:

- The city from which the parcel is sent (required)
- The city to which the parcel is sent (required)
- Type of parcel: gadgets, drinks, clothes, medicines, other (in case if you create order type
  request) (required)
- Date of dispatch (required)
- Parcel description (in case if you create order type request)

6. The application has done using React, Vite, SASS, Material UI, React Router, Redux, LocalStorage.
   Using Node.js, Express, MongoDB and Mongoose was implementing CRUD operations with REST API and
   authorization.

For login you can register or use my account:

login: vlad.moskalenko1993@gmail.com password: 12345678

start app: npm run dev

build app: npm run build
