# FastDa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.1. This application is based on the datasets __StaDa__ and __FaSta__ from the public database of the Deutsche Bahn. 

For the access of the datasets, I need to sign up on the [developer's website of the Deutsche Bahn](https://developer.deutschebahn.com). After the sign up I need to subscribe for the two datasets. In the section *My Subscription* we generate a token in order to perform queries and fetch the necessary data, which is provided as an array of json objects.  

The dataset __StaDa__ (Status Data) holds information for each available German train station such as number representing the id number, name of the train station, respective address and further information of its infrastructure.  

The dataset __FaSta__ (Facility Status) reflects the facility of a train station, specifically the elevators and escalators. 

For this application I want to search for German train stations. For this purpose, the application provides a search field, that allows the user to input a query string. After the submit, a http request is performed in the __StaDa__ dataset to retrieve a list of train stations. The user can thereafter choose a train station.

The number from the chosen train station is used to perform the second http request in the __FaSta__ dataset to retrieve an array of json objects.

For the application () need the following information and sources

| Dataset   | variables                  |                                              url | query                             |
| :-------- | -------------------------- | -----------------------------------------------: | :-------------------------------- |
| __StaDa__ | `number, name`             |   https://api.deutschebahn.com/stada/v2/stations | ?searchstring=*String*            |
| __FaSta__ | `type, state, description` | https://api.deutschebahn.com/fasta/v2/facilities | ?stationnumber=*NumberOfTypeLong* |


I assume that *number* in __StaDa__ is associated to the *stationnumber* in __FaSta__. The variable *type* are in [ACTIVE, INACTIVE, UNKNWON], state in [ESCALATOR, ELEVATOR] that can be both represented as enumeration and finally description as a string, describing the location.

## Task 
* Create a single page application using angular
* Implement search field to search for German train stations
* User can choose a train station among the results
* A detail page provides an overview of the state of ALL elevators and escalators with its respective description, where it is

## Steps
1. Analyze the task
2. Design a modular structure to divide the tasks and minimize the code load for each component
3. Implement search field ui for __StaDa__
4. Implement logic to retrieve query string
5. Implement get request with the respective http options {'Content-Type': 'application/json', 'Authorization': 'Bearer *Token*'}, the respective url and query string
6. Display the search result and identifiable to pass the number for showing the details
7. Implement ui for detail
8. Retrieve the number from the chosen train station
9. Implement get request with the aforementioned http options, the respective url and number
10. Display the search results for each elevator/escalator as active, inactive or unknown

For this project, bootstrap v4.3.0 is used to style the application accordingly as cdn.