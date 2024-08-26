Steps to setup Kafka for project

```
1.Download Kafka from 'https://kafka.apache.org/downloads'
```

Go in the directory where kafka is installed and run below commands
Note:- Below Commands are only for windows
2.Start Zookeeper
.\bin\windows\zookeeper-server-start.bat .\config\zookeeper.properties

3.Start Kafka:
.\bin\windows\kafka-server-start.bat .\config\server.properties

4.Create the Kafka topic
.\bin\windows\kafka-topics.bat --create --bootstrap-server localhost:9092 --topic payment

5.Run the project
node inventoryService.js

6.Produce some messages to the payment topic
kafka-console-produce.sh --broker-list localhost:9092 --topic payments
