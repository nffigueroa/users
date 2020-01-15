# API
The project is requesting the data from ```https://randomuser.me/api/```
Response:
``` JSON
{"results":[{"gender":"female","name":{"title":"Mrs","first":"Alyssia","last":"Garnier"},"location":{"street":{"number":1367,"name":"Avenue de la République"},"city":"Le Mans","state":"Loiret","country":"France","postcode":55382,"coordinates":{"latitude":"3.4584","longitude":"82.1482"},"timezone":{"offset":"-5:00","description":"Eastern Time (US & Canada), Bogota, Lima"}},"email":"alyssia.garnier@example.com","login":{"uuid":"05632069-8e08-4cc0-aedf-e241abbfb79c","username":"whitetiger266","password":"sucker","salt":"5cIWWbQ5","md5":"4627e68650bdc1268840882b76c716ec","sha1":"496f8703a1e748f231dd869b6ce00093cf6f916c","sha256":"29f319182f1c2f7265988889afac273f8eea39a7d6d05f1e65b2ce4eb26607af"},"dob":{"date":"1960-01-19T23:16:48.006Z","age":60},"registered":{"date":"2003-10-17T14:52:39.310Z","age":17},"phone":"04-79-74-67-24","cell":"06-71-41-32-89","id":{"name":"INSEE","value":"2NNaN28185968 20"},"picture":{"large":"https://randomuser.me/api/portraits/women/65.jpg","medium":"https://randomuser.me/api/portraits/med/women/65.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/65.jpg"},"nat":"FR"}],"info":{"seed":"bf3c13f15938eb83","results":1,"page":1,"version":"1.3"}}
```

# Components

There are 4 Components  for the application 

## List
It requests the data from the API and send it to the children for rendering.

## Item
It is rendered inside of a flatlist , it has all the data about the user profiles and prints a card one by one whit a summary about the user.

## Detail
It is rendered when the user taps over the card , it prints details about the user tapped, and also a button which triggers the camera function.

## Camera
It has the react-native-camera implementation and when the user takes the photo this component returns to the parent the uri of the photo.

# Redux
The application is using redux for storage the user data in the whole application.

