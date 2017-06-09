To run application’s hello world example:
-----------------------------------------

1. Go to the project’s (which is jobowit) folder in terminal
2. Run command gradlew build
3. Then run command gradlew run

Note: the command to run a command on linux is ‘./’ for example. To run command gradle build you’d type:
./gradlew build


4. Check the complete output
-------------------------------


To run application’s hello world example on localhost:
-----------------------------------------------------

MAKE SURE THAT NO (WEB) SERVER OF ANY KIND IS RUNNING ON PORT 8080!!


1. Open the file build.gradle in a text editor
2. Comment these lines in the file:

  // apply plugin: ‘application’
  // mainClassName = 'com.jobowit.helloworld.Hello'

Note: to comment use two forward slashes (//)

3. run command: gradlew build
4. then run command: gradlew bootRun
5. Wait for the application to load 100%
6. Open your web browser on localhost:8080

See? Fantastic, isn’t it?


One more thing:
------------------

1. Edit the build.gradle file to uncomment this line:

compile('org.springframework.boot:spring-boot-starter-security')

2. gradlew build and gradle bootRun again

Check the localhost page again.

Yeah, :)


Now, figure out everything.