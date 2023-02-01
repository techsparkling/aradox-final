var { initializeApp } = require("firebase/app");
var {
    get,
    getDatabase,
    ref,
    set,
    child,
    remove,
    update,
    push,
    Database,
} = require("firebase/database");



const firebaseConfig = {
    apiKey: "AIzaSyAHtQXePsm9gg7M0MHMxC9UI5Tf58aNoKY",
    authDomain: "aradox-8516f.firebaseapp.com",
    databaseURL: "https://aradox-8516f-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "aradox-8516f",
    storageBucket: "aradox-8516f.appspot.com",
    messagingSenderId: "67002711476",
    appId: "1:67002711476:web:05b32568d20c9c4c3e46e1",
    measurementId: "G-T1SY5QHFSH"
  };
  
const app = initializeApp(firebaseConfig);
const db = getDatabase();

const dbref = ref(db)

const interval = setInterval(function() {
  
    get(child(dbref, "/new" ))
    .then((snapshot) => {
        if (snapshot.val()) {
            var length = Object.keys(snapshot.val()).length;
            console.log(length);

            for (let i = 0; i < length; i++) {
                var path = Object.keys(snapshot.val())[i];
                console.log(path);
                const dbref = ref(db);
                get(
                    child(
                        dbref,
                        "/new/" + path
                    )
                )
                    .then((snapshot) => {
                       
                      
                            var nodemailer = require('nodemailer');
                            var transporter = nodemailer.createTransport({
                                service: 'gmail',
                                auth: {
                                    user: 'm.anirudhmahesh05@gmail.com',
                                 pass: 'becasjvvbnqdvwrc'
                                
                            }})

                            var mailOptions = {
                                from: 'aradoxthecompany@gmail.com',
                                to: 'aradoxthecompany@gmail.com',
                                subject: `Subject: ${snapshot.val().subject} `,
                                text: ` New message sent from website the Aradox Media: \n Name: ${snapshot.val().username}  \n Email:  ${snapshot.val().email} \n Subject:  ${snapshot.val().subject} \n Message:  ${snapshot.val().message}`,
                               
                            };

                            transporter.sendMail(mailOptions, function (error, info) {
                                if (error) {
                                    console.log(error);
                                } else {
                                    console.log('Email sent: ' + info.response);
                                    
                                }
                            });
                            const dbref = ref(db)
                            set(child(dbref, 'old/'+path), {
                                username: snapshot.val().username,
                                email: snapshot.val().email,
                                message:snapshot.val().message,
                                subject:snapshot.val().subject,
                              }).then(()=>{
                             
                                setTimeout(()=>{
                                    const dbref = ref(db)
                                    console.log(path)
                                    remove(child( dbref,"/new/"+path)).then(()=>{
                                        console.log("Data is transfered from new to old successfully")
                                    })
                                  },2000)
                              })
                             

                        })
                       

                    }
                    
            }
        })},10000)