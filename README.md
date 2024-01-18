# Backend Learn What Matter

Welcome to Backend Learn What Matter!

### What is Internet?
- Basically our data is transfered in form of packets... suppose we are the sending a hi from our phone to the person who is sitting in america. we texted "hi" and send it right... then that data is transformed from our phn in form of packets(this packet ar very small rays we can say not visible though our eyes but they are present) to the nearest local network station nere us... then these packets is then tranfer in form of energy signals throgh optical fibre wire to where ever we want to send... in this case it will go to our main/head network station... then they will send the data though undergrond sea and that signal will recive in america's network headquater then they will send that signal to the person nearest local network station... then this electric signal will again transform into packets and will be recive by that person....
This whole process is basically known as internet.
### What is ISP?
- suppose we send hi to someone who is living near me or someone in india using our Internet Service Provider(ISP)... in this case we are not require to chek it by main network station and then send it to another country... in this cases this providers such as JIO,Airtel,Bsnl...ect will recive this signal and first chek that if this are under ther white list.. or black list.. {white list ar those server which are allowed to acces and black list are those which are restricted or blocked and not allow to use}.. according to ur need repose is given...
### What is Mac Address & Local network & IP Address..?
- We all have a router in our home... and in our house we have 2-3 phns so this are connected with this router thus for all this phn the local network is the router.. if its not connected to the router then the nearest network station is our local network.
- so now come to MAC address and IP addresswhen we share date or suppose we say hi in whatsapp... Say we have 3 phones connected to this router and they send to 3 different person 3 different message hi,hello,hey... the router we use that contain the MAC address and our phn contanin the IP address... so suppose hi - abc address, hello - def address, hey - hij address.... so this all will recive by the router... and router will send the messages to the persons... and it will recive their reply in it as MAC address... now this router will send each of there replies to the specific IP address... this way it work....
### HTTP vs HTTPS
- Hypertext Transfer Protocol-HTTP - this basically are rules that need to be followed to host a server...
- Hypertext Transfer Protocol Secured-HTTPS- this is same as http but its basically encrypted version of data that we transfer.
- basically listen both of them are same but https use a special version of code that is encrypted... so called hackers use same devices which for which they can change their IP address.... suppose i send hi-abc IP to someone... now in reply that person send heloo to me... now someone who have IP address def.. changes its IP to -abc IP so if we are on http server which is not encypted then that hacker will recive our message and see it... but if its a https sereve then will aslo get the message but they will not be able to decrypt the message coz the might have copied the IP address but cant get the encrypt code so that they can decrypt it... that is the differnce.
## achaa listen when we transfer data or we install something in our devices we just install a copy or send a copy of that thing in our oun device or send a copy of the message to someone...
### what is NODEJS?
- node js is basically contain core of V8 Engine (of google)- it basically a sturucture of code which have the capability to run/create a server... its a open source code so anyone can use it... but the code is written in c++ language... and this code is wrapped with JavaScript code... so this nodejs... and why we use it... 1st:- it have the capability to run a server so we use... 2nd:- it easy for us... we write the code in javascirpt which is recive by the wrapper JS and that convert the code into c++ code which runs the server...
### What is NPM?
- there is no specific full form of this.. its basically package manager... think like NodeJS is a device that have the capabitlity to run a server and npm is a playstore which contain various package which helps to run the server.
### Install npm..
-npm i express
### Instal ejs
### What is routs,router,routing?
- /public or /contact or www.facebook.com/ this all "/" that e use is routs and this "/public" is known as router... and the code that we give to run this is known as routing.
### GET vs POST?
- GET is used when we can show the data in the search bar using "+" sign example like this "=heloo+img" this when we search on google... thisis the thing which is shown..
- POST is when data is secret or confidential... such as while u submit ur mail id password while login...
### What is Express JS?
- its basically npm package manager.. so its basically html code.. we can run server using node js it use http of its own but the code is complex... so we use express js it same it will also use the http of nodejs but the code we write is more efficient and easy for us and effective so we use it.
### Basic Express JS code...
-const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)


-- require() - it basically gets the access of the things/packages mention in it.
-- const app = express() - it basically the power stored in access is now transfered into app so that we can use it powers...
-- res.send('Hello World') - it basically print hello world on the page when we open/go to the page "/".
-- app.get('/', function (req, res){})- get basically recives the request... it mainly the way we access.. it have the power that to say... " '/' " this is the page / router that we need to visit and the fuction contains the work
-- app.listen(3000)- it basiclly the port though this we send or revive data... "3000" is basically a number it can be any 4/5 digit number
### What is Midware?
- it basically... while we send or recive data in between if we want to perform some task we use midware. its code is:
app.use(function(req,res,next){
    console.log("hi");
    next();
})
u can write anything inside this fucntion and can use it...
#### next() 
-- this is used becuse when it enter in this middleware it cant move to the next / cant automatically get out of this so it need a push for that we use next().
#### req()
-- this the request that we need to recive from the user what they need to see or want.
#### res()
-- this res() is what we send to the user need/ to the user what they want to see
### Dynamic routes...
- app.get('/profile/:username', function (req, res) {
  res.send(`Heloo to ${req.params.username}`);
})
-- " : " - we use this to get dynmic routes... this is known as params...
-- ${req.params.username} - this way we access that param... and all should be within backtik " `` ".
### Rendering..
- app.set("view engine", "ejs");
app.get('/contact', function (req, res) {
  res.render("contact");
})
just we have to use render insted of send and within that it should contain EJS file
## Express generator
- express generator ek folder baba ke detaa hai, jiska matlab aapko khudsee folder nahi babaa haai, to expreess generato saree files ko is folder mein daal deeegaa
### Steps:
- jivan mee ekbar laptop ke install karoo globaly
npm i express-generator -g
- to creat new app anywhere:
open cmd move to desktop
create new app:
express appname --view=ejs
- now use two comands
cd appname
npm i
open it on vs code
#### to run the code type npx nodemon in terminal