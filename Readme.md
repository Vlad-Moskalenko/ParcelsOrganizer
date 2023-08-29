Hi there! I've already done the test task, hope you will enjoy it and I`m waiting for the feedback
from you=) So, according to the test task:

1. Main pages:

- /create - select request type (order or deliver)
- /create/order - create order request
- /create/deliver - create delivery request
- /requests - list of all requests

* In additional: / - welcome page

2. The list of requests must reflect all user-created requests and the provided information. Users
   can be able to sort all requests by the date of sending, by default sort by the date of creation
   of requests.

3. The user must be able to edit the request using the dialog window and delete the request.

4. Request might be one of two types: order and deliver. If a user wants to send a parcel, they
   should create an order type request. In other cases, users can deliver a parcel, and they should
   create a delivery request

5. According to the test task only city from and city to are required input fields. So, it`s
   unusually, but date of dispatch, parcel description and type of parcel are not required. The
   request creation form must have the following input fields:

- The city from which the parcel is sent (required)
- The city to which the parcel is sent (required)
- Type of parcel: gadgets, drinks, clothes, medicines, other (in case if you create order type
  request)
- Date of dispatch
- Parcel description (in case if you create order type request)

6. The application have done using React, Vite, SASS, Material UI, React Router, Redux. Store data
   should save in LocalStorage and exist after page reload

- In additional for CRUD operations with REST API and authorization I've made backend part of
  application using Node.js, Express, MongoDB and Mongoose.
- For login you can register or use my account: login: vlad.moskalenko1993@gmail.com password:
  12345678

start app: npm run dev

build app: npm run build
